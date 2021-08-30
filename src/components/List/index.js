import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Item from "../Item"

function List () {
    const [items, setItems] = useState([])

  
    async function fetchData(){
      const getData = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=auriculares&limit=5`);
      setItems(getData.data.results)
      console.log(getData)
    }
  
    useEffect(() => {
      fetchData()
    } , [])
    
    return (
      <div >
       {items.map((item, key) => {
           return <Item data={item} key={item.id}/>
       })}
      </div>
    )
}

export default List;