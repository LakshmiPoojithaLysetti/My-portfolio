

import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    // { name: "About", href: "#about" },
    // { name: "Experience", href: "#experience" },
    // { name: "Skills", href: "#skills" },
    // { name: "Projects", href: "#projects" },
    // { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    // { icon: Github, href: "https://github.com/lakshmipoojitha", label: "GitHub" }, // From resume
    { icon: Linkedin, href: "https://linkedin.com/in/lakshmipoojitha", label: "LinkedIn" }, // From resume
    { icon: Mail, href: "mailto:lakshmi.poojitha@example.com", label: "Email" } // From resume
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Lakshmi Poojitha</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Passionate AI/ML Engineer & Data Scientist crafting intelligent, 
                scalable solutions using advanced analytics and modern technologies.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary-foreground/10 p-2 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              {/* <h4 className="text-lg font-semibold">Quick Links</h4> */}
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 hover:underline"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Get In Touch</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <p>lysettilakshmipoojitha@gmail.com</p> {/* From resume */}
                <p> +1 (216) 924-6027</p> {/* From resume */}
                <p>Fullerton, CA</p> {/* From resume */}
              </div>
              <div className="pt-2">
                <span className="text-sm text-primary-foreground/60">
                  Available for AI/ML & Data Science opportunities
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-primary-foreground/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
           {/* <p className="text-primary-foreground/60 text-sm mb-4 md:mb-0 text-center"> */}
           <p className="text-primary-foreground/60 text-sm mb-4 md:mb-0 text-center ">


                © {currentYear} Lakshmi Poojitha. All rights reserved.
              </p>
              
              <div className="flex items-center space-x-2 text-primary-foreground/60 text-sm">
                {/* <span>Built with</span>
                <Heart size={16} className="text-accent" />
                <span>using React & Tailwind CSS</span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
