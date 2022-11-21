import '../styles/navbar.css'
import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className="navmain">
                <div className="name">
                    <h2>AGIN GOSH( )</h2>
                </div>
                <div className="links">
                    <ul>
                        <li><Link className='links-1' to="/" >HOME</Link></li>
                        <li><Link className='links-1' to="/education" >EDUCATION</Link></li>
                        <li><Link className='links-1' to="/certificate" >CERTIFICATION</Link></li>
                        <li><Link className='links-1' to="/project" >PROJECT</Link></li>
                        <li><Link className='links-1' to="/contact" >CONTACT</Link></li>
                        <li><Link className='links-1' to="/resume" >RESUME</Link></li>
                    </ul>
                </div>
            </div>
           
        </div>
     );
}
 
export default Navbar;