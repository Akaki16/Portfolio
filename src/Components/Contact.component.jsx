import React from 'react';
import '../Styles/Contact.styles.css';

const Contact = () => {
    return (
        <section className='contact' id='contact'>
            <br />
            <br />
            <h1 className='contact-section-title'>Let's work together</h1>
            <br />
            <form className='contact-form' action="https://formsubmit.co/akakiburjanadze17@gmail.com" method="POST">
                <div className="form-group">
                    <label htmlFor='name'>Name</label>
                    <input
                        type='text'
                        name='name'
                        autoComplete='off'
                        placeholder='Please enter your name'
                        minLength={4}
                        maxLength={20}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor='last_name'>Last Name</label>
                    <input
                        type='text'
                        name='last_name'
                        autoComplete='off'
                        placeholder='Please enter your last name'
                        minLength={6}
                        maxLength={20}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor='tel'>Tel</label>
                    <input
                        type='tel'
                        name='tel'
                        autoComplete='off'
                        placeholder='Please enter your telephone number'
                        required
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='message'>Message</label>
                    <textarea name='message' placeholder='Please enter your message' minLength={50} maxLength={500} required></textarea>
                </div>
                <div className='form-group'>
                    <button className='send-btn' type='submit'>
                        Send
                    </button>
                </div>
            </form>
        </section>
    );
}

export default Contact;