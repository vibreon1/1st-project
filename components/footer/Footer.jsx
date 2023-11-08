import React from "react";
import "./footer.css"

const Footer = () =>{
    return(
           <section className="section footer">
            <div className="footer__container container">
                <h1 className="footer__title">Rahul</h1>

                <ul className="footer__list">

                     <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>


                    <li>
                        <a href="#qualification" className="footer__link">Qualification</a>
                    </li>

        
                    <li>
                        <a href="#skills" className="footer__link">Skills</a>
                    </li>
                </ul>

                <div className="footer__social">
                <a href="https://www.instagram.com/" className="footer__social-link " target="_blank"><i class='bx bxl-instagram' ></i></a>
                <a href="https://www.youtube.com/@vibreon2006" className="footer__social-link " target="_blank"><i class='bx bxl-youtube' ></i></a>
                <a href="https://twitter.com/" className="footer__social-link " target="_blank"><i class='bx bxl-twitter' ></i></a>
                </div>
            </div>
            </section>
    )
}

export default Footer;
