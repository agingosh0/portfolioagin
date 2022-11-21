import "../styles/education.css";
import eduimage from "../image/education-image.png";
import unimage from "../image/university-img.png";

const Education = () => {
  return (
    <div className="education">
      <div className="edu-main">
        <div className="edu-img">
          <img src={eduimage} alt="" height="400px" />
        </div>
        <div className="edu-details">
          <h1>Education </h1>
          <h2>Basic Qualification</h2>
          <h4>
            I am a B.TECH graduate in Mechanical Engineering and <br />{" "}
            currently pursuing MERN Stack Development Course
          </h4>
        </div>
      </div>
      <div className="edu-degree">
        <h1 className="deg">Degree Received</h1>
        <div className="edu-display">
          <div className="received">
            <img src={unimage} alt="" height="300px"/>
          </div>
          <div className="edu-mark">
            <div className="college">
              <h1>COCHIN UNIVERSITY OF SCIENCE AND TECHNOLOGY</h1>
              <h3>Bachelor of Technology in Mechanical Engineering</h3>
            </div>
            <div className="mark">
              <p>
                ⚡ I have completed my B.Tech in M.E with a CGPA of 6.96.{" "}
                <br />
                ⚡ Done one major and one mini project with team. <br />⚡ Course
                duration 2016-2020.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
