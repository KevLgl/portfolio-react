import React from 'react';
import { Slide } from 'react-slideshow-image';
import img1 from './public/media/img1.jpg';
import img2 from './public/media/img2.jpg';
import img3 from './public/media/img3.jpg';

const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
  }

const SlideShow = () => {
    return (
        <div>
            <Slide {...properties}>
                <div>
                    <div>
                        <img src={img1} alt="img1" />
                    </div>
                </div>
                <div>
                    <div>
                        <img src={img2} alt="img2" />
                    </div>
                </div>
                <div>
                    <div>
                        <img src={img3} alt="img3" />
                    </div>
                </div>
            </Slide>
        </div>
)
};

export default Slide;