import { useState } from 'react';
import './contact.css'
const Contact = ()=>{
    const [buttonState, setButtonState] = useState("Send")
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const handleSubmit = (event) => {
        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
            event.preventDefault();
          }
      };
    return (
        <section id="contact">
              <section>
                    <section className="contact-content">
                        <h2 className='about-text'>Contact Me</h2>
                        <p>Let &apos;s get in touch</p>
                    </section>
                    <form id ='form' onSubmit={handleSubmit} action="https://formspree.io/f/xvonwpvy" method="POST">
                        <input type='text' placeholder='Name' name="name" onChange={(e) => setName(e.target.value)}  className='form-control' required/>
                        <input type='email' placeholder='Email'name="email" onChange={(e) => setEmail(e.target.value)} className='form-control' required/>
                        <textarea placeholder='say something.........' name="message"  onChange={(e) => setMessage(e.target.value)} className='form-control text-area' required></textarea>
                        <button type="submit" className="btn-send">{buttonState}</button>
                    </form>
            </section>
        </section>
    )
}
export default Contact