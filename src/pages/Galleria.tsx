import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";

const filters = ["Tutti", "Stufe", "Solare", "Elettrodomestici", "Installazioni Ogliastra"];

const galleryItems = [
  { title: "Stufa slim grigio metallizzato – Arzana", category: "Stufe", color: "from-orange-900/40 to-background" },
  { title: "Kit solare termico 300L – Tortolì", category: "Solare", color: "from-amber-900/40 to-background" },
  { title: "Stufa a pellet rossa – Ussassai", category: "Stufe", color: "from-red-900/40 to-background" },
  { title: "Impianto fotovoltaico 6kW – Lanusei", category: "Solare", color: "from-yellow-900/40 to-background" },
  { title: "Lavatrice Samsung installata – Arzana", category: "Elettrodomestici", color: "from-blue-900/40 to-background" },
  { title: "Caminetto moderno – Villagrande", category: "Installazioni Ogliastra", color: "from-orange-900/40 to-background" },
  { title: "Climatizzatore dual split – Tortolì", category: "Elettrodomestici", color: "from-cyan-900/40 to-background" },
  { title: "Stufa canalizzabile 103mq – Jerzu", category: "Stufe", color: "from-orange-900/40 to-background" },
  { title: "Pannelli solari tetto – Bari Sardo", category: "Solare", color: "from-amber-900/40 to-background" },
  { title: "Caldaia a condensazione – Arzana", category: "Installazioni Ogliastra", color: "from-red-900/40 to-background" },
  { title: "TV Samsung QLED montaggio – Lanusei", category: "Elettrodomestici", color: "from-blue-900/40 to-background" },
  { title: "Impianto radiante a pavimento – Ilbono", category: "Installazioni Ogliastra", color: "from-orange-900/40 to-background" },
];

export default function Galleria() {
  const [filter, setFilter] = useState("Tutti");
  const filtered = filter === "Tutti" ? galleryItems : galleryItems.filter(g => g.category === filter);

  return (
    <div>
      <section className="pt-20 pb-10 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-primary text-sm font-medium uppercase tracking-widest mb-4">I Nostri Lavori</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-4xl md:text-5xl font-bold mb-6">Galleria Progetti</motion.h1>
        </div>
      </section>

      <SectionWrapper>
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {filters.map(f => (
            <Button
              key={f}
              size="sm"
              variant={filter === f ? "default" : "outline"}
              onClick={() => setFilter(f)}
              className="text-xs"
            >
              {f}
            </Button>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((item, i) => (
            <motion.div
              key={i}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              className="aspect-square bg-card border border-border rounded-lg overflow-hidden relative group cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-t ${item.color}`} />
              <div className="absolute inset-0 flex items-end p-4">
                <div>
                  <p className="text-xs text-primary font-medium uppercase">{item.category}</p>
                  <p className="text-sm font-semibold leading-tight">{item.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
