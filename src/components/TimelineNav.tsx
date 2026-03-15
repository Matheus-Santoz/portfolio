const sections = [
  { id: "apresentacao", label: "Apresentação" },
  { id: "sobre", label: "Sobre mim" },
  { id: "habilidades", label: "Habilidades" },
  { id: "projetos", label: "Projetos" },
];

const TimelineNav = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 px-6 bg-background/80 backdrop-blur-md border-b border-border/30">
      <div className="max-w-5xl mx-auto flex items-center justify-center gap-8">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors font-display"
          >
            {section.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default TimelineNav;
