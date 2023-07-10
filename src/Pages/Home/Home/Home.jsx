import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../../Gallery/Gallery';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import PreOrder from '../PreOrder/PreOrder';
import BoxSet from '../BoxSet/BoxSet';
import useTitle from '../../../hooks/useTitle';
import Testimonial from '../Testimonial/Testimonial';
import Accordion from '../Accordion/Accordion';


const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner/>
            <Gallery/>
            <ShopByCategory/>
            <PreOrder/>
            <BoxSet/>
            <Testimonial/>
            <Accordion/>
           
        </div>
    );
};

export default Home;