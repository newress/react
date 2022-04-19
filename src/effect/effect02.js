import React, {useState} from 'react';

function Effect02(){
  const [count, setCount] = useState(0);
  React.useEffect(() => {
    console.log('effect의 시작과 업데이트', count)
  },[]);
  React.useEffect(() => {
    console.log('effect의 시작과 업데이트', count)
  },[count]);
  return(
    <div>
      <h1>effect 시점보기</h1>
      <p>count 변경보기 : {count}</p>
      <button onClick={click}>click</button>
    </div>
  )
  function click(){
    setCount(count +1)
  }
}

export default Effect02