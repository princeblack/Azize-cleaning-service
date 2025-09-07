import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { sendContactEmail } from "@/lib/emailService";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "Haushaltsreinigung",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const result = await sendContactEmail(formData);
    
    if (result.success) {
      setSubmitStatus('success');
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "Haushaltsreinigung",
        message: ""
      });
    } else {
      setSubmitStatus('error');
    }
    
    setIsSubmitting(false);
  };
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      info: "+49 159 026 650 04",
      subInfo: "Mo-Fr 8:00-18:00"
    },
    {
      icon: Mail,
      title: "E-Mail",
      info: "kontakt@azizesankande.com",
      subInfo: "24/7 Antwort"
    },
    {
      icon: MapPin,
      title: "Standort",
      info: "Hofackerzeile 2",
      subInfo: "13627 Berlin Deutschland"
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
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                    <p className="text-green-800 text-sm font-medium">Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                    <p className="text-red-800 text-sm font-medium">Es gab ein Problem beim Senden Ihrer Nachricht. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.</p>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Vorname</label>
                    <Input 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Ihr Vorname"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Nachname</label>
                    <Input 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Ihr Nachname"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">E-Mail</label>
                    <Input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="ihre.email@example.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Telefon</label>
                    <Input 
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+49 159 026 650 04"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Service benötigt</label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground"
                  >
                    <option value="Büroreinigung">Büroreinigung</option>
                    <option value="Grundreinigun">Grundreinigun</option>
                    <option value="Tiefenreinigung">Tiefenreinigung</option>
                    <option value="Haushaltsreinigung">Haushaltsreinigung</option>
                    <option value="Treppen Reinigung">Treppen Reinigung</option>
                    <option value="Sonstige">Sonstige</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Nachricht</label>
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Beschreiben Sie Ihre Reinigungsanforderungen..."
                    className="min-h-[120px]"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Wird gesendet...' : 'Kostenlos anfragen'}
                </Button>
                </form>

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