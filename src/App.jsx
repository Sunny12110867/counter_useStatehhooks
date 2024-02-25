import react from "react";
import { useState } from "react";
import '../src/style.css'
function App() {
  const [val,setval]=useState(0);
  
  function increase(){
  if(val<10){
    setval(val+1);
    console.log(val);
  }
  else{
    alert('you cannot increase');
  }
  }
  function decrease(){
   if(val>0){
    setval(val-1);
    console.log(val);
   }
    else{
      alert('you cannot increase');
    }
  }
  return (
    <>
    <div className="screen">
      <h2>current count is {val}</h2>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
    </div>
    </>
  )
}

export default App
