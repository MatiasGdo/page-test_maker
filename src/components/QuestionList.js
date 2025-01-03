import React from 'react';
import QuestionItem from './QuestionItem';

const QuestionList = ({ questions }) => {
    return (
        <div>
            <h2>Question List</h2>
            <ul>
                {questions.map((question, index) => (
                    <li key={index}>
                        <QuestionItem question={question} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default QuestionList;