import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="container max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
            Let's grow your{" "}
            <span className="text-gradient">store</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Tell us about your project and we'll get back to you within 24 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <Input
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="h-12 bg-secondary border-0 focus-visible:ring-primary"
          />
          <Input
            name="email"
            type="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            required
            className="h-12 bg-secondary border-0 focus-visible:ring-primary"
          />
          <Input
            name="company"
            placeholder="Company name (optional)"
            value={formData.company}
            onChange={handleChange}
            className="h-12 bg-secondary border-0 focus-visible:ring-primary"
          />
          <Textarea
            name="message"
            placeholder="Tell us about your project..."
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="bg-secondary border-0 focus-visible:ring-primary resize-none"
          />
          <Button type="submit" variant="hero" size="lg" className="w-full">
            Send message
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
