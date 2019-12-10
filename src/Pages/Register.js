import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Footer from '../Component/Footer'
import styles from '../css/signin.module.css'
import img1 from '../images/23260.jpg'

class Register extends Component {
    render() {
        return (
            <>
                {/* REGISTER */}
                <section className={styles.Section}>
                    {/* SECTION ROW */}
                    <div className={['row', styles.section_divider].join(' ')}>
                        {/* Section */}
                        <div className='column column-2'>
                            {/* Title */}
                            <h2>Register With KinId</h2>
                            {/* Paragraph */}
                            <p>Registration for employer, staffing agency, or job seeker</p>
                            {/* FORM */}
                            <form action='/SignIn.js' method='post'>
                                <fieldset>
                                    {/* Title */}
                                    <legend>Registration</legend>
                                    {/* Email LABEL */}
                                    <label>Email
                                        <span className={styles.red}>*</span>
                                    </label> <br />
                                    {/* Email INPUT */}
                                    <input type='text' name='email' maxLength='30' placeholder='Email or User Name' required='required' autoFocus='autofocus' /> <br />
                                    {/* Password LABEL */}
                                    <label>Password
                                        <span className={styles.red}>*</span>
                                    </label> <br />
                                    {/* Password INPUT */}
                                    <input type='password' name='password' placeholder='Enter Password' required='required' /> <br />
                                    {/* Submit */}
                                    <p>In order to <strong>protect your account</strong>, make sure your password:</p>
                                    <ul>
                                        <li>Is longer than 10 characters</li>
                                        <li>Does not match or signigicantly contain your username, e.g. do not use 'username123'.</li>
                                        <li>Is not a member of this  <a href='https://www.npmjs.com/signup/common-passwords'>list of passwords</a></li>
                                        <li>Is not a member of the <a href='https://www.npmjs.com/signup/common-passwords'>have I been Pwned</a> breach database</li>
                                    </ul>
                                    <label><small>Agree to the End User License Agreement and the Privacy Policy</small></label>
                                    <input type='checkbox' />
                                    <input type='submit' value='Create an Account' />
                                </fieldset>
                            </form>
                            {/* Sing In */}
                            <p>Already on KinId? <Link to='/signin'>Sign In</Link></p>
                        </div>
                        {/* Section */}
                        <div className='column column-2'>
                            {/* Image */}
                            <img src={img1} alt='Designed by Freepik' />
                        </div>
                    </div>
                </section>
                {/* FOOTER */}
                <Footer />
            </>
        );
    }

}
export default Register;