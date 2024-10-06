import Banner from '@/components/features/home/Banner';
import FeaturedIn from '@/components/features/home/FeaturedIn';
import HowItWorks from '@/components/features/home/HowItWork';
import React from 'react';

const Home = () => {

    return (
        <div className='home'>
            <div className="container">
                <Banner />
                <FeaturedIn />
                <HowItWorks />
            </div>
        </div>
    );
};

export default Home;
