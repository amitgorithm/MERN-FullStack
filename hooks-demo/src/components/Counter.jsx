import { useReducer } from 'react'


const Counter = () => {
  const initialState = {count : 45}

  function reducer(state,action) {
    switch (action.type){
      case 'inc' :
        return {count : state.count + 1}
      case 'dec' : 
        return {count : state.count - 1}
      default : 
        throw new Error()  
      
    }
  }
   const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <div>
      <h1> Count : {state.count} </h1>
      <button onClick={ ()=>dispatch({type : 'inc'}) }> +1 </button>
      <button onClick={ ()=>dispatch({type : 'dec'}) }> -1 </button>
    </div>
  )
}

export default Counter