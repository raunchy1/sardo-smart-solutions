import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { Flame, Sun, Snowflake, Wrench, Droplets, Zap, Fuel, Search, Brush, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  { icon: Flame, title: "Stufe a Pellet e Legna", desc: "Progettazione, installazione, manutenzione e pulizia di stufe a pellet e legna slim canalizzabili, ideali per riscaldare fino a 103 mq. Modelli di design in grigio metallizzato, rosso e bianco delle migliori marche.", cta: "stufe a pellet" },
  { icon: Droplets, title: "Caldaie e Impianti Radianti", desc: "Installazione caldaie a condensazione, impianti radianti a pavimento, pannelli riscaldanti a parete e caminetti moderni e classici per un comfort totale.", cta: "caldaie e impianti" },
  { icon: Sun, title: "Solare Termico e Fotovoltaico", desc: "Sistemi solari termici (kit ACQUA 300 litri a partire da €998 in promo) e impianti fotovoltaici con accesso al Conto Termico. Risparmio energetico garantito.", cta: "solare termico" },
  { icon: Snowflake, title: "Condizionamento e Pompe di Calore", desc: "Installazione e manutenzione di climatizzatori e pompe di calore delle migliori marche per il massimo comfort in estate e inverno.", cta: "condizionamento" },
  { icon: Zap, title: "Materiali Elettrici e Idrosanitari", desc: "Fornitura completa di materiali elettrici, idrosanitari, ferramenta professionale, pitture e vernici per ogni tipo di lavoro.", cta: "materiali elettrici" },
  { icon: Fuel, title: "Combustibili", desc: "Pellet ENplus certificato in sacchi da 15kg, legna da ardere selezionata e GPL per riscaldamento. Consegna in tutta l'Ogliastra.", cta: "combustibili" },
  { icon: Search, title: "Sopralluoghi e Preventivi Gratuiti", desc: "Sopralluoghi tecnici e preventivi dettagliati completamente gratuiti in tutta la Sardegna. Analisi energetica della tua abitazione inclusa.", cta: "sopralluogo gratuito" },
  { icon: Brush, title: "Spazzacamini e Assistenza", desc: "Servizio professionale di pulizia canne fumarie e spazzacamini certificato. Assistenza post-vendita rapida e affidabile su tutti i prodotti installati.", cta: "assistenza" },
];

export default function Servizi() {
  return (
    <div>
      <section className="pt-20 pb-10 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-primary text-sm font-medium uppercase tracking-widest mb-4">Soluzioni Complete</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display text-4xl md:text-5xl font-bold mb-6">
            I Nostri Servizi
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-muted-foreground text-lg">
            Dalla progettazione all'installazione, dalla manutenzione all'assistenza: un servizio completo per il comfort della tua casa.
          </motion.p>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="bg-card border border-border rounded-lg p-8 glow-orange-hover"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-semibold mb-3">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                  <a
                    href={`https://wa.me/393207690096?text=${encodeURIComponent(`Ciao Murgia F.lli, vorrei informazioni su ${s.cta}. Grazie!`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="sm" variant="outline" className="text-xs">
                      <MessageCircle className="w-3 h-3 mr-1" /> Richiedi Info
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
