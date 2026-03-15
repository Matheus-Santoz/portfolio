import { Mail, Phone, Download } from "lucide-react";
import matheusPhoto from "@/assets/matheus-photo.png";

const HeroSection = () => {
  return (
    <section id="apresentacao" className="min-h-screen flex items-center section-container pt-28 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-[500px] h-[500px] opacity-10">
        <span className="text-[20rem] font-bold text-primary/20 select-none font-display">&lt;/&gt;</span>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-12 w-full">
        <div className="flex-1 space-y-6">
          <p className="text-muted-foreground text-lg font-body">Olá, eu me chamo</p>
          <h1 className="text-5xl md:text-7xl font-bold text-gradient font-display">
            Matheus Santos
          </h1>
          <p className="text-xl text-foreground/80 font-body">
            Sou <span className="text-primary font-semibold">desenvolvedor full-stack em formação</span>
          </p>

          <div className="space-y-3 pt-4">
            <a
              href="mailto:matheus.santo072006@gmail.com"
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5 text-primary" />
              matheus.santo072006@gmail.com
            </a>
            <a
              href="tel:+5511954782603"
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-5 h-5 text-primary" />
              +55 11 95478-2603
            </a>
            <a
              href="/Matheus_Santos.pdf"
              download
              className="inline-flex items-center gap-3 mt-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              <Download className="w-5 h-5" />
              Baixar currículo
            </a>
          </div>
        </div>

        <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-primary/30">
          <img
            src={matheusPhoto}
            alt="Matheus Santos"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;