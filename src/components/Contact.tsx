import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      info: "+49 123 456 789",
      subInfo: "Mo-Fr 8:00-18:00"
    },
    {
      icon: Mail,
      title: "E-Mail",
      info: "info@azize-sankande.de",
      subInfo: "24/7 Antwort"
    },
    {
      icon: MapPin,
      title: "Standort",
      info: "Musterstraße 123",
      subInfo: "12345 Musterstadt"
    },
    {
      icon: Clock,
      title: "Arbeitszeiten",
      info: "Mo-Sa 8:00-20:00",
      subInfo: "Notfälle 24/7"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Kontaktieren Sie uns noch heute
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Bereit für eine saubere Lösung? Kontaktieren Sie uns für ein kostenloses Angebot 
            oder um Ihre Reinigungsanforderungen zu besprechen.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6">Kontaktinformationen</h3>
            
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{item.title}</h4>
                  <p className="text-foreground">{item.info}</p>
                  <p className="text-sm text-muted-foreground">{item.subInfo}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-background border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Kostenloses Angebot anfordern</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Vorname</label>
                    <Input placeholder="Ihr Vorname" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Nachname</label>
                    <Input placeholder="Ihr Nachname" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">E-Mail</label>
                    <Input type="email" placeholder="ihre.email@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Telefon</label>
                    <Input type="tel" placeholder="+49 123 456 789" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Service benötigt</label>
                  <select className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground">
                    <option>Haushaltsreinigung</option>
                    <option>Büroreinigung</option>
                    <option>Tiefenreinigung</option>
                    <option>Sonstige</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Nachricht</label>
                  <Textarea 
                    placeholder="Beschreiben Sie Ihre Reinigungsanforderungen..."
                    className="min-h-[120px]"
                  />
                </div>

                <Button variant="hero" size="lg" className="w-full">
                  Kostenlos anfragen
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  Wir antworten innerhalb von 24 Stunden und respektieren Ihre Privatsphäre.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;