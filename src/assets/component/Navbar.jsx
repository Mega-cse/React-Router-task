import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (     
          
            <nav className="nav-bar ">
                <Link to='/'>All</Link>
                <Link to='/fsd'>FullStackDevelopment</Link>
                <Link to='/ds'>Datascience</Link>
                <Link to='/cs'>Cybersecurity</Link>
                <Link to='/carrer'>Carrer</Link>
                
                
               
            </nav>
            
    );
};

export default Navbar;