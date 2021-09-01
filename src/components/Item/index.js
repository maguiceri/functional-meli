import React from 'react'
import "./styles.scss"

function Item(props){
    const {title, thumbnail, price} = props.item
    return( 
        <div className="card">
            <p className="text">{title}</p>
            <img className="img" src={thumbnail}></img>
            <p className="price">${price}</p>
        </div>
    )
}

export default Item;