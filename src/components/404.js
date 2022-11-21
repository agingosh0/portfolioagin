import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/404.css'

const Error404 = () => {
  return (
    <div className='error'>
        <h2>SORRY</h2>
        <p>This page is Not Found</p>
        <Link to="/">Back To HomePage</Link>
    </div>
  )
}

export default Error404