import React, { useState } from 'react'
import Form from '../components/Form'

function Main() {
  const [wether, setWether] = useState({})
  return (
    <div className='h-[88vh] flex flex-col items-center gap-4 pt-4'>
      <Form setWether={setWether} />
    </div>
  )
}

export default Main