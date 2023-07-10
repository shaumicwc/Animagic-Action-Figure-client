import React from 'react';
import { Slide } from 'react-awesome-reveal';

const Testimonial = () => {
  return (
    <div>
      <Slide>
        <h1 className='text-5xl font-bold text-center m-10 uppercase'>Reviews from our Customers</h1>
      </Slide>

      <div className="m-10 grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-2xl p-6">
          <div className="mb-4">
            <img className="w-10 h-10 rounded-full mx-auto" src="https://publicdomainvectors.org/tn_img/female-user-icon.webp" alt="Emily Thompson" />
            <h3 className="text-lg font-semibold text-center mt-2">Emily Thompson</h3>
            <p className="text-gray-600 text-center">Action Figure Collector</p>
            <div className="flex justify-center mt-1 rating">
              <input type="radio" name="rating-1" className="mask mask-star-2 bg-red-600" />
              <input type="radio" name="rating-1" className="mask mask-star-2 bg-red-600" />
              <input type="radio" name="rating-1" className="mask mask-star-2 bg-red-600" />
              <input type="radio" name="rating-1" className="mask mask-star-2 bg-red-600" />
              <input type="radio" name="rating-1" className="mask mask-star-2 bg-red-600" />
            </div>
            <p className="text-gray-800 mt-4 p-5">
              "The action figures from this website are fantastic! The selection is extensive, covering various characters and series. The quality of the figures is top-notch, with great attention to detail. The customer service provided was excellent, ensuring a smooth shopping experience. I highly recommend this website to any action figure enthusiast."
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-2xl p-6">
          <div className="mb-4">
            <img className="w-10 h-10 rounded-full mx-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbfhgcaeJZpg_lS9NqX9vk2Lt5oO3_qnKzAtyzdj5b&s" alt="Alex Rodriguez" />
            <h3 className="text-lg font-semibold text-center mt-2">Alex Rodriguez</h3>
            <p className="text-gray-600 text-center">Action Figure Collector</p>
            <div className="flex justify-center mt-1 rating">
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-red-600" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-red-600" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-red-600" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-red-600" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-red-600" checked />
            </div>
            <p className="text-gray-800 mt-4 p-5">
              "This action figure website is my go-to place for all my collecting needs. The website interface is user-friendly, and the shipping is prompt. The quality of the action figures is exceptional, and the prices are competitive. The customer support team is responsive and helpful. I highly recommend this website to all action figure enthusiasts."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
