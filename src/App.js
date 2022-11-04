import { useState } from 'react';
import './App.css';
import Box from './components/Box';
import {v4 as uuidv4} from "uuid"

function App() {
  const[boxes,setBoxes] = useState([])

  const createBox =()=>{
    setBoxes([...boxes,0,{id:uuidv4()}])
  }
  const saveBox = ()=>{
   
  }

  const onDelete=(id)=>{
    const deletedBox = boxes.filter((box)=>box.id!=id)
    setBoxes(deletedBox)

  }
  return (
    <div className="App">
      <button onClick={createBox}>+</button>
      <br/>
      <br/>
      
     {
      boxes.map((number,index)=>(
        <div>
         
          <Box num={number} id={index} onDelete={onDelete}/>
          

        </div>
      ))
     }

     <button onClick={saveBox}>Save</button>
    </div>
  );
}

export default App;

//1:29.10
