import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className="home">
            <Navigation />
            <div className="hommeContent">
                <div className="content">
                    <h1>Kevin Laguel</h1>
                    <h2>Developpeur Junior</h2>
                    <div className="pdf">
                        <a href="./media/CV.pdf" target="_blank">Telechager mon CV</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;