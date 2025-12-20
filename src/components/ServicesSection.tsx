import { ShoppingCart, Palette, Code, Megaphone, TrendingUp, BarChart3 } from "lucide-react";

const services = [
  {
    icon: ShoppingCart,
    title: "E-commerce Strategy",
    description: "We analyze your market and competition",
    color: "bg-orange-400"
  },
  {
    icon: Palette,
    title: "Store Design",
    description: "Beautiful, conversion-focused designs",
    color: "bg-amber-400"
  },
  {
    icon: Code,
    title: "Development",
    description: "Fast, reliable custom platforms",
    color: "bg-yellow-400"
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Targeted campaigns that drive ROI",
    color: "bg-orange-500"
  },
  {
    icon: TrendingUp,
    title: "Optimization",
    description: "Data-driven testing and analytics",
    color: "bg-amber-500"
  },
  {
    icon: BarChart3,
    title: "Growth Consulting",
    description: "Expert guidance to scale your business",
    color: "bg-yellow-500"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-primary">
      <div className="container">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center text-primary-foreground mb-16 md:mb-20">
          Everything you need to succeed
        </h2>

        {/* First row - 4 items on large screens */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
          {services.slice(0, 4).map((service) => (
            <div key={service.title} className="flex flex-col items-center text-center group">
              <div className={`w-20 h-20 md:w-24 md:h-24 rounded-full ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <service.icon className="w-10 h-10 md:w-12 md:h-12 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-primary-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm md:text-base text-primary-foreground/70">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Second row - 2 items centered */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-8 md:gap-12 max-w-xl mx-auto">
          {services.slice(4, 6).map((service) => (
            <div key={service.title} className="flex flex-col items-center text-center group">
              <div className={`w-20 h-20 md:w-24 md:h-24 rounded-full ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <service.icon className="w-10 h-10 md:w-12 md:h-12 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-primary-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm md:text-base text-primary-foreground/70">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;