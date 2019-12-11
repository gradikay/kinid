import React, { Component } from 'react'
//import { Link } from 'react-router-dom'
import Footer from '../Component/Footer'
import styles from '../css/about.module.css'
import img1 from '../images/congo.png'
import GoogleMap from 'google-map-react'

// Loading Marker
const Map = ({ text }) => <div className={styles.marker}>{text}</div>;
// Kinshasa Map
const Kinshasa = {
    zoom: 11,
    center: [-4.4013005, 15.2527037]
}
// Atlanta Map
const Atlanta = {
    zoom: 11,
    center: [33.7511826, -84.4005043]
}
// South Africa Map
const SouthAfrica = {
    zoom: 11,
    center: [-26.2001471, 28.0185656]
}
// France Map
const France = {
    zoom: 11,
    center: [48.8416522, 2.2648589]
}

class About extends Component {
    render() {
        return (
            <>
                {/* About */}
                <section className={styles.Section_about} title='Background Image by brgfx'>
                    {/*  About KINID */}
                    <div className='row'>
                        {/*  Overlay */}
                        <div className={[styles.overlay].join(' ')}></div>
                        {/* Section */}
                        <div className={['column column-2', styles.about_content].join(' ')}>
                            {/*  Title */}
                            <h2>About KinId</h2>
                            {/*  Sentence */}
                            <p><strong>KinId</strong> is positioning itself to be at the forefront of innovation when it comes to using data and technology to evolve the human capital management space, with solutions that help employers find, hire and manage great people.</p>
                        </div>
                    </div>
                </section>
                {/*  Mission */}
                <section className={styles.Section_mission}>
                    {/*  Mission Statment */}
                    <div className='row'>
                        {/*  Section */}
                        <div className={['column column-2 line', styles.section].join(' ')}>
                            {/*  Title */}
                            <h2>Mission Statement</h2>
                            {/*  Statement */}
                            <p>It is the core of our business and the guiding principle of our people, making <strong>KinId</strong> a truly unique place to work. A place where you can say that at the end of the day, you make a difference.</p>
                        </div>
                        {/*  Section */}
                        <div className={['column column-2', styles.section].join(' ')}>
                            {/*  Title */}
                            <h2>Empowering Worldwide Congolese Employment</h2>
                            {/*  Statement */}
                            <p>Our mission is empowering employment. We are striving to organize all the world's human capital data and make it meaningful for society.</p>
                        </div>
                    </div>
                </section>
                {/* What We Do */}
                <section className={styles.Section_whatWeDo}>
                    {/*  What We Do */}
                    <div className='row'>
                        {/*  Overlay */}
                        <div className={[styles.overlay].join(' ')}></div>
                        {/* Section */}
                        <div className={['column column-2', styles.about_content].join(' ')}>
                            {/*  Title */}
                            <h2>What We Do</h2>
                            {/*  Sentence */}
                            <p>Officially, we are a global, end-to-end human capital solutions company. But, that just means that we combine the best in advertising, software and services to help Congolese companies find, hire and manage great talent. As an industry leader, we work with companies big and small, providing cutting-edge solutions for everything from recruiting to employment screening and human capital management.</p>
                        </div>
                    </div>
                </section>
                {/*  Our Leaders */}
                <section className={styles.Section_leader}>
                    {/*  Leaders */}
                    <div className='row'>
                        {/*  Section */}
                        <div className={['column column-1', styles.section].join(' ')}>
                            {/*  Title */}
                            <h2>Our Leaders</h2>
                            {/*  Paragraph */}
                            <p>Championing Change Across Our Company</p>
                        </div>
                        {/*  Card */}
                        <div title='Glody Kabuyi Wembo' className={['column column-3', styles.section].join(' ')}>
                            {/*  CEO */}
                            <div className={styles.card}>
                                {/*  IMAGE */}
                                <img src={img1} alt='Glody Kabuyi Wembo' />
                                {/* NAME */}
                                <h3>GLODY Kabuyi Wembo</h3>
                                {/* FUNCTION */}
                                <h4><i>Chief Executive Office</i></h4>
                            </div>
                        </div>
                        {/*  Card */}
                        <div title='GRADI MUNSIENSI KAYAMBA' className={['column column-3', styles.section].join(' ')}>
                            {/*  CEO */}
                            <div className={styles.card}>
                                {/*  IMAGE */}
                                <img src={img1} alt='Gradi Munsiensi Kayamba' />
                                {/* NAME */}
                                <h3>GRADI Munsiensi Kayamba</h3>
                                {/* FUNCTION */}
                                <h4><i>Chief Engineer Officer</i></h4>
                            </div>
                        </div>
                    </div>
                </section>
                {/*  Our Location */}
                <section className={styles.Section_location}>
                    {/*  Location */}
                    <div className='row'>
                        {/*  Section */}
                        <div className={['column column-1', styles.section].join(' ')}>
                            {/*  Title */}
                            <h2>Our Locations</h2>
                            {/*  Statement */}
                            <p>Find Us at Our Global Hubs</p>
                        </div>
                        {/*  Section */}
                        <div className={['column column-4', styles.section].join(' ')}>
                            {/*  Map */}
                            <div className={styles.map_container}>
                                {/*  Kinshasa - constant */}
                                <GoogleMap
                                    bootstrapURLKeys={{ key: 'AIzaSyB8F3W - zAMwJNKGiKhTSuqlHdpG7WCMuSU' }}
                                    center={Kinshasa.center}
                                    zoom={Kinshasa.zoom}
                                >
                                    {/*  Map - constant */}
                                    <Map
                                        text="B"
                                    />
                                </GoogleMap>
                            </div>
                            {/*  Label */}
                            <h4>KINSHASA</h4>
                        </div>
                        {/*  Section */}
                        <div className={['column column-4', styles.section].join(' ')}>
                            {/*  MAP */}
                            <div className={styles.map_container}>
                                {/*  Atlanta */}
                                <GoogleMap
                                    bootstrapURLKeys={{ key: 'AIzaSyB8F3W - zAMwJNKGiKhTSuqlHdpG7WCMuSU' }}
                                    center={Atlanta.center}
                                    zoom={Atlanta.zoom}
                                >
                                    {/*  Map - constant */}
                                    <Map
                                        text="A"
                                    />
                                </GoogleMap>
                            </div>
                            {/*  Label */}
                            <h4>ATLANTA</h4>
                        </div>
                        {/*  Section */}
                        <div className={['column column-4', styles.section].join(' ')}>
                            {/*  MAP */}
                            <div className={styles.map_container}>
                                <GoogleMap
                                    bootstrapURLKeys={{ key: 'AIzaSyB8F3W - zAMwJNKGiKhTSuqlHdpG7WCMuSU' }}
                                    center={SouthAfrica.center}
                                    zoom={SouthAfrica.zoom}
                                >
                                    {/*  Map - constant */}
                                    <Map
                                        text="A"
                                    />
                                </GoogleMap>
                            </div>
                            {/*  Label */}
                            <h4>JOHANNESBURG</h4>
                        </div>
                        {/*  Section */}
                        <div className={['column column-4', styles.section].join(' ')}>
                            {/*  MAP */}
                            <div className={styles.map_container}>
                                {/*  France */}
                                <GoogleMap
                                    bootstrapURLKeys={{ key: 'AIzaSyB8F3W - zAMwJNKGiKhTSuqlHdpG7WCMuSU' }}
                                    center={France.center}
                                    zoom={France.zoom}
                                >
                                    {/*  Map - constant */}
                                    <Map
                                        text="A"
                                    />
                                </GoogleMap>
                            </div>
                            {/*  Label */}
                            <h4>FRANCE</h4>
                        </div>
                        {/*  Additional Information */}
                        <div className={['column column-1', styles.section].join(' ')}>
                            {/*  Statement */}
                            <p>For additional inquiries, please visit our Contact Us page.</p>
                        </div>
                    </div>
                </section>
            {/* FOOTER */}
            <Footer />
            </>
            );
    }

}
export default About;