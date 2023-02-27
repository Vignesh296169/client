import React from 'react'
import Listitem from './Listitem'
import {  MdDelete } from "react-icons/md";


export default function ListState({value,onDelete,onEdit}) {
       const deleteHandler=(id)=>{
          onDelete(id)
       }
     
     
  return (
     <ul className=' mt-3 p-3'>

        {
            value.map((item)=>(
                  <div key={item._id} className="py-3" >
                    <div className=' flex p-2 justify-center items-center  space-x-2 drop-shadow-md'>
                <Listitem  value={item} onEdit={onEdit} />
                  <MdDelete onClick={()=>deleteHandler(item._id)} className="order-1 drop-shadow-lg  text-xl mt-1 text-gray-400 hover:text-black"/>
                 </div>
       
                </div>
            ))
        }
     </ul>
  )
}
