const stats = [
  { value: "$50M+", label: "Revenue Generated" },
  { value: "200+", label: "Stores Launched" },
  { value: "3.5x", label: "Avg. Revenue Growth" },
  { value: "98%", label: "Client Satisfaction" },
];

const StatsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-primary">
      <div className="container">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-center text-primary-foreground mb-16">
          The numbers speak for themselves
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground mb-3">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-primary-foreground/60 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
