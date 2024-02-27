import React, { useState } from 'react'

function Counter() {
  //state creation  // var counter = 0
 
  const [counter,setCounter] = useState(0)

  function incrementCounter(){
  //increment counter value by 1
  setCounter(counter+1)
  }
  function decrementCounter(){
    if(!counter==0){
      setCounter(counter-1)
    }
  }
  function resetCounter(){
    setCounter(0)
  }

  return (
    <div className='bg-black p-5 m-5'>
      <div className='m-5 p-5 text-center text-light'>
        <h1 >Counter Application </h1>
        <h1>{counter}</h1>
        <button onClick={incrementCounter} className='btn btn-light m-2'>Increment</button>
        <button onClick={decrementCounter} className='btn btn-light m-2'>Decrement</button>
        <button onClick={resetCounter} className='btn btn-dark m-2'>Reset</button>
      </div>

    </div>
  )
}

export default Counter