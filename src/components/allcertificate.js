import React from 'react'
import img1 from '../image/cer-img1.jpg'
import img2 from '../image/cer-img2.jpg'
import img3 from '../image/cer-img3.jpg'
import '../styles/allcertificate.css'


const Allcertificate = () => {
  return (
    <div className='allcerti'>
        <div className="cer-con">
            <h1>CERTIFICATES</h1>
        </div>
        <div className="cer-img1">
            <img src={img1} alt="" />
        </div>
        <div className="cer-img2">
            <img src={img2} alt="" />
        </div>
        <div className="cer-img3">
            <img src={img3} alt="" />
        </div>
    </div>
  )
}

export default Allcertificate