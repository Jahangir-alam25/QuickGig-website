import React from 'react';
import Banner from '../Components/Banner';
import QuickGigServices from './QuickGigServices';
import QuickGigReviews from './QuickGigReviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <QuickGigServices></QuickGigServices>
            <QuickGigReviews></QuickGigReviews>
        </div>
    );
};

export default Home;