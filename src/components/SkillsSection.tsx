
// export default SkillsSection;
import { useState, useEffect } from 'react';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skillCategories = [
    {
      title: "Programming Languages & IDEs",
      skills: [
        { name: "Python", level: 98 },
        { name: "R", level: 85 },
        { name: "SQL", level: 95 },
        { name: "Jupyter Notebook", level: 92 },
        { name: "Google Colab", level: 90 }
      ]
    },
    {
      title: "Machine Learning & Deep Learning",
      skills: [
        { name: "Decision Trees", level: 92 },
        { name: "Random Forests", level: 90 },
        { name: "XGBoost", level: 92 },
        { name: "CNNs", level: 95 },
        { name: "RNNs", level: 90 },
        { name: "K-Means", level: 88 },
        { name: "PCA", level: 85 }
      ]
    },
    {
      title: "AI & Generative AI",
      skills: [
        { name: "LangChain", level: 95 },
        { name: "LangGraph", level: 92 },
        { name: "LlamaIndex", level: 90 },
        { name: "RAG", level: 95 },
        { name: "GPT-4", level: 90 },
        { name: "LLaMA", level: 88 }
      ]
    },
    {
      title: "Deep Learning Frameworks & Libraries",
      skills: [
        { name: "TensorFlow", level: 95 },
        { name: "PyTorch", level: 92 },
        { name: "Keras", level: 90 },
        { name: "Scikit-learn", level: 95 },
        { name: "Pandas", level: 98 },
        { name: "NumPy", level: 95 },
        { name: "PySpark", level: 88 }
      ]
    },
    {
      title: "NLP & Vector Databases",
      skills: [
        { name: "BERT", level: 92 },
        { name: "NER", level: 96 },
        { name: "SpaCy", level: 90 },
        { name: "NLTK", level: 88 },
        { name: "Pinecone", level: 95 },
        { name: "FAISS", level: 92 },
        { name: "Weaviate", level: 85 },
        { name: "Neo4j", level: 88 }
      ]
    },
    {
      title: "Cloud Platforms & MLOps",
      skills: [
        { name: "AWS SageMaker", level: 95 },
        { name: "AWS Lambda", level: 90 },
        { name: "Azure", level: 88 },
        { name: "Docker", level: 95 },
        { name: "Kubernetes", level: 85 },
        { name: "CI/CD Pipelines", level: 90 }
      ]
    },
    {
      title: "Data Visualization & Databases",
      skills: [
        { name: "Tableau", level: 95 },
        { name: "Power BI", level: 92 },
        { name: "PostgreSQL", level: 95 },
        { name: "MongoDB", level: 90 },
        { name: "SQL Server", level: 88 },
        { name: "MySQL", level: 85 }
      ]
    },
    {
      title: "Additional Tools",
      skills: [
        { name: "Matplotlib", level: 90 },
        { name: "Seaborn", level: 88 },
        { name: "SciPy", level: 85 },
        { name: "RESTful APIs", level: 95 },
        { name: "Milvus", level: 82 }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const skillsElement = document.getElementById('skills');
    if (skillsElement) {
      observer.observe(skillsElement);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Technical <span className="text-accent">Skills</span>
            </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">     
              Expertise in AI/ML, Generative AI, Deep Learning frameworks, and cloud-based MLOps with comprehensive knowledge of data engineering and visualization.                       
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                  {category.title}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-foreground font-medium">{skill.name}</span>
                        <span className="text-accent font-semibold">{skill.level}%</span>
                      </div>
                      
                      <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-accent to-secondary rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${categoryIndex * 100 + skillIndex * 100}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="grid sm:grid-cols-3 gap-8">
                            <div className="p-6 bg-card rounded-lg shadow-lg">
                <div className="text-3xl font-bold text-accent mb-2">4+</div>   
                <div className="text-muted-foreground">Years Experience</div>   
              </div>
              <div className="p-6 bg-card rounded-lg shadow-lg">
                <div className="text-3xl font-bold text-accent mb-2">20+</div>  
                <div className="text-muted-foreground">AI & Data Projects</div> 
              </div>
              <div className="p-6 bg-card rounded-lg shadow-lg">
                <div className="text-3xl font-bold text-accent mb-2">50+</div>  
                <div className="text-muted-foreground">Technologies Mastered</div>                                                                              
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
