import { useState } from "react";
import { Menu, X } from "lucide-react";

const sections = [
  { id: "apresentacao", label: "Apresentação" },
  { id: "sobre", label: "Sobre mim" },
  { id: "habilidades", label: "Habilidades" },
  { id: "projetos", label: "Projetos" },
];

const TimelineNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 px-6 bg-background/80 backdrop-blur-md border-b border-border/30">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <span className="text-sm font-bold text-primary font-display">Matheus Santos</span>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
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

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-muted-foreground hover:text-primary transition-colors"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden mt-4 pb-2 flex flex-col gap-4">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors font-display px-2"
            >
              {section.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default TimelineNav;
