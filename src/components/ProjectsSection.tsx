

// // export default ProjectsSection;
// import { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { ExternalLink, Github } from 'lucide-react';
// import llmRag from '@/assets/llg.rag.png';
// import azureDataPipeline from '@/assets/data-pipeline.png';
// import reactPortfolio from '@/assets/react.png';

// const ProjectsSection = () => {
//   const [activeFilter, setActiveFilter] = useState('All');

//   const projects = [
//     {
//       id: 1,
//       title: "LLM RAG Chatbot",
//       description:
//         "Retrieval-Augmented Generation chatbot leveraging OpenAI API and domain-specific fine-tuning. Supports contextual multi-turn queries with vector database integration.",
//       image: llmRag,
//       technologies: ["Python", "LangChain", "Pinecone", "OpenAI API", "Streamlit"],
//       category: "AI/ML",
//       tags: ["AI", "LLM", "RAG"]
//     },
//     {
//       id: 2,
//       title: "Azure Data Engineering Pipeline",
//       description:
//         "End-to-end Azure data pipeline using Data Factory, Databricks, and Synapse Analytics. Designed for large-scale data ingestion, transformation, and analytics.",
//       image: azureDataPipeline,
//       technologies: ["Azure Data Factory", "Databricks", "Synapse", "PySpark", "Delta Lake"],
//       category: "Cloud",
//       tags: ["Cloud", "Azure", "Data Engineering"]
//     },
//     {
//       id: 3,
//       title: "React Developer Portfolio",
//       description:
//         "Responsive developer portfolio showcasing projects, skills, and certifications. Built with React, Tailwind CSS, and deployed on Vercel.",
//       image: reactPortfolio,
//       technologies: ["React", "Tailwind CSS", "Vercel", "JavaScript"],
//       category: "Web App",
//       tags: ["React", "Portfolio", "Frontend"]
//     }
//   ];

//   const filters = ['All', 'Cloud', 'React', 'Azure', 'LLM'];

//   const filteredProjects =
//     activeFilter === 'All'
//       ? projects
//       : projects.filter((project) => project.tags.includes(activeFilter));

//   return (
//     <section id="projects" className="py-0 bg-muted/5">
//       <div className="container mx-auto px-4">
//         <div className="max-w-6xl mx-auto">
//           {/* Section Header */}
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
//               Featured <span className="text-accent">Projects</span>
//             </h2>
//             <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//               Selected projects demonstrating expertise in AI, cloud data engineering, and full-stack development.
//             </p>
//           </div>

//           {/* Filter Buttons */}
//           <div className="flex flex-wrap justify-center gap-3 mb-12">
//             {filters.map((filter) => (
//               <Button
//                 key={filter}
//                 variant={activeFilter === filter ? 'default' : 'outline'}
//                 onClick={() => setActiveFilter(filter)}
//                 className="transition-all duration-300"
//               >
//                 {filter}
//               </Button>
//             ))}
//           </div>

//           {/* 3D Projects Grid */}
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredProjects.map((project) => (
//               <div
//                 key={project.id}
//                 className="bg-card/90 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg 
//                          hover:shadow-[0_25px_50px_-12px_rgba(255,83,61,0.3)] hover:scale-105 hover:-rotate-1
//                          transition-all duration-500 group transform-gpu border border-accent/10"
//                 style={{ perspective: '1000px' }}
//               >
//                 {/* 3D Project Image */}
//                 <div className="relative overflow-hidden">
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-48 object-cover group-hover:scale-110 group-hover:rotate-1 
//                              transition-all duration-500 filter brightness-90 contrast-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-accent/20 to-transparent 
//                                  opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm"></div>

//                   {/* 3D Overlay Buttons */}
//                   <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 
//                                  transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
//                     <Button
//                       size="icon"
//                       variant="secondary"
//                       className="h-8 w-8 hover:scale-110 hover:rotate-12 transition-all duration-300"
//                     >
//                       <ExternalLink size={16} />
//                     </Button>
//                     <Button
//                       size="icon"
//                       variant="secondary"
//                       className="h-8 w-8 hover:scale-110 hover:rotate-12 transition-all duration-300"
//                     >
//                       <Github size={16} />
//                     </Button>
//                   </div>
//                 </div>

//                 {/* 3D Project Content */}
//                 <div className="p-6 bg-card/95 backdrop-blur-sm border-t border-accent/10">
//                   <h3
//                     className="text-xl font-bold text-card-foreground mb-3 group-hover:text-accent 
//                                transition-all duration-300 group-hover:scale-105"
//                   >
//                     {project.title}
//                   </h3>

//                   <p
// className="text-purple-600 mb-4 line-clamp-3 group-hover:text-purple-600 
//            transition-colors duration-300"

//                   >
//                     {project.description}
//                   </p>

//                   {/* 3D Technologies */}
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {project.technologies.map((tech, index) => (
//                       <span
//                         key={tech}
//                         className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full font-medium
//                                  hover:bg-accent/20 hover:scale-105 transition-all duration-300 cursor-pointer
//                                  group-hover:animate-bounce border border-accent/20"
//                         style={{ animationDelay: `${index * 100}ms` }}
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>

//                   {/* 3D Project Links */}
//                   <div className="flex space-x-3">
//                     {/* <Button
//                       variant="outline"
//                       size="sm"
//                       className="flex-1 group/btn hover:scale-105 transition-all duration-300"
//                     >
//                       <ExternalLink
//                         size={16}
//                         className="mr-2 group-hover/btn:rotate-12 transition-transform duration-300"
//                       />
//                       Live Demo
//                     </Button> */}
//                     <Button
//                       variant="ghost"
//                       size="sm"
//                       className="group/btn hover:scale-105 transition-all duration-300"
//                     >
//                       <Github
//                         size={16}
//                         className="group-hover/btn:rotate-12 transition-transform duration-300"
//                       />
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* View More Button */}
//           <div className="text-center mt-12">
//             {/* <Button variant="outline" size="lg">
//               View All Projects on GitHub
//             </Button> */}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProjectsSection;



// export default ProjectsSection;
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import plant_disease from '@/assets/plant_disease.png';
import library from '@/assets/library1.jpg';
import cloud from '@/assets/cloud1.jpg';
import prediciton from '@/assets/prediction.jpeg';
import agriculture from '@/assets/agricultural.jpeg';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  // === UPDATED PROJECTS: using the exact information you provided ===
  const projects = [
    {
      id: 1,
      title: 'AI for Crop Diseases Detection',
      description:
        'Jan 2025 – Present • Associated with California State University, Fullerton. Collect necessary data from reliable resources showing various plant diseases and those that are healthy. Deep learning models such as convolution neural networks (CNN) can be used to develop an AI model to detect and classify crop diseases. To create a user-friendly interface for farmers by creating a lightweight web application using the trained model to detect disease. To improve precision in disease identification in crops, reduce agricultural losses, and contribute to the collective aim of a hunger-free world.',
      image: plant_disease,
      technologies: ['python', 'TensorFlow', 'OpenCV', 'NumPy', 'Pandas (Software)', 'Flask'],
      category: 'AI/ML',
      tags: ['AI/ML', 'Flask', 'Computer Vision'],
    },
    {
      id: 2,
      title: 'Library Management System',
      description:
        'Jan 2024 – Mar 2024 • Associated with California State University, Fullerton. This is a Flask-based application that serves as a Library Management System. The system facilitates user authentication, file handling, and MySQL-based CRUD operations for book management. The code employs JWT (JSON Web Tokens) for user authentication, handles file uploads, and enables various book management services.',
      image: library,
      technologies: ['python', 'MySQL', 'jws'],
      category: 'Web App',
      tags: ['Flask', 'MySQL', 'Auth'],
    },
    {
      id: 3,
      title: 'Cloud Service Access Management System',
      description:
        'Sep 2023 – Dec 2023 • Associated with California State University, Fullerton. This Titan News FastAPI-based subscription management system utilizes MongoDB for data storage. It supports user authentication, admin access control, and includes functionalities for managing subscription plans, permissions, and tracking API usage. The system enforces access restrictions based on subscription plans and monitors usage limits, providing a comprehensive solution for cloud service subscription management. Features: User Authentication, Subscription Plan Management, Permission Management, User Subscription Handling, Access Control, Usage Tracking and Limit Enforcement.',
      image: cloud,
      technologies: ['Python (Programming Language)', 'MongoDB', 'FastAPI'],
      category: 'Cloud',
      tags: ['FastAPI', 'MongoDB', 'Cloud'],
    },
    {
      id: 4,
      title: 'Volatility Prediction',
      description:
        'Aug 2021 – Jun 2022 • Associated with Dayananda Sagar College of Engineering, BANGALORE. The primary objective of this project was to identify the most effective model for forecasting volatility. This was achieved by comparing various approaches, including mathematical, time series, statistical, and neural network models. The analysis revealed that a multivariate LSTM with two layers performed the best, as its forecasted volatility closely aligned with the target volatility, marking a significant improvement over previous models. Research Paper Publication: International Journal of Engineering Research & Technology (IJERT), Vol. 11 Issue 05, May-2022 (This work is licensed under a Creative Commons Attribution 4.0 International License.).',
      image: prediciton,
      technologies: [
        'python',
        'Deep Learning',
        'Artificial Neural Networks',
        'Financial Modeling',
        'Data Modeling',
        'Data Analysis',
      ],
      category: 'AI/ML',
      tags: ['AI/ML', 'Finance', 'Time Series'],
    },
    {
      id: 5,
      title: 'Agricultural Robot',
      description:
        'Jun 2019 – Sep 2021 • Associated with Dayananda Sagar College of Engineering, BANGALORE. Developed a farmer-friendly IoT-based project designed to automate agricultural tasks such as plowing, sowing, and watering. This agro-technology minimizes human effort and enhances efficiency. The project received recognition as an award-winning innovation, acknowledged by a Brazilian company.',
      image: agriculture,
      technologies: ['Java', 'Internet of Things (IoT)'],
      category: 'IoT/Embedded',
      tags: ['IoT', 'Embedded', 'Java'],
    },
  ];

  // Updated filters to match new tags/categories above
  const filters = ['All', 'AI/ML', 'Flask', 'FastAPI', 'IoT', 'Finance', 'Cloud'];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.tags.includes(activeFilter));

  return (
    <section id="projects" className="py-0 bg-muted/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Featured <span className="text-accent">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Selected projects demonstrating expertise in AI, cloud subscription systems, data-driven
              forecasting, and IoT.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? 'default' : 'outline'}
                onClick={() => setActiveFilter(filter)}
                className="transition-all duration-300"
              >
                {filter}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-card/90 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg 
                         
                         transition-all duration-500 group  border border-accent/10"
                style={{ perspective: '1000px' }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover 
                              brightness-100 "
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-accent/20 to-transparent 
                                  transition-all duration-500"></div>

                  {/* Overlay Buttons (placeholders) */}
                 
                </div>

                {/* Project Content */}
                <div className="p-6 bg-card/95  border-t border-accent/10">
                  <h3
                    className="text-xl font-bold text-card-foreground mb-3 group-hover:text-accent 
                               transition-all duration-300 group-hover:scale-105"
                  >
                    {project.title}
                  </h3>

                  <p
                    className="text-purple-600 mb-4 line-clamp-3 group-hover:text-purple-600 
                               transition-colors duration-300"
                  >
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={tech + index}
                        className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full font-medium
                                 hover:bg-accent/20 hover:scale-105 transition-all duration-300 cursor-pointer
                                 group-hover:animate-bounce border border-accent/20"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links (kept as-is / placeholders) */}
                  <div className="flex space-x-3">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="group/btn hover:scale-105 transition-all duration-300"
                    >
                      <Github
                        size={16}
                        className="group-hover/btn:rotate-12 transition-transform duration-300"
                      />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button (kept commented) */}
          <div className="text-center mt-12">{/* <Button variant="outline" size="lg">View All Projects on GitHub</Button> */}</div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
