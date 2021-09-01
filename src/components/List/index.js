import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Item from "../Item"

function List (props) {
    const [items, setItems] = useState([])

  
    async function fetchData(){
      const getData = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=auriculares`);
      console.log(getData)
      setItems(getData.data.results)
    }
  
    useEffect(() => {
      fetchData()
    } , [])
    
    return (
    <>
      {items.filter((item)=>{
        return item.title.toLowerCase().includes(props.inputValue.toLowerCase())
      }).map((item, key)=>{
        return <Item item={item} key={item.id? item.id : key}/>
      })}
      
    </>
    )
}

export default List;