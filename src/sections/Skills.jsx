import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skillsData } from '../data/content';
import './Skills.css';

const Skills = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    return (
        <section id="skills" className="skills">
            <div className="container">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title text-center">Skills & Tools</h2>
                    <div className="section-subtitle text-center">
                        Technologies and tools I use to build amazing web experiences
                    </div>

                    <div className="skills-grid">
                        {skillsData.map((category, catIndex) => (
                            <motion.div
                                key={catIndex}
                                className="skill-category card hover-lift"
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.1 * catIndex, duration: 0.5 }}
                            >
                                <h3 className="category-title">{category.category}</h3>
                                <div className="skills-list">
                                    {category.skills.map((skill, skillIndex) => (
                                        <motion.div
                                            key={skillIndex}
                                            className="skill-item"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={inView ? { opacity: 1, x: 0 } : {}}
                                            transition={{ delay: 0.05 * skillIndex + 0.2 * catIndex, duration: 0.4 }}
                                        >
                                            <div className="skill-info">
                                                <span className="skill-name">{skill.name}</span>
                                                <span className="skill-proficiency">{skill.proficiency}%</span>
                                            </div>
                                            <div className="skill-bar">
                                                <motion.div
                                                    className="skill-progress"
                                                    initial={{ width: 0 }}
                                                    animate={inView ? { width: `${skill.proficiency}%` } : {}}
                                                    transition={{ delay: 0.05 * skillIndex + 0.3 * catIndex, duration: 0.8, ease: 'easeOut' }}
                                                />
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        className="learning-section"
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.6, duration: 0.6 }}
                    >
                        <div className="learning-card glass-card text-center">
                            <h3>Currently Learning</h3>
                            <div className="learning-tags">
                                <span className="tag">React</span>
                                <span className="tag">Component Architecture</span>
                                <span className="tag">API Integration</span>
                                <span className="tag">State Management</span>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
