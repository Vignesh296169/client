import { useState } from "react"


export default function ListPut({value,onEdit,id,onSubmit}) {
  const [enterTitle,setEditTitle]=useState(value.title)

  const changehandler=(e)=>{
    setEditTitle(e.target.value)
  }
  const submitHandler=(e)=>{
    onSubmit()
    e.preventDefault()
   
    const response={
      id:id,
      title:enterTitle,
     
    }
    onEdit(response) 
  }

  return (
    
  <form onSubmit={submitHandler} className="absolute top-[-35px] flex space-x-2">

 <input className="outline-none bg-inherit border-b-2 border-blue-500 focus:outline-slate-100" value={enterTitle} onChange={changehandler}/>

    <button type="submit" className="bg-indigo-500 rounded-md font-default text-gray-300 px-2">Edit</button>
    </form>

    
  )
}
