
import { ExperienceItem, ProjectItem, SkillCategory } from './types';

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: 'Machine Learning Engineer',
    company: 'IIT Hyderabad SRC Project NPCI',
    period: 'Jun. 2024 - Present',
    location: 'Hyderabad, Kandi',
    description: [
      'Implemented incremental learning approach using Elastic Weight Consolidation in the NPCI fraud detection project.',
      'Achieved a 20% increase in model performance through incremental learning.',
    ],
  },
  {
    role: 'Teaching Assistant',
    company: 'IIT Bhilai',
    period: 'Sep. 2022 - May. 2024',
    location: 'Bhilai, Chattisgarh',
    description: [
      'Responsible for supporting students in C Programming, Linux, Git, JavaScript, and Networking courses through concept clarification, lab assistance, and feedback.',
      'Involved teaching the students core concepts, resolving their doubts, and preparing assignments.',
    ],
  },
  {
    role: 'Junior Software Developer',
    company: 'Enkin Lab India Private Ltd',
    period: 'Jan. 2022 - July 2022',
    location: 'Pune, Maharastra',
    description: [
        'Worked as a software developer, contributing to multiple projects, which involved creating CRON jobs, setting up around 2 Jenkins pipelines for Continuous Integration automation.',
        'Designed and implemented frontend features for 15+ web pages, building and deploying 30+ RESTful APIs in Spring Boot.',
        'Developed a web browser extension that improved workflow efficiency by about 20%.',
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
    {
        title: 'GraphHyena: A Hybrid Hyena-Driven Framework for Temporal Graph link Prediction.',
        date: 'Oct. 2025',
        description: 'Introduce GraphHyena, combining a Hyena sequence encoder with a Dynamic Temporal-Asymmetry Network to capture rich temporal and structural dynamics for dynamic link prediction, achieving state-of-the-art performance. [Submitted to BigData 2025].'
    },
    {
        title: 'Imbalanced Graph Learning via Graph Attention Network and Variational Autoencoder.',
        date: 'June. 2025',
        description: 'Proposed a hybrid approach for graph-based fraud detection that leverages GAT-learned node embeddings and VAE-generated synthetic samples to address class imbalance, improving classifier performance on large, unbalanced financial transaction data. [Accepted in AIAI 2025].'
    },
    {
        title: 'Empowering Scalable Fraud Detection Using Graph Neural Networks and Incremental Learning.',
        date: 'June. 2025',
        description: 'Proposed a scalable graph-based fraud detection approach that addresses data imbalance with weighted undersampling and adapts to evolving patterns via Elastic Weight Consolidation for incremental learning. [Accepted in IWANN 2025].'
    },
    {
        title: 'G-TED SAM: Node Classification via Graph Transformer to Simple Attention Model Distillation.',
        date: 'June. 2025',
        description: 'Introduce a knowledge distillation framework where a GraphTransformer teacher transfers attention knowledge to a lightweight Simple Attention student, enabling efficient and accurate real-time fraud detection in UPI transactions. [Accepted in IWANN 2025].'
    },
    {
        title: 'A Hybrid Channel Access Mechanism for NR-U to Improve the Coexistence Performance.',
        date: 'Jan. 2024',
        description: 'Developed an RRS selection algorithm for NR-U devices using a SimPy simulator, boosting fairness and efficiency by up to 46%. [Accepted in COMSNETS 2024].'
    },
    {
        title: 'Priority-based MPTCP Scheduler for 5G and Beyond Heterogeneous Links.',
        date: 'Jan. 2024',
        description: 'Developed a packet drop-sensitive scheduler using AHP-GRA, improving performance by 10.28% and reducing retransmissions by 49.35%. [Accepted in COMSNETS 2024].'
    },
    {
        title: 'Improving Performance in 5G mmWave: A Coupled Congestion Control Algorithm for Multipath TCP.',
        date: '2024',
        description: 'Developed a coupled congestion control algorithm for mmWave, boosting performance by 7.94% with 99.56% fairness. [Accepted in IEEE FNFW 2024 Dubai].'
    }
];

export const SKILLS: SkillCategory[] = [
    {
        title: 'Frontend',
        skills: ['JavaScript', 'React', 'HTML', 'CSS', 'Bootstrap', 'ExtJs']
    },
    {
        title: 'Backend',
        skills: ['Spring Boot', 'Node.js', 'Java', 'Flask', 'Python', 'C++', 'Rust']
    },
    {
        title: 'Database',
        skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'MinIO']
    },
    {
        title: 'Automation & DevOps',
        skills: ['Jenkins', 'Git', 'Docker', 'Nginx', 'Linux', 'MLflow']
    },
    {
        title: 'Data Science & ML',
        skills: ['PyTorch', 'TensorFlow', 'FastAPI', 'langchain', 'Ollama']
    }
];

export const CONTACT_DETAILS = {
  email: 'nikhilgumasthi@gmail.com',
  linkedin: 'https://www.linkedin.com/in/nikhil-gumasthi-33718a235/',
  github: 'https://github.com/soapopera12'
};