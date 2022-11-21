import React from 'react'
import '../styles/project.css'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {IoLogoJavascript} from 'react-icons/io'
import {RiReactjsLine} from 'react-icons/ri'
const Project = () => {
  return (
    <div className='project'>
        <div className="pro-main">
        <div className="pro-img">
            <img src="https://cdn3d.iconscout.com/3d/premium/thumb/boy-typing-on-laptop-4867893-4051281.png" alt="" />
        </div>
        <div className="pro-exp">
            <h1>PROJECT</h1>
            <h4>My projects make use of a variety of latest technology tools.</h4>
        </div>
        </div>
        <div className="pro-demain">
        <div className="pro-details">
            <h3>Weather Checking Website</h3>
          
            <p>In this website you can check the weather of different cities as well as different countries. I have done this Project using HTML,CSS and JavaScript.And I have fetch the API from the open API's</p>
            <AiFillHtml5 size={"40px"} color="white"/>
            <DiCss3 size={"40px"} color="white"/>
            <IoLogoJavascript size={"40px"} color="white"/>
        </div>
        <div className="pro-details">
            <h3>Library Website</h3>
            
            <p>In this website you can check the weather of different cities as well as different countries. I have done this Project using HTML,CSS and JavaScript.And I have fetch the API from the open API's</p>
            <AiFillHtml5 size={"40px"} color="white"/>
            <DiCss3 size={"40px"} color="white"/>
            <IoLogoJavascript size={"40px"} color="white"/>
            <RiReactjsLine size={"40px"} color="white"/>
        </div>
        <div className="pro-details">
            <h3>My Portfolio</h3>
            
            <p>In this website you can check the weather of different cities as well as different countries. I have done this Project using HTML,CSS and JavaScript.And I have fetch the API from the open API's</p>
            <AiFillHtml5 size={"40px"} color="white"/>
            <DiCss3 size={"40px"} color="white"/>
            <IoLogoJavascript size={"40px"} color="white"/>
            <RiReactjsLine size={"40px"} color="white"/>
        </div>
        
        </div>
    </div>
  )
}

export default Project