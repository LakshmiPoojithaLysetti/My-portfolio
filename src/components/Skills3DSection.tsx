import { useState, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';

const Skills3DSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
const skillCategories = [
  {
    title: "Programming & IDEs",
    color: "from-purple-500 to-purple-700",
    skills: [
      { name: "Python", level: 98, icon: "🐍" },
      { name: "R", level: 85, icon: "📊" },
      { name: "SQL", level: 95, icon: "🗄️" },
      { name: "Jupyter Notebook", level: 92, icon: "📓" },
      { name: "Google Colab", level: 90, icon: "☁️" }
    ]
  },
  {
    title: "ML & Deep Learning",
    color: "from-purple-500 to-purple-700",
    skills: [
      { name: "Decision Trees", level: 92, icon: "🌳" },
      { name: "Random Forests", level: 90, icon: "🌲" },
      { name: "XGBoost", level: 92, icon: "⚡" },
      { name: "CNNs", level: 95, icon: "🧠" },
      { name: "RNNs", level: 90, icon: "🔄" },
      { name: "K-Means", level: 88, icon: "🔵" },
      { name: "PCA", level: 85, icon: "📉" }
    ]
  },
  {
    title: "AI & Generative AI",
    color: "from-purple-500 to-purple-700",
    skills: [
      { name: "LangChain", level: 95, icon: "🔗" },
      { name: "LangGraph", level: 92, icon: "📊" },
      { name: "LlamaIndex", level: 90, icon: "🦙" },
      { name: "RAG", level: 95, icon: "🔍" },
      { name: "GPT-4", level: 90, icon: "🤖" },
      { name: "LLaMA", level: 88, icon: "🦙" },
      { name: "Claude", level: 87, icon: "💬" }
    ]
  },
  {
    title: "Frameworks & Libraries",
    color: "from-purple-500 to-purple-700",
    skills: [
      { name: "TensorFlow", level: 95, icon: "⚙️" },
      { name: "PyTorch", level: 92, icon: "🔥" },
      { name: "Keras", level: 90, icon: "🎯" },
      { name: "Scikit-learn", level: 95, icon: "📚" },
      { name: "Pandas", level: 98, icon: "🐼" },
      { name: "NumPy", level: 95, icon: "🔢" },
      { name: "PySpark", level: 88, icon: "⚡" }
    ]
  },
      {
      title: "NLP & Vector DBs",
      color: "from-purple-500 to-purple-700",
      skills: [
        { name: "BERT", level: 92, icon: "📝" },
        { name: "NER", level: 96, icon: "🏷️" },
        { name: "SpaCy", level: 90, icon: "🌐" },
        { name: "NLTK", level: 88, icon: "📖" },
        { name: "Pinecone", level: 95, icon: "🌲" },
        { name: "FAISS", level: 92, icon: "🚀" },
        { name: "Weaviate", level: 85, icon: "🔍" },
        { name: "Neo4j", level: 88, icon: "🕸️" }
      ]
    },
  {
    title: "Cloud & MLOps",
    color: "from-purple-500 to-purple-700",
    skills: [
      { name: "AWS SageMaker", level: 95, icon: "☁️" },
      { name: "AWS Lambda", level: 90, icon: "⚡" },
      { name: "Azure", level: 88, icon: "🔷" },
      { name: "Docker", level: 95, icon: "🐳" },
      { name: "Kubernetes", level: 85, icon: "⚙️" },
      { name: "CI/CD", level: 90, icon: "🔄" }
    ]
  },
  {
    title: "Data Visualization",
    color: "from-purple-500 to-purple-700",
    skills: [
      { name: "Tableau", level: 95, icon: "📊" },
      { name: "Power BI", level: 92, icon: "📈" },
      { name: "Matplotlib", level: 90, icon: "📉" },
      { name: "Seaborn", level: 88, icon: "🎨" }
    ]
  },
  {
    title: "Databases & APIs",
    color: "from-purple-500 to-purple-700",
    skills: [
      { name: "PostgreSQL", level: 95, icon: "🐘" },
      { name: "MongoDB", level: 90, icon: "🍃" },
      { name: "SQL Server", level: 88, icon: "🗄️" },
      { name: "MySQL", level: 85, icon: "💾" },
      { name: "RESTful APIs", level: 95, icon: "🌐" }
    ]
  }
];



  useEffect(() => {
     const el = containerRef.current;
     if (!el) return;
     // Trigger earlier on small viewports
     const observer = new IntersectionObserver(
       ([entry]) => setIsVisible(entry.isIntersecting),
       { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
     );
    observer.observe(el);
     return () => observer.disconnect();
   }, []);
   // Fallback for browsers that disable IO in emulation
   useEffect(() => {
     if (typeof window !== 'undefined' && !('IntersectionObserver' in window)) {
       setIsVisible(true);
     }
   }, []);

  return (
    // <section id="skills" className="py-20 bg-background relative overflow-hidden " ref={containerRef}>
    <section
  id="skills"
  ref={containerRef}
  className="py-0 md:py-20 bg-background relative overflow-hidden"
>

      {/* Background 3D Elements */}
      {/* <div className="absolute inset-0"> */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/5 rounded-full animate-float-3d blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/5 rounded-full animate-float-3d blur-xl" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-accent/5 rounded-full animate-float-3d blur-xl" style={{animationDelay: '6s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Technical <span className="text-accent">Skills</span>
            </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">     
              Expertise in AI/ML, Generative AI, Deep Learning frameworks, and cloud-based MLOps with comprehensive knowledge of data engineering and visualization.                                          
            </p>
          </div>

          {/* 3D Skills Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className={`relative group transform transition-all duration-700 ${
                  isVisible ? 'animate-skill-appear' : 'opacity-0'
                }`}
                style={{
                  animationDelay: `${categoryIndex * 200}ms`,
                  perspective: '1000px'
                }}
              >
                {/* <Card className="h-full p-6 backdrop-blur-sm bg-card/80 border-accent/20  */}
                         <Card className="h-full p-6 backdrop-blur-sm 
                               bg-white/85 dark:bg-neutral-900/80 
                               border-accent/20 
                                hover:shadow-[0_25px_50px_-12px_rgba(255,83,61,0.25)] 
                                hover:scale-105 hover:-rotate-1 
                                transition-all duration-500 group-hover:animate-skill-glow">
                               {/* hover:shadow-[0_25px_50px_-12px_rgba(255,83,61,0.25)] 
                               hover:scale-105 hover:-rotate-1 
                               transition-all duration-500 group-hover:animate-skill-glow"> */}
                  
                  {/* Category Header */}
                  <div className="text-center mb-6">
                    {/* <h3 className="text-xl font-bold text-foreground mb-2"> */}
                    <h3 className="text-xl font-bold text-black mb-2">

                      {category.title}
                    </h3>
                    <div className={`h-1 w-16 mx-auto bg-gradient-to-r ${category.color} rounded-full`}></div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="relative group/skill cursor-pointer"
                        onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        {/* Skill Header */}
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <span className="text-lg group-hover/skill:animate-bounce">
                              {skill.icon}
                            </span>
                            <span className="text-black
 font-medium text-sm">
                              {skill.name}
                            </span>
                          </div>
                          <span className={`text-sm font-semibold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                            {skill.level}%
                          </span>
                        </div>

                        {/* 3D Progress Bar */}
                        <div className="relative">
                          <div className="w-full h-2 bg-muted/30 rounded-full overflow-hidden backdrop-blur-sm">
                            <div
                              className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out relative`}
                              style={{
                                width: isVisible ? `${skill.level}%` : '0%',
                                transitionDelay: `${categoryIndex * 200 + skillIndex * 100}ms`,
                                boxShadow: hoveredSkill === `${categoryIndex}-${skillIndex}` 
                                  ? '0 0 20px rgba(255,83,61,0.6)' 
                                  : '0 0 10px rgba(255,83,61,0.3)'
                              }}
                            >
                              {/* Animated Glow Effect */}
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                                            animate-[shimmer_2s_ease-in-out_infinite] opacity-75"></div>
                            </div>
                          </div>
                          
                          {/* 3D Effect Shadow */}
                          <div 
                            className={`absolute top-2 left-0 h-2 bg-gradient-to-r ${category.color} rounded-full blur-sm opacity-30 transition-all duration-1000 ease-out`}
                            style={{
                              width: isVisible ? `${skill.level}%` : '0%',
                              transitionDelay: `${categoryIndex * 200 + skillIndex * 100}ms`
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* Stats Section with 3D Cards */}
          <div className="mt-20">
            <div className="grid sm:grid-cols-3 gap-8">
                            {[
                { number: "4+", label: "Years Experience", delay: "0ms" },      
                { number: "20+", label: "Projects Completed", delay: "200ms" },   
                { number: "50+", label: "Technologies Mastered", delay: "400ms" }                                                                               
              ].map((stat, index) => (
                <div
                  key={index}
                  className="relative group transform transition-all duration-700 hover:scale-110"
                  style={{
                    animationDelay: stat.delay,
                    perspective: '1000px'
                  }}
                >
                  <Card className="p-8 text-center backdrop-blur-sm bg-card/90 border-accent/20 
                                 hover:shadow-[0_35px_60px_-12px_rgba(255,83,61,0.4)] 
                                 hover:rotate-y-6 transition-all duration-500 group-hover:animate-skill-glow">
                    <div className="text-4xl md:text-5xl font-bold text-accent mb-2 animate-bounce-subtle">
                      {stat.number}
                    </div>
                    {/* <div className="text-black font-medium"> */}
                    <div className="text-black font-medium">
                      {stat.label}
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles for Shimmer Effect */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `
      }} />
    </section>
  );
};

export default Skills3DSection;
