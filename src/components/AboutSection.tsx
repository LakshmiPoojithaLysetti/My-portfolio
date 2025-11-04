
import { Code, Database, Cloud, Brain } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: Brain,
      title: "LLM & Generative AI",
      description: "Building LLM-based systems using LangChain, LangGraph, and RAG pipelines with vector databases like Pinecone, FAISS, and Weaviate."
    },
    {
      icon: Code,
      title: "ML & Deep Learning",
      description: "Proficient in Python, TensorFlow, PyTorch, and Scikit-learn for building and deploying production-ready machine learning solutions."
    },
    {
      icon: Cloud,
      title: "Cloud & MLOps",
      description: "Deploying scalable ML pipelines on AWS SageMaker and Azure ML with Docker, Kubernetes, and CI/CD for performance and reproducibility."
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Transforming unstructured data into meaningful insights and intelligent automation with robust data pipelines and vector databases."
    }
  ];

  return (
    <section id="about" className="py-10 bg-muted/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About <span className="text-accent">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">     
              AI/ML Engineer with 4+ years of hands-on experience designing, training, and deploying machine learning, deep learning, and Generative AI solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Hey there! 👋
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">     
                I'm Lakshmi Poojitha Lysetti, an AI/ML Engineer with 4+ years of hands-on experience designing, training, and deploying machine learning, deep learning, and Generative AI (GenAI) solutions that drive real business impact.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">     
                💡 I specialize in building LLM-based systems using LangChain, LangGraph, and RAG pipelines with vector databases like Pinecone, FAISS, and Weaviate. I love transforming unstructured data into meaningful insights and intelligent automation.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">     
                ⚙️ My toolkit includes Python, TensorFlow, PyTorch, Scikit-learn, Docker, Kubernetes, and CI/CD. I've deployed scalable ML pipelines on AWS SageMaker and Azure ML, ensuring performance, reproducibility, and efficiency.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">     
                🌍 Currently, I'm pursuing my Master's in Computer Science at California State University, Fullerton (May 2025) and working at JPMorgan Chase & Co., where I'm leveraging Generative AI and LLMs to revolutionize document intelligence and risk analytics.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">     
                📈 I'm passionate about AI innovation, ethical model deployment, and human-centered automation — always curious, always learning! ✨
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                {["Python", "TensorFlow", "PyTorch", "LangChain", "LangGraph", "AWS SageMaker", "Azure ML", "Pinecone", "FAISS", "Docker", "Kubernetes"].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="p-6 bg-card rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-border"
                >
                  <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <highlight.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="text-lg font-semibold text-card-foreground mb-2">
                    {highlight.title}
                  </h4>
                  <p className="text-purple-600 text-sm">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
