import React, { useState } from 'react'
import Form from '../components/Form'
import Display from '../components/Display'

function Main() {
  const [wether, setWether] = useState({})
  const obj = {
    'o1n': `../video/01n.mp4`,
    'o1d': `../video/01d.mp4`
  }

  return (
    <div className='h-[86vh] w-[99vw] pt-[10vh]'>
        <div>
            <video loop autoPlay muted className='object-cover w-full h-full pt-[7vh] pb-[5vh] fixed top-0 left-0'>
              <source src={require(`../video/${obj[wether.icon] ? wether.icon : 'default'}.mp4`)} type='video/mp4'/>
            </video>
        </div>
        <div className='relative flex flex-col items-center justify-around gap-[20vh]'>
          <Form setWether={setWether}/>
          <Display wether={wether}/>
        </div>

    </div>
  )
}

export default Main
