import './contact.css'
const Contact = ()=>{
    return (
        <section id="contact">
              <section>
                    <section className="contact-content">
                        <h2 className='about-text'>Contact Me</h2>
                        <p>Let &apos;s get in touch</p>
                    </section>
                    <form id ='form'>
                        <input type='text' placeholder='Name' className='form-control'/>
                        <input type='email' placeholder='Email' className='form-control'/>
                        <textarea placeholder='say something.........' className='form-control text-area'></textarea>
                        <button type="submit" className="btn-send">Send</button>
                    </form>
            </section>
        </section>
    )
}
export default Contact