import { ExternalLink } from "lucide-react";
import perifaLogo from "@/assets/perifa-logo.png";
import primeiraEscolhaLogo from "@/assets/primeira-escolha-logo.png";
import lssLogo from "@/assets/lss-logo.png";

const projects = [
  {
    title: "Perifa (TCC)",
    desc: "A Perifa foi o meu TCC, desenvolvido para trazer acessibilidade e inclusão na moda para o público periférico, com o objetivo de democratizar o acesso a roupas de qualidade a preços acessíveis.",
    techs: ["Laravel", "PHP", "Node.js", "JavaScript", "HTML", "CSS", "MySQL", "Blade"],
    github: "https://github.com/Peter157097/Perifaa",
    image: perifaLogo,
  },
  {
    title: "Primeira Escolha",
    desc: "Primeira Escolha é um e-commerce de prata, ouro e de jóias, tanto masculinas quanto femininas, com o objetivo de oferecer uma experiência de compra única e personalizada.",
    techs: ["Laravel", "PHP", "JavaScript", "HTML", "CSS", "MySQL", "Blade"],
    github: "https://github.com/Matheus-Santoz/primeira-escolha",
    image: primeiraEscolhaLogo,
  },
  {
    title: "LSS",
    desc: "A LSS é uma empresa especializada em serviços de pintura e reformas — residenciais e prediais. Com anos de experiência no mercado, oferece soluções personalizadas para tirar sonhos e projetos do papel.",
    techs: ["Laravel", "PHP", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/Matheus-Santoz/LSS-Reformas-e-Pinturas",
    image: lssLogo,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projetos" className="section-container">
      <h2 className="text-2xl md:text-3xl font-bold font-display mb-10">
        Meus <span className="text-gradient">projetos</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="glass-card overflow-hidden group hover:border-primary/50 transition-all duration-300"
          >
            <div className="w-full h-40 md:h-48 bg-secondary overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-5 md:p-6 space-y-3 md:space-y-4">
              <h3 className="text-lg md:text-xl font-bold text-foreground font-display">{project.title}</h3>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed font-body">{project.desc}</p>

              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {project.techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 md:py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20 font-body"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-body"
              >
                <ExternalLink className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
