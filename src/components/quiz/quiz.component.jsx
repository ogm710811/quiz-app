import {useCallback, useState} from "react";
import questions from "../../utils/questions.util.js";
import quizImage from "../../assets/quiz-complete.png"
import QuestionTimer from "../question-timer/question-timer.component.jsx";

const Quiz = () => {
    const [userAnswer, setUserAnswer] = useState([]);

    const currentQuestionIndex = userAnswer.length
    const quizCompleted = currentQuestionIndex === questions.length

    const selectedAnswerHandler = useCallback(
        (selectedAnswer) => {
            setUserAnswer((prevUserAnswer) => {
                return [...prevUserAnswer, selectedAnswer];
            })
        },
        [],
    );

    const moveToNextQuestion = useCallback(
        () => {
            selectedAnswerHandler(null)
        }, [selectedAnswerHandler]
    );

    if (quizCompleted) {
        return (
            <div id='summary'>
                <img src={quizImage}/>
                <h2>Quiz Completed</h2>
            </div>
        )
    }

    const shuffleAnswers = [...questions[currentQuestionIndex].answers]
    shuffleAnswers.sort(() => Math.random() - 0.5)

    return (
        <div id='quiz'>
            <div id='question'>
                <QuestionTimer key={currentQuestionIndex} timeout={10000} onTimeOut={() => moveToNextQuestion()} />
                <h2>{questions[currentQuestionIndex].text}</h2>
                <ul id='answers'>
                    {shuffleAnswers.map((answer, index) => {
                        return (
                            <li key={index} className='answer'>
                                <button onClick={() => selectedAnswerHandler(answer)}>{answer}</button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Quiz;