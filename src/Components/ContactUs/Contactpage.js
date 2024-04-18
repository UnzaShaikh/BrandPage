import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import './ContactUs.css'
const Contactpage = () => {
    const [contact, setContact] = useState({
        username: '',
        email: '',
        message: ''
    });

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setContact({ ...contact, [name]: value })
    }
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(contact);
    }
    return <>
        <div className='Contactpage'>
            <div className="ContactForm">
                <div className='LargerText'>
                    <h1>CONTACT US</h1>
                </div>
                <div className="SmallerText">
                    <h3>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </h3>
                </div>
            </div>

            <div className="Form">
                <div className="Rightside">
                    <div className="formbtns">
                        <div className="customerbtns1">
                            <button className='btn'>VIA SUPPORT CHAT</button>
                            <button className='btn'>VIA CALL</button>
                        </div>
                        <div className="customerbtns2">
                            <button className='btn'>VIA EMAIL FORM</button>
                        </div>
                    </div>
                    <form onSubmit={onSubmit} className="formfields">
                        <label htmlFor="name">Name</label>
                        <input className='formField' type="text" name="username" id="username" value={contact.name} onChange={handleInput} required />
                        <label htmlFor="email">Email</label>
                        <input className='formField' type="email" name="email" id="email" value={contact.email} onChange={handleInput} required />
                        <label htmlFor="message">Text</label>
                        <textarea className='textField' type="text" name="message" id="message" value={contact.message} onChange={handleInput} cols={5} rows={10} required />
                        <button type='submit' className='btn'>Submit</button>
                    </form>
                </div>
                <div className="LeftSide">
                    <img src="./contactpage.jpg" alt="" />
                </div>
            </div>
        </div>
        <div className='Map'>
            <iframe className='googleMap' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d924237.7103073568!2d66.49592531068795!3d25.192983577698957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1713429842914!5m2!1sen!2s"  style={{ "border": "0" }} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </>
}
    export default Contactpage
