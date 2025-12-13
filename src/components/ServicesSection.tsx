import { 
  ShoppingCart, 
  Palette, 
  Code, 
  Megaphone, 
  TrendingUp, 
  BarChart3 
} from "lucide-react";

const services = [
  {
    icon: ShoppingCart,
    title: "E-commerce Strategy",
    description: "We analyze your market, competition, and customers to create a winning roadmap.",
  },
  {
    icon: Palette,
    title: "Store Design",
    description: "Beautiful, conversion-focused designs that make each visitor want to buy.",
  },
  {
    icon: Code,
    title: "Development",
    description: "Fast, reliable stores built on Shopify, WooCommerce, or custom platforms.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Targeted campaigns that drive qualified traffic and boost your ROI.",
  },
  {
    icon: TrendingUp,
    title: "Optimization",
    description: "Data-driven testing and analytics to continuously improve your store's performance.",
  },
  {
    icon: BarChart3,
    title: "Growth Consulting",
    description: "Expert guidance to scale your business and maximize profitability.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6">
            Everything you need to{" "}
            <span className="text-gradient">succeed</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We handle every aspect of your e-commerce so you can focus on running your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
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
