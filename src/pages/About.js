import React from 'react'
import "../pages/AboutStyle.css"
import Header from '../component/Header'
import Footer from '../component/Footer'

function About() {
  return (
   <>
   <Header></Header>
    {/* <header>
        <h1>About Us</h1>
    </header> */}
    <main>
        <section class="introduction">
            <h2>Introduction</h2>
            <p>Welcome to our hospital management application, designed to streamline healthcare operations and improve patient care.</p>
        </section>
        <section class="mission">
            <h2>Mission Statement</h2>
            <p>Our mission is to provide exceptional healthcare services through innovative technology and dedicated care.</p>
        </section>
        <section class="history">
            <h2>History</h2>
            <p>Founded in 2020, our application has evolved to become a comprehensive solution for hospital management.</p>
        </section>
        <section class="services">
            <h2>Services Offered</h2>
            <ul>
                <li>Appointment Scheduling</li>
                <li>Patient Records Management</li>
                <li>Billing and Invoicing</li>
                <li>Inventory Management</li>
                <li>Reporting and Analytics</li>
            </ul>
        </section>
        <section class="team">
            <h2>Our Team</h2>
            <p>Meet our dedicated team of healthcare professionals and technology experts.</p>
        </section>
        <section class="technology">
            <h2>Technology</h2>
            <p>Our application utilizes the latest technology to ensure efficiency and security in hospital management.</p>
        </section>
        <section class="testimonials">
            <h2>Testimonials</h2>
            <p>"This application has revolutionized our hospital operations!" - Dr. John Doe</p>
        </section>
        <section class="certifications">
            <h2>Certifications and Accreditations</h2>
            <p>We are certified by the Health Information Trust Alliance and comply with all healthcare regulations.</p>
        </section>
        <section class="contact">
            <h2>Contact Us</h2>
            <p>Have questions? Get in touch with us:</p>
            <ul>
                <li>Address: 123 Health St, Wellness City, HW 45678</li>
                <li>Phone: (123) 456-7890</li>
                <li>Email: support@hospitalapp.com</li>
                <li>Follow us on social media: 
                    <a href="#">Facebook</a>, 
                    <a href="#">Twitter</a>, 
                    <a href="#">LinkedIn</a>
                </li>
            </ul>
        </section>
        <section class="faqs">
            <h2>FAQs</h2>
            <p>Find answers to commonly asked questions about our application.</p>
        </section>
        <section class="future-plans">
            <h2>Future Plans</h2>
            <p>We are constantly innovating and planning new features to enhance our application.</p>
        </section>
    </main>
    <Footer></Footer>
    <footer>
        <p>&copy; 2024 Hospital Management App. All rights reserved.</p>
    </footer>


   </>
  )
}

export default About
