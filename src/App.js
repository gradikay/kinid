import React, { Component } from 'react';
import {
    Link,
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import './css/index.css'
import img1 from './images/logo.png'
import Home from './Pages/Home'
import About from './Pages/About'
import SignIn from './Pages/SignIn'
import Jobs from './Pages/Jobs'
import Register from './Pages/Register';
import UserAgreement from './Pages/UserAgreement'
import PageNotFound from './Pages/PageNotFound'


class App extends Component {
    render() {
        return (
            <Router>
                <nav>
                    <div class="row">
                        <div class="column column-5">
                            <span class="logo">
                                <Link to="/">
                                    <img src={img1} alt="Kinid Logo" />
                                </Link>
                            </span>
                            <h1>KINID</h1>
                        </div>
                        <div class="column column-2">
                            <Link to="/jobs">Jobs</Link>
                            <Link to="/signin">Upload/Build Resume</Link>
                            <Link to="#">Career Development &amp; Learning</Link>
                        </div>
                        <div class="column column-4">
                            <Link to="/signin">Sign In</Link>
                            <Link to="/register">Register</Link>
                            <Link to="/signin">Post Jobs</Link>
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
