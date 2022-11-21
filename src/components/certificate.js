import '../styles/certificates.css';
import {Link} from 'react-router-dom'
import React, { useEffect, useState } from 'react'

const Certification = () => {

    let [detail , setDetail] = useState([]);
    useEffect(()=>{
        let fetchData = async () => {
            let response = await fetch("http://localhost:2000/detail")
            let resData = await response.json();
            setDetail(resData);
        }
        fetchData();
    })
  return (
    <div className='certificate'>
        <div className="head">
        <h1>Certifications</h1>
        </div>
        {detail.map((val)=>(
            <div className="list">
                <div className="list-item">
                    <h3>
                        {val.name}
                    </h3>
                    <h3>
                        {val.institution}
                    </h3>
                    <h3>
                        {val.qualification}
                    </h3>
                    <h3>
                        {val.passout}
                    </h3>
                    
                </div>
            </div>
        ))}
        <div className="cert-btn">
        <Link to='/allcertificate'><button>Click Here For Certificate</button></Link>
        </div>
    </div>
  )
}

export default Certification