import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink, FiFilter } from 'react-icons/fi';
import { projectsData, categories } from '../data/projects';
import './Projects.css';

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const filteredProjects = selectedCategory === 'all'
        ? projectsData
        : projectsData.filter(project => project.category === selectedCategory);

    return (
        <section id="projects" className="projects">
            <div className="container">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title text-center">Selected Projects</h2>
                    <div className="section-subtitle text-center">
                        A few projects I've built to practice frontend development skills
                    </div>

                    {/* Filter Buttons */}
                    <div className="project-filters">
                        <FiFilter className="filter-icon" />
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                className={`filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                                onClick={() => setSelectedCategory(cat.id)}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    {/* Projects Grid */}
                    <div className="projects-grid">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                className="project-card card hover-lift"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={inView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: 0.1 * index, duration: 0.5 }}
                            >
                                <div className="project-image-placeholder">
                                    <span className="project-number">#{project.id}</span>
                                    <div className="project-overlay">
                                        <p>Screenshot Coming Soon</p>
                                    </div>
                                </div>

                                <div className="project-content">
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-description">{project.shortDescription}</p>

                                    <div className="project-tech">
                                        {project.technologies.map((tech, idx) => (
                                            <span key={idx} className="tag">{tech}</span>
                                        ))}
                                    </div>

                                    <div className="project-links">
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-link"
                                        >
                                            <FiGithub size={18} />
                                            View Code
                                        </a>
                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="project-link primary"
                                            >
                                                <FiExternalLink size={18} />
                                                Live Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {filteredProjects.length === 0 && (
                        <div className="no-projects">
                            <p>No projects found in this category. More coming soon!</p>
                        </div>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
