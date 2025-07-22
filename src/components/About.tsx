import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Award, Users, Clock } from "lucide-react";
import officeImage from "@/assets/office-cleaning.jpg";

const About = () => {
  const stats = [
    { number: "500+", label: "Zufriedene Kunden", icon: Users },
    { number: "5", label: "Jahre Erfahrung", icon: Clock },
    { number: "99%", label: "Kundenzufriedenheit", icon: Award },
    { number: "24/7", label: "Verfügbarkeit", icon: Clock }
  ];

  const features = [
    "Über 5 Jahre Erfahrung in der Branche",
    "Vollständig versichert und bonded",
    "Verwendung hochwertiger, umweltfreundlicher Produkte",
    "Flexible Terminplanung nach Ihren Bedürfnissen"
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-primary">
                Qualität & Innovation
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Qualität und Innovation verpflichtet
              </h2>
              <p className="text-lg text-muted-foreground">
                Bei Azize Sankande stehen Qualität und Kundenzufriedenheit an erster Stelle. 
                Unser erfahrenes Team verwendet modernste Reinigungstechniken und 
                umweltfreundliche Produkte, um Ihnen den bestmöglichen Service zu bieten.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-secondary/50 rounded-lg">
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg">
              Kostenloses Angebot erhalten
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={officeImage} 
                alt="Professionelle Büroreinigung" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Quality badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-full p-6 shadow-xl">
              <div className="text-center">
                <Award className="h-8 w-8 mx-auto mb-2" />
                <div className="text-xs font-medium">Qualitäts-<br />garantie</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;