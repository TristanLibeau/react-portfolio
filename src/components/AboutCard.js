import React from "react";
import Profile from "../assets/Profile.jpg"


function AboutCard() {
    return (
        <div className="about-container">
            <h5>About Me</h5>

            <img src={Profile} alt="profile-photo" className="profile float-left"></img>
            <div>

                <div className="mt-3">

                    <p>I am a dedicated student who is currently studying Web Development as a part of a Bootcamp Program facilitated by the University of Sydney. 
                            My name is Tristan Libeau, my previous skill set that I have mastered over the past 10 years is within the field of Hospitality. 
                            I have found that my overall passion for Hospitality has dwindled and I have subsequently developed an interest in computer hardware and software.
                            My passion for technology as a whole initially derived from building Personal Computers for myself and some friends..</p>
                    <p>I began to find myself more intrigued and wished to learn more about the Software side of computing and this led to my interest in the field of Web Development and coding. 
                            There was something truly enticing about creating a program and the conceptual framework of interacting with a computer on the most fundamental level in order to create an application with intuitive and practical purpose. 
                            The more that I learn, the more passionate I become and my initial goal upon completion of my studies is to find a Job as a Junior Developer in a Software Company where I can begin to flourish as a Developer and to work on projects as a part of a large scale team with a uniform.</p>

                    <p>
                        I am interested in learning about new opportunities and can
                        be reached
                        through this portfolio, by
                        email:
                                                <a href="mailto:tristan.libeau@gmail.com"
                            target="_blank">tristan.libeau@gmail.com, </a> through<a
                                href="https://github.com/TristanLibeau" target='_blank'> GitHub</a>, or through <a
                                    href="https://www.linkedin.com/in/tristan-libeau-78942a210/" target='_blank'>
                            LinkedIn.</a>
                        Cheers!

                                                </p>
                </div>

                <div className="card-body contactLinks">
                    <a href="https://www.linkedin.com/in/tristan-libeau-78942a210/" target='_blank' className="card-link">LinkedIn</a>
                    <a href="https://github.com/TristanLibeau" target='_blank' className="card-link">GitHub</a>
                </div>
            </div>
            {/* end copy paste  */}
        </div>
    );
}

export default AboutCard;
