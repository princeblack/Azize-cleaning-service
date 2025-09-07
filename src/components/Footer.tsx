import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import logo from "@/assets/logo.png";
const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
              src={logo} 
              alt="Azize Sankande Logo" 
              className="h-16 w-16 object-cover rounded-full shadow-lg"
            />
              <div>
                <h3 className="text-xl font-bold">Azize Sankande</h3>
                <p className="text-sm opacity-90">Reinigungsservice</p>
              </div>
            </div>
            <p className="text-sm opacity-90">
              Ihr vertrauensvoller Partner für professionelle Reinigungsdienstleistungen 
              in der Region. Qualität und Zuverlässigkeit seit 2019.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Unsere Leistungen</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><a href="#" className="hover:opacity-100 transition-opacity">Haushaltsreinigung</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Büroreinigung</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Tiefenreinigung</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Fensterreinigung</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Umzugsreinigung</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><a href="#home" className="hover:opacity-100 transition-opacity">Startseite</a></li>
              <li><a href="#services" className="hover:opacity-100 transition-opacity">Leistungen</a></li>
              <li><a href="#about" className="hover:opacity-100 transition-opacity">Über uns</a></li>
              <li><a href="#contact" className="hover:opacity-100 transition-opacity">Kontakt</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Datenschutz</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Kontakt</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4" />
                <span>+49 159 026 650 04</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4" />
                <span>kontakt@azizesankande.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4" />
                <span>Hofackerzeile 2<br />13627 Berlin</span>
              </div>
            </div>


          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-90">
          <p>&copy; 2025 Azize Sankande Reinigungsservice. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;