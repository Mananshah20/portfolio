import React, { Component } from 'react'
import Manan from "../images/Manan2.PNG"


import "../css/layer1.css"

import github from "../images/github.png"
import resume from "../images/resume.png"
import linkedn from "../images/linkedn.png"
import { BrowserRouter as Router, Link } from "react-router-dom";
function Layer1() {



    return (
        // <div class="hero layer1">

        //     <div class="left layer1text">
        //         <h4>Hello, I'm</h4>
        //         <p>Manan Shah</p>
        //         <h6>Welcome to my Website</h6>
        //         <div className="icons">
        //             <img src={instagram} alt="" class="icon"></img>
        //             <img src={github} alt="" class="icon"></img>
        //             <img src={linkedn} alt="" class="icon"></img>
        //         </div>
        //         <a href="#" class="myButton">View Projects</a>
        //     </div>

        //     <div className="right layer1img" style={{ backgroundImage: `url(${Manan})` }}></div>
        // </div>
        <div className="wrapper">
            <article className="img-info">
                <h4>Hello, I'm</h4>
                <p>Manan Shah</p>
                <h6>Welcome to my Website</h6>
                <Router>
                    <div className="icons">
                        <Link to={{ pathname: "https://drive.google.com/file/d/1GacHNjkYlFBViFc0UionGEeGYjSMc8hQ/view?usp=sharing" }} target="_blank" style={{ textDecoration: 'none', color: "black" }}>
                            <img src={resume} alt="" class="icon"></img>
                        </Link>
                        <Link to={{ pathname: "https://github.com/Mananshah20" }} target="_blank" style={{ textDecoration: 'none', color: "black" }}>
                            <img src={github} alt="" class="icon"></img>
                        </Link>
                        <Link to={{ pathname: "https://www.linkedin.com/in/manan-kalpesh-shah-a81504178/" }} target="_blank" style={{ textDecoration: 'none', color: "black" }}>
                            <img src={linkedn} alt="" class="icon"></img>
                        </Link>
                    </div>
                </Router>
                <a href="#projects" class="myButton">View Projects</a>
            </article>
            <img className="img-me" src={Manan}></img>
        </div>
    )
}

export default Layer1
