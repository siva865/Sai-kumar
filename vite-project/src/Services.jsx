import { motion } from 'framer-motion'
import { FaLeaf, FaHeartbeat, FaMedal, FaChild } from 'react-icons/fa'

const Services = () => {
  const services = [
    {
      icon: <FaLeaf />,
      title: 'Hatha Yoga',
      description: 'Traditional yoga practice focusing on physical postures and breathing techniques.',
      bgColor: '#e3f4f1'
    },
    {
      icon: <FaHeartbeat />,
      title: 'Vinyasa Flow',
      description: 'Dynamic practice linking movement with breath in a continuous flow.',
      bgColor: '#f9e8e8'
    },
    {
      icon: <FaMedal />,
      title: 'Advanced Asanas',
      description: 'Master complex postures with proper alignment and technique.',
      bgColor: '#e8e8f9'
    },
    {
      icon: <FaChild />,
      title: 'Yoga for Beginners',
      description: 'Gentle introduction to yoga fundamentals at your own pace.',
      bgColor: '#f9f9e8'
    }
  ]

  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="section-title">My Services</h2>
        <p className="section-subtitle">Transform your life with personalized yoga sessions</p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ backgroundColor: service.bgColor }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services