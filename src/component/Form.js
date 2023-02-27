import React,{useState} from 'react'

export default function Form({Value}) {
    const[text,setText]=useState('')
    
    const changeHandler=(e)=>{
        setText(e.target.value)
    }
    const submitHandler=(e)=>{
        e.preventDefault()
      
        const response={
            title:text,
          
        }
        if(response.title.trim().length ===0){return}
        Value(response)
        setText('')
    }

  return (
   <form onSubmit={submitHandler} className=" bg-white py-7 px-10 flex space-x-2 justify-center drop-shadow-md ">
    
   <input className='outline-none w-64 border-b-2 border-indigo-400'type="text" placeholder='write task..' value={text} onChange={changeHandler}/>
     <button className='border drop-shadow-md rounded-md font-default text-gray-200 bg-indigo-500 py-2 px-3 active:skew-x-2'>Add</button>
   </form>
  )
}
