export const institutesList = [
  { id: 'aws', name: 'AWS Academy', badge: '5 Certificates', description: 'Cloud Computing, Generative AI & Machine Learning Foundations' },
  { id: 'ccna', name: 'CCNA (Cisco)', badge: '9 Certificates', description: 'Networking, Cyber Security, Data Science & AI Essentials' },
  { id: 'eduskills', name: 'EduSkills', badge: '3 Internships', description: 'AI/ML, Gen AI & Data Engineering Virtual Internships' },
  { id: 'gcp', name: 'Google Cloud', badge: '1 Certificate', description: 'Google Cloud Computing Foundations' },
  { id: 'infosys', name: 'Infosys Springboard', badge: '14 Certificates', description: 'Python, DBMS, NoSQL, Software Engineering & Soft Skills' },
  { id: 'nptel', name: 'NPTEL', badge: '3 Certificates', description: 'Algorithms, DBMS & R Software Foundations' },
  { id: 'spoken', name: 'Spoken Tutorial', badge: '3 Certificates', description: 'Java, Python & Linux Systems' },
  { id: 'edx', name: 'edX', badge: '2 Certificates', description: 'Communication, Teamwork & Cryptography' }
];

export const certificationsData = [
  // AWS Academy
  {
    id: 'aws-1',
    instituteId: 'aws',
    instituteName: 'AWS Academy',
    title: 'AWS Academy Graduate - Cloud Foundations',
    filePath: './Certifications/AWS Academy/AWS Academy Graduate - Cloud Foundations.pdf',
    fileType: 'pdf',
    category: 'Cloud Computing'
  },
  {
    id: 'aws-2',
    instituteId: 'aws',
    instituteName: 'AWS Academy',
    title: 'AWS Academy Graduate - Data Engineering',
    filePath: './Certifications/AWS Academy/AWS Academy Graduate - Data Engineering.pdf',
    fileType: 'pdf',
    category: 'Data Engineering'
  },
  {
    id: 'aws-3',
    instituteId: 'aws',
    instituteName: 'AWS Academy',
    title: 'AWS Academy Graduate - Generative AI Foundations',
    filePath: './Certifications/AWS Academy/AWS Academy Graduate - Generative AI Foundations.pdf',
    fileType: 'pdf',
    category: 'AI & ML'
  },
  {
    id: 'aws-4',
    instituteId: 'aws',
    instituteName: 'AWS Academy',
    title: 'AWS Academy Graduate - Machine Learning Foundations',
    filePath: './Certifications/AWS Academy/AWS Academy Graduate - Machine Learning Foundations.pdf',
    fileType: 'pdf',
    category: 'AI & ML'
  },
  {
    id: 'aws-5',
    instituteId: 'aws',
    instituteName: 'AWS Academy',
    title: 'AWS Academy Graduate - Machine Learning for NLP',
    filePath: './Certifications/AWS Academy/AWS Academy Graduate - Machine Learning for Natural.pdf',
    fileType: 'pdf',
    category: 'AI & ML'
  },

  // CCNA
  {
    id: 'ccna-1',
    instituteId: 'ccna',
    instituteName: 'CCNA (Cisco)',
    title: 'Apply AI - Analyze Customer Reviews',
    filePath: './Certifications/CCNA/CCNA-Apply_AI-_Analyze_Customer_Reviews_certificate.pdf',
    fileType: 'pdf',
    category: 'AI & Data'
  },
  {
    id: 'ccna-2',
    instituteId: 'ccna',
    instituteName: 'CCNA (Cisco)',
    title: 'Introduction to Cybersecurity',
    filePath: './Certifications/CCNA/CCNA-Introduction_to_Cybersecurity_certificate.pdf',
    fileType: 'pdf',
    category: 'Cyber Security'
  },
  {
    id: 'ccna-3',
    instituteId: 'ccna',
    instituteName: 'CCNA (Cisco)',
    title: 'Introduction to Data Science',
    filePath: './Certifications/CCNA/CCNA-Introduction_to_Data_Science_certificate.pdf',
    fileType: 'pdf',
    category: 'Data Science'
  },
  {
    id: 'ccna-4',
    instituteId: 'ccna',
    instituteName: 'CCNA (Cisco)',
    title: 'Introduction to Modern AI',
    filePath: './Certifications/CCNA/CCNA-Introduction_to_Modern_AI_certificate.pdf',
    fileType: 'pdf',
    category: 'AI & Data'
  },
  {
    id: 'ccna-5',
    instituteId: 'ccna',
    instituteName: 'CCNA (Cisco)',
    title: 'Python Essentials 1',
    filePath: './Certifications/CCNA/CCNA-Python_Essentials_1_certificate.pdf',
    fileType: 'pdf',
    category: 'Programming'
  },
  {
    id: 'ccna-6',
    instituteId: 'ccna',
    instituteName: 'CCNA (Cisco)',
    title: 'Python Essentials 2',
    filePath: './Certifications/CCNA/CCNA-Python_Essentials_2_certificate.pdf',
    fileType: 'pdf',
    category: 'Programming'
  },
  {
    id: 'ccna-7',
    instituteId: 'ccna',
    instituteName: 'CCNA (Cisco)',
    title: 'Enterprise Networking, Security, and Automation',
    filePath: './Certifications/CCNA/CCNA-_Enterprise_Networking-_Security-_and_Automation_certificate.pdf',
    fileType: 'pdf',
    category: 'Networking'
  },
  {
    id: 'ccna-8',
    instituteId: 'ccna',
    instituteName: 'CCNA (Cisco)',
    title: 'Introduction to Networks',
    filePath: './Certifications/CCNA/CCNA-_Introduction_to_Networks_certificate.pdf',
    fileType: 'pdf',
    category: 'Networking'
  },
  {
    id: 'ccna-9',
    instituteId: 'ccna',
    instituteName: 'CCNA (Cisco)',
    title: 'Switching, Routing, and Wireless Essentials',
    filePath: './Certifications/CCNA/CCNA-_Switching-_Routing-_and_Wireless_Essentials_certificate.pdf',
    fileType: 'pdf',
    category: 'Networking'
  },

  // EduSkills
  {
    id: 'eduskills-1',
    instituteId: 'eduskills',
    instituteName: 'EduSkills',
    title: 'AI & Machine Learning Virtual Internship',
    filePath: './Certifications/EduSkills/EduSkills - AIML Virtual Internship.pdf',
    fileType: 'pdf',
    category: 'Virtual Internship'
  },
  {
    id: 'eduskills-2',
    instituteId: 'eduskills',
    instituteName: 'EduSkills',
    title: 'Data Engineering Virtual Internship',
    filePath: './Certifications/EduSkills/EduSkills - Data Engineering Virtual Internship.pdf',
    fileType: 'pdf',
    category: 'Virtual Internship'
  },
  {
    id: 'eduskills-3',
    instituteId: 'eduskills',
    instituteName: 'EduSkills',
    title: 'Generative AI Virtual Internship',
    filePath: './Certifications/EduSkills/EduSkills - Gen AI Virtual Internship.pdf',
    fileType: 'pdf',
    category: 'Virtual Internship'
  },

  // Google Cloud
  {
    id: 'gcp-1',
    instituteId: 'gcp',
    instituteName: 'Google Cloud',
    title: 'Google Cloud Computing Foundations',
    filePath: './Certifications/Google Cloud/Google Cloud Computing Foundations Certificate.png',
    fileType: 'png',
    category: 'Cloud Computing'
  },

  // Infosys Springboard
  {
    id: 'infosys-1',
    instituteId: 'infosys',
    instituteName: 'Infosys Springboard',
    title: 'Agile Scrum in Practice',
    filePath: './Certifications/Infosys Springboard/Infosys Springboard - Agile Scrum in Practice.pdf',
    fileType: 'pdf',
    category: 'Agile & Management'
  },
  {
    id: 'infosys-2',
    instituteId: 'infosys',
    instituteName: 'Infosys Springboard',
    title: 'Basics of Python',
    filePath: './Certifications/Infosys Springboard/Infosys Springboard - Basics of Python.pdf',
    fileType: 'pdf',
    category: 'Programming'
  },
  {
    id: 'infosys-3',
    instituteId: 'infosys',
    instituteName: 'Infosys Springboard',
    title: 'Database Management System - Part 1',
    filePath: './Certifications/Infosys Springboard/Infosys Springboard - Database Management System Part - 1.pdf',
    fileType: 'pdf',
    category: 'Databases'
  },
  {
    id: 'infosys-4',
    instituteId: 'infosys',
    instituteName: 'Infosys Springboard',
    title: 'Database Management System - Part 2',
    filePath: './Certifications/Infosys Springboard/Infosys Springboard - Database Management System Part - 2.pdf',
    fileType: 'pdf',
    category: 'Databases'
  },
  {
    id: 'infosys-5',
    instituteId: 'infosys',
    instituteName: 'Infosys Springboard',
    title: 'Email Writing Skills',
    filePath: './Certifications/Infosys Springboard/Infosys Springboard - Email Writing Skills.pdf',
    fileType: 'pdf',
    category: 'Soft Skills'
  },
  {
    id: 'infosys-6',
    instituteId: 'infosys',
    instituteName: 'Infosys Springboard',
    title: 'High Impact Presentations',
    filePath: './Certifications/Infosys Springboard/Infosys Springboard - High Impact Presentations.pdf',
    fileType: 'pdf',
    category: 'Soft Skills'
  },
  {
    id: 'infosys-7',
    instituteId: 'infosys',
    instituteName: 'Infosys Springboard',
    title: 'Internship 6.0 - Parallel Text Handling Processor',
    filePath: './Certifications/Infosys Springboard/Infosys Springboard - Internship 6.0 (B6-7) Parallel Text Handling Processor.pdf',
    fileType: 'pdf',
    category: 'Internship'
  },
  {
    id: 'infosys-8',
    instituteId: 'infosys',
    instituteName: 'Infosys Springboard',
    title: 'Introduction to NoSQL Databases',
    filePath: './Certifications/Infosys Springboard/Infosys Springboard - Introduction to NoSQL databases.pdf',
    fileType: 'pdf',
    category: 'Databases'
  },
  {
    id: 'infosys-9',
    instituteId: 'infosys',
    instituteName: 'Infosys Springboard',
    title: 'Object Oriented Programming using Python',
    filePath: './Certifications/Infosys Springboard/Infosys Springboard - Object Oriented Programming using Python.pdf',
    fileType: 'pdf',
    category: 'Programming'
  },
  {
    id: 'infosys-10',
    instituteId: 'infosys',
    instituteName: 'Infosys Springboard',
    title: 'Programming Fundamentals using Python - Part 1',
    filePath: './Certifications/Infosys Springboard/Infosys Springboard - Programming Fundamentals using Python - Part 1.pdf',
    fileType: 'pdf',
    category: 'Programming'
  },
  {
    id: 'infosys-11',
    instituteId: 'infosys',
    instituteName: 'Infosys Springboard',
    title: 'Programming Fundamentals using Python - Part 2',
    filePath: './Certifications/Infosys Springboard/Infosys Springboard - Programming Fundamentals using Python - Part 2.pdf',
    fileType: 'pdf',
    category: 'Programming'
  },
  {
    id: 'infosys-12',
    instituteId: 'infosys',
    instituteName: 'Infosys Springboard',
    title: 'Python Foundation Certification',
    filePath: './Certifications/Infosys Springboard/Infosys Springboard - Python Foundation Certi cation.pdf',
    fileType: 'pdf',
    category: 'Programming'
  },
  {
    id: 'infosys-13',
    instituteId: 'infosys',
    instituteName: 'Infosys Springboard',
    title: 'Software Engineering & Agile Software Development',
    filePath: './Certifications/Infosys Springboard/Infosys Springboard - Software Engineering and Agile software developmen.pdf',
    fileType: 'pdf',
    category: 'Software Engineering'
  },
  {
    id: 'infosys-14',
    instituteId: 'infosys',
    instituteName: 'Infosys Springboard',
    title: 'Time Management',
    filePath: './Certifications/Infosys Springboard/Infosys Springboard - Time Management.pdf',
    fileType: 'pdf',
    category: 'Soft Skills'
  },

  // NPTEL
  {
    id: 'nptel-1',
    instituteId: 'nptel',
    instituteName: 'NPTEL',
    title: 'Database Management System',
    filePath: './Certifications/NPTEL/NPTEL - Data Base Management System.pdf',
    fileType: 'pdf',
    category: 'Core Computer Science'
  },
  {
    id: 'nptel-2',
    instituteId: 'nptel',
    instituteName: 'NPTEL',
    title: 'Design and Analysis of Algorithms',
    filePath: './Certifications/NPTEL/NPTEL - Design and Analysis of Algorithms.pdf',
    fileType: 'pdf',
    category: 'Core Computer Science'
  },
  {
    id: 'nptel-3',
    instituteId: 'nptel',
    instituteName: 'NPTEL',
    title: 'Foundations of R Software',
    filePath: './Certifications/NPTEL/NPTEL - Foundations of R Software.pdf',
    fileType: 'pdf',
    category: 'Data Science'
  },

  // Spoken Tutorial
  {
    id: 'spoken-1',
    instituteId: 'spoken',
    instituteName: 'Spoken Tutorial',
    title: 'Java Programming',
    filePath: './Certifications/Spoken Tutorial/Spoken Tutorial - Java.pdf',
    fileType: 'pdf',
    category: 'Programming'
  },
  {
    id: 'spoken-2',
    instituteId: 'spoken',
    instituteName: 'Spoken Tutorial',
    title: 'Linux Operating System',
    filePath: './Certifications/Spoken Tutorial/Spoken Tutorial - Linux.pdf',
    fileType: 'pdf',
    category: 'Operating Systems'
  },
  {
    id: 'spoken-3',
    instituteId: 'spoken',
    instituteName: 'Spoken Tutorial',
    title: 'Python Programming',
    filePath: './Certifications/Spoken Tutorial/Spoken Tutorial - Python.pdf',
    fileType: 'pdf',
    category: 'Programming'
  },

  // edX
  {
    id: 'edx-1',
    instituteId: 'edx',
    instituteName: 'edX',
    title: 'Communication and Teamwork',
    filePath: './Certifications/edX/edX - Communication and Teamwork.pdf',
    fileType: 'pdf',
    category: 'Soft Skills'
  },
  {
    id: 'edx-2',
    instituteId: 'edx',
    instituteName: 'edX',
    title: 'Encryption and Cryptography',
    filePath: './Certifications/edX/edX - Encryption and Cryptography.pdf',
    fileType: 'pdf',
    category: 'Cyber Security'
  }
];
