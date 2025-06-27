import { motion } from 'framer-motion'
import { FaArrowRight, FaPlay } from 'react-icons/fa'

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Find Balance & Harmony Through <span>Yoga</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Transform your body and mind with personalized yoga sessions from certified trainer Sai Kumar.
            </motion.p>
            
            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <a href="#contact" className="btn">
                Book a Session <FaArrowRight />
              </a>
              
              <button className="video-btn">
                <FaPlay /> Watch Video
              </button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="image-wrapper">
              {/* Replace with actual image */}
              <div className="placeholder-image"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero