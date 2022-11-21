import "../styles/home.css";
import homeimage from "../image/home-bg.png";
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <div className="home-banner">
        <div className="home-content">
          <h1>
            Hello{" "}
            <img
              src="https://i.pinimg.com/originals/21/f2/07/21f2078d23f9195570a3711c018328b2.png"
              height="50px"
              alt=""
            />
            .
          </h1>
          <h4>
            I am <b>Agin Gosh</b> and I am a MERN Stack developer <br />
            and passionate about in learning web <br />
            technologies and challenging problems .
          </h4>
          <Link to="/contact"><button className="home-btn">CONTACT ME</button></Link>
        </div>
        <div className="home-img">
          <img src={homeimage} alt="" />
        </div>
      </div>
      <div className="skills">
        <div className="heading">
            <h1>Here's What I Do</h1>
        </div>
        <div className="skill-main">
        <div className="skill-img">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/65/Black_Cartoon_Guy_Using_His_Laptop.svg" height="700px" alt="" />
        </div>
        <div className="skill-set">
            <h1>Skills And Tools</h1>
            <ul>
                <li><h2>Good Knowledge in React JS</h2></li>
                <li><h2>Well Understanding in Doing JavaScript Codes</h2></li>
                <li><h2>Excellent In HTML and CSS</h2></li>
                <li><h2>Good in Core Java</h2></li>
                <li><h2>Excellent Knowledge in DataBase such as SQL and MongoDB</h2></li>
            </ul>
        </div>
        </div>
      </div>
      {/* <div className="footer">
        <div className="phone">
            <h6><a href="">9400752076</a></h6>
        </div>
        <div className="mail">
            <h6><a href="">goshu143@gmail.com</a></h6>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
