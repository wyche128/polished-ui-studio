import testimonialImage from "@/assets/testimonial-bg.jpg";
const TestimonialSection = () => {
  return <section id="about" className="py-24 md:py-32 bg-primary-glow text-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-xs font-semibold uppercase tracking-wider mb-4 block text-primary-foreground">
              What our clients say
            </span>
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-8 text-white">
              "I couldn't have asked for a better partner to grow my business."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-lg font-bold text-primary-foreground">SJ</span>
              </div>
              <div>
                <div className="font-semibold text-primary-foreground">Sarah Johnson</div>
                <div className="text-sm text-primary-foreground">Founder, Luna Boutique</div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img src={testimonialImage} alt="Team collaboration" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default TestimonialSection;