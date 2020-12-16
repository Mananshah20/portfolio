import React from 'react'
import Desktop from "../images/d1.jpg"
import "../css/aboutme.css"
function About() {
    return (
        <div className="about">
            <div className="wrapper">
                <h1 className="aboutmeheader">About <span className="aboutmeheader2">Me</span></h1>
                <div className="about-text">
                    <p>Creative and innovative Computer Science Student with passion in Front End and Back End Web Development along with Data Structures. Motivated and Confident  at setting and achieving ambitious goals.
                    Currently, I am in my third year of college studying at VIT Vellore. In the course of these few years during
                    graduation, I have
                    been taught a lot of things. But the practical application of my knowledge will help me know how
                    much have I actually learned. I love building websites and evolving with the new technology. Apart from that my hobbies include playing
                    sports, watching shows and cycling.
                </p>
                </div>
                <img className="about-img" src={Desktop}></img>
            </div>

        </div>
        // <div className="container about">
        //     <h1 className="aboutmeheader">About <span className="aboutmeheader2">Me</span></h1>
        //     <div class="aboutmecontainer  items-center">
        //         <div class="aboutmeimg">
        //             <img src={Desktop}></img>
        //         </div>
        //         <div class="aboutmetext">

        //     <p>Currently, I am in my third year at college. In the course of these few years during
        //     graduation/postgraduation, we have
        //     been taught a lot of things. But the practical application of my knowledge will help me know how
        //     much
        //     have I actually
        //     learned. Joining your firm will gauge where I stand. No better opportunity than this can come my
        //     way. I
        //     can showcase my
        //     talent and prove my skills here, while in turn, I can learn how this industry functions in and out.
        //     That
        //     is why you may
        //     hire me for this internship. Well, I think I will be a great fit for the internship since I am a
        //     quick
        //     learner and
        //     highly passionate about pursuing a career in this industry. I wish to pursue this internship to
        //     evaluate
        //     my inherent
        //     abilities and potential. Although I have accumulated a strong foundational knowledge in this domain,
        //     I
        //     think the best
        //     way to move forward would be to get practical working experience in an established platform, that is
        //     your company. I
        //     wish to learn, upskill, and acquire skills that can shape me as a valued professional in this field.
        // </p>
        //         </div>
        //     </div>

        // </div>
    )
}

export default About
