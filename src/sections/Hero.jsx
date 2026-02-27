import { motion } from 'framer-motion';
import { FiDownload, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';
import { personalInfo, socialLinks } from '../data/blog';
import './Hero.css';

const Hero = () => {
    const scrollToContact = () => {
        const element = document.getElementById('contact');
        if (element) {
            const offset = 80;
            const elementPosition = element.offsetTop - offset;
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="home" className="hero">
            <div className="container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <p className="hero-greeting">Hi there! 👋 I'm</p>
                    </motion.div>

                    <motion.h1
                        className="hero-name gradient-text"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        {personalInfo.name}
                    </motion.h1>

                    <motion.h2
                        className="hero-title"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        {personalInfo.title}
                    </motion.h2>

                    <motion.p
                        className="hero-subtitle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        {personalInfo.subtitle}
                    </motion.p>

                    <motion.div
                        className="hero-description"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.8 }}
                    >
                        <p>
                            BCA graduate from Delhi. Currently working as a Frontend Developer Intern at{' '}
                            <span className="highlight">Corpjack Technologies</span> and learning React.
                        </p>
                        <p className="hero-location">
                            📍 Based in {personalInfo.location}
                        </p>
                    </motion.div>

                    <motion.div
                        className="hero-actions"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                    >
                        <button className="btn btn-primary" onClick={scrollToContact}>
                            <FiMail />
                            Get in Touch
                        </button>
                        <a
                            href={personalInfo.resumeUrl}
                            className="btn btn-secondary"
                            download
                        >
                            <FiDownload />
                            Download Resume
                        </a>
                    </motion.div>

                    <motion.div
                        className="hero-social"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.4, duration: 0.8 }}
                    >
                        <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <FiGithub size={24} />
                        </a>
                        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <FiLinkedin size={24} />
                        </a>
                        <a href={`mailto:${socialLinks.email}`} aria-label="Email">
                            <FiMail size={24} />
                        </a>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="scroll-indicator"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.6, duration: 0.8 }}
                >
                    <div className="scroll-down"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
