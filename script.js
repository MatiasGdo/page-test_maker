// Función para detectar automáticamente archivos de preguntas
async function detectQuestionFiles() {
    const questionSets = {};
    
    // Lista SOLO de los archivos que realmente existen
    const potentialFiles = [
        'questions_devops_part1.js',
        'questions_devops_part2.js', 
        'questions_devops_part3.js',
        'questions_devops_part4.js',
        'questions_aws_part1.js',
        'questions_docker_part1.js',
        'questions_LPIC_306.js'
    ];
    
    // Verificar qué archivos existen haciendo peticiones HEAD
    for (const fileName of potentialFiles) {
        try {
            const response = await fetch(fileName, {
                method: 'HEAD'
            });
            
            if (response.ok) {
                // Extraer el nombre del archivo después de "questions_" y antes de ".js"
                const nameMatch = fileName.match(/^questions_(.+)\.js$/);
                if (nameMatch) {
                    const baseName = nameMatch[1];
                    // Formatear el nombre: reemplazar guiones bajos con espacios y hacer título
                    const formattedName = baseName
                        .replace(/_/g, ' ')
                        .replace(/\b\w/g, letter => letter.toUpperCase());
                    
                    questionSets[fileName] = {
                        name: formattedName,
                        questions: null
                    };
                }
            }
        } catch (error) {
            // Archivo no existe o no es accesible, continuar con el siguiente
            continue;
        }
    }
    
    return questionSets;
}

// Variable global para almacenar los conjuntos de preguntas detectados
let questionSets = {};

// Variables globales
let currentQuestionIndex = 0; // Índice de la pregunta actual
let shuffledQuestions = []; // Array para almacenar preguntas mezcladas
let summary = []; // Array para almacenar el resumen de respuestas
let selectedAnswers = []; // Array para almacenar respuestas seleccionadas
let questions = []; // Array para almacenar las preguntas actuales

// Función para mezclar un array (algoritmo Fisher-Yates)
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Función para cargar un conjunto de preguntas
async function loadQuestionSet(fileName) {
    try {
        if (questionSets[fileName].questions) {
            // Las preguntas ya están cargadas
            questions = questionSets[fileName].questions;
        } else {
            // Cargar las preguntas desde el archivo
            const response = await fetch(fileName);
            if (!response.ok) {
                throw new Error(`No se pudo cargar el archivo: ${fileName}`);
            }
            
            const scriptText = await response.text();
            
            // Crear y ejecutar el script
            const script = document.createElement('script');
            script.textContent = scriptText;
            document.head.appendChild(script);
            
            // Esperar un momento para que el script se ejecute
            await new Promise(resolve => setTimeout(resolve, 100));
            
            // Extraer el nombre de la variable del contenido del archivo
            const variableMatch = scriptText.match(/const\s+(questions_[a-zA-Z0-9_]+)\s*=/);
            if (!variableMatch) {
                throw new Error(`No se pudo encontrar la variable de preguntas en ${fileName}`);
            }
            
            const variableName = variableMatch[1];
            console.log(`Buscando variable: ${variableName}`);
            
            // Verificar que la variable esté disponible
            console.log(`Variables disponibles:`, Object.keys(window).filter(key => key.startsWith('questions_')));
            
            if (window[variableName]) {
                questions = window[variableName];
                questionSets[fileName].questions = questions;
                console.log(`✅ Cargadas ${questions.length} preguntas de ${variableName}`);
            } else {
                // Fallback: intentar con eval() como último recurso
                try {
                    questions = eval(variableName);
                    questionSets[fileName].questions = questions;
                    console.log(`✅ Cargadas ${questions.length} preguntas de ${variableName} (via eval)`);
                } catch (evalError) {
                    console.error(`❌ Variable ${variableName} no encontrada. Variables disponibles:`, Object.keys(window).filter(key => key.startsWith('questions_')));
                    throw new Error(`Variable ${variableName} no encontrada después de cargar ${fileName}`);
                }
            }
            
            // Limpiar el script del DOM
            document.head.removeChild(script);
        }
        
        // Inicializar el cuestionario con las nuevas preguntas
        initializeQuiz();
        
    } catch (error) {
        console.error('Error cargando el conjunto de preguntas:', error);
        showModal('Error cargando las preguntas: ' + error.message);
    }
}

// Función para inicializar el cuestionario
function initializeQuiz() {
    if (!questions || questions.length === 0) {
        showModal('No hay preguntas disponibles');
        return;
    }
    
    shuffledQuestions = [...questions]; // Copiar preguntas a shuffledQuestions
    shuffle(shuffledQuestions); // Mezclar las preguntas
    summary = shuffledQuestions.map(() => ({ answered: false, correct: false, partiallyCorrect: false })); // Inicializar resumen
    currentQuestionIndex = 0; // Reiniciar el índice de la pregunta actual
    selectedAnswers = []; // Reiniciar respuestas seleccionadas
    updateSummaryPanel(); // Actualizar el panel de resumen
    showQuestion(); // Mostrar la primera pregunta
}

// Función para mostrar la pregunta actual
function showQuestion() {
    const questionNumberElement = document.getElementById('question-number'); // Obtener el elemento del número de pregunta
    const questionElement = document.getElementById('question'); // Obtener el elemento de la pregunta
    const answersElement = document.getElementById('answers'); // Obtener el elemento de respuestas
    const question = shuffledQuestions[currentQuestionIndex]; // Obtener la pregunta actual

    if (!question) {
        console.error('Pregunta no encontrada en el índice', currentQuestionIndex);
        return;
    }

    questionNumberElement.textContent = `Pregunta ${currentQuestionIndex + 1}`; // Mostrar el número de pregunta
    questionElement.textContent = question.question; // Mostrar el texto de la pregunta
    answersElement.innerHTML = ''; // Limpiar respuestas anteriores
    selectedAnswers = []; // Reiniciar respuestas seleccionadas

    // Normalizar tipos de pregunta
    const questionType = question.type || 'opcion';
    const normalizedType = questionType === 'escribir' ? 'written' : 
                          questionType === 'varias' ? 'multiple' : 
                          questionType === 'opcion' ? 'single' : questionType;

    if (normalizedType === "written") {
        const input = document.createElement('input'); // Crear un elemento de entrada para respuestas escritas
        input.type = 'text'; // Establecer el tipo de entrada a texto
        input.id = 'written-answer'; // Establecer el id de la entrada
        input.placeholder = 'Escribe tu respuesta aquí'; // Establecer el texto del marcador de posición
        answersElement.appendChild(input); // Agregar la entrada al elemento de respuestas
    } else if (question.answers && Array.isArray(question.answers)) {
        const shuffledAnswers = question.answers.map((answer, index) => ({ answer, index }));
        shuffle(shuffledAnswers); // Mezclar las respuestas

        shuffledAnswers.forEach(({ answer, index }) => {
            const button = document.createElement('button'); // Crear un botón para cada respuesta
            button.textContent = answer.slice(3); // Establecer el texto del botón sin la letra
            button.onclick = () => toggleAnswer(index); // Establecer el controlador de clic del botón
            button.dataset.index = index; // Establecer el índice de la respuesta en el botón
            answersElement.appendChild(button); // Agregar el botón al elemento de respuestas
        });
    } else {
        console.error('Pregunta sin respuestas válidas:', question);
        answersElement.innerHTML = '<p>Error: Esta pregunta no tiene respuestas válidas</p>';
    }

    // Actualizar la navegación
    updateNavigationButtons();
}

// Función para alternar la selección de una respuesta
function toggleAnswer(index) {
    const question = shuffledQuestions[currentQuestionIndex]; // Obtener la pregunta actual
    if (Array.isArray(question.correct)) {
        if (selectedAnswers.includes(index)) {
            selectedAnswers = selectedAnswers.filter(i => i !== index); // Deseleccionar respuesta
        } else {
            selectedAnswers.push(index); // Seleccionar respuesta
        }
    } else {
        selectedAnswers = [index]; // Seleccionar respuesta única
    }
    const buttons = document.querySelectorAll('#answers button'); // Obtener todos los botones de respuesta
    buttons.forEach((button) => {
        if (parseInt(button.dataset.index) === index) {
            button.classList.toggle('selected'); // Alternar la clase selected
        } else if (!Array.isArray(question.correct)) {
            button.classList.remove('selected'); // Deseleccionar otros botones si es de opción única
        }
    });
}

// Función para resaltar las respuestas
function highlightAnswers(correctIndex, selectedIndex) {
    const buttons = document.querySelectorAll('#answers button'); // Obtener todos los botones de respuesta
    buttons.forEach((button) => {
        const buttonIndex = parseInt(button.dataset.index); // Obtener el índice del botón
        if (buttonIndex === correctIndex) {
            button.style.backgroundColor = '#4CAF50'; // Respuesta correcta en verde
            button.style.color = '#fff';
        } else if (buttonIndex === selectedIndex) {
            button.style.backgroundColor = '#F44336'; // Respuesta seleccionada incorrecta en rojo
            button.style.color = '#fff';
        }
        button.style.pointerEvents = 'none'; // Deshabilitar clics
    });
}

// Función para resaltar múltiples respuestas
function highlightMultipleAnswers(correctAnswers, selectedAnswers) {
    const buttons = document.querySelectorAll('#answers button'); // Obtener todos los botones de respuesta
    buttons.forEach((button) => {
        const buttonIndex = parseInt(button.dataset.index); // Obtener el índice del botón
        if (correctAnswers.includes(buttonIndex)) {
            button.style.backgroundColor = '#4CAF50'; // Respuesta correcta en verde
            button.style.color = '#fff';
        } else if (selectedAnswers.includes(buttonIndex)) {
            button.style.backgroundColor = '#F44336'; // Respuesta seleccionada incorrecta en rojo
            button.style.color = '#fff';
        }
        button.style.pointerEvents = 'none'; // Deshabilitar clics
    });
}

// Función para verificar una respuesta de opción única
function checkSingleChoiceAnswer() {
    const question = shuffledQuestions[currentQuestionIndex]; // Obtener la pregunta actual
    const selectedIndex = selectedAnswers[0]; // Obtener el índice de la respuesta seleccionada
    const correctAnswer = question.answers[question.correct]; // Obtener el texto de la respuesta correcta
    
    // Destacar visualmente las respuestas
    highlightAnswers(question.correct, selectedIndex);
    
    if (selectedIndex === question.correct) {
        showModal('¡Correcto!'); // Mostrar mensaje de correcto
        summary[currentQuestionIndex].correct = true; // Marcar la pregunta como correcta en el resumen
    } else {
        showModal('Incorrecto. La respuesta correcta es: ' + correctAnswer.slice(3)); // Mostrar mensaje de incorrecto con la respuesta correcta
    }
    summary[currentQuestionIndex].answered = true; // Marcar la pregunta como respondida en el resumen
    
    summary[currentQuestionIndex].answered = true; // Marcar la pregunta como respondida
    updateSummaryPanel(); // Actualizar el panel de resumen
    
    // Mostrar feedback visual por un momento
    setTimeout(() => {
        // No avanzar automáticamente, el usuario decidirá con los botones de navegación
    }, 1500); // Reducido a 1.5 segundos solo para mostrar el feedback
}

// Función para verificar una respuesta de opción múltiple
function checkMultipleChoiceAnswer() {
    const question = shuffledQuestions[currentQuestionIndex]; // Obtener la pregunta actual
    const correctAnswers = question.correct; // Obtener las respuestas correctas
    const correctAnswerText = correctAnswers.map(index => question.answers[index].slice(3)).join(', '); // Obtener el texto de las respuestas correctas
    const allCorrect = correctAnswers.every(index => selectedAnswers.includes(index)) && selectedAnswers.length === correctAnswers.length; // Verificar si todas las respuestas seleccionadas son correctas
    const partiallyCorrect = selectedAnswers.some(index => correctAnswers.includes(index)) && !allCorrect; // Verificar si algunas respuestas seleccionadas son correctas

    // Destacar visualmente las respuestas
    highlightMultipleAnswers(correctAnswers, selectedAnswers);

    if (allCorrect) {
        showModal('¡Correcto!'); // Mostrar mensaje de correcto
        summary[currentQuestionIndex].correct = true; // Marcar la pregunta como correcta en el resumen
    } else if (partiallyCorrect) {
        showModal('Parcialmente correcto. Las respuestas correctas son: ' + correctAnswerText); // Mostrar mensaje de parcialmente correcto con las respuestas correctas
        summary[currentQuestionIndex].partiallyCorrect = true; // Marcar la pregunta como parcialmente correcta en el resumen
    } else {
        showModal('Incorrecto. Las respuestas correctas son: ' + correctAnswerText); // Mostrar mensaje de incorrecto con las respuestas correctas
    }
    summary[currentQuestionIndex].answered = true; // Marcar la pregunta como respondida en el resumen
    updateSummaryPanel(); // Actualizar el panel de resumen
    
    // Mostrar feedback visual por un momento
    setTimeout(() => {
        // No avanzar automáticamente, el usuario decidirá con los botones de navegación
    }, 1500); // Reducido a 1.5 segundos solo para mostrar el feedback
}

// Función para verificar una respuesta escrita
function checkWrittenAnswer() {
    const question = shuffledQuestions[currentQuestionIndex]; // Obtener la pregunta actual
    const input = document.getElementById('written-answer'); // Obtener el elemento de entrada
    const answer = input.value.trim().toLowerCase(); // Obtener la respuesta del usuario y convertir a minúsculas
    const correctAnswer = question.correct.toLowerCase(); // Obtener la respuesta correcta en minúsculas

    if (answer === correctAnswer) {
        showModal('¡Correcto!'); // Mostrar mensaje de correcto
        summary[currentQuestionIndex].correct = true; // Marcar la pregunta como correcta en el resumen
        input.style.backgroundColor = '#4CAF50'; // Cambiar el color de fondo a verde
        input.style.color = '#fff';
    } else {
        showModal('Incorrecto. La respuesta correcta es: ' + question.correct); // Mostrar mensaje de incorrecto con la respuesta correcta
        input.style.backgroundColor = '#F44336'; // Cambiar el color de fondo a rojo
        input.style.color = '#fff';
    }

    input.disabled = true; // Deshabilitar el campo de entrada
    summary[currentQuestionIndex].answered = true; // Marcar la pregunta como respondida en el resumen
    updateSummaryPanel(); // Actualizar el panel de resumen
    
    // Mostrar feedback visual por un momento
    setTimeout(() => {
        // No avanzar automáticamente, el usuario decidirá con los botones de navegación
    }, 1500); // Reducido a 1.5 segundos solo para mostrar el feedback
}

// Función para actualizar el panel de resumen
function updateSummaryPanel() {
    const summaryCountElement = document.getElementById('summary-count'); // Obtener el elemento de conteo del resumen
    const summaryListElement = document.getElementById('summary-list'); // Obtener el elemento de lista del resumen

    const totalQuestions = shuffledQuestions.length; // Obtener el número total de preguntas
    const answeredQuestions = summary.filter(item => item.answered).length; // Contar preguntas respondidas
    const correctQuestions = summary.filter(item => item.correct).length; // Contar preguntas correctas
    const partiallyCorrectQuestions = summary.filter(item => item.partiallyCorrect).length; // Contar preguntas parcialmente correctas

    summaryCountElement.textContent = `${answeredQuestions}/${totalQuestions} preguntas respondidas. ${correctQuestions} correctas, ${partiallyCorrectQuestions} parcialmente correctas.`; // Mostrar conteo

    summaryListElement.innerHTML = ''; // Limpiar lista anterior
    summary.forEach((item, index) => {
        const listItem = document.createElement('li'); // Crear elemento de lista
        listItem.textContent = `Pregunta ${index + 1}`;
        if (item.answered) {
            if (item.correct) {
                listItem.classList.add('correct'); // Agregar clase correct
            } else if (item.partiallyCorrect) {
                listItem.classList.add('partially-correct'); // Agregar clase partially-correct
            } else {
                listItem.classList.add('incorrect'); // Agregar clase incorrect
            }
        }
        if (index === currentQuestionIndex) {
            listItem.classList.add('current'); // Agregar clase current
        }
        listItem.onclick = () => {
            currentQuestionIndex = index; // Cambiar a la pregunta seleccionada
            showQuestion(); // Mostrar la pregunta
        };
        summaryListElement.appendChild(listItem); // Agregar elemento a la lista
    });
}

// Función para mostrar el modal
function showModal(message) {
    const modal = document.getElementById('modal'); // Obtener el modal
    const modalMessage = document.getElementById('modal-message'); // Obtener el mensaje del modal
    modalMessage.textContent = message; // Establecer el mensaje
    modal.style.display = "block"; // Mostrar el modal
}

// Función para cerrar el modal
function closeModal() {
    const modal = document.getElementById('modal'); // Obtener el modal
    modal.style.display = "none"; // Ocultar el modal
}

// Funciones de navegación
function goToPreviousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
}

function goToNextQuestion() {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        showModal('¡Has completado el examen!');
        currentQuestionIndex = 0;
        showQuestion();
    }
}

function submitCurrentAnswer() {
    const question = shuffledQuestions[currentQuestionIndex];
    
    if (!question) {
        showModal('Error: Pregunta no encontrada.');
        return;
    }
    
    // Normalizar tipos de pregunta
    const questionType = question.type || 'opcion';
    const normalizedType = questionType === 'escribir' ? 'written' : 
                          questionType === 'varias' ? 'multiple' : 
                          questionType === 'opcion' ? 'single' : questionType;
    
    if (selectedAnswers.length === 0 && normalizedType !== "written") {
        showModal('Por favor, selecciona una respuesta antes de enviar.');
        return;
    }
    
    if (normalizedType === "written") {
        checkWrittenAnswer();
    } else if (Array.isArray(question.correct)) {
        checkMultipleChoiceAnswer();
    } else {
        checkSingleChoiceAnswer();
    }
}

function updateNavigationButtons() {
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    
    // Deshabilitar botón anterior si estamos en la primera pregunta
    prevButton.disabled = (currentQuestionIndex === 0);
    
    // Deshabilitar botón siguiente si estamos en la última pregunta
    nextButton.disabled = (currentQuestionIndex === shuffledQuestions.length - 1);
}

// Event listeners for navigation buttons
document.getElementById('prev-button').onclick = goToPreviousQuestion;
document.getElementById('submit-button').onclick = submitCurrentAnswer;
document.getElementById('next-button').onclick = goToNextQuestion;

document.getElementById('restart-button').onclick = initializeQuiz; // Establecer el controlador de clic para reiniciar el cuestionario

document.getElementById('light-mode').onclick = () => {
    document.body.classList.remove('dark-mode'); // Cambiar a modo claro
};

document.getElementById('dark-mode').onclick = () => {
    document.body.classList.add('dark-mode'); // Cambiar a modo oscuro
};

document.getElementById('modal-close').onclick = closeModal; // Establecer el controlador de clic para cerrar el modal

document.getElementById('load-questions').onclick = () => {
    const selectedSet = document.getElementById('question-set').value;
    loadQuestionSet(selectedSet);
};

// Función para poblar el selector de conjuntos de preguntas
async function populateQuestionSetSelector() {
    const questionSetSelect = document.getElementById('question-set');
    
    // Limpiar opciones existentes
    questionSetSelect.innerHTML = '';
    
    // Detectar archivos de preguntas disponibles
    questionSets = await detectQuestionFiles();
    
    // Crear opciones para cada conjunto detectado
    Object.entries(questionSets).forEach(([fileName, setInfo]) => {
        const option = document.createElement('option');
        option.value = fileName;
        option.textContent = setInfo.name;
        questionSetSelect.appendChild(option);
    });
    
    // Seleccionar el primer conjunto por defecto y cargarlo
    if (questionSetSelect.options.length > 0) {
        questionSetSelect.selectedIndex = 0;
        const firstSet = questionSetSelect.options[0].value;
        await loadQuestionSet(firstSet);
    }
}

// Inicializar la aplicación cuando se carga la página
document.addEventListener('DOMContentLoaded', async () => {
    await populateQuestionSetSelector();
});