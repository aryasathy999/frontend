import React,{ useState,useRef } from 'react';
import flower1 from './assets/flower1.avif';
import flower2 from './assets/flower2.jpg';
import flower3 from './assets/flower3.jpeg';


function App() {
 const galleryRef=useRef(null); //Ref to reference the gallery container
 //Function to scroll the next image
 const scrollNext = () => {
  galleryRef.current.scrollBy({left: 300, behavior: 'smooth'}); //Scroll horizontally by 300 pixels
 };

 //Funtion to scroll to the previous image
 const scrollPrev = () => {
  galleryRef.current.scrollBy({left: -300, behavior: 'smooth'}); //Scroll left by 300px
 };

 return(
  <div style={{textAlign: 'center', marginTop: '50px'}}>
    <h1>Image Gallery</h1>
    {/* Image Gallery Container */}
    <div 
    ref={galleryRef}
    style={{
      display: 'flex',
      overflow: 'scroll',
      gap: '10px',
      padding: '10px',
      maxWidth: '600px',
      margin: 'auto',
    }}>
      <img src={flower1} alt='Image 1' style={{width: '300px', height: '200px'}} />
      <img src={flower2} alt='Image 2' style={{width: '300px', height: '200px'}} />
      <img src={flower3} alt='Image 3' style={{width: '300px', height: '200px'}} />
      <img src={flower1} alt='Image 1' style={{width: '300px', height: '200px'}} />
      <img src={flower2} alt='Image 2' style={{width: '300px', height: '200px'}} />
    </div>
    <button onClick={scrollPrev} style={{ padding:'10px 20px', backgroundColor: '#28a745',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      marginRight: '25px'
     }}>
      PrevImage
     </button>
     <button onClick={scrollNext} style={{ padding:'10px 20px', backgroundColor: '#28a745',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer'
     }}>
      NextImage
     </button>
  </div>
 )
}

export default App;
