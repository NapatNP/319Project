import React from 'react';
import './home.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '550px',
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
    url: './images/image1.png',
    caption: 'Slide 1'
  },
  {
    url: './images/image2.png',
    caption: 'Slide 2'
  },
  {
    url: './images/image3.png',
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
      <section id="home" className='container'>
        <div className="">
          <Slideshow />
        </div>
      </section>
    </>
  );
};
export default Home 