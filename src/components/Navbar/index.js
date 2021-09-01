import React from 'react'

function Navbar(props){
    //function handleCallBack(e){
        //props.handleCallBack(e.target.value)
    //}  esto seria si no lo hago en una sola linea
   return(
       <>
        <input type="text" onChange={(e) => props.handleCallBack(e.target.value)}></input>
       </>
   )
}

export default Navbar;