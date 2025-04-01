import React from 'react'
import { useState } from 'react'
import { LuMenuSquare } from 'react-icons/lu'

 export default function ModalHome  ()  {

  const[isopen, setIsopen] = useState(false);

  return (
   <>
   <button className='ml-2 pb-0 rounded-lg text-2xl text-gray-700 hover:text-yellow-500 font-bold' onClick={()=>setIsopen(true)}><LuMenuSquare />
   </button>

{
  isopen && (
    <div className='fixed inset-4  bg-black bg-opacity-30 flex justify-center items-center z-50 '>
   <div className='bg-accent p-4 hover:border-primary hover:bg-black border-2 flex flex-col justify-center items-center gap-2 rounded-custom1 w-96 h-72'>
    <div>
    
                <p className='text-white pt-4 text-xl font-bold pb-6 text-left'>
                
                    TUTORIAL
                </p>
             
    </div> 
    <button className='py-2 px-2 rounded-lg  backdrop-blur-sm border-2 border-submenu text-submenu transition-colors  hover:bg-primary hover:text-white hover:border-primary text-center font-bold mt-18' onClick={()=>setIsopen(false)} >Cerrar</button>
   </div>
   </div>
  )
}
   </>
  )
}

