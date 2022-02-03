import {useState} from 'react';

function NumberForm(props){
    const [answer, setAnswer] = useState("");

    const submitHandler = (event) => {
        event.preventDefault();
        setAnswer("");
        props.onSubmit(parseInt(answer));
    }

    return (
        <section className={props.className}>
            <form onSubmit={submitHandler}>
                <input type="number" value={answer} onChange={(event) => {
                    setAnswer(event.target.value)
                }}/>
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default NumberForm;