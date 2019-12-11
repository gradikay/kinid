import React, { Component } from 'react';
import {
    Link,
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import './css/index.css'
import img1 from './images/logo.png'
import img2 from './images/scrum.png'
import Home from './Pages/Home'
import About from './Pages/About'
import SignIn from './Pages/SignIn'
import Jobs from './Pages/Jobs'
import Register from './Pages/Register';
import UserAgreement from './Pages/UserAgreement'
import PageNotFound from './Pages/PageNotFound'


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        }        
    }

    humberger = () => {
        this.setState(prevState => ({
            open: !prevState.open
        }));
    }

    render() {
        return (
            <Router>
                <nav>
                    <div className={["row row-sd"].join(' ')}>
                        <div className="column column-5 logo_section">
                            <span className="logo">
                                <Link to="/" className='logo'>
                                    <img src={img1} alt="Kinid Logo" />
                                    <span className='humberger' onClick={this.humberger} ><img src={img2} alt="hamburger menu" /></span>
                                </Link>
                            </span>
                            <h1>KINID</h1>
                        </div>
                        <div className="humberger_content" style={this.state.open ? { display: 'contents' } : { display: 'none' }}>
                            <div className="column column-2">
                                <Link to="/jobs">Jobs</Link>
                                <Link to="/signin">Upload/Build Resume</Link>
                                <Link to="#">Career Development &amp; Learning</Link>
                            </div>
                            <div className="column column-4">
                                <Link to="/signin">Sign In</Link>
                                <Link to="/register">Register</Link>
                                <Link to="/signin">Post Jobs</Link>
                            </div>
                        </div>
                    </div>
                </nav>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/jobs' component={Jobs} />
                    <Route path='/register' component={Register} />
                    <Route path='/signin' component={SignIn} />
                    <Route path='/UserAgreement' component={UserAgreement} />
                    <Route component={PageNotFound} />

                </Switch>
            </Router>

        );
    }
}

export default App;
