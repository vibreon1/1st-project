import React from "react";
import "./skills.css";
import Software from "./Software";
import Webdev from "./Webdev";


const Skills = () =>{
    return(
          <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My technical level</span>

            <div className="skills__container container grid">
                <Webdev />

                <Software />

            </div>
          </section>
    )
}

export default Skills;