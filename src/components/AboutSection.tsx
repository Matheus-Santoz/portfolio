import { Github, Linkedin, Instagram } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre" className="section-container">
      <h2 className="text-3xl font-bold text-primary font-display inline-block px-4 py-1 rounded-lg bg-primary/10 border border-primary/30 mb-8">
        Sobre mim
      </h2>

      <div className="glass-card p-8 max-w-3xl">
        <p className="text-foreground/80 leading-relaxed font-body">
          Meu nome é Matheus Santos, tenho 19 anos e moro na zona leste da cidade de São Paulo,
          no bairro de Guaianases. Desde cedo, sou apaixonada por tecnologia e encontrei no
          desenvolvimento de sistemas a minha verdadeira vocação. Gosto de desafios e estou sempre
          buscando a melhor solução para cada problema. Concluí o ensino médio técnico em{" "}
          <strong className="text-foreground">Análise e Desenvolvimento de Sistemas</strong> na ETEC de Guaianases e,
          atualmente, estou cursando o tecnólogo na{" "}
          <strong className="text-foreground">Fatec de São Paulo</strong>, no 1º semestre. Continuo aprendendo e me
          aperfeiçoando a cada dia para construir soluções criativas e eficientes.
        </p>
      </div>

      <div className="mt-8">
        <p className="text-muted-foreground text-sm mb-4 font-body">Minhas redes sociais</p>
        <div className="flex gap-4">
          <a href="https://github.com/Matheus-Santoz" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors text-muted-foreground">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/matheus-santos-5a5020385/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors text-muted-foreground">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="https://www.instagram.com/the.teuss/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors text-muted-foreground">
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;