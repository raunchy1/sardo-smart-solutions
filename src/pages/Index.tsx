import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Flame, Sun, Wrench, Snowflake, Star, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionWrapper from "@/components/SectionWrapper";
import ProductCard from "@/components/ProductCard";
import SEO from "@/components/SEO";
import { useProducts } from "@/context/ProductContext";
import heroBg from "@/assets/hero-bg.jpg";

const services = [
  { icon: Flame, title: "Stufe a Pellet & Legna", desc: "Installazione, manutenzione e pulizia di stufe slim canalizzabili." },
  { icon: Sun, title: "Solare Termico", desc: "Impianti solari termici e fotovoltaici con Conto Termico." },
  { icon: Snowflake, title: "Climatizzazione", desc: "Condizionamento e pompe di calore per ogni ambiente." },
  { icon: Wrench, title: "Assistenza Completa", desc: "Sopralluoghi gratuiti e assistenza post-vendita in tutta la Sardegna." },
];

const testimonials = [
  { name: "Marco S.", location: "Tortolì", text: "Professionali e puntuali. La stufa a pellet funziona perfettamente, casa calda e bollette dimezzate." },
  { name: "Lucia M.", location: "Arzana", text: "Installazione del kit solare impeccabile. Consigliatissimi per competenza e cortesia." },
  { name: "Giovanni P.", location: "Ussassai", text: "Da anni ci affidiamo a Murgia F.lli per tutto. Sempre disponibili e prezzi onesti." },
];

export default function Index() {
  const { products } = useProducts();
  const featured = products.filter(p => p.featured).slice(0, 4);
  const offers = products.filter(p => p.offer).slice(0, 6);

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Installazione stufa" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/75" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6"
          >
            Il comfort della tua casa.{" "}
            <span className="text-gradient">Da Arzana in tutta la Sardegna.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto"
          >
            Vendita, installazione e assistenza: stufe a pellet, solare termico, elettrodomestici e molto altro.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/servizi">
              <Button size="lg" className="text-base px-8 glow-orange">
                Scopri i Servizi <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link to="/negozio">
              <Button size="lg" variant="outline" className="text-base px-8">
                Vai al Negozio
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Offerte */}
      {offers.length > 0 && (
        <SectionWrapper>
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-medium uppercase tracking-widest mb-2">Offerte del Mese</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold">Sottoprezzi Expert</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {offers.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </SectionWrapper>
      )}

      {/* Prodotti in Evidenza */}
      <SectionWrapper className="bg-card/50">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-medium uppercase tracking-widest mb-2">I Nostri Bestseller</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">Prodotti in Evidenza</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {featured.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </SectionWrapper>

      {/* Servizi */}
      <SectionWrapper>
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-medium uppercase tracking-widest mb-2">Cosa Facciamo</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">I Nostri Servizi</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-card border border-border rounded-lg p-6 text-center glow-orange-hover"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/servizi">
            <Button variant="outline">Tutti i Servizi <ArrowRight className="w-4 h-4 ml-2" /></Button>
          </Link>
        </div>
      </SectionWrapper>

      {/* Testimonials */}
      <SectionWrapper className="bg-card/50">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-medium uppercase tracking-widest mb-2">Dicono di Noi</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">Testimonianze</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={i} whileHover={{ scale: 1.02 }} className="bg-card border border-border rounded-lg p-6">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 text-primary fill-primary" />)}
              </div>
              <p className="text-sm text-muted-foreground mb-4 italic">"{t.text}"</p>
              <p className="text-sm font-semibold">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.location}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA WhatsApp */}
      <SectionWrapper>
        <div className="text-center bg-card border border-border rounded-2xl p-10 md:p-16 glow-orange">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Hai bisogno di aiuto?</h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">Contattaci su WhatsApp per preventivi gratuiti, informazioni sui prodotti o assistenza tecnica.</p>
          <a href="https://wa.me/393207690096?text=Ciao%20Murgia%20F.lli%2C%20vorrei%20informazioni." target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="text-base px-8">
              <MessageCircle className="w-5 h-5 mr-2" /> Scrivici su WhatsApp
            </Button>
          </a>
        </div>
      </SectionWrapper>
    </div>
  );
}
