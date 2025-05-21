import React from 'react';
import Banner from '../Components/Banner';
import QuickGigServices from './QuickGigServices';
import QuickGigReviews from './QuickGigReviews';
import FeaturedTasks from './FeaturedTasks';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedTasks></FeaturedTasks>
            <QuickGigServices></QuickGigServices>
            <QuickGigReviews></QuickGigReviews>
        </div>
    );
};

export default Home;