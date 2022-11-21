import React from 'react'
import resimg1 from '../image/res-img1.jpg'
import resimg2 from '../image/res-img2.jpg'
import '../styles/resume.css'

const Resume = () => {
  return (
    <div className='resume'>
        <div className="res-con">
            <h1>Resume</h1>
        </div>
        <div className="res-img1">
            <img src={resimg1} alt="" />
        </div>
        <div className="res-img2">
            <img src={resimg2} alt="" />
        </div>
    </div>
  )
}

export default Resume