import React from 'react'
import Card from "./Card"
import Card2 from "./Card2"
import airbnb from "../images/airbnb.PNG"
import netflix from "../images/netflix.PNG"
import covid from "../images/covid.PNG"

import { BrowserRouter as Router, Link } from "react-router-dom";
function Projects() {
    return (
        <div className="projects" id="projects">

            <div class="container wrapper">
                <h1 class="projectstext">My <span class="projectstext2">projects</span></h1>
                <Router>
                    <div className="projectslayer">
                        <Link to={{ pathname: "https://netflix-clone-4596a.web.app/" }} target="_blank" style={{ textDecoration: 'none', color: "black" }}>
                            <Card
                                src={netflix}
                                title="Netflix Clone"
                                description="A netflix clone build using React and Api requests. The background picture changes each time 
                                the page is refeshed. On clicking any of the tile, the trailer for that movie or show will be shown. "
                            />


                        </Link>

                        <Link to={{ pathname: "https://covidtracker-d7ea5.web.app/" }} target="_blank" style={{ textDecoration: 'none', color: "black" }}>
                            <Card
                                src={covid}
                                title="Covid Tracker"
                                description="An online Covid tracker build using React and Api calls. Data is fetched from the server and displayed on screen. 
                                The number of cases, recovered or death can be seen for any country which can be chosen from the list. Apart from that, the total number of cases for each country
                                in a sorted manner are displayed with a grapgh which changes as per the case type chosen."
                            />


                        </Link>
                        <Link to={{ pathname: "https://airbnb-21f97.web.app" }} target="_blank" style={{ textDecoration: 'none', color: "black" }}>
                            <Card
                                src={airbnb}
                                title="AirBnB Clone"
                                description="A simple 2 page AirBnB clone build using react and materialUI. Uses Routing to move from one page to another
                                and is made just like the airbnb wesbite."
                            />
                        </Link>
                    </div>
                </Router>
                <p>And Many More Exciting Projects!!! Check out my GitHub for more!</p>
            </div>

        </div>
    )
}

export default Projects
