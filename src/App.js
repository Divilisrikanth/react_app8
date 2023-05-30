import React,{useState} from 'react'
import './index.css';



const App = () => {
  const [numbers,setNumbers]=useState(0);
  const increment=()=>{
   setNumbers(numbers+2);
  
  }

  return (
    <div className="container my-5">
      <div className="text-center">
        <h1 class="text-light">{numbers}</h1>
        <button class="btn btn-warning btn-lg"
          onClick={increment}>Click me</button>
      </div>
    </div>
  )
}

export default App

