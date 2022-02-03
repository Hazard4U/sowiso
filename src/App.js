import './App.css';
import toast, {Toaster} from 'react-hot-toast';
import Number from "./components/Number";
import NumberForm from "./components/NumberForm";
import {useState} from 'react';

function App() {
    const MIN = -1000;
    const MAX = 1000;
    const SUCCESS_MESSAGE = "Well done !";
    const ERROR_MESSAGE = "Oops, you made a mistake! Try again.";

    const createRandomNumber = () => {
        return Math.floor(Math.random() * (MAX - MIN + 1) + MIN);
    }
    const [randomNumber1, setRandomNumber1] = useState(createRandomNumber());
    const [randomNumber2, setRandomNumber2] = useState(createRandomNumber());

    const submitHandler = (answer) => {
        if (answer === (randomNumber1 + randomNumber2)) {
            setRandomNumber1(createRandomNumber());
            setRandomNumber2(createRandomNumber());
            toast.success(SUCCESS_MESSAGE);
        } else {
            toast.error(ERROR_MESSAGE);
        }
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>SOWISO assignment</h1>
                <p>This web page will generate random integers from [-1000;1000].</p>
            </header>
            <section className="RandomNumber-section">
                <Number number={randomNumber1}/>
                <p>+</p>
                <Number number={randomNumber2} parenthesisNeeded={randomNumber2 < 0}/>
            </section>
            <NumberForm className="RandomNumber-form" onSubmit={submitHandler}/>
            <Toaster position="bottom-center"/>
        </div>
    );
}

export default App;
