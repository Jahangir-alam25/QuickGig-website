import React from 'react';
import Banner from '../Components/Banner';
import QuickGigServices from './QuickGigServices';
import QuickGigReviews from './QuickGigReviews';
import FeaturedTasks from './FeaturedTasks';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div className='dark:bg-gray-800 dark:text-white bg-amber-50'>
            <Helmet>
                <title>Home - QuickGig</title>
            </Helmet>
            <Banner></Banner>
            <FeaturedTasks></FeaturedTasks>
            <QuickGigServices></QuickGigServices>
            <QuickGigReviews></QuickGigReviews>
        </div>
    );
};

export default Home;