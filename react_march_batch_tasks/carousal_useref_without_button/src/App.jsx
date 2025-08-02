import React,{ useRef,useEffect, useState } from 'react';
import flower1 from './assets/flower1.avif';
import flower2 from './assets/flower2.jpg';
import flower3 from './assets/flower3.jpeg';

function App() {
  const [index, setIndex] = useState(0) //State to track the current image index
  const images=[flower1,flower2,flower3,flower1];
  const carouselRef=useRef(null); //Ref to reference the image container
  //Function to got to the next image
  const nextImage = () => {
    setIndex(index + 1); //Increment index, and reset to 0 when reaching the end
    if(index == images.length - 1)
    {
        setIndex(0);
    }
  };
  //Automatically change the image every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextImage, 3000); //Change the image every 5 seconds
  },[index]);
   return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
    <h1>Image Carousel</h1>
    {/* Carousel container */}
    <div
    ref={carouselRef}
    style={{
    width: '600px',
    height: '300px',
    overflow: 'hidden',
    margin: 'auto',
    borderRadius: '10px',
    }}
    >
    <img
    src={images[index]}
    alt={`Image ${index + 1}`}
    style={{
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'opacity 1s ease-in-out', // Smooth transition between images
    }}
    />
    </div>
    </div>
    );
    }

export default App;
