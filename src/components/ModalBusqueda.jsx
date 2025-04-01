import React from 'react'
import { useState } from 'react'
import { LuMenuSquare } from 'react-icons/lu'

 export default function Modal  ()  {

  const[isopen, setIsopen] = useState(false);

  return (
   <>
   <button className='ml-2 pb-2 rounded-lg text-2xl text-gray-700 hover:text-yellow-500 font-bold' onClick={()=>setIsopen(true)}><LuMenuSquare />
   </button>

{
  isopen && (
    <div className='fixed inset-4 bg-black bg-opacity-30 flex justify-center items-center mr-14  z-50 '>
   <div className='bg-white p-4  flex flex-col justify-center items-center gap-2 rounded-custom1 w-96 h-72'>
    <div>
    
                <p className='text-black pt-10 text-xl font-bold text-left'>
                
                    TUTORIAL
                </p>
             
    </div> 
    <button className='py-2 px-2 rounded-lg  backdrop-blur-sm border-2 border-submenu text-submenu transition-colors  hover:bg-primary hover:text-white hover:border-primary text-center font-bold mt-20' onClick={()=>setIsopen(false)} >Cerrar</button>
   </div>
   </div>
  )


}

   
   </>
  )
}

