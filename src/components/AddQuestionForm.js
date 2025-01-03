import React, { useState } from 'react';

const AddQuestionForm = ({ onAddQuestion }) => {
    const [question, setQuestion] = useState('');
    const [answers, setAnswers] = useState(['', '', '', '']);
    const [correctAnswer, setCorrectAnswer] = useState(0);

    const handleAnswerChange = (index, value) => {
        const newAnswers = [...answers];
        newAnswers[index] = value;
        setAnswers(newAnswers);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddQuestion({ question, answers, correctAnswer });
        setQuestion('');
        setAnswers(['', '', '', '']);
        setCorrectAnswer(0);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Pregunta:</label>
                <input
                    type="text"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    required
                />
            </div>
            {answers.map((answer, index) => (
                <div key={index}>
                    <label>Respuesta {index + 1}:</label>
                    <input
                        type="text"
                        value={answer}
                        onChange={(e) => handleAnswerChange(index, e.target.value)}
                        required
                    />
                </div>
            ))}
            <div>
                <label>Respuesta correcta (0-{answers.length - 1}):</label>
                <input
                    type="number"
                    value={correctAnswer}
                    onChange={(e) => setCorrectAnswer(Number(e.target.value))}
                    min="0"
                    max={answers.length - 1}
                    required
                />
            </div>
            <button type="submit">Añadir Pregunta</button>
        </form>
    );
};

export default AddQuestionForm;