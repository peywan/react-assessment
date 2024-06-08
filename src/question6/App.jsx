import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import QuestionComponent from "./QuestionComponent";
import AnswerComponent from "./AnswerComponent";

function App() {
    return (
        <Provider store={store}>
            <div>
                <QuestionComponent />
                <AnswerComponent />
            </div>
        </Provider>
    );
}

export default App;
