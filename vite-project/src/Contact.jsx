import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Ready to start your yoga journey? Contact me today!</p>
        
        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3>Contact Information</h3>
            
            <div className="info-item">
              <div className="info-icon"><FaPhone /></div>
              <div>
                <h4>Phone</h4>
                <p>+91 98765 43210</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon"><FaEnvelope /></div>
              <div>
                <h4>Email</h4>
                <p>saiyoga@example.com</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon"><FaMapMarkerAlt /></div>
              <div>
                <h4>Location</h4>
                <p>123 Yoga Street, Bangalore, India</p>
              </div>
            </div>
          </motion.div>
          
          <motion.form 
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            
            <div className="form-group">
              <input type="text" placeholder="Subject" />
            </div>
            
            <div className="form-group">
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            
            <button type="submit" className="btn">Send Message</button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact