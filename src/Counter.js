import React, { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  return (
      <div className='wrapper '>
         
        <h1 className='text-center pt-5'> Counter </h1>
        <div className=' wrapper2 d-flex align-items-center justify-content-center '>
          <button className='btn btn-warning btn-lg px-4 py-0' onClick={() => setCount(count + 1)}><h1>+</h1></button>
           <h1 className=' count text-center px-4'>{count}</h1>
          <button className='btn btn-warning btn-lg px-4 py-0'onClick={() => setCount(count - 1)}><h1>-</h1></button>
        </div>

        <div className='d-flex  justify-content-center'>
          <button className='btn btn-warning btn-lg px-5  ' onClick={() => setCount(0)}>  Reset Counter </button>
        </div>

      </div>
  )};

export default Counter;
