import React, { useState } from 'react';
import AddQuestionForm from './components/AddQuestionForm';
import QuestionList from './components/QuestionList';
import './styles/styles.css';

const App = () => {
    const [questions, setQuestions] = useState([]);

    const addQuestion = (newQuestion) => {
        setQuestions([...questions, newQuestion]);
    };

    return (
        <div className="app">
            <h1>Test Exam Creator</h1>
            <AddQuestionForm addQuestion={addQuestion} />
            <QuestionList questions={questions} />
        </div>
    );
};

export default App;