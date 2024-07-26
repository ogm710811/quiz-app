import {useEffect, useState} from "react";

const QuestionTimer = ({timeout, onTimeOut}) => {
    const [remaining, setRemaining] = useState(timeout);

    useEffect(() => {
        const timer = setTimeout(() => {
            onTimeOut()
        }, timeout)

        return () => clearTimeout(timer)
    }, [timeout, onTimeOut])

    useEffect(() => {
        const interval = setInterval(() => {
            setRemaining((prevRemaining) => {
                return prevRemaining - 100
            })
        }, 100)

        return () => clearInterval(interval)
    }, []);

    return (
        <progress id='question-time' max={timeout} value={remaining}  />
    )
}

export default QuestionTimer;
