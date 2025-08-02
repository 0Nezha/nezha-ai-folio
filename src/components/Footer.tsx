import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="flex items-center justify-center gap-2 text-background/80">
            © 2025 Nezha AIT EL HAD. Made with <Heart className="w-4 h-4 text-red-400" fill="currentColor" /> and passion for innovation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;