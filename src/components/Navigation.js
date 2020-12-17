import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaBookReader, FaRocketchat, FaConnectdevelop, FaFacebookF, FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Navigation = () => {
    return (
        <div className="sidebar">

            <div className="id">   
                <div className="idContent">
                    <div className="imgcontainer">
                        <img src="./media/billGates.jpg" alt="profil-picture"/>
                    </div>
                       
                    <h3>Kevin Laguel</h3>
                </div>
            </div>

            <div className="navigation">
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="navActive">
                            <i><FaHome/></i>
                            <span>Acceuil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/competences" activeClassName="navActive">
                            <i><FaBookReader /></i>
                            <span>Compétences</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/portfolio" activeClassName="navActive">
                            <i><FaConnectdevelop /></i>
                            <span>Portfolio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/contact" activeClassName="navActive">
                        <i><FaRocketchat /></i>
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="socialNetwork">
                <ul>
                    <li>
                        <a href="https://google.com" target="_blank" rel="noopener noreferrer"><i><i><FaFacebookF /></i></i></a>
                    </li>
                    <li>
                        <a href="https://google.com" target="_blank" rel="noopener noreferrer"><i><i><FaGithub /></i></i></a>
                    </li>
                    <li>
                        <a href="https://google.com" target="_blank" rel="noopener noreferrer"><i><i><FaTwitter /></i></i></a>
                    </li>
                    <li>
                        <a href="https://google.com" target="_blank" rel="noopener noreferrer"><i><i><FaLinkedinIn /></i></i></a>
                    </li>
                </ul>
                <div className="signature">
                    <p>fromScratch - Kevin Laguel - 2020</p>
                </div>
            </div>



        </div>
    );
};

export default Navigation;