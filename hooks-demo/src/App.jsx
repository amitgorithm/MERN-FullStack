import './App.css';
import React from 'react';
import UseStateNEffect from './components/UseStatenEffect'  // ✅ Capitalized import
import MainData from './components/MainData'

function App() {
  return (
    <>
      <h1>Hooks Demo</h1>
      <UseStateNEffect />   {/* ✅ Use as a component, no <h2> wrapper */}
      <MainData />
    </>
  );
}

export default App;
