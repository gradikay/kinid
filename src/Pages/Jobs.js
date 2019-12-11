import React, { Component } from 'react'
// STYLING
import styles from '../css/jobs.module.css'
// IMAGES
import img1 from '../images/logo.png'
// PAGES
import Footer from '../Component/Footer'

class Jobs extends Component {
    render() {
        return (
            <>
                {/* HEADER */}
                <header className={[styles.Header].join(' ')}>
                    {/* FILTERS */}
                    <div className='row'>
                        {/* Section */}
                        <div className='column column-1'>
                            {/* Search */}
                            <input type='search' name='job search' aria-label='search' placeholder='Job Title, Skills, or Company' />
                            {/* Button - Search */}
                            <button type='button'><small>Search Jobs</small></button> |
                            {/* Filter - Button - Distance */}
                            <button type='button'><small>Distance</small></button>
                            {/* Filter - Button - Job Type */}
                            <button type='button'><small>Job Type</small></button>
                            {/* Filter - Button - Minimum Salary */}
                            <button type='button'><small>Minimum Salary</small></button>
                            {/* Filter - Button - Since Last Visit */}
                            <button type='button'><small>Since Last Visit</small></button> | 
                            {/* Clear All Button */}
                            <button type='button'><small>Clear All</small></button> | 
                            {/* All Found Jobs */}
                            <span><small> 10 jobs near Kinshasa</small></span>                           
                        </div>
                    </div>
                </header>
                {/* ASIDE */}
                <aside className={[styles.Aside].join(' ')}>
                    {/* Jobs */}
                    <div className='row'>
                        {/* Header */}
                        <div className={['column column-1', styles.aside_content].join(' ')}>
                            {/* Description */}
                            <h3>More Than 5,000 Jobs Found</h3> <hr />
                            {/* Sorting */}
                            <p>Sort by : <a href='#1' >Relevancy | Date</a> </p>
                            {/* Single Job */}
                            <section>
                                {/* Image */}
                                <div>
                                    <img src={img1} alt='imagesss' />
                                </div>
                                {/* Excerpt */}
                                <div>
                                    {/* Date */}
                                    <h5>Today</h5>
                                    {/* Title */}
                                    <h2>Director Of Operations</h2>
                                    {/* Location */}
                                    <h3>Maluku, Kinshasa | Full Time</h3>
                                    {/* Price */}
                                    <h4>$90,000 - $128,000/year</h4>
                                    {/* Apply */}
                                    <h5>Simply Apply</h5>
                                </div>
                            </section>
                            {/* Single Job */}
                            <section>
                                {/* Image */}
                                <div>
                                    <img src={img1} alt='#' />
                                </div>
                                {/* Excerpt */}
                                <div>
                                    {/* Date */}
                                    <h5>Today</h5>
                                    {/* Title */}
                                    <h2>Director Of Operations</h2>
                                    {/* Location */}
                                    <h3>Maluku, Kinshasa | Full Time</h3>
                                    {/* Price */}
                                    <h4>$90,000 - $128,000/year</h4>
                                    {/* Apply */}
                                    <h5>Simply Apply</h5>
                                </div>
                            </section>
                            {/* Single Job */}
                            <section>
                                {/* Image */}
                                <div>
                                    <img src={img1} alt='#' />
                                </div>
                                {/* Excerpt */}
                                <div>
                                    {/* Date */}
                                    <h5>Today</h5>
                                    {/* Title */}
                                    <h2>Director Of Operations</h2>
                                    {/* Location */}
                                    <h3>Maluku, Kinshasa | Full Time</h3>
                                    {/* Price */}
                                    <h4>$90,000 - $128,000/year</h4>
                                    {/* Apply */}
                                    <h5>Simply Apply</h5>
                                </div>
                            </section>
                            {/* Single Job */}
                            <section>
                                {/* Image */}
                                <div>
                                    <img src={img1} alt='#' />
                                </div>
                                {/* Excerpt */}
                                <div>
                                    {/* Date */}
                                    <h5>Today</h5>
                                    {/* Title */}
                                    <h2>Director Of Operations</h2>
                                    {/* Location */}
                                    <h3>Maluku, Kinshasa | Full Time</h3>
                                    {/* Price */}
                                    <h4>$90,000 - $128,000/year</h4>
                                    {/* Apply */}
                                    <h5>Simply Apply</h5>
                                </div>
                            </section>
                        </div>
                    </div>

                </aside>
                {/* MAIN */}
                <main className={[styles.Main].join(' ')}>
                    <div className='row'>
                        <div className={['column column-2', styles.main_content].join(' ')}>
                            {/* Title */}
                            <div className={styles.container}>
                                <div>
                                    {/* Title */}
                                    <h2>Director Of Operations</h2>
                                    {/* Location */}
                                    <h3>Maluku, Kinshasa | Full Time</h3>
                                    {/* Price */}
                                    <h4>$90,000 - $128,000/year</h4>
                                    {/* Apply */}
                                    <button type='button'>Simply Apply</button>
                                </div>
                            </div>
                        </div>
                        <div className={['column column-2', styles.main_content].join(' ')}>
                            <div className={styles.container}>
                                <h4>Location</h4>
                                <h4>Salary Details</h4>
                                <p>This salary was provided in the Job Posting.</p>
                                <h5>$90,000 - $128,000 <br /> <small>yearly Salary</small></h5>
                            </div>
                        </div>
                        <div className={['column column-1', styles.main_content].join(' ')}>
                            <div className={styles.container}>
                            <h3>Job Details</h3>
                            <p>Our client is looking for a Director of Operations. </p>
                            <h4>Job Summary</h4>
                            <p>Lead the implementation of operational strategies and objectives across multiple revenue generating departments.  Understand each product and manage improvement of operational efficiency.  Exceed the product delivery of overall customer satisfaction based on established production indicators.  Consistently challenge each aspect of the operational process to improve product margin.  Meet with Customers and Vendors to consistently improve relations and ensure their expectations.  Work closely with finance and technology to improve product operations and gross margins and manage an expense budget to company’s expected variance each month. Research, analyze, validate and document effectiveness of existing operational business processes and develop strategies for meeting Company goals and objectives.</p>
                            <h4>Job Description</h4>
                            <h3>Job Details</h3>
                            <ul>
                                <li>Manage Operation staffing, supervision, scheduling, development, evaluation, and performance</li>
                                <li>Manage Operation staffing, supervision, scheduling, development, evaluation, and performance</li>
                                <li>Manage Operation staffing, supervision, scheduling, development, evaluation, and performance</li>
                                <li>Manage Operation staffing, supervision, scheduling, development, evaluation, and performance</li>
                                <li>Manage Operation staffing, supervision, scheduling, development, evaluation, and performance</li>
                                <li>Manage Operation staffing, supervision, scheduling, development, evaluation, and performance</li>
                                <li>Manage Operation staffing, supervision, scheduling, development, evaluation, and performance</li>
                            </ul>
                            <h3>Job Requirement</h3>
                            <ul>
                                <li>Manage Operation staffing, supervision, scheduling, development, evaluation, and performance</li>
                                <li>Manage Operation staffing, supervision, scheduling, development, evaluation, and performance</li>
                                <li>Manage Operation staffing, supervision, scheduling, development, evaluation, and performance</li>
                                <li>Manage Operation staffing, supervision, scheduling, development, evaluation, and performance</li>
                                <li>Manage Operation staffing, supervision, scheduling, development, evaluation, and performance</li>
                                <li>Manage Operation staffing, supervision, scheduling, development, evaluation, and performance</li>
                                <li>Manage Operation staffing, supervision, scheduling, development, evaluation, and performance</li>
                            </ul>
                        </div>
                        
                        </div>
                    </div>
                        
                </main>
                {/* FOOTER */}
                <Footer />
            </>
            );
    }
}

export default Jobs;