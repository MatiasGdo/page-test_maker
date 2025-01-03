import React from 'react';

const QuestionItem = ({ question, answers, onDelete, onEdit }) => {
    return (
        <div className="question-item">
            <h3>{question}</h3>
            <ul>
                {answers.map((answer, index) => (
                    <li key={index}>{answer}</li>
                ))}
            </ul>
            <button onClick={onEdit}>Edit</button>
            <button onClick={onDelete}>Delete</button>
        </div>
    );
};

export default QuestionItem;