import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import{ConterContext} from "../context/counter"
const Hero = () => {
  const counterContext= useContext(ConterContext);

    // const [number, setnumber] = useState(0)
   
    const handleAdd = () => {
        if(counterContext.count==20)
        return alert('Limit reached')
        counterContext.setcount(counterContext.count + 1)
        
    }
    const handleDec = () => {
       if(counterContext.count==0)
       return alert('Limit reached')
       counterContext.setcount(counterContext.count - 1)
    }

  return (
    <div>
      <div className='flex justify-center items-center pt-10 flex-row gap-6  '>
        {/* <h1 className='w-40 h-40 rounded bg-red-400 items-center text-center text-5xl pt-16  text-white font-semibold '>
           {number}
        </h1> */}
        <button onClick={handleAdd} className='px-10 py-2 bg-red-500 rounded-full'>Add</button>
        <button onClick={handleDec} className='px-10 py-2 bg-red-500 rounded-full'>Dec</button>
      </div>
      
    </div>
  )
}

export default Hero
