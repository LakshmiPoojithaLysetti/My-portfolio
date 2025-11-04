
import { Calendar, MapPin, Building } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "AI/ML Engineer",
      company: "JPMorgan Chase & Co.",
      location: "USA",
      period: "October 2024 – Present",
      description: "Developing and deploying large language model pipelines and RAG systems for financial compliance automation and intelligent document processing.",
      achievements: [
        "Developed and deployed large language model (LLM) pipelines using LangGraph, LlamaIndex, and GPT-4 to automate document intelligence for financial compliance reports, reducing manual review time by 42%",
        "Engineered a Retrieval-Augmented Generation (RAG) system integrated with Pinecone and FAISS to retrieve unstructured credit data with <1-second latency, improving analyst decision accuracy by 31%",
        "Trained and fine-tuned transformer models (BERT, LLaMA, Claude) for Named Entity Recognition (NER) to extract entities from trade confirmations and contracts with 96% precision",
        "Implemented scalable TensorFlow pipelines on AWS SageMaker for customer risk scoring, cutting model training cost by 28% through optimized compute instance selection",
        "Automated data ingestion and preprocessing using PySpark and PostgreSQL, enabling near real-time analytics for fraud detection and enhancing pipeline throughput by 2.3×",
        "Orchestrated containerized deployments via Docker, AWS Lambda, and CI/CD workflows, ensuring consistent and version-controlled model releases across environments",
        "Visualized predictive performance and anomaly trends using Tableau, delivering interactive dashboards adopted by senior credit-risk teams for model monitoring",
        "Integrated Generative AI models for conversational query handling within internal analytics tools, improving employee query response efficiency by 38% and reducing support ticket volume"
      ]
    },
    {
      title: "ML Engineer",
      company: "LTIMindtree",
      location: "India",
      period: "August 2020 – July 2023",
      description: "Designed and implemented machine learning models for customer analytics, fraud detection, and predictive analytics using supervised and unsupervised learning techniques.",
      achievements: [
        "Designed and trained supervised models using Decision Trees, Random Forests, Naive Bayes, and XGBoost to predict customer churn and loan default risk, achieving 89% accuracy and reducing manual review time by 35%",
        "Developed deep learning architectures with Recurrent Neural Networks (RNNs) and Convolutional Neural Networks (CNNs) in Keras and PyTorch for sentiment and image classification, improving F1-score by 22% over baseline models",
        "Implemented unsupervised algorithms such as K-Means, DBSCAN, and Principal Component Analysis (PCA) to segment transaction data and detect anomalies, identifying fraud clusters previously missed by rule-based systems",
        "Optimized natural language processing (NLP) workflows using Bidirectional Encoder Representations from Transformers (BERT), Natural Language Toolkit (NLTK), and SpaCy for entity recognition and intent analysis, enhancing text classification precision by 30%",
        "Streamlined large-scale ETL and feature engineering pipelines with PySpark and SQL Server, reducing data preparation time by 40% and improving overall model retraining efficiency",
        "Performed exploratory data analysis (EDA) and hypothesis testing using Python, NumPy, Pandas, and Excel, uncovering actionable insights that informed business strategy and reduced operational costs by 15%",
        "Delivered interactive dashboards via Power BI, integrated with Azure Machine Learning APIs to monitor key metrics and visualize model drift across production environments"
      ]
    }
  ];

  return (
    <section id="experience" className="py-10 bg-muted/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Professional <span className="text-accent">Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A timeline of my journey delivering AI, data engineering, and software solutions in real-world projects.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent/30 transform md:-translate-x-0.5"></div>

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:ml-auto'} md:w-1/2`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-auto md:right-4 w-8 h-8 bg-accent rounded-full border-4 border-background shadow-lg flex items-center justify-center transform md:translate-x-1/2">
                  <Building className="w-4 h-4 text-accent-foreground" />
                </div>

                {/* Experience Card */}
                <div className="ml-12 md:ml-0 bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-card-foreground mb-1">
                        {exp.title}
                      </h3>
                      <div className="text-accent font-semibold">{exp.company}</div>
                    </div>
                    <div className="mt-2 md:mt-0 md:text-right">
                      {/* <div className="flex items-center text-muted-foreground mb-1"> */}
                      {/* <div className="flex items-center text-muted-foreground whitespace-nowrap"> */}
                      <div className="flex items-center text-black whitespace-nowrap">


                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.period}
                      </div>
                      {/* <div className="flex items-center text-muted-foreground"> */}
                      {/* <div className="flex items-center text-muted-foreground whitespace-nowrap"> */}
<div className="flex items-center text-black whitespace-nowrap">

                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-purple-600 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div>
                    <h4 className="font-semibold text-card-foreground mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="text-purple-600 text-sm">
                          • {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
