import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import { FiArrowRight } from 'react-icons/fi';
import '../Homestyle.css';
import home_banner_background from '../images/home_banner_background.png';
import directorCut from '../images/directorCut.png';

const Home = () => {
    return (
        <div className='home-container'>
            <div className='home-banner-container'>
                <div className='home-bannerImage-container'>
                    <img src={home_banner_background} alt="" />
                </div>
                <div className='home-text-section'>
                    <h1 className='primary-heading'>
                        The Movie Database!
                    </h1>
                    <p className='primary-text'>
                        Discover what movies are currently in theaters, which movies are coming soon to theaters, and even search for an old classic film and save it to watch for later!
                    </p>
                    {/* Use Link component to navigate to search page */}
                    <Link to="/search" className='secondary-button'>
                        Browse Now <FiArrowRight />
                    </Link>
                </div>
                <div className='home-image-container'>
                    <img src={directorCut} alt='' />
                </div>
            </div>
        </div>
    );
}

export default Home;
