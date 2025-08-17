import './App.css';
import React from 'react';
import UseStateNEffect from './components/UseStatenEffect'  // ✅ Capitalized import
import MainData from './components/MainData'
import {useRef} from 'react'
import Counter from './components/Counter'

function App() {
  const myInput = useRef() 
  const handleClick = () => {
      // alert ("Ref Demo")
      console.log(myInput)
      myInput.current.style.background = 'blue'
      myInput.current.style.width = '400px'
  }

  return (
    <>
      <h1>Hooks Demo</h1>
      <input type='text' ref = {myInput} placeholder=' ref demo' />
      <button onClick ={handleClick}> UseRef </button>
      <UseStateNEffect />   {/* ✅ Use as a component, no <h2> wrapper */}
      <MainData />
      <Counter />
    </>
  );
}

export default App;
