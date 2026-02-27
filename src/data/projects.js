export const projectsData = [
    {
        id: 1,
        title: 'Productivity Tracker',
        shortDescription: 'A modern React-based productivity tool to track daily tasks and visualize efficiency.',
        longDescription: 'A streamlined personal productivity application that enables users to manage their daily workflows and monitor time allocation. Built with React 19 to demonstrate advanced state management and modern frontend patterns.',
        technologies: ['React 19', 'Vite', 'CSS3', 'Vercel'],
        category: 'react',
        githubUrl: 'https://github.com/Sourav-Jangra/productivity-tracker',
        liveUrl: 'https://productivity-tracker-sage-iota.vercel.app/',
        screenshot: '/assets/images/projects/productivity.png', // Placeholder
        featured: true,
        features: [
            'Daily task management',
            'Productivity metric visualization',
            'Responsive dashboard layout',
            'Modern React 19 implementation',
            'Optimized with Vite'
        ],
        challenges: 'Implementing efficient state management for real-time task tracking while maintaining a clean and performant UI.',
        year: '2024'
    }
];

export const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'react', label: 'React' },
    { id: 'frontend', label: 'HTML/CSS' },
    { id: 'javascript', label: 'JavaScript' }
];
