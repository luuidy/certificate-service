import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar" style={{display: 'flex', justifyContent:'center'}}>
            <Link className="navbar-brand" to="/">Home</Link>
            <Link className="navbar-brand" to="/certificate">Get Certificate</Link>
        </nav>
    )
}

export default Navbar
