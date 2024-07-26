import Header from "./components/header/header.component.jsx";
import Quiz from "./components/quiz/quiz.component.jsx";
import {Fragment} from "react";

function App() {
    return (
        <Fragment>
            <Header />
            <main>
                <Quiz />
            </main>
        </Fragment>
    )
}

export default App;
