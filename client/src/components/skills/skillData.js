const skills = [
    {
        id: 1,
        title: 'frontend',
        name: 'Frontend'
    },
    {
        id: 2,
        title: 'uidesign',
        name: 'UI Design'
    },
    {
        id: 3,
        title: 'backend',
        name: 'Backend'
    }
];

const skillExperience = [
    {
        title: 'frontend',
        stack: [ {
            name: 'HTML',
            experience: 95,
        },
        {
            name: 'CSS',
            experience: 90,
        },
        {
            name: 'JavaScript',
            experience: 85,
        },
        {
            name: 'React',
            experience: 60,
        },
        {
            name: 'SASS',
            experience: 80  ,
        }
    ]

    },
    {
        title: 'backend',
        stack: [
            {
                name: 'NodeJS',
                experience: 70
            },
            {
                name: 'ExpressJS',
                experience: 85
            },
            {
                name: 'MongoDB',
                experience: 90
            },
            {
                name: 'Authentication',
                experience: 40
            },
            {
                name: 'Linux',
                experience: 45
            }
        ],
    },
    {
        title: 'uidesign',
        stack: [
            {
                name: 'Figma',
                experience: 89,
            },
            {
                name: 'Photoshop',
                experience: '70'
            },
            {
                name: 'Sketch',
                experience: 40
            }
        ]
    }
];

export { skills, skillExperience };