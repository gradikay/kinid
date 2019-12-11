import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';
//import styles from '../css/home.module.css';
import logo from '../images/logo.png'


class Footer extends Component {
    render() {
        return (            
            <footer>
                {/* Footer Item */}
                <div className='row'>
                    {/* Website Name */}
                    <div className='column column-5 line' title='logo'>
                        <img src={logo} alt='KinId Logo' />
                    </div>
                    {/* General List */}
                    <div className='column column-5 line'>
                        {/* Title */}
                        <h4>General</h4>
                        {/* List */}
                        <ul>
                            <li><Link to='/register'>Sign Up</Link></li>
                            <li>Help Center</li>
                            <li><Link to='/about'>About</Link></li>
                            <li>Press</li>
                            <li>Blog</li>
                            <li>Careers</li>
                            <li>Developers</li>
                        </ul>
                    </div>
                    {/* Browse KINID */}
                    <div className='column column-5 line'>
                        {/* Title */}
                        <h4>Browse KinId</h4>
                        {/* List */}
                        <ul>
                            <li>Learning</li>
                            <li>Jobs</li>
                            <li>Salary</li>
                            <li>Mobile</li>
                            <li>ProFinder</li>
                        </ul>
                    </div>
                    {/* Busness Solution */}
                    <div className='column column-5 line'>
                        {/* Title */}
                        <h4>Busness Solution</h4>
                        {/* List */}
                        <ul>
                            <li>Talent</li>
                            <li>Marketing</li>
                            <li>Sales</li>
                            <li>Learning</li>
                        </ul>
                    </div>
                    {/* Directories */}
                    <div className='column column-5 line'>
                        {/* Title */}
                        <h4>Directories</h4>
                        {/* List */}
                        <ul>
                            <li>Members</li>
                            <li>Jobs</li>
                            <li>Companies</li>
                            <li>Salaries</li>
                            <li>Universities</li>
                            <li>Featured</li>
                            <li>Learing</li>
                        </ul>
                    </div>
                    {/* Copyright */}
                    <div className='column column-1'>
                        {/* List */}
                        <p>KINID &copy; |
                            <Link to='/about'>About</Link> |
                            <Link to='/useragreement'>User Agreement</Link> |
                            <Link to='/useragreement#obligations'>Obligations</Link> |
                            <Link to='/useragreement#rights'>Rights &amp; Limits</Link> |
                            <Link to='/useragreement#complaints'>Copyright Policy</Link> |
                            <Link to='/useragreement#how'>Contact Us</Link> |
                            <Link to='/useragreement#general'>General Terms</Link> |
                            <Link to='/useragreement#kinid'>Community Guidelines</Link> |
                            <a href='#1'>Language</a>
                        </p>
                    </div>
                </div>
            </footer>
            );
    }
}

export default Footer;