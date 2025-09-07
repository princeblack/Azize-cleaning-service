import { Button } from "@/components/ui/button";
import { CheckCircle, Star } from "lucide-react";
import heroImage from "@/assets/azize-sankande.png";

const Hero = () => {
  return (
    <section id="home" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-light/30 to-background"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">4.9/5 Kundenbewertung</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Qualitätsreinigung für Ihren
                <span className="text-primary block">Seelenfrieden</span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-lg">
                Professionelle Reinigungsdienstleistungen für Ihr Zuhause und Büro. 
                Zuverlässig, gründlich und mit Liebe zum Detail.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-3">
              {[
                "Kostenlose Beratung und Kostenvoranschlag",
                "Versichert und bonded für Ihren Schutz",
                "Umweltfreundliche Reinigungsprodukte"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-base">
                Kostenlos anfragen
              </Button>
              <Button variant="outline" size="lg" className="text-base">
                Unsere Leistungen
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Professionelle Reinigungskraft" 
                className=" h-[700px]
                 object-cover bg-center
                 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating stats */}
            <div className="absolute -bottom-6 -left-6 bg-background rounded-xl p-6 shadow-xl border">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Zufriedene Kunden</div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-background rounded-xl p-6 shadow-xl border">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">5</div>
                <div className="text-sm text-muted-foreground">Jahre Erfahrung</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;