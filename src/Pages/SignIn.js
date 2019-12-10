import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Component/Footer'
import styles from '../css/signin.module.css'
import img1 from '../images/congo.png'

class SignIn extends Component {
    render() {
        return (
            <>
                {/* SIGN IN  */}
                <section className={styles.Section}>
                    {/* SECTION ROW */}
                    <div className={['row', styles.section_divider].join(' ')}>
                        {/* Section */}
                        <div className='column column-2'>
                            {/* Title */}
                            <h2>Welcome Back</h2>
                            {/* Paragraph */}
                            <p>Don't miss your next opportunity. Sign in to stay updated on your profesional world.</p>
                            {/* FORM */}
                            <form action='/SignIn.js' method='post'>
                                <fieldset>
                                    {/* Title */}
                                    <legend>Sign In Creditential</legend>
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
                                <input type='submit' value='Sign In' />
                                </fieldset>
                            </form>
                            {/* Forgot Password */}
                            <h3>Forgot Password?</h3>
                            {/* Register */}
                            <p>New to KinId? <Link to='/register'>Join Now</Link></p>
                        </div>
                        {/* Section */}
                        <div className='column column-2'>
                            {/* Image */}
                            <img src={img1} alt='Congo - Designed by Gradi kayamba' />
                        </div>
                    </div>
                </section>
            {/* FOOTER */}
            <Footer />
            </>
            );
    }

}
export default SignIn;