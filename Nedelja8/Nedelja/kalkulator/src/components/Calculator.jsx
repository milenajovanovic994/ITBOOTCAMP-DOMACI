import { useState } from "react"
import ButtonAdd from "./buttons/ButtonAdd"
import ButtonClear from "./buttons/ButtonClear"
import ButtonDivide from "./buttons/ButtonDivide"
import ButtonMultiply from "./buttons/ButtonMultiply"
import ButtonSubtract from "./buttons/ButtonSubtract"
import Steps from "./Steps"

const Calculator = ({ setResult, result, setSteps, steps }) => {
    const [number, setNumber] = useState('')
    return (
        <div>
            <h1>Calculator</h1>
            <input type="text" value={result} readOnly />
            <input type="number" value={number} onChange={(e) => {
                setNumber(e.target.value)
            }} />

            <ButtonAdd setResult={setResult} setSteps={setSteps} number={number} setNumber={setNumber} />
            <ButtonSubtract setResult={setResult} setSteps={setSteps} number={number} setNumber={setNumber} />
            <ButtonMultiply setResult={setResult} setSteps={setSteps} number={number} setNumber={setNumber} />
            <ButtonDivide setResult={setResult} setSteps={setSteps} number={number} setNumber={setNumber} />

            <Steps steps={steps} />

            <ButtonClear setResult={setResult} setSteps={setSteps} />

        </div>
    )
}

export default Calculator