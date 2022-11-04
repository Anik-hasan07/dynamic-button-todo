import React, { useState } from 'react'

const Box = (props) => {
   const{num,id}=props.num
  // const{id}=props;
  console.log(props);
  //num,id,onDelete
    const[number,setNumber] = useState(0)
    
    const increment=()=>{
        setNumber(number+1)
    }
    const decrement=()=>{
      if(number<0){
        setNumber(number-1)
      }
        
    }

    const deleteButton=(id)=>{
      props.onDelete(id)
    }

  return (
    <div>
      <button onClick={increment}>Increment</button>
      {number}
      <button onClick={decrement}>Decrement</button>
      <button onClick={()=>{deleteButton(id)}}>Delete</button>
    
    </div>
  )
}

export default Box
