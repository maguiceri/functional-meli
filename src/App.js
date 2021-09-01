import React, {useState} from 'react';
import "./App.scss"
import List from "./components/List"
import Navbar from "./components/Navbar"

function App() {
  const[inputValue, setInputValue] = useState("")

  function handleCallBack(inputValue){
    setInputValue(inputValue)
  }
  return(
    <>
    <Navbar handleCallBack={handleCallBack}/>
    <List inputValue={inputValue}/>
    </>
  )
}

export default App;
