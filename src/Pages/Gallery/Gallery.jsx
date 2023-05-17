import React from 'react';

const Gallery = () => {
    return (
       <div className='my-10 px-10'>
        <p className='font-bold text-3xl text-center my-5'>Toy Gallery</p>
         <div className='grid md:grid-cols-4 grid-cols-1 gap-4 '>
            
            <img src="https://i.ibb.co/1z8D0sC/patryk-norman-BBQOQFk-OICg-unsplash.jpg" alt="patryk-norman-BBQOQFk-OICg-unsplash" border="0" />
            <img src="https://i.ibb.co/mtwHpQm/marcos-ferreira-QYBVbw-JYx-NA-unsplash.jpg" alt="marcos-ferreira-QYBVbw-JYx-NA-unsplash" border="0" />
            <img src="https://i.ibb.co/L5dWMGR/patryk-norman-ZR-AL5r0-KZA-unsplash.jpg" alt="patryk-norman-ZR-AL5r0-KZA-unsplash" border="0" />
            <img src="https://i.ibb.co/SchNg7x/aaron-cass-GJuh-DRb-Mj7g-unsplash.jpg" alt="aaron-cass-GJuh-DRb-Mj7g-unsplash" border="0"></img>
        </div>
       </div>
    );
};

export default Gallery;