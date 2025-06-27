import { motion } from 'framer-motion'
import { FaQuoteLeft } from 'react-icons/fa'

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Sai Kumar's yoga sessions transformed my life. I've never felt more balanced and energetic!",
      author: "Priya Sharma",
      role: "Corporate Executive"
    },
    {
      quote: "After just 3 months of training with Sai, my back pain has completely disappeared. Highly recommended!",
      author: "Rahul Verma",
      role: "Software Engineer"
    },
    {
      quote: "The perfect combination of challenge and relaxation. Sai adapts each session to my needs and abilities.",
      author: "Ananya Patel",
      role: "University Professor"
    }
  ]

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <h2 className="section-title">What My Students Say</h2>
        <p className="section-subtitle">Success stories from my yoga community</p>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="testimonial-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="quote-icon"><FaQuoteLeft /></div>
              <p className="quote">"{testimonial.quote}"</p>
              <div className="author">
                <h4>{testimonial.author}</h4>
                <p>{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials