import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAnswer } from "./questionSlice";

const AnswerComponent = () => {
    const [answer, setAnswerInput] = useState("");
    const dispatch = useDispatch();
    const question = useSelector((state) => state.question.question);

    const handleAnswerSubmit = () => {
        dispatch(setAnswer(answer));
        setAnswerInput("");
    };

    return (
        <div>
            <p>Fråga: {question}</p>
            <input
                type="text"
                value={answer}
                onChange={(e) => setAnswerInput(e.target.value)}
                placeholder="Svara på frågan"
            />
            <button onClick={handleAnswerSubmit}>Skicka svar</button>
            <p>Svar: {useSelector((state) => state.question.answer)}</p>
        </div>
    );
};

export default AnswerComponent;
