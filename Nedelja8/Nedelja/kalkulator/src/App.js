import { useState } from "react"
import Calculator from "./components/Calculator"

const App = () => {
  const [result, setResult] = useState(0)
  const [steps, setSteps] = useState('')
  return (
    <div>
      <Calculator result={result} setResult={setResult} steps={steps} setSteps={setSteps} />
    </div>
  )
}

export default App
