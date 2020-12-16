import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaBookReader, FaRocketchat, FaConnectdevelop } from "react-icons/fa";

const Navigation = () => {
    return (
        <div className="sidebar">

            <div className="id">   
                <div className="idContent">
                    <img src="./media/billGates.jpg" alt="profil-picture"/>
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

        </div>
    );
};

export default Navigation;