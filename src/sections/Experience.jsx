import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';
import { experienceData, educationData } from '../data/content';
import './Experience.css';

const Experience = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    return (
        <section id="experience" className="experience">
            <div className="container">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title text-center">Experience & Education</h2>
                    <div className="section-subtitle text-center">
                        My professional journey and academic background
                    </div>

                    <div className="timeline">
                        {/* Experience */}
                        <div className="timeline-section">
                            <h3 className="timeline-section-title">
                                <FiBriefcase /> Work Experience
                            </h3>

                            {experienceData.map((exp, index) => (
                                <motion.div
                                    key={exp.id}
                                    className="timeline-item"
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={inView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                                >
                                    <div className="timeline-marker"></div>
                                    <div className="timeline-content card hover-lift">
                                        <div className="timeline-header">
                                            <h3>{exp.title}</h3>
                                            {exp.current && <span className="badge-current">Current</span>}
                                        </div>
                                        <div className="timeline-meta">
                                            <span className="company">{exp.company}</span>
                                            {exp.location && (
                                                <>
                                                    <span className="separator">•</span>
                                                    <span className="location">
                                                        <FiMapPin size={14} /> {exp.location}
                                                    </span>
                                                </>
                                            )}
                                        </div>
                                        <div className="timeline-period">
                                            <FiCalendar size={14} />
                                            {exp.period}
                                        </div>
                                        {exp.description && <p className="timeline-description">{exp.description}</p>}
                                        {exp.responsibilities && exp.responsibilities.length > 0 && (
                                            <ul className="timeline-list">
                                                {exp.responsibilities.map((item, idx) => (
                                                    <li key={idx}>{item}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Education */}
                        <div className="timeline-section">
                            <h3 className="timeline-section-title">
                                <FiBriefcase /> Education
                            </h3>

                            {educationData.map((edu, index) => (
                                <motion.div
                                    key={edu.id}
                                    className="timeline-item"
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={inView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: 0.1 * (experienceData.length + index), duration: 0.5 }}
                                >
                                    <div className="timeline-marker"></div>
                                    <div className="timeline-content card hover-lift">
                                        <h3>{edu.degree}</h3>
                                        <div className="timeline-meta">
                                            <span className="company">{edu.institution}</span>
                                            {edu.location && (
                                                <>
                                                    <span className="separator">•</span>
                                                    <span className="location">
                                                        <FiMapPin size={14} /> {edu.location}
                                                    </span>
                                                </>
                                            )}
                                        </div>
                                        <div className="timeline-period">
                                            <FiCalendar size={14} />
                                            {edu.period}
                                        </div>
                                        {edu.description && <p className="timeline-description">{edu.description}</p>}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
