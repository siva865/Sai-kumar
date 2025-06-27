import { motion } from 'framer-motion'
import { FaYoutube, FaAward, FaUserTie } from 'react-icons/fa'

const About = () => {
  const stats = [
    { icon: <FaUserTie />, number: '500+', text: 'Happy Clients' },
    { icon: <FaAward />, number: '10+', text: 'Years Experience' },
    { icon: <FaYoutube />, number: '50K+', text: 'YouTube Subscribers' }
  ]

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="image-wrapper">
              {/* Replace with actual image */}
              <div className="placeholder-image"></div>
            </div>
          </motion.div>
          
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3>Certified Yoga Trainer with 10+ Years Experience</h3>
            
            <p>
              My name is Sai Kumar and I'm passionate about helping people achieve physical and mental well-being through yoga. 
              I specialize in Hatha, Vinyasa, and Yin yoga styles.
            </p>
            
            <p>
              My approach combines traditional yoga techniques with modern understanding of anatomy and physiology to create 
              personalized practices for each student.
            </p>
            
            <div className="stats">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="stat-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                >
                  <div className="stat-icon">{stat.icon}</div>
                  <h4>{stat.number}</h4>
                  <p>{stat.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About