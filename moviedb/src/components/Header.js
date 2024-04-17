import React from 'react';
import { Link } from 'react-router-dom';
import moviestuff from '../images/moviestuff.png';
import '../Headerstyle.css';


const Header = () => {
    return (
        <div className='navbar'>
           <img src={moviestuff} alt='Movie Database' className= "logo" /> 
           <ul>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/OutNow">Out Now</Link></li>
            <li><Link to="/ComingSoon">Coming Soon</Link></li>
            <li><Link to="/Favorites">Favorites</Link></li>
            <li><Link to="/Search">Search</Link></li>
           </ul>
        </div>
    );
}

export default Header;
