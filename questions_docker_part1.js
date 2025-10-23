// Preguntas de Docker - Parte 1  
const questions_docker_part1 = [
    {
        question: "¿Qué comando se usa para crear un contenedor Docker?",
        answers: ["A. docker create", "B. docker run", "C. docker start", "D. docker build"],
        correct: 1,
        type: "single"
    },
    {
        question: "¿Cuáles son las ventajas principales de Docker? (Selecciona todas las correctas)",
        answers: ["A. Portabilidad", "B. Escalabilidad", "C. Aislamiento", "D. Eficiencia de recursos", "E. Seguridad mejorada"],
        correct: [0, 1, 2, 3],
        type: "multiple"
    },
    {
        question: "¿Qué archivo se usa para definir la construcción de una imagen Docker?",
        answers: ["A. docker-compose.yml", "B. Dockerfile", "C. .dockerignore", "D. docker.config"],
        correct: 1,
        type: "single"
    },
    {
        question: "¿Cuál es la diferencia entre una imagen y un contenedor?",
        answers: ["A. No hay diferencia", "B. Una imagen es un template, un contenedor es una instancia ejecutable", "C. Un contenedor es más grande que una imagen", "D. Una imagen solo funciona en Linux"],
        correct: 1,
        type: "single"
    },
    {
        question: "¿Qué puertos expone por defecto un contenedor web típico?",
        answers: ["A. 22", "B. 80", "C. 443", "D. 8080", "E. 3000"],
        correct: [1, 2],
        type: "multiple"
    }
];