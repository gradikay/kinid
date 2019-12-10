// ***************** FIND NAVIGATION IN THE App COMPONENT ************************

//import React, { Component } from 'react';
//import {
//    BrowserRouter as Router,
//    Switch,
//    Route,
//    Link
//} from 'react-router-dom';
//import logo from '../images/logo.png'
//import Home from '../Pages/Home'
//import SignIn from '../Pages/SignIn'
////import styles from '../css/home.module.css';


//class NavBar extends Component {
//    render() {
//        return (
//            <>
//                {/* ROUTER */}
//                <Router>
//                    {/* NAVIGATION */}
//                    <nav>
//                        {/* NAVBAR */}
//                        <div className='row'>
//                            {/* WEBSITE NAME */}
//                            <div className='column column-5'>
//                                {/* Title */}
//                                <span className='logo'><Link to='/'><img src={logo} alt='Kinid Logo' /></Link></span>
//                                <h1>KINID</h1>
//                            </div>
//                            {/* LINKS [Jobs, Upload/Build Resume]*/}
//                            <div className='column column-2'>
//                                <a href="#">Jobs</a>
//                                <a href="#">Upload/Build Resume</a>
//                                <a href="#">Career Development &amp; Learning</a>
//                            </div>
//                            {/* LINKS [Sign In, Register, Post Jobs] */}
//                            <div className='column column-4'>
//                                <Link to='/SignIn'>Sign In</Link>
//                                <a href="#">Register</a>
//                                <a href="#">Post Jobs</a>
//                            </div>
//                        </div>
//                        {/* SWITCH */}
//                        <Switch>
//                            <Route exact path='/' component={Home} />
//                            <Route path='/SignIn' component={SignIn} />
//                        </Switch>
//                    </nav>
//                </Router>
//            </>
//            );
//    }
//}

//export default NavBar;