import React, { useState } from "react";
import "../styles/Calculator.css";

const Calculator = () => {
  const [calc, setCalc] = useState('')
  const [result, setResult ] =useState('')

  const createDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push
      (<button 
        onClick={()=> updateCalc(i.toString())} 
        className="col-3 btn btn-secondary" 
        key={i}>
          {i}
      </button>);
    }
    return digits;
  };

  const ops =['+', '-','*','/','.'];

  const updateCalc = value =>{
    if(ops.includes(value) && calc ==='' || 
       ops.includes(value) && ops.includes(calc.slice(-1))
      ){
        return
      }

      setCalc(calc + value)

      if(!ops.includes(value)){
        setResult(eval(calc + value).toString()) 
      }
      
      console.log(calc)
      console.log(result)
  }

  const clear =()=>{
    setCalc('')
    setResult('')
    // setCalc((calc) => calc.slice(0, calc.length))
    // setResult(eval(calc))
  }

  const removeLast = ()=>{
    if(calc === ''){
      return 
    }
    const value = calc.slice(0, -1)
    setCalc(value)
  }

  const calculate = ()=> {
    setCalc(eval(calc).toString())
  }

  return (
    <div className="calculator w-25 m-auto mt-5 " >

      <div className="display row float-end w-100 row float-end ">
        <p className="float-end">
          {result? <sub>({result})</sub> :""}
          {calc || '0'}
        </p>
      </div>

      
        <div className="operators ">
          <button onClick={()=> updateCalc('+')} className="btn btn-primary ">+</button>
          <button onClick={()=> updateCalc('-')} className="btn btn-primary ">-</button>
          <button onClick={()=> updateCalc('*')} className="btn btn-primary ">X</button>
          <button onClick={()=> updateCalc('/')} className="btn btn-primary ">/</button>
          <button onClick={removeLast} className="btn btn-warning  ">Del</button>
          <button onClick={clear} className="btn btn-danger ">clear</button>
        </div>
      

      <div className="digits w-100">
        {createDigits()}
          <button onClick={()=> updateCalc('0')} className="col-3 btn btn-secondary col-3">0</button>
          <button onClick={()=> updateCalc('.')} className="col-3 btn btn-secondary col-3">.</button>
          <button onClick={calculate} className="col-3 btn btn-secondary col-3">=</button>
      </div>
    </div>
  );
};

export default Calculator;
