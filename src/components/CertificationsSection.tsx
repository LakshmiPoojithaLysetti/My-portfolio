
import { Badge, Calendar, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CertificationsSection = () => {
  const certifications = [
    {
      title: "AZ-900 Azure Fundamentals",
      issuer: "Microsoft",
      date: "2023",
      credentialId: "AZ900-LPL-001",
      description: "Microsoft Certified in Azure cloud fundamentals, covering core services, solutions, and cloud concepts.",
      skills: ["Azure", "Cloud Computing", "Infrastructure", "Security"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Generative AI Fundamentals",
      issuer: "Databricks",
      date: "2023",
      credentialId: "GENAI-DBX-002",
      description: "Completed Databricks certification focusing on generative AI concepts, large language models, and practical applications.",
      skills: ["Generative AI", "LLMs", "Databricks", "AI Applications"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "RAG and Fine-Tuning",
      issuer: "LinkedIn Learning",
      date: "2023",
      credentialId: "RAG-LLL-003",
      description: "LinkedIn Learning certification on Retrieval-Augmented Generation and domain-specific LLM fine-tuning.",
      skills: ["RAG", "LangChain", "Vector Databases", "LLM Fine-Tuning"],
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="certifications" className="py-10 bg-muted/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Professional <span className="text-accent">Certifications</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Industry-recognized certifications showcasing expertise in cloud computing, generative AI, and LLM fine-tuning.
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                {/* Header with Gradient */}
                <div className={`h-2 bg-gradient-to-r ${cert.color}`}></div>
                
                <div className="p-6">
                  {/* Certification Icon */}
                  <div className="flex justify-between items-start mb-4">
                    <div className={`bg-gradient-to-r ${cert.color} p-3 rounded-lg`}>
                      <Badge className="w-6 h-6 text-white" />
                    </div>
                    <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ExternalLink size={16} />
                    </Button>
                  </div>

                  {/* Certification Title */}
                  <h3 className="text-lg font-bold text-card-foreground mb-2 line-clamp-2">
                    {cert.title}
                  </h3>

                  {/* Issuer and Date */}
                  <div className="text-accent font-semibold mb-1">{cert.issuer}</div>
                  <div className="flex items-center text-muted-foreground text-sm mb-3">
                    {/* <Calendar className="w-4 h-4 mr-1" />
                    Earned {cert.date} */}
                  </div>

                  {/* Description */}
                  <p className="text-purple-600 text-sm mb-4 leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Skills */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Credential ID */}
                  {/* <div className="text-xs text-muted-foreground border-t border-border pt-3">
                    Credential ID: {cert.credentialId}
                  </div> */}
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-16 text-center">
            <div className="grid sm:grid-cols-3 gap-8">
              <div className="p-6 bg-card rounded-lg shadow-lg">
                <div className="text-3xl font-bold text-accent mb-2">3+</div>
                <div className="text-black">Professional Certifications</div>
              </div>
              <div className="p-6 bg-card rounded-lg shadow-lg">
                <div className="text-3xl font-bold text-accent mb-2">3</div>
                <div className="text-black">Specialized Domains</div>
              </div>
              <div className="p-6 bg-card rounded-lg shadow-lg">
                <div className="text-3xl font-bold text-accent mb-2">2024</div>
                <div className="text-black">Latest Certification</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
