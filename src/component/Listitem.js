import React,{useState} from 'react'
import ListPut from './ListPut'
import {  MdOutlineCreate } from "react-icons/md";
export default function Listitem({value,onEdit}) {
    const[showEdit,setEdit] =useState(false)
    const changehandler=()=>{
        setEdit(!showEdit)
    }
    const handleput=()=>{
      setEdit(false)
    }
    let content=null
    if(showEdit){
        content = <ListPut value={value} id={value._id} onEdit={onEdit} onSubmit={handleput}/>
    }
    // const submitHandler=()=>{
    
    //   const response={
    //     id:value._id,
    //     title:value.title,
    //     compelete:!value.complete
    //   }
    //   onEdit(response) 
    // }
  return (
    <div className='flex justify-center items-center space-x-2 mt-2' >
      <div className=' p-1 relative'>
        {content}</div>
        <div >
     <li className={`font-default text-2xl shadow-sm ${value.complete? "line-through":""}`}>
        {value.title}
   
     </li>
     </div>
     <div >
     <MdOutlineCreate onClick={changehandler}  className="text-xl hover:text-red-400 text-slate-400 drop-shadow-lg" /></div>
     </div>
  )
}
