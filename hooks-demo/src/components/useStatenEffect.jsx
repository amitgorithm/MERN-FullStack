import React, { useState, useEffect } from 'react';

const UseStateNEffect = () => {
  const [count, setCount] = useState(7);
  const [age, setAge] = useState(19);

  const add = () => {
    setCount(count + 1);
  };

  function less() {
    setCount(count - 1);
  }

  const increaseAge = () => {
    setAge(age + 1);
  };

  useEffect(() => {
    console.log("I will run every time count changes");
  }, [count]); // dependency array

  return (
    <>
      <h2>The Counter value is : {count}</h2>
      <button onClick={add}> + </button>
      <button onClick={less}> - </button>

      <h3>My Age is : {age}</h3>
      <button onClick={increaseAge}> Add </button>
    </>
  );
};

export default UseStateNEffect;
