import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiUsers, FiZap } from 'react-icons/fi';
import { personalInfo } from '../data/blog';
import './About.css';

const About = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

    const highlights = [
        {
            icon: <FiUsers />,
            title: 'User-First Thinking',
            description: 'Background in business development taught clear communication and client focus'
        },
        {
            icon: <FiZap />,
            title: 'Fast-Paced Adaptation',
            description: 'Quick learner who thrives in dynamic environments and embraces new challenges'
        },
        {
            icon: <FiCode />,
            title: 'Clean Code',
            description: 'Focus on writing maintainable, scalable, and efficient code solutions'
        }
    ];

    return (
        <section id="about" className="about">
            <div className="container">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title text-center">About Me</h2>
                    <div className="section-subtitle text-center">
                        Get to know more about my background and what drives me
                    </div>

                    <div className="about-content">
                        <div className="about-text">
                            <p>
                                I'm a passionate frontend developer with hands-on experience building and deploying responsive websites.
                                My background includes business development work, which taught me clear communication, user-first thinking,
                                and how to work effectively in fast-paced teams.
                            </p>
                            <p>
                                I focus on writing semantic HTML, maintainable CSS, and clean JavaScript. I care about accessibility,
                                performance, and creating interfaces that work well for everyone.
                            </p>
                            <p>
                                Currently, I'm expanding my skillset by diving deep into React and modern frontend frameworks,
                                while continuously improving my JavaScript fundamentals and API integration skills.
                            </p>
                        </div>

                        <div className="about-highlights">
                            {highlights.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="highlight-card glass-card"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.2 * (index + 1), duration: 0.5 }}
                                >
                                    <div className="highlight-icon">{item.icon}</div>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
