import React from 'react';
import '../Styles/About.styles.css';

const About = () => {
    return (
        <section className='about' id='about'>
            <div className='about-container'>
                <h1>Akaki Burjanadze</h1>
                <p>
                    I'm a passionate Web Developer who loves building digital things
                </p>
                <div className='icons'>
                    <a href="mailto:akakiburjanadze17@gmail.com">
                        <img src="https://img.icons8.com/color/48/000000/gmail-new.png" alt="gmail" />
                    </a>
                    <a href="https://github.com/Akaki16?tab=repositories">
                        <img src="https://img.icons8.com/fluency/48/000000/github.png" alt="github" />
                    </a>
                    <a href="https://www.linkedin.com/in/akaki-burjanadze/">
                        <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="linkedin" />
                    </a>
                    <a href="tel:+995595086408">
                        <img src="https://img.icons8.com/doodle/48/000000/apple-phone.png" alt="phone" />
                    </a>
                </div>
                <a href="#">
                    <button className='download-btn' type='button'>
                        Download CV
                    </button>
                </a>
            </div>
        </section>
    );
}

export default About;