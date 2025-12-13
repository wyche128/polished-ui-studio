const footerLinks = {
  services: [
    { label: "Strategy", href: "#" },
    { label: "Design", href: "#" },
    { label: "Development", href: "#" },
    { label: "Marketing", href: "#" },
  ],
  company: [
    { label: "About", href: "#" },
    { label: "Team", href: "#" },
    { label: "Clients", href: "#" },
    { label: "Contact", href: "#contact" },
  ],
  legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Cookies", href: "#" },
  ],
};

const Footer = () => {
  return (
    <footer className="py-16 md:py-20 bg-foreground text-background">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="text-2xl font-extrabold mb-4 block">
              ecomm
            </a>
            <p className="text-background/60 text-sm leading-relaxed">
              Transforming e-commerce brands into revenue powerhouses.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-background/80">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-background/60 hover:text-background transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-background/80">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-background/60 hover:text-background transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-background/80">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-background/60 hover:text-background transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background/10 text-center">
          <p className="text-sm text-background/40">
            © {new Date().getFullYear()} Ecomm Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
