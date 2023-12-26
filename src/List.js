import {useEffect,useState} from 'react';

function List({getnumber}){
  const [item,setItem]=useState([])
   
   useEffect(()=>{
    console.log("list component is called")
    setItem(getnumber())
   },[getnumber])


  return  item.map((item)=><div key={item}>{item}</div>) 

}

export default List;