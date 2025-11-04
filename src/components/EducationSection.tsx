

import { GraduationCap, Award, BookOpen } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "California State University, Fullerton",
      location: "Fullerton, CA",
      period: "Aug 2023 - May 2025",
      gpa: "",
      description: "Graduate studies focused on advanced topics in AI, machine learning, and cloud-based data engineering.",
      courses: ["Advance Algorithms", "Advance Software Process", "Advanced Computer Graphics", "Advanced Blockchain Technologies","web-backend Engineering","Modern Software Management"]
    },
    {
      degree: "Bachelor of Technology in Computer Science",
      school: "Dayananda Sagar College of Engineering",
      location: "Bangalore, KA, India",
      period: "Jun 2018 - Jun 2022",
      gpa: "",
      description: "Undergraduate studies in computer science with strong foundation in programming, algorithms, and software engineering.",
      courses: ["Computer Graphics", "Full stack development", "Database Management Systems", "Data Science", "Machine Learning", "Data Structures and Applications","Mobile Computing and Mobile Application Development"]
    }
  ];

  const achievements = [
    {
      title: "AZ-900 Azure Fundamentals",
      description: "Microsoft Certified in Azure cloud fundamentals, covering core services and solutions.",
      icon: Award
    },
    {
      title: "Generative AI Fundamentals",
      description: "Completed Databricks certification focusing on generative AI concepts, LLMs, and applications.",
      icon: BookOpen
    },
    {
      title: "RAG and Fine-Tuning",
      description: "LinkedIn Learning certification on Retrieval-Augmented Generation and domain-specific LLM fine-tuning.",
      icon: GraduationCap
    }
  ];

  return (
    <section id="education" className="py-10 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              <span className="text-accent">Education</span> & Certifications
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Solid academic foundation in computer science with certifications in cloud computing and generative AI.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education Timeline */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Academic Background</h3>
              
              {education.map((edu, index) => (
                <div key={index} className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <GraduationCap className="w-6 h-6 text-accent" />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-card-foreground mb-2">
                        {edu.degree}
                      </h4>
                      
                      <div className="text-accent font-semibold mb-1">{edu.school}</div>
                      {/* Location & Period in Black */}
                      <div className="text-purple-600 text-sm mb-2">
                        {edu.location} • {edu.period} {edu.gpa && `• GPA: ${edu.gpa}`}
                      </div>
                      
                      {/* Description in Black */}
                      <p className="text-black mb-4 leading-relaxed">
                        {edu.description}
                      </p>
                      
                      <div>
                        <h5 className="font-semibold text-card-foreground mb-2">Relevant Coursework:</h5>
                        <div className="flex flex-wrap gap-2">
                          {edu.courses.map((course, courseIndex) => (
                            <span
                              key={courseIndex}
                              className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Achievements & Recognition */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Certifications & Recognition</h3>
              
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="flex items-start space-x-4">
                      <div className="bg-secondary/10 p-3 rounded-lg">
                        <achievement.icon className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-card-foreground mb-2">
                          {achievement.title}
                        </h4>
                        {/* Certification Description in Black */}
                        <p className="text-purple-600">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="bg-gradient-to-br from-accent/5 to-secondary/5 p-6 rounded-lg border border-accent/20">
                <h4 className="font-bold text-foreground mb-3">Continuous Learning</h4>
                <p className="text-muted-foreground mb-4">
                  Actively expanding skills and staying updated with technology trends through:
                </p>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Online courses and certifications</li>
                  <li>• AI and data science workshops</li>
                  <li>• Research in generative AI and LLM fine-tuning</li>
                  <li>• Collaboration in tech communities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

