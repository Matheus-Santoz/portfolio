import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const skills = [
  { name: "PHP", desc: "É a minha linguagem de principal uso no back-end. Tenho familiaridade com seus recursos e busco me aprofundar cada vez mais." },
  { name: "Laravel", desc: "É o framework que mais utilizo para desenvolvimento web. Trabalho com controllers, models, migrations e toda a estrutura MVC." },
  { name: "HTML", desc: "Foi o primeiro conceito que aprendi nessa trajetória e um dos que mais reforço. Considero como um arroz e feijão, ando sempre estudando e praticando." },
  { name: "CSS", desc: "Reforço tanto quanto o HTML, busco sempre aprender mais sobre suas propriedades para ter o layout responsivo da maneira mais limpa possível." },
  { name: "JavaScript", desc: "Uso JavaScript para adicionar interatividade aos meus projetos, tornando-os mais dinâmicos e animados." },
  { name: "Python", desc: "Usei Python durante meu curso técnico, principalmente para automação de tarefas e desenvolvimento de scripts simples." },
  { name: "Git", desc: "Usei o Git para facilitar o versionamento dos meus projetos, o que me ajudou a evitar problemas com versões." },
  { name: "MySQL", desc: "Utilizei durante os 3 anos do meu curso técnico para armazenar e manejar dados de forma eficiente em projetos pessoais e acadêmicos." },
];

const SkillsSection = () => {
  const [current, setCurrent] = useState(0);
  const isMobile = useIsMobile();
  const visibleCount = isMobile ? 1 : 3;

  const next = () => setCurrent((prev) => Math.min(prev + 1, skills.length - visibleCount));
  const prev = () => setCurrent((prev) => Math.max(prev - 1, 0));

  return (
    <section id="habilidades" className="section-container">
      <h2 className="text-2xl md:text-3xl font-bold font-display mb-2">
        Com o que eu <span className="text-gradient">trabalho?</span>
      </h2>
      <p className="text-muted-foreground mb-10 font-body text-sm md:text-base">
        Além de ter adquirido outras softskills em empresas anteriores, como trabalho em equipe e uma boa comunicação:
      </p>

      <div className="relative">
        <button
          onClick={prev}
          disabled={current === 0}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 z-10 w-8 h-8 md:w-10 md:h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors disabled:opacity-30"
        >
          <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
        </button>

        <div className="overflow-hidden mx-6 md:mx-8">
          <div
            className="flex gap-4 md:gap-6 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${current * (100 / visibleCount)}%)` }}
          >
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="glass-card p-5 md:p-6 flex-shrink-0"
                style={{ width: `calc(${100 / visibleCount}% - ${isMobile ? '0rem' : '1rem'})` }}
              >
                <h3 className="text-lg md:text-xl font-bold text-primary mb-3 font-display">{skill.name}</h3>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed font-body">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={next}
          disabled={current >= skills.length - visibleCount}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 z-10 w-8 h-8 md:w-10 md:h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors disabled:opacity-30"
        >
          <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
        </button>
      </div>
    </section>
  );
};

export default SkillsSection;
