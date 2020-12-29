import React from 'react';
import Navigation from '../components/Navigation';
import ImageSlider from '../components/ImageSlider'
import { SliderData } from '../components/SliderData';

const Home = () => {
    return (
        <div className="home">
            <Navigation />
            <ImageSlider slides={SliderData} />
            <div id="slider"></div>
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