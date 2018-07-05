import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return <div>
        <h1>Greg's Golf App</h1>
        <ul>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/newcourse'>Add New Course</Link></li>
        </ul>
    </div>
}

export default NavBar;