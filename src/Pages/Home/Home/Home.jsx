import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../../Gallery/Gallery';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import PreOrder from '../PreOrder/PreOrder';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Gallery/>
            <ShopByCategory/>
            <PreOrder/>
           
        </div>
    );
};

export default Home;