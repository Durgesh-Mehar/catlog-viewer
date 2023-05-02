import React, { useState, useEffect } from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";

const spanStyle = {
  padding: "10px",
  background: "#efefef",
  color: "#000000",
};

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "400px",
};


const slideImages = [
  {
    url: "https://wallpaperaccess.com/full/393735.jpg",
    deatils:
      "This course is for you. Whether you want to deepen your understanding of our human relationship with nature, find answers about your connection with plants, become a healer, or you’re ready to start a new personal and enriching path through ancestral knowledge, this course is for you. Blue Deer is here to guide you and provide you with a  You’ll learn from experienced practitioners with over 20 years of work with Plant Spirit Medicine and from guests speakers and Elders with a pool of knowledge that will help you deepen your understanding. For those of you who have been waiting for and inquiring about the Plant Spirit Medicine Healer Training course, Plant Spirit Medicine: Growing Awareness of Nature is the first step towards that journey. Please note that this introductory course is a prerequisite for subsequent levels. nurturing and transformative experience that will show you how wonderful and kind Mother Nature is with all beings, and ultimately, is a generous source of support to live a fulfilled life.",
  },
  {
    url: "https://c4.wallpaperflare.com/wallpaper/297/22/531/lake-blue-moonlight-moon-wallpaper-preview.jpg",
    deatils:
      "This course is for you. Whether you want to deepen your understanding of our human relationship with nature, find answers about your connection with plants, become a healer, You’ll learn from experienced practitioners with over 20 years of work with Plant Spirit Medicine and from guests speakers and Elders with a pool of knowledge that will help you deepen your understanding. For those of you who have been waiting for and inquiring about the Plant Spirit Medicine Healer Training course, Plant Spirit Medicine: Growing Awareness of Nature is the first step towards that journey. Please note that this introductory course is a prerequisite for subsequent levels. or you’re ready to start a new personal and enriching path through ancestral knowledge, this course is for you. Blue Deer is here to guide you and provide you with a nurturing and transformative experience that will show you how wonderful and kind Mother Nature is with all beings, and ultimately, is a generous source of support to live a fulfilled life.",
  },
  {
    url: "https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928_960_720.jpg ",
    deatils:
      "This course is for you. Whether you want You’ll learn from experienced practitioners with over 20 years of work with Plant Spirit Medicine and from guests speakers and Elders with a pool of knowledge that will help you deepen your understanding. For those of you who have been waiting for and inquiring about the Plant Spirit Medicine Healer Training course, Plant Spirit Medicine: Growing Awareness of Nature is the first step towards that journey. Please note that this introductory course is a prerequisite for subsequent levels. to deepen your understanding of our human relationship with nature, find answers about your connection with plants, become a healer, or you’re ready to start a new personal and enriching path through ancestral knowledge, this course is for you. Blue Deer is here to guide you and provide you with a nurturing and transformative experience that will show you how wonderful and kind Mother Nature is with all beings, and ultimately, is a generous source of support to live a fulfilled life.",
  },
  {
    url: "https://wallpapers.com/images/featured/2ygv7ssy2k0lxlzu.jpg",
    deatils:
      "This course is for you. Whether you want You’ll learn from experienced practitioners with over 20 years of work with Plant Spirit Medicine and from guests speakers and Elders with a pool of knowledge that will help you deepen your understanding. For those of you who have been waiting for and inquiring about the Plant Spirit Medicine Healer Training course, Plant Spirit Medicine: Growing Awareness of Nature is the first step towards that journey. Please note that this introductory course is a prerequisite for subsequent levels. to deepen your understanding of our human relationship with nature, find answers about your connection with plants, become a healer, or you’re ready to start a new personal and enriching path through ancestral knowledge, this course is for you. Blue Deer is here to guide you and provide you with a nurturing and transformative experience that will show you how wonderful and kind Mother Nature is with all beings, and ultimately, is a generous source of support to live a fulfilled life.",
  },
  
];

const App = () => {
  const [autoplay, setAutoplay] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    let intervalId;
    if (autoplay) {
      intervalId = setInterval(() => {
        setCurrentSlide((currentSlide + 1) % slideImages.length);
      }, 3000); // set the autoplay interval to 3 seconds
    }
    return () => clearInterval(intervalId);
  }, [autoplay, currentSlide]);

  

  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}
            ></div>
            <div style={spanStyle}>{slideImage.deatils}</div>
          </div>
        ))}
      </Slide>
      <div style={{textAlign:'center'}}><button style={{margin: '3%',padding:'1%', backgroundColor: 'greenyellow', width:'50%'}} onClick={() => setAutoplay(!autoplay)}>
        {autoplay ? "Start Autoplay" : "Stop Autoplay"}
      </button></div>
    </div>
  );
};

export default App;
