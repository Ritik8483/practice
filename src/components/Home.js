import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from './Button';

const Home = () => {
    const navigate=useNavigate();
  return (
    <div>
        <h2>Home Component</h2>
        <h3>Student Page</h3>
        <Button variant='primary' type='button' onClick={()=>navigate('/student')} >Student Form</Button>
        <Button variant='primary' type='button' onClick={()=>navigate('/cart')} >Add to Cart Form</Button>
        <Button variant='primary' type='button' onClick={()=>navigate('/multiform')}>Multi Form</Button>
        <Button variant='primary' type='button' onClick={()=>navigate('/mainForm')}>Main Form</Button>

    </div>
  )
}

export default Home