import { Button } from "@/components/ui/button";
import { Menu, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={logo} 
              alt="Azize Sankande Logo" 
              className="h-14 w-14 object-cover rounded-full"
            />
            <div>
              <h1 className="text-xl font-bold text-primary">Azize Sankande</h1>
              <p className="text-xs text-muted-foreground">Reinigungsservice</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Startseite</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Leistungen</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">Über uns</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Kontakt</a>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm">
              <Phone className="h-4 w-4 text-primary" />
              <span>+49 159 026 650 04</span>
            </div>
            <Button variant="hero" size="sm">
              Kostenlos anfragen
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;