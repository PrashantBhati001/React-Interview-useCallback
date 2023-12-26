
import './App.css';
import {useState,useCallback} from 'react';
import List from './List'

function App() {
const [number,setNumber]=useState(1)
const [dark,setdark]=useState(false)

const themestyle={
  backgroundColor:dark?'black':'white',
  color:dark?'white':'black'
}

const getnumber=useCallback(()=>{
  return [number,number+1,number+2]
},[number])

  return (
    <div className="App">
      <div style={themestyle}>{number}</div>
      <div><button onClick={()=>setdark(!dark)}>Toggle Theme</button></div>
      
      <input type="number" value={number} onChange={(e)=>setNumber(parseInt(e.target.value))} />
      <List getnumber={getnumber}/>
    </div>
  );
}

export default App;

/*
Here the problem was that when  both number and theme were changing the component is getting rerendered,which will craete a 
new  getnumber function even on change of theme,which should not happen.So we use useCallback to prevent this.
*/