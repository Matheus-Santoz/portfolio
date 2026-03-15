import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const skills = [
  { name: "HTML", desc: "Foi o primeiro conceito que aprendi nessa trajetória e um dos que mais reforço. Considero como um arroz e feijão, ando sempre estudando e praticando." },
  { name: "CSS", desc: "Reforço tanto quanto o HTML, busco sempre aprender mais sobre suas propriedades para ter o layout responsivo da maneira mais limpa possível." },
  { name: "JavaScript", desc: "Uso JavaScript para adicionar interatividade aos meus projetos, tornando-os mais dinâmicos e animados." },
  { name: "Python", desc: "Usei Python durante meu curso técnico, principalmente para automação de tarefas e desenvolvimento de scripts simples." },
  { name: "PHP", desc: "Usei PHP para fazer o back-end do meu TCC, incluindo sistemas de login, cadastro, autenticação, estoque e sistema de pagamento." },
  { name: "Laravel", desc: "Foi o framework que utilizei para o desenvolvimento do meu TCC na ETEC, controllers, models e migrations." },
  { name: "Git", desc: "Usei o Git para facilitar o versionamento dos meus projetos, o que me ajudou a evitar problemas com versões." },
  { name: "MySQL", desc: "Utilizei durante os 3 anos do meu curso técnico para armazenar e manejar dados de forma eficiente em projetos pessoais e acadêmicos." },
  { name: "VBA", desc: "Estou aprendendo a dominar essa linguagem no tecnólogo. Muito útil para automatizar tarefas no Excel e Word." },
  { name: "Design", desc: "Busco sempre aprender mais, tanto para melhorar a usabilidade dos meus projetos quanto para criar layouts satisfatórios." },
];

const SkillsSection = () => {
  const [current, setCurrent] = useState(0);
  const visibleCount = 3;

  const next = () => setCurrent((prev) => Math.min(prev + 1, skills.length - visibleCount));
  const prev = () => setCurrent((prev) => Math.max(prev - 1, 0));

  return (
    <section id="habilidades" className="section-container">
      <h2 className="text-3xl font-bold font-display mb-2">
        Com o que eu <span className="text-gradient">trabalho?</span>
      </h2>
      <p className="text-muted-foreground mb-10 font-body">
        Além de ter adquirido outras softskills em empresas anteriores, como trabalho em equipe e uma boa comunicação:
      </p>

      <div className="relative">
        <button
          onClick={prev}
          disabled={current === 0}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors disabled:opacity-30"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="overflow-hidden mx-8">
          <div
            className="flex gap-6 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${current * (100 / visibleCount)}%)` }}
          >
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="glass-card p-6 flex-shrink-0"
                style={{ width: `calc(${100 / visibleCount}% - 1rem)` }}
              >
                <h3 className="text-xl font-bold text-primary mb-3 font-display">{skill.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-body">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={next}
          disabled={current >= skills.length - visibleCount}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors disabled:opacity-30"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default SkillsSection;
