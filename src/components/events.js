import { useState } from "react";

const Events = () => {

    const [count, setCount] = useState(0);

    const handleClick = () => {
        alert("Button was Clicked");
        console.log('Message from Click Event!!');

        document.getElementById('t1').hidden = true;
    }

    const handleChange = (e) => {
        console.log(e.target.value);
        console.log('value changed!!');
    }

    const showText = () => {
        document.getElementById('t1').hidden = false;
    }

    const increment = () => {
        setCount(count + 1);
        console.log(count);
    }

    return (
        <div className="container mt-5">
            <h1 id="t1">Events Page</h1>
            <hr />

            <div className="card mt-5">
                <div className="card-body">
                    <h1>{count}</h1>
                    <input className="form-control" onChange={e => handleChange(e)} list="here" />
                    <datalist id="here">
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                    </datalist>
                    <button className="btn btn-primary" onClick={handleClick}>Click Me!!</button>
                    <button className="btn btn-warning" onClick={showText}>Show</button>

                    <button className="btn btn-dark" onClick={increment}>Increase Count</button>
                </div>
            </div>

        </div>
    )
}

export default Events;