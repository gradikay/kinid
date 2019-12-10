import React, { Component } from 'react';
import { //Link 
} from 'react-router-dom';
import Footer from '../Component/Footer'
import img1 from '../images/2782405.jpg'
import img2 from '../images/21178.jpg'
import styles from '../css/home.module.css';



class Home extends Component {
    render() {
        return (
            <>
                
                {/* HEADER */}
                <header className={styles.Header}>
                    {/* Section */}
                    <div className={['row', styles.header_section ].join(' ')}>
                        {/* Title */}
                        <div className='column column-1'>
                            <h2>Register with Congo's #1 job site</h2>
                        </div>
                        {/* Search Input */}
                        <div className='column column-1'>
                            {/* Input */}
                            <input type='search' aria-label='search' placeholder='Job Title, Skills or Company' />
                            {/* Input dropdown*/}
                            <input type='search' aria-label='search' placeholder='City, Capital or Province' />
                            {/* Button */}
                            <button type='button'>Search Jobs</button>
                        </div>
                        {/* Paragraph */}
                        <div className='column column-1'>
                            <p>KinId works when talented, passionate people comes together.</p>
                        </div>                        
                    </div>
                    {/* Section */}
                    <div className={['row', styles.header_section].join(' ')}>
                        {/* Image */}
                        <div className='column column-2'>
                            <img src={img1} alt='Designed by Freepik' />
                        </div>
                        {/* Pagagraph */}
                        <div className='column column-2'>
                            <p>Welcome to your professional Community</p>
                        </div>
                    </div>
                </header>
                {/* MAIN */}
                <main className='Main'>
                    {/* Section */}
                    <div className={['row', styles.main_section].join(' ')}>
                        {/* Title */}
                        <div className='column column-2'>
                            <p>Post your job for millions of Congolese to see</p>
                        </div>
                        {/* Button */}
                        <div className='column column-5'>
                            <button type='button'>Post Job</button>
                        </div>
                    </div>
                    {/* Section */}
                    <div className={['row', styles.main_section].join(' ')}>
                        {/* How Can We Help */}
                        <div className='column column-1'>
                            {/* Title */}
                            <h3>How KinId can help</h3>
                            {/* Paragraph */}
                            <p>MAKING YOUR JOB SEARCH AND HIRING CANDIDATE EASIER</p>
                        </div>
                        {/* Salary Tools */}
                        <div className='column column-3'>
                            {/* Title */}
                            <h4>Salary Tools</h4>
                            {/* Description */}
                            <p>See how your salary compares to others with
                                the same job title in your area. Not only can you compare your
                                salary, but you can also see what skills you are missin to
                                earn more money.</p> <br />
                            {/* Link */}
                            <a href='#'>Learn More</a>
                        </div>
                        {/* Quick Apply */}
                        <div className='column column-3'>
                            {/* Title */}
                            <h4>Quick Apply</h4>
                            {/* Description */}
                            <p>Easily apply to multiple jobs with one click! Quick Apply shows you recommended jobs based off your most recent search and allows you to apply to 25+ jobs in a matter of seconds!</p>
                        </div>
                        {/* Job Alert Emails */}
                        <div className='column column-3'>
                            {/* Title */}
                            <h4>Job Alerts Emails</h4>
                            {/* Description */}
                            <p>Keep track of positions that you're interested in by signing up for job alert emails. You'll be notifed via email when new jobs are posted in that search.</p>
                        </div>
                    </div>
                    {/* Section */}
                    <div className={['row', styles.main_section].join(' ')}>
                        {/* Trending Searches */}
                        <div className='column column-1'>
                            {/* Titles */}
                            <h3>Trending Searches</h3>
                            {/* paragraph */}
                            <p>DON'T KNOW WHERE TO START?</p>
                        </div>
                        {/* List */}
                        <div className='column column-2'>
                            <ul>
                                <li>Sales</li>
                                <li>Engineering</li>
                                <li>Business Development</li>
                                <li>Healthcare Service</li>
                                <li>Marketing</li>
                                <li>Information Technology</li>
                                <li>Administrative</li>
                                <li>Human Resources</li>
                                <li>Government</li>
                                <li>Operation</li>
                            </ul>
                        </div>
                    </div>
                    {/* Section */}
                    <div className={['row', styles.main_section].join(' ')}>
                        {/* Employer */}
                        <div className='column column-2' >
                            {/* Title */}
                            <h3>Employers</h3>
                            {/* Description */}
                            <h4>Looking to Post a Job?</h4>
                            {/* Paragraph */}
                            <p>We have end-to-end solution that can keep up with you and your
                                standards.</p>
                            {/* Button */}
                            <button type='button'>Post a Job</button>
                        </div>
                        {/* Image */}
                        <div className='column column-2' >
                            <img src={img2} alt='Designed by katemangostar'/>
                        </div>
                    </div>
                </main>
                {/* FOOTER - Component */}
                <Footer />
                
            </>
            );
    }
}

export default Home;