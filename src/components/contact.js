 import React from 'react'
 import '../styles/contact.css'
 import aginphoto from '../image/photo-img.png.jpg'
 import {BsFacebook} from 'react-icons/bs'
 import{RiInstagramFill} from 'react-icons/ri'
 import{IoLogoWhatsapp} from 'react-icons/io'
 import {BsGithub} from 'react-icons/bs'
 import {AiFillLinkedin} from 'react-icons/ai'
 import{GrMail} from 'react-icons/gr'
 
 const Contact = () => {
   return (
     <div className='contact'>
      <div className="pic">
        <img src={aginphoto} alt="" height="500px"/>
      </div>
      <div className="contact-me">
        <h1>Contact Me</h1>
        <p>You can contact me at the places mentioned below. <br /> I will try to get back to you as fast as I can.</p>
         <a href='https://www.facebook.com/agin.gosh'><BsFacebook size={"40px"} color="white"/></a>
         <a href="https://www.instagram.com/agingosh0/"><RiInstagramFill size={"40px"} color="white"/></a>
          <a href="https://web.whatsapp.com/"><IoLogoWhatsapp size={"40px"} color="white"/></a>
          <a href="https://github.com/agingosh0"><BsGithub size={"40px"} color="white"/></a>
          <a href="https://www.linkedin.com/in/agingosh/"><AiFillLinkedin size={"40px"} color="white"/></a>
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCKCCRnHjtlqFxvZbplWMQgkrZpBDfthdnWvspHVZvwDVtBKKwHMvKdmmHVrGLjQqQsRtHzg"><GrMail size={"40px"} color="white"/></a>
          <p></p>
      </div>
     </div>
   )
 }
 
 export default Contact