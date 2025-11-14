// Variables globales
let questionSets = {};
let currentQuestionIndex = 0;
let shuffledQuestions = [];
let summary = [];
let selectedAnswers = [];
let questions = [];

// Utilidad: escribir texto multilínea de forma segura (preserva \n)
function setMultilineText(el, text) {
    if (!el) return;
    el.innerHTML = '';
    const parts = String(text).split('\n');
    parts.forEach((part, idx) => {
        if (idx > 0) el.appendChild(document.createElement('br'));
        el.appendChild(document.createTextNode(part));
    });
}

// Función para mezclar un array (algoritmo Fisher-Yates)
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Función para detectar automáticamente archivos de preguntas
async function detectQuestionFiles() {
    const detectedSets = {};
    const seenFiles = new Set();
    
    try {
        const dirResponse = await fetch('questions/');
        if (dirResponse.ok) {
            const dirHtml = await dirResponse.text();
            const fileMatches = dirHtml.match(/href="questions_[^"]*\.js"/g);
            
            if (fileMatches) {
                const uniqueFiles = [...new Set(fileMatches.map(match => 
                    match.match(/questions_[^"]*\.js/)[0]
                ))];
                
                for (const fileName of uniqueFiles) {
                    const fullPath = 'questions/' + fileName;
                    
                    if (seenFiles.has(fullPath)) continue;
                    seenFiles.add(fullPath);
                    
                    const nameMatch = fileName.match(/questions_(.+)\.js$/);
                    if (nameMatch) {
                        const baseName = nameMatch[1];
                        const formattedName = baseName
                            .replace(/_/g, ' ')
                            .replace(/\b\w/g, letter => letter.toUpperCase());
                        
                        detectedSets[fullPath] = {
                            name: formattedName,
                            questions: null
                        };
                        
                        console.log(`✅ Encontrado: ${fullPath} -> "${formattedName}"`);
                    }
                }
                
                console.log(`🎯 Total: ${Object.keys(detectedSets).length} archivos únicos detectados`);
            }
        }
    } catch (error) {
        console.log('⚠️ No se pudo listar el directorio automáticamente');
    }
    
    return detectedSets;
}

// Función para poblar el selector con los conjuntos de preguntas detectados
async function populateQuestionSetSelector() {
    const selector = document.getElementById('question-set');
    selector.innerHTML = '<option value="">-- Selecciona un conjunto --</option>';
    
    questionSets = await detectQuestionFiles();
    
    for (const [fileName, data] of Object.entries(questionSets)) {
        const option = document.createElement('option');
        option.value = fileName;
        option.textContent = data.name;
        selector.appendChild(option);
    }
    
    console.log(`📋 ${Object.keys(questionSets).length} conjuntos añadidos al selector`);
}

// Función para cargar un conjunto de preguntas
async function loadQuestionSet(fileName) {
    try {
        console.log(`🔄 Cargando: ${fileName}`);
        
        if (questionSets[fileName]?.questions) {
            questions = questionSets[fileName].questions;
            console.log(`✅ Preguntas ya cargadas: ${questions.length}`);
        } else {
            // Añadir timestamp para evitar caché
            const cacheBuster = `?t=${Date.now()}`;
            const response = await fetch(fileName + cacheBuster);
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }
            
            const scriptText = await response.text();
            
            let arrayMatch = scriptText.match(/const\s+questions_[a-zA-Z0-9_]+\s*=\s*(\[[\s\S]*\]);/);
            if (!arrayMatch) {
                arrayMatch = scriptText.match(/const\s+questions\s*=\s*(\[[\s\S]*\]);/);
            }
            
            if (!arrayMatch) {
                throw new Error(`No se pudo extraer el array de preguntas`);
            }
            
            const arrayContent = arrayMatch[1];
            
            try {
                questions = JSON.parse(arrayContent);
            } catch (jsonError) {
                questions = eval(`(${arrayContent})`);
            }
            
            if (!Array.isArray(questions)) {
                throw new Error(`El contenido no es un array válido`);
            }
            
            if (!questionSets[fileName]) {
                questionSets[fileName] = { name: fileName, questions: null };
            }
            questionSets[fileName].questions = questions;
            
            console.log(`✅ Cargadas ${questions.length} preguntas desde ${fileName}`);
        }
        
        initializeQuiz();
        
    } catch (error) {
        console.error('Error cargando preguntas:', error);
        const loadBtn = document.getElementById('load-questions');
        loadBtn.style.animation = 'shake 0.2s';
        loadBtn.style.background = 'var(--error-color)';
        setTimeout(() => {
            loadBtn.style.animation = '';
            loadBtn.style.background = '';
        }, 2000);
    }
}

// Función para inicializar el cuestionario
function initializeQuiz() {
    if (!questions || questions.length === 0) {
        const questionBox = document.getElementById('question-box');
        questionBox.innerHTML = '<p style="color: var(--error-color); font-weight: 600;">No hay preguntas disponibles</p>';
        return;
    }
    
    shuffledQuestions = [...questions];
    shuffle(shuffledQuestions);
    summary = shuffledQuestions.map(() => ({ answered: false, correct: false, partiallyCorrect: false }));
    currentQuestionIndex = 0;
    selectedAnswers = [];
    updateSummaryPanel();
    showQuestion();
}

// Función para reiniciar el cuestionario
function restartQuiz() {
    if (questions && questions.length > 0) {
        initializeQuiz();
    }
}

// Función para mostrar la pregunta actual
function showQuestion() {
    const questionNumberElement = document.getElementById('question-number');
    const questionElement = document.getElementById('question');
    const answersElement = document.getElementById('answers');
    const question = shuffledQuestions[currentQuestionIndex];

    if (!question) {
        console.error('Pregunta no encontrada en el índice', currentQuestionIndex);
        return;
    }

    questionNumberElement.textContent = `Pregunta ${currentQuestionIndex + 1}`;
    // Soporte robusto de saltos de línea en enunciado
    setMultilineText(questionElement, question.question);
    answersElement.innerHTML = '';
    selectedAnswers = [];

    const questionType = question.type || 'opcion';
    const normalizedType = questionType === 'escribir' ? 'written' : 
                          questionType === 'varias' ? 'multiple' : 
                          questionType === 'opcion' ? 'single' : questionType;

    if (normalizedType === "written") {
        // Crear contenedor para el input
        const inputContainer = document.createElement('div');
        inputContainer.style.width = '100%';
        
        const input = document.createElement('input');
        input.type = 'text';
        input.id = 'written-answer';
        input.placeholder = '✍️ Escribe tu respuesta aquí...';
        input.autocomplete = 'off';
        
        // Permitir enviar con Enter
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                submitCurrentAnswer();
            }
        });
        
        inputContainer.appendChild(input);
        answersElement.appendChild(inputContainer);
        
        // Auto-focus en el input
        setTimeout(() => input.focus(), 100);
    } else if (question.answers && Array.isArray(question.answers)) {
        const shuffledAnswers = question.answers.map((answer, index) => ({ answer, index }));
        shuffle(shuffledAnswers);

        shuffledAnswers.forEach(({ answer, index }) => {
            const button = document.createElement('button');
            // Render respuestas multilínea de forma segura
            setMultilineText(button, answer.slice(3));
            button.onclick = () => toggleAnswer(index);
            button.dataset.index = index;
            button.classList.add('answer-btn');
            answersElement.appendChild(button);
        });
    }

    updateNavigationButtons();
}

// Función para alternar la selección de una respuesta
function toggleAnswer(index) {
    const question = shuffledQuestions[currentQuestionIndex];
    if (Array.isArray(question.correct)) {
        if (selectedAnswers.includes(index)) {
            selectedAnswers = selectedAnswers.filter(i => i !== index);
        } else {
            selectedAnswers.push(index);
        }
    } else {
        selectedAnswers = [index];
    }
    const buttons = document.querySelectorAll('#answers button');
    buttons.forEach((button) => {
        if (parseInt(button.dataset.index) === index) {
            button.classList.toggle('selected');
        } else if (!Array.isArray(question.correct)) {
            button.classList.remove('selected');
        }
    });
}

// Función para verificar una respuesta de opción única
function checkSingleChoiceAnswer() {
    const question = shuffledQuestions[currentQuestionIndex];
    const selectedIndex = selectedAnswers[0];
    
    const buttons = document.querySelectorAll('#answers button');
    buttons.forEach((button) => {
        const buttonIndex = parseInt(button.dataset.index);
        button.disabled = true;
        
        if (buttonIndex === question.correct) {
            button.classList.add('correct');
        } else if (buttonIndex === selectedIndex) {
            button.classList.add('incorrect');
        }
    });
    
    if (selectedIndex === question.correct) {
        summary[currentQuestionIndex].correct = true;
    }
    summary[currentQuestionIndex].answered = true;
    updateSummaryPanel();
    
    setTimeout(() => {
        document.getElementById('next-button').disabled = false;
    }, 400);
}

// Función para verificar una respuesta de opción múltiple
function checkMultipleChoiceAnswer() {
    const question = shuffledQuestions[currentQuestionIndex];
    const correctAnswers = question.correct;
    const allCorrect = correctAnswers.every(index => selectedAnswers.includes(index)) && selectedAnswers.length === correctAnswers.length;
    const partiallyCorrect = selectedAnswers.some(index => correctAnswers.includes(index)) && !allCorrect;

    const buttons = document.querySelectorAll('#answers button');
    buttons.forEach((button) => {
        const buttonIndex = parseInt(button.dataset.index);
        button.disabled = true;
        
        if (correctAnswers.includes(buttonIndex)) {
            button.classList.add('correct');
        } else if (selectedAnswers.includes(buttonIndex)) {
            button.classList.add('incorrect');
        }
    });

    if (allCorrect) {
        summary[currentQuestionIndex].correct = true;
    } else if (partiallyCorrect) {
        summary[currentQuestionIndex].partiallyCorrect = true;
    }
    summary[currentQuestionIndex].answered = true;
    updateSummaryPanel();
    
    setTimeout(() => {
        document.getElementById('next-button').disabled = false;
    }, 400);
}

// Función para verificar una respuesta escrita
function checkWrittenAnswer() {
    const question = shuffledQuestions[currentQuestionIndex];
    const input = document.getElementById('written-answer');
    
    if (!input || !input.value.trim()) {
        input.style.animation = 'shake 0.2s';
        input.style.borderColor = 'var(--error-color)';
        setTimeout(() => {
            input.style.animation = '';
            input.style.borderColor = '';
        }, 200);
        return;
    }
    
    const answer = input.value.trim().toLowerCase();
    const correctAnswer = question.correct.toLowerCase();

    // Crear div de feedback con clase
    const feedbackDiv = document.createElement('div');
    feedbackDiv.className = 'feedback-message';

    if (answer === correctAnswer) {
        summary[currentQuestionIndex].correct = true;
        input.style.borderColor = 'var(--success-color)';
        input.style.background = 'var(--success-bg)';
        feedbackDiv.textContent = '✓ Correcto: ' + question.correct;
        feedbackDiv.style.background = 'var(--success-bg)';
        feedbackDiv.style.color = 'var(--success-color)';
        feedbackDiv.style.border = '2px solid var(--success-color)';
    } else {
        input.style.borderColor = 'var(--error-color)';
        input.style.background = 'var(--error-bg)';
        feedbackDiv.textContent = '✗ Incorrecto. Respuesta correcta: ' + question.correct;
        feedbackDiv.style.background = 'var(--error-bg)';
        feedbackDiv.style.color = 'var(--error-color)';
        feedbackDiv.style.border = '2px solid var(--error-color)';
    }

    input.disabled = true;
    input.parentElement.appendChild(feedbackDiv);
    summary[currentQuestionIndex].answered = true;
    updateSummaryPanel();
    
    setTimeout(() => {
        document.getElementById('next-button').disabled = false;
    }, 400);
}

// Función para enviar respuesta actual
function submitCurrentAnswer() {
    const question = shuffledQuestions[currentQuestionIndex];
    
    if (!question) {
        const submitBtn = document.getElementById('submit-button');
        submitBtn.style.animation = 'shake 0.2s';
        setTimeout(() => submitBtn.style.animation = '', 200);
        return;
    }
    
    const questionType = question.type || 'opcion';
    const normalizedType = questionType === 'escribir' ? 'written' : 
                          questionType === 'varias' ? 'multiple' : 
                          questionType === 'opcion' ? 'single' : questionType;
    
    if (selectedAnswers.length === 0 && normalizedType !== "written") {
        const submitBtn = document.getElementById('submit-button');
        submitBtn.style.animation = 'shake 0.2s';
        setTimeout(() => submitBtn.style.animation = '', 200);
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
    }
}

function updateNavigationButtons() {
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    
    prevButton.disabled = (currentQuestionIndex === 0);
    nextButton.disabled = (currentQuestionIndex === shuffledQuestions.length - 1);
}

// Función para actualizar el panel de resumen
function updateSummaryPanel() {
    const summaryCountElement = document.getElementById('summary-count');
    const summaryListElement = document.getElementById('summary-list');

    const totalQuestions = shuffledQuestions.length;
    const answeredQuestions = summary.filter(item => item.answered).length;
    const correctQuestions = summary.filter(item => item.correct).length;
    const partiallyCorrectQuestions = summary.filter(item => item.partiallyCorrect).length;

    summaryCountElement.textContent = `${answeredQuestions}/${totalQuestions} respondidas. ${correctQuestions} correctas, ${partiallyCorrectQuestions} parciales.`;

    summaryListElement.innerHTML = '';
    summary.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `Pregunta ${index + 1}`;
        if (item.answered) {
            if (item.correct) {
                listItem.classList.add('correct');
            } else if (item.partiallyCorrect) {
                listItem.classList.add('partially-correct');
            } else {
                listItem.classList.add('incorrect');
            }
        } else {
            listItem.classList.add('unanswered');
        }
        if (index === currentQuestionIndex) {
            listItem.classList.add('current');
        }
        listItem.onclick = () => {
            currentQuestionIndex = index;
            showQuestion();
        };
        summaryListElement.appendChild(listItem);
    });
}

// Inicializar tema oscuro/claro
function initializeTheme() {
    const darkModeBtn = document.getElementById('dark-mode');
    const lightModeBtn = document.getElementById('light-mode');
    
    const savedTheme = localStorage.getItem('theme') || 
                      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    if (darkModeBtn) {
        darkModeBtn.addEventListener('click', () => {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        });
    }
    
    if (lightModeBtn) {
        lightModeBtn.addEventListener('click', () => {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        });
    }
}

// Inicialización - SOLO UNA VEZ
document.addEventListener('DOMContentLoaded', async () => {
    initializeTheme();
    
    const tutorialBtn = document.getElementById('tutorial-btn');
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close');
    
    if (modal) modal.style.display = 'none';
    
    if (tutorialBtn && modal) {
        tutorialBtn.addEventListener('click', () => {
            modal.style.display = 'flex';
        });
    }
    
    if (closeBtn && modal) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Poblar selector SOLO UNA VEZ
    await populateQuestionSetSelector();
    
    // Event listeners
    const loadButton = document.getElementById('load-questions');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    const submitButton = document.getElementById('submit-button');
    const restartButton = document.getElementById('restart-button');
    
    if (loadButton) {
        loadButton.addEventListener('click', async () => {
            const selector = document.getElementById('question-set');
            const selectedFile = selector.value;
            
            if (!selectedFile) {
                selector.style.animation = 'shake 0.2s';
                selector.style.borderColor = 'var(--error-color)';
                setTimeout(() => {
                    selector.style.animation = '';
                    selector.style.borderColor = '';
                }, 200);
                return;
            }
            
            await loadQuestionSet(selectedFile);
        });
    }
    
    if (prevButton) prevButton.addEventListener('click', goToPreviousQuestion);
    if (nextButton) nextButton.addEventListener('click', goToNextQuestion);
    if (submitButton) submitButton.addEventListener('click', submitCurrentAnswer);
    if (restartButton) restartButton.addEventListener('click', restartQuiz);
    
    // Navegación con teclado
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') goToPreviousQuestion();
        if (event.key === 'ArrowRight') goToNextQuestion();
        if (event.key === 'Enter') submitCurrentAnswer();
    });
});