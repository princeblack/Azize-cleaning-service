import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Building2, Sparkles, Clock, Shield, Leaf } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Haushaltsreinigung",
      description: "Umfassende Reinigung Ihres Zuhauses mit Liebe zum Detail",
      features: ["Wöchentliche/monatliche Termine", "Alle Räume inklusive", "Flexible Terminplanung"]
    },
    {
      icon: Building2,
      title: "Büroreinigung",
      description: "Professionelle Reinigung für Arbeitsplätze und Geschäftsräume",
      features: ["Tägliche/wöchentliche Reinigung", "Nach Feierabend verfügbar", "Spezialreinigung für Büros"]
    },
    {
      icon: Sparkles,
      title: "Tiefenreinigung",
      description: "Gründliche Reinigung für besondere Anlässe und Umzüge",
      features: ["Einmalige Intensivreinigung", "Umzugsreinigung", "Frühjahrsputz"]
    }
  ];

  const features = [
    {
      icon: Clock,
      title: "Pünktlich & zuverlässig",
      description: "Wir halten unsere Termine ein und sind immer pünktlich"
    },
    {
      icon: Shield,
      title: "Versichert & bonded",
      description: "Vollständig versichert für Ihren Schutz und Seelenfrieden"
    },
    {
      icon: Leaf,
      title: "Umweltfreundlich",
      description: "Wir verwenden nur umweltschonende Reinigungsprodukte"
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Reinigung über die Oberfläche hinaus
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Unsere professionellen Reinigungsdienstleistungen sind darauf ausgelegt, 
            Ihnen Zeit zu sparen und Ihnen ein makelloses Ergebnis zu liefern.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="bg-background border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full">
                  Mehr erfahren
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;