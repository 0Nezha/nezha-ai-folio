const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-lg font-semibold">Nezha AIT EL HAD</p>
            <p className="text-sm text-background/70">Web Developer • Data Analyst • AI Enthusiast</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-background/70">
              © 2025 Nezha AIT EL HAD. All rights reserved.
            </p>
            <p className="text-xs text-background/50 mt-1">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;