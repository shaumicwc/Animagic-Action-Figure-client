import React from 'react';

const Accordion = () => {
  return (
    <div className="mx-32 m-10 px-20">
        <p className='font-bold text-5xl text-center'>FAQ</p>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="checkbox" id="accordion-1" />
        <div className="collapse-title shadow-2xl  text-xl font-medium">
          What types of action figures are available on the website?
        </div>
        <div className="collapse-content">
          <p>
            The website offers a wide range of action figures, including superheroes, movie characters, TV show characters, anime characters, and more. You can find action figures from popular franchises like Marvel, DC Comics, Star Wars, and Transformers, among others.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="checkbox" id="accordion-2" />
        <div className="collapse-title shadow-2xl text-xl font-medium">
          Are the action figures authentic and of high quality?
        </div>
        <div className="collapse-content">
          <p>
            Yes, all the action figures available on the website are authentic and sourced from reputable manufacturers. The website ensures the quality and authenticity of the products, so you can trust that you're purchasing genuine and high-quality action figures.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="checkbox" id="accordion-3" />
        <div className="collapse-title shadow-2xl  text-xl font-medium">
          Can I pre-order upcoming action figures?
        </div>
        <div className="collapse-content">
          <p>
            Yes, the website offers the option to pre-order upcoming action figures. This allows you to secure your desired figures before they are released, ensuring that you don't miss out on popular or limited-edition collectibles. Pre-ordering also provides an opportunity to be among the first to receive the newly released figures.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
