// import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../../Gallery/Gallery';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import PreOrder from '../PreOrder/PreOrder';
import BoxSet from '../BoxSet/BoxSet';
import useTitle from '../../../hooks/useTitle';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner/>
            <Gallery/>
            <ShopByCategory/>
            <PreOrder/>
            <BoxSet/>
           
        </div>
    );
};

export default Home;