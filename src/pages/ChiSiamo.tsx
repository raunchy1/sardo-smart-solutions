import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import SEO from "@/components/SEO";
import { Award, Heart, Users, MapPin } from "lucide-react";

const values = [
  { icon: Heart, title: "Calore", desc: "Portiamo calore nelle case dei sardi con soluzioni efficienti e sostenibili." },
  { icon: Award, title: "Qualità", desc: "Solo prodotti delle migliori marche, installati con competenza certificata." },
  { icon: Users, title: "Famiglia", desc: "Un'azienda familiare che tratta ogni cliente come parte della famiglia." },
  { icon: MapPin, title: "Territorio", desc: "Radicati in Ogliastra, operiamo in tutta la Sardegna con passione." },
];

export default function ChiSiamo() {
  return (
    <div>
      <section className="pt-20 pb-10 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-primary text-sm font-medium uppercase tracking-widest mb-4">La Nostra Storia</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display text-4xl md:text-5xl font-bold mb-6">
            Chi Siamo
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-muted-foreground text-lg leading-relaxed">
            Da oltre vent'anni, Murgia F.lli S.n.c. è il punto di riferimento per il comfort domestico in Ogliastra e in tutta la Sardegna.
          </motion.p>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>Fondata dai fratelli Murgia ad Arzana, nel cuore dell'Ogliastra, la nostra azienda nasce dalla passione per la termoidraulica e dall'amore per il territorio sardo. Quello che è iniziato come un piccolo laboratorio artigianale si è evoluto in un centro Expert City completo, capace di offrire soluzioni a 360 gradi per il comfort della casa.</p>
            <p>Nel corso degli anni abbiamo affinato le nostre competenze: dalla progettazione e installazione di stufe a pellet e legna slim canalizzabili, fino ai sistemi solari termici e fotovoltaici con Conto Termico, passando per caldaie, impianti radianti, pavimenti riscaldati e caminetti di design.</p>
            <p>La nostra evoluzione in Expert City Arzana ci ha permesso di ampliare l'offerta con elettrodomestici grandi e piccoli delle migliori marche – Samsung, Bosch, Beko, Haier – oltre a TV, telefonia, informatica, gaming e tutto ciò che serve per la casa moderna.</p>
            <p>Oggi serviamo clienti in tutta la Sardegna, dalla provincia di Nuoro a Cagliari, da Tortolì a Ussassai, con sopralluoghi gratuiti e un servizio post-vendita che ci rende unici nel territorio.</p>
          </div>
          <div className="bg-card border border-border rounded-2xl p-8 space-y-6">
            <h3 className="font-display text-2xl font-semibold text-center mb-8">I Nostri Numeri</h3>
            {[
              ["20+", "Anni di esperienza"],
              ["1000+", "Installazioni completate"],
              ["100%", "Copertura Sardegna"],
              ["5★", "Soddisfazione clienti"],
            ].map(([num, label], i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="text-3xl font-bold text-primary font-display min-w-[80px]">{num}</span>
                <span className="text-muted-foreground">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-card/50">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-medium uppercase tracking-widest mb-2">I Nostri Valori</p>
          <h2 className="font-display text-3xl font-bold">Cosa ci Guida</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }} className="bg-card border border-border rounded-lg p-6 text-center glow-orange-hover">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <v.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
