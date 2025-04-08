import React , {useState} from 'react';

function BmiCalculator() {

    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [bmi, setBmi] = useState(0);

    const calculateBmi = () => {
        let BmiValue = (weight / ((height / 100) * (height / 100))).toFixed(2);
        setBmi(BmiValue);
    }

    return (
        <div className='background'>
        <div className='display'>
            <h1>BMI Calculator</h1>

            <div className="brutalist-container">
            <input placeholder="Enter your weight in kg"
                   className="brutalist-input smooth-type"
                   type="text" onChange={(e) => setWeight(e.target.value)}/> <br></br><br/>

            <input placeholder="Enter your height in cm" 
                   className="brutalist-input smooth-type"
                   type="text" onChange={(e) => setHeight(e.target.value)}/>  <br></br> <br></br> <br></br>

            <button className="ui-btn" onClick={calculateBmi}>
                <span>
                CALCULATE 
                </span>
            </button>
            </div>
            <h2>Your BMI: {bmi}</h2>
        </div>
    </div>    
    );
}

export default BmiCalculator;