import React from "react";
import ResumePNG from "../../assets/resume.png"



function Learn() {
  return (
    <div className="contact-card">

      <div className="card">
        <h1 className="text-center">Resume</h1>
        <div className="card-content">
          <a href="tel:0451962593" className="ml-4 mt-4 font-weight-bold">Phone</a>

          <a href="mailto:webmaster@tristan.libeau@gmail.com" className="ml-4 mt-4 font-weight-bold">Email</a>

          <a href="https://www.linkedin.com/in/tristan-libeau-78942a210/" className="ml-4 mt-4 font-weight-bold">LinkedIn</a>

          <a href="https://github.com/TristanLibeau" className="ml-4 mt-4 font-weight-bold">GitHub</a>

          <img src={ResumePNG} alt="profile-photo" className="resumePNG"></img>
          <a href="https://drive.google.com/file/d/1Bp28XfLsDt4lJrj5qTbcY74ywSV4jPhS/view?usp=sharing" target='_blank'><h1 className="text-center mt-2">View Here</h1></a>

        </div>
      </div>
    </div >
  );
}

export default Learn;
