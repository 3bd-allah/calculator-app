import React, { useState } from 'react'
import { useRef } from 'react'


const CalcForm = () => {
    let resultRef = useRef(null)
    const numRef = useRef(null)
    const [result, setResult] = useState(0)
    // resultRef.current.value =result
    
    const plus = (e)=>{ 
        e.preventDefault()
        
        // setResult (result + Number(numRef.current.value))
        setResult((result) => result += Number(numRef.current.value))
        resultRef.current.value = result
        // resultRef.current.value = result
    }

    const minus =(e)=>{
        e.preventDefault(); 
        setResult((result) => result - Number(numRef.current.value))
        resultRef.current.value = result
    }

    const times =(e)=>{  
        e.preventDefault()
        setResult(result * Number(numRef.current.value))
        resultRef.current.value = result
    }

    const divide =(e) =>{
        e.preventDefault()
        setResult((result) => result / Number(numRef.current.value))
        resultRef.current.value = result
    }

    const resetInput =(e) =>{
        e.preventDefault()
        numRef.current.value = 0 
    }

    const resetResult =(e) =>{
        e.preventDefault()
        // resultRef.current.value = 0
        setResult((preval) => preval*0)
        resultRef.current.value = result; 
    }
    return (
    <div>
        <h1 className='m-5'>Simplest Working Calculator</h1>
        <form className='w-2'>
            <div>
            <p>Result: <span ref={resultRef}>{result}</span></p>
            <input ref={numRef} className='border border-2' placeholder='Enter a Number' type='number'></input><br/>
            </div>

            <div>
            <button onClick={plus} className='m-2 btn btn-secondary'>add</button>
            <button onClick={minus} className='m-2 btn btn-secondary'>subtract</button>
            <button onClick={times} className='m-2 btn btn-secondary'>multiply</button>
            <button onClick={divide} className='m-2 btn btn-secondary'>divide</button>
            </div>
            
            <div>
            <button onClick={resetInput} className='m-2 btn btn-primary'>reset input</button>
            <button onClick={resetResult} className='m-2 btn btn-danger'>reset result</button>

            </div>
        </form>
    </div>
  )
}

export default CalcForm