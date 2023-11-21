import React from 'react';
import './home.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import image1 from './images/image(1).png';
import image2 from './images/image(2).png';
import image3 from './images/image(3).png';
const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '500px'
}
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}

const slideImages = [
  {
    url: image1,
    caption: 'Slide 1'
  },
  {
    url: image2,
    caption: 'Slide 2'
  },
  {
    url: image3,
    caption: 'Slide 3'
  },
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide {...properties}>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  )
}
const Home = () => {
  return (
    <>
      <section id="home">
        <div className="">
          <Slideshow />
        </div>
      </section>
    </>
  );
};
export default Home 