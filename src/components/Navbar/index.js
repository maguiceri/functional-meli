import React from 'react';
import "./styles.scss";

function Navbar(props){
    //function handleCallBack(e){
        //props.handleCallBack(e.target.value)
    //}  esto seria si no lo hago en una sola linea
   return(
       <div className="div">
        <input className="input" type="text" onChange={(e) => props.handleCallBack(e.target.value)}></input>
       </div >
   )
}

export default Navbar;