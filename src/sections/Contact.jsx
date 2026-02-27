import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import { socialLinks } from '../data/blog';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // EmailJS configuration
            await emailjs.send(
                'service_yyexxuv', // Service ID provided by user
                'template_9spbhvs', // Template ID provided by user
                {
                    // Sending multiple variations to ensure it matches your EmailJS template variables
                    from_name: formData.name,
                    user_name: formData.name,
                    name: formData.name,

                    from_email: formData.email,
                    user_email: formData.email,
                    email: formData.email,
                    reply_to: formData.email, // Standard for 'Reply' button functionality

                    message: formData.message,
                },
                'kxA0GVPwdZvMia5TE' // Public Key provided by user
            );

            setSubmitStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            setSubmitStatus('error');
            console.error('Error sending email:', error);
            // Fallback for demo purposes if credentials aren't set
            if (error.text?.includes('The user is not active') || error.text?.includes('The template is invalid')) {
                alert("EmailJS is not fully configured yet. Please provide Template ID and Public Key.");
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="contact">
            <div className="container">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title text-center">Get in Touch</h2>
                    <div className="section-subtitle text-center">
                        I'm open to frontend development opportunities, internships, and collaborations
                    </div>

                    <div className="contact-content">
                        {/* Contact Info */}
                        <motion.div
                            className="contact-info"
                            initial={{ opacity: 0, x: -30 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            <div className="contact-info-card glass-card">
                                <h3>Contact Information</h3>
                                <p className="contact-intro">
                                    Feel free to reach out if you'd like to work together or just want to chat!
                                </p>

                                <div className="contact-details">
                                    <a href={`mailto:${socialLinks.email}`} className="contact-detail">
                                        <div className="contact-icon">
                                            <FiMail size={20} />
                                        </div>
                                        <div>
                                            <p className="contact-label">Email</p>
                                            <p className="contact-value">{socialLinks.email}</p>
                                        </div>
                                    </a>

                                    <a href={`tel:${socialLinks.phone}`} className="contact-detail">
                                        <div className="contact-icon">
                                            <FiPhone size={20} />
                                        </div>
                                        <div>
                                            <p className="contact-label">Phone</p>
                                            <p className="contact-value">{socialLinks.phone}</p>
                                        </div>
                                    </a>

                                    <div className="contact-detail">
                                        <div className="contact-icon">
                                            <FiMapPin size={20} />
                                        </div>
                                        <div>
                                            <p className="contact-label">Location</p>
                                            <p className="contact-value">{socialLinks.location}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            className="contact-form-wrapper"
                            initial={{ opacity: 0, x: 30 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            <form onSubmit={handleSubmit} className="contact-form card">
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your Name"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="your.email@example.com"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Your message here..."
                                        rows="5"
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary submit-btn"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="spinner"></div>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <FiSend />
                                            Send Message
                                        </>
                                    )}
                                </button>

                                {submitStatus === 'success' && (
                                    <motion.div
                                        className="form-message success"
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                    >
                                        <FiCheckCircle />
                                        <span>Message sent successfully! I'll get back to you soon.</span>
                                    </motion.div>
                                )}

                                {submitStatus === 'error' && (
                                    <motion.div
                                        className="form-message error"
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                    >
                                        <FiAlertCircle />
                                        <span>Failed to send message. Please try again or email directly.</span>
                                    </motion.div>
                                )}
                            </form>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
