export const skillsData = [
    {
        category: 'Frontend',
        skills: [
            { name: 'HTML5', proficiency: 90 },
            { name: 'CSS3', proficiency: 85 },
            { name: 'JavaScript', proficiency: 80 },
            { name: 'React', proficiency: 70 },
            { name: 'Flexbox', proficiency: 90 },
            { name: 'CSS Grid', proficiency: 85 },
            { name: 'Responsive Design', proficiency: 90 },
            { name: 'Media Queries', proficiency: 85 }
        ]
    },
    {
        category: 'Tools & Workflow',
        skills: [
            { name: 'Git', proficiency: 75 },
            { name: 'GitHub', proficiency: 80 },
            { name: 'VS Code', proficiency: 90 },
            { name: 'Terminal', proficiency: 70 },
            { name: 'Vercel', proficiency: 75 },
            { name: 'Figma', proficiency: 60 }
        ]
    },
    {
        category: 'Soft Skills',
        skills: [
            { name: 'Communication', proficiency: 85 },
            { name: 'Problem-Solving', proficiency: 85 },
            { name: 'Fast Learner', proficiency: 90 },
            { name: 'Time Management', proficiency: 80 },
            { name: 'Team Collaboration', proficiency: 80 }
        ]
    }
];

export const experienceData = [
    {
        id: 1,
        title: 'Frontend Developer',
        company: 'Corpjack Technologies',
        location: '',
        period: 'Dec 2025 - Present',
        startDate: 'Dec 2025',
        endDate: 'Present',
        current: true,
        type: 'work',
        description: 'Contributing to live client websites by implementing UI enhancements and frontend feature updates.',
        responsibilities: [
            'Developing and modifying frontend components using HTML, CSS, JavaScript, and React',
            'Integrating APIs to fetch and render dynamic data within web interfaces',
            'Improving layout structure and responsiveness using Flexbox and CSS Grid',
            'Working within existing production codebases to implement scalable and maintainable solutions',
            'Ensuring responsive design and cross-device compatibility',
            'Collaborating with team members to deliver structured frontend implementations',
            'Managing code and version control using Git and GitHub'
        ]
    },
    {
        id: 2,
        title: 'Business Development Executive',
        company: 'Lomos Enterprises',
        location: 'Bangalore, India',
        period: 'Sep 2022 - Apr 2023',
        startDate: 'Sep 2022',
        endDate: 'Apr 2023',
        current: false,
        type: 'work',
        description: 'Drove product engagement through strategic lead generation and client relationship management.',
        responsibilities: [
            'Generated and qualified leads via CRM and cold calls to drive product engagement',
            'Delivered clear product demos and resolved client queries with confidence',
            'Met monthly conversion goals through consistent follow-ups and persuasive communication'
        ]
    }
];

export const educationData = [
    {
        id: 1,
        degree: 'Bachelor of Computer Applications (BCA)',
        institution: 'Delhi University',
        location: 'Delhi, India',
        period: '2019 - 2022',
        startDate: '2019',
        endDate: '2022',
        description: 'Completed comprehensive computer science program covering programming, databases, and software development.'
    }
];

export const certificationsData = [
    // Placeholder - user can add certifications later
    // {
    //   id: 1,
    //   title: 'Certification Name',
    //   issuer: 'Issuing Organization',
    //   date: 'Month Year',
    //   credentialUrl: '',
    //   description: ''
    // }
];
