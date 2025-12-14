import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import fashionImage from "@/assets/case-fashion.jpg";
import skincareImage from "@/assets/case-skincare.jpg";
import techImage from "@/assets/case-tech.jpg";
const caseStudies = [{
  image: fashionImage,
  category: "Fashion & Apparel",
  title: "Luxury Fashion Brand",
  metric: "300% increase in conversion rate"
}, {
  image: skincareImage,
  category: "Health & Beauty",
  title: "Organic Skincare Co.",
  metric: "$2M+ revenue in first year"
}, {
  image: techImage,
  category: "Tech Retail",
  title: "Tech Accessories Store",
  metric: "500K monthly visitors"
}];
const CaseStudiesSection = () => {
  return <section id="work" className="py-24 md:py-32 bg-primary">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-primary-foreground">
            We give brands{" "}
            <span className="text-gradient">dream launches</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {caseStudies.map((study, index) => <div key={study.title} className="group cursor-pointer" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-5">
                <img src={study.image} alt={study.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-2 block">
                {study.category}
              </span>
              <h3 className="text-xl font-bold mb-2 transition-colors text-primary-foreground">
                {study.title}
              </h3>
              <p className="text-sm text-primary-foreground">
                {study.metric}
              </p>
            </div>)}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="group">
            View all case studies
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>;
};
export default CaseStudiesSection;