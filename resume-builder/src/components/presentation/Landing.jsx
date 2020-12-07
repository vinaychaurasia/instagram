import React from 'react';
import resumeImg from "../../static/public/images/resume.png";
import Button from "./Button";

function Landing(){
    return(
        <div className="middle">
          <h1>Create a resume that stands out</h1>
          <h4 class="fadeIn">Create a Resume that perfectly describes your skills and match job profile</h4>
          <Button text="Get Started for Free"></Button>
          <br />
          <img className="resumeImg" src={resumeImg} alt="resume image" />
        </div>
    )
}

export default Landing;