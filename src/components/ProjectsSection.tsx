import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Perifa",
    desc: "A Perifa foi um projeto desenvolvido para trazer acessibilidade e inclusão na moda para o público periférico, com o objetivo de democratizar o acesso a roupas de qualidade a preços acessíveis.",
    techs: ["Laravel", "PHP", "Node.js", "JavaScript", "HTML", "CSS", "MySQL", "Blade"],
    github: "https://github.com/Peter157097/Perifaa",
  },
  {
    title: "Primeira Escolha",
    desc: "Primeira Escolha é um e-commerce de prata, ouro e de jóias, tanto masculinas quanto femininas, com o objetivo de oferecer uma experiência de compra única e personalizada.",
    techs: ["Laravel", "PHP", "JavaScript", "HTML", "CSS", "MySQL", "Blade"],
    github: "https://github.com/Matheus-Santoz/primeira-escolha",
  },
  {
    title: "LSS",
    desc: "Primeira Escolha é um e-commerce de prata, ouro e de jóias, tanto masculinas quanto femininas, com o objetivo de oferecer uma experiência de compra única e personalizada.",
    techs: ["Laravel", "PHP", "JavaScript", "HTML", "CSS", "MySQL", "Blade"],
    github: "https://github.com/Matheus-Santoz/primeira-escolha",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projetos" className="section-container">
      <h2 className="text-3xl font-bold font-display mb-2">
        Meus <span className="text-gradient">projetos</span>
      </h2>
      <p className="text-muted-foreground mb-10 font-body">
        Passe o <strong className="text-foreground">cursor</strong> — ou <strong className="text-foreground">clique :)</strong>
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="glass-card overflow-hidden group hover:border-primary/50 transition-all duration-300"
          >
            {/* Placeholder imagem */}
            <div className="w-full h-48 bg-secondary flex items-center justify-center">
              <span className="text-muted-foreground text-sm font-body">Imagem placeholder</span>
            </div>

            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold text-foreground font-display">{project.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-body">{project.desc}</p>

              <div className="flex flex-wrap gap-2">
                {project.techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20 font-body"
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
