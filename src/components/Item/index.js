import React from 'react'
import "./styles.scss"

function Item(props){
    
    return(
        <div className="card">
            <p className="text">{props.data.title}</p>
            <img className="img" src={props.data.thumbnail}></img>
            <p className="price">${props.data.price}</p>
        </div>
    )
}

export default Item;