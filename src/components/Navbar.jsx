import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { FiMenu, FiX, FiGithub } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';
import { socialLinks } from '../data/blog';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Update active section based on scroll position
            const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80; // Height of navbar
            const elementPosition = element.offsetTop - offset;
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
        setIsMobileMenuOpen(false);
    };

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'experience', label: 'Experience' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact' }
    ];

    return (
        <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
            <div className="container navbar-container">
                <div className="navbar-brand">
                    <button
                        onClick={() => scrollToSection('home')}
                        className="logo-btn"
                    >
                        <span className="gradient-text">SJ</span>
                    </button>
                </div>

                {/* Desktop Navigation */}
                <ul className="navbar-menu">
                    {navItems.map(item => (
                        <li key={item.id}>
                            <button
                                onClick={() => scrollToSection(item.id)}
                                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                            >
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>

                <div className="navbar-actions">
                    <a
                        href={socialLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-link"
                        aria-label="GitHub Profile"
                    >
                        <FiGithub size={20} />
                    </a>
                    <ThemeToggle />
                    <button
                        className="mobile-menu-toggle"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
                <ul className="mobile-menu-list">
                    {navItems.map(item => (
                        <li key={item.id}>
                            <button
                                onClick={() => scrollToSection(item.id)}
                                className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                            >
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
