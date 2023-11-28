import React from 'react'

function Display({wether}) {
  return (

    <div className='flex justify-evenly w-[20vw] z-7 bg-white opacity-60 '>
        <div className='text-black'>
            <h1 className='font-bold text-[2.5vw]'>{wether.city}</h1>
             <p className='font-bold text-[4vw]'>{wether.temp}</p>
             <p className='font-bold text-[1.5vw]'>{wether.feel}</p>
            <p className='font-bold uppercase'>{wether.descrp}</p>

        </div>
    </div>
  )
}

export default Display