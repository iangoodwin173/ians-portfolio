import React, { useState, useEffect } from "react";
// import '../stylesheets/home.css';
import circlePhoto from '../assets/images/circle-img.png';
import logo from '../logo.svg';

function Home() {
  const initialTaglines = ['Web Developer', 'Front-End Developer', 'Gamer', 'Golfer'];
  const [taglinesQueue, setTaglinesQueue] = useState(initialTaglines);
  const [selectedTagline, setSelectedTagline] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const rotateTaglines = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % taglinesQueue.length);
  };

  let intervalId; // Declare intervalId in the outer scope

  useEffect(() => {
    intervalId = setInterval(() => {
      setIsVisible(false); // Start fading out

      setTimeout(() => {
        rotateTaglines();
        setSelectedTagline(taglinesQueue[currentIndex]);
        setIsVisible(true); // Start fading in
      }, 500); // Adjust the delay between fading out and fading in as needed

    }, 3000); // 3000 milliseconds = 3 seconds

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex, taglinesQueue]);

  useEffect(() => {
    // Initialize the selected tagline when the component mounts
    setSelectedTagline(taglinesQueue[currentIndex]);
    setIsVisible(true); // Start with visibility set to true

    return () => {
      // Clear the interval when the component unmounts
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  return (
    <div className='about-header'>
      <p className="tagline-text">
        Hi, I'm Ian.
      </p>
      <p className={`tagline-description ${isVisible ? 'fade-in' : 'fade-out'}`}>
        {selectedTagline}
      </p>
      <img src={logo} alt="Circle Profile Picture" className='circle-photo'/>
    </div>
  );
}

export default Home;
