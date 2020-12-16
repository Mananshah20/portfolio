import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import "../css/sidebar.css"

function Navbar() {

    const openNav = () => {
        console.log("pre");
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("mainbtn").style.marginLeft = "250px";
    }

    function closeNav() {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("mainbtn").style.marginLeft = "0";
    }

    return (
        <div className="navbar">
            <header className="wrapper">

                <nav class="flex navbar items-center justify-between">
                    <div id="mySidebar" class="sidebar">
                        <a class="closebtn" onClick={closeNav}>×</a>
                        <Link
                            activeClass="active"
                            to="Main"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >Main</Link>
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >About</Link>
                        <Link
                            activeClass="active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >Projects</Link>
                        <Link
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >Contact</Link>


                    </div>

                    <div id="mainbtn">
                        <button class="openbtn" onClick={openNav}>☰ </button>

                        <div className="mobilebtn">

                            <Link className="myButton"
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >Contact Me</Link>
                        </div>
                    </div>

                    <div class="left flex menu items-center" >
                        <Link
                            activeClass="active"
                            to="Main"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}>Main</Link>
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >About</Link>
                        <Link
                            activeClass="active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >Projects</Link>
                        <Link
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >Contact</Link>


                    </div>
                    <div className="right flex contactmebtn">

                        <Link className="myButton"
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >Contact Me</Link>
                    </div>
                </nav>


            </header>

        </div>
    )
}

export default Navbar
