import React from 'react';
import Banner from '../Components/Banner';
import QuickGigServices from './QuickGigServices';
import QuickGigReviews from './QuickGigReviews';
import FeaturedTasks from './FeaturedTasks';
import { Helmet } from 'react-helmet-async';
import TopCategories from './TopCategories';
import FreelancerSearchFilter from './FreelancerSearchFilter';
import LatestBlogSection from './LatestBlogSection';

const Home = () => {
    return (
        <div className='dark:bg-gray-800 dark:text-white bg-amber-50'>
            <Helmet>
                <title>Home - QuickGig</title>
            </Helmet>
          <div className=''>
              <Banner></Banner>
            <FeaturedTasks></FeaturedTasks>
            <TopCategories></TopCategories>
            <FreelancerSearchFilter></FreelancerSearchFilter>
            <QuickGigServices></QuickGigServices>
            <QuickGigReviews></QuickGigReviews>
            <LatestBlogSection></LatestBlogSection>
          </div>
        </div>
    );
};

export default Home;