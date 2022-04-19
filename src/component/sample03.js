import React from "react";

function Sample03(){
  // useState => count
  // useState => {count : 0}
  const [state, setState] = React.useState({count:0});
  return(
    <div>
      <h1>state 방식 : 객체화 방법</h1>
      <p>sample03 : {state.count}</p>
      <button onClick={click}>Click</button>
    </div>
  )
  function click(){
    setState({count:state.count +1})
  }
}

export default Sample03