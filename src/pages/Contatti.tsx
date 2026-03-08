import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import SEO from "@/components/SEO";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contatti() {
  const [form, setForm] = useState({ nome: "", email: "", telefono: "", messaggio: "" });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save locally and show confirmation
    const messages = JSON.parse(localStorage.getItem("murgia-messages") || "[]");
    messages.push({ ...form, date: new Date().toISOString() });
    localStorage.setItem("murgia-messages", JSON.stringify(messages));
    toast({ title: "Messaggio inviato!", description: "Ti risponderemo il prima possibile." });
    setForm({ nome: "", email: "", telefono: "", messaggio: "" });
  };

  return (
    <div>
      <SEO title="Contatti" description="Contatta Murgia F.lli Expert City Arzana: telefono, email, WhatsApp e mappa. Preventivi gratuiti per stufe, solare e climatizzazione." />
      <section className="pt-20 pb-10 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-primary text-sm font-medium uppercase tracking-widest mb-4">Siamo Qui per Te</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-4xl md:text-5xl font-bold mb-6">Contattaci</motion.h1>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-2xl font-bold mb-6">Inviaci un Messaggio</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input placeholder="Nome e Cognome" value={form.nome} onChange={e => setForm({ ...form, nome: e.target.value })} required />
              <Input type="email" placeholder="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
              <Input type="tel" placeholder="Telefono" value={form.telefono} onChange={e => setForm({ ...form, telefono: e.target.value })} />
              <Textarea placeholder="Il tuo messaggio..." rows={5} value={form.messaggio} onChange={e => setForm({ ...form, messaggio: e.target.value })} required />
              <Button type="submit" className="w-full">Invia Messaggio</Button>
            </form>
          </div>

          <div className="space-y-8">
            <h2 className="font-display text-2xl font-bold mb-6">I Nostri Recapiti</h2>
            <div className="space-y-4">
              {[
                { icon: MapPin, label: "Indirizzo", value: "Via Lanusei snc, 08040 Arzana (NU), Sardegna" },
                { icon: Phone, label: "Telefono", value: "0782 37363" },
                { icon: MessageCircle, label: "WhatsApp", value: "+39 320 769 0096" },
                { icon: Mail, label: "Email", value: "murgiafratellisnc@legalmail.it" },
                { icon: Clock, label: "Orari", value: "Lun-Ven 8:30-13:00 / 15:30-19:30 · Sab 8:30-13:00" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{item.label}</p>
                    <p className="text-sm text-muted-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="rounded-lg overflow-hidden border border-border h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3075.5!2d9.52!3d39.92!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sVia+Lanusei+Arzana!5e0!3m2!1sit!2sit!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Mappa Murgia F.lli Arzana"
              />
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
