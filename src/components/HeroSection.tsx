import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-primary overflow-hidden pt-20">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary-glow/30 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 text-center py-20 md:py-32">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground leading-tight mb-6 animate-fade-up">
          We grow{" "}
          <span className="text-gradient">wonderful</span>
          <br />
          online stores
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/70 mb-10 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          For over 6 years, we've been helping e-commerce brands achieve
          extraordinary results that put founders first, not Wall Street.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <Button variant="secondary" size="lg" className="group">
            Start your growth journey
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
