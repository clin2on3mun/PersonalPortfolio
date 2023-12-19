import { useState } from 'react';
import { motion } from "framer-motion"
import './contact.css'
const Contact = ()=>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const handleSubmit = (event) => {
        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
            event.preventDefault();
          }
      };
    return (
        <motion.section id="contact"
                        initial={{opacity: 0, y:100}}
                        whileInView={{opacity:1, y:0}}
                        transition={{duration:1}}>
              <section>
                    <section className="contact-content">
                        <h2 className='about-text'>Contact Me</h2>
                        <p>Let &apos;s get in touch</p>
                    </section>
                    <form id ='form' onSubmit={handleSubmit} action="https://formspree.io/f/xvonwpvy" method="POST">
                        <input type='text' placeholder='Name' name="name" onChange={(e) => setName(e.target.value)}  className='form-control' required/>
                        <input type='email' placeholder='Email'name="email" onChange={(e) => setEmail(e.target.value)} className='form-control' required/>
                        <textarea placeholder='say something.........' name="message"  onChange={(e) => setMessage(e.target.value)} className='form-control text-area' required></textarea>
                        <button type="submit" className="btn-send">Send</button>
                    </form>
            </section>
        </motion.section>
    )
}
export default Contact