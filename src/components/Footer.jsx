import { socialLinks } from '../data/blog';
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
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
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3 className="gradient-text">Sourav Jangra</h3>
                        <p className="footer-description">
                            Frontend Developer building clean, responsive interfaces with modern web technologies.
                        </p>
                        <div className="footer-social-links">
                            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <FiGithub size={20} />
                            </a>
                            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <FiLinkedin size={20} />
                            </a>
                            <a href={`mailto:${socialLinks.email}`} aria-label="Email">
                                <FiMail size={20} />
                            </a>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <nav className="footer-nav">
                            <button onClick={() => scrollToSection('about')}>About</button>
                            <button onClick={() => scrollToSection('experience')}>Experience</button>
                            <button onClick={() => scrollToSection('projects')}>Projects</button>
                            <button onClick={() => scrollToSection('contact')}>Contact</button>
                        </nav>
                    </div>

                    <div className="footer-section">
                        <h4>Contact Info</h4>
                        <div className="footer-contact">
                            <a href={`mailto:${socialLinks.email}`}>
                                <FiMail size={16} />
                                <span>{socialLinks.email}</span>
                            </a>
                            <a href={`tel:${socialLinks.phone}`}>
                                <FiPhone size={16} />
                                <span>{socialLinks.phone}</span>
                            </a>
                            <div className="footer-location">
                                <FiMapPin size={16} />
                                <span>{socialLinks.location}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} Sourav Jangra. Built with React & Vite.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
