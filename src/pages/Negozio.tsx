import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import ProductCard from "@/components/ProductCard";
import { useProducts } from "@/context/ProductContext";
import { categories } from "@/data/products";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function Negozio() {
  const { products } = useProducts();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Tutti");
  const [onlyOffers, setOnlyOffers] = useState(false);

  const filtered = useMemo(() => {
    return products.filter(p => {
      const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.brand.toLowerCase().includes(search.toLowerCase());
      const matchCat = category === "Tutti" || p.category === category;
      const matchOffer = !onlyOffers || p.offer;
      return matchSearch && matchCat && matchOffer;
    });
  }, [products, search, category, onlyOffers]);

  return (
    <div>
      <section className="pt-20 pb-10 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-primary text-sm font-medium uppercase tracking-widest mb-4">Expert City Arzana</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-4xl md:text-5xl font-bold mb-6">Il Nostro Negozio</motion.h1>
        </div>
      </section>

      <SectionWrapper>
        {/* Filters */}
        <div className="mb-10 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Cerca prodotti..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {["Tutti", ...categories].map(c => (
              <Button key={c} size="sm" variant={category === c ? "default" : "outline"} onClick={() => setCategory(c)} className="text-xs">
                {c}
              </Button>
            ))}
          </div>
          <div className="text-center">
            <Button size="sm" variant={onlyOffers ? "default" : "outline"} onClick={() => setOnlyOffers(!onlyOffers)} className="text-xs">
              🔥 Solo Offerte
            </Button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filtered.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground mt-10">Nessun prodotto trovato.</p>
        )}
      </SectionWrapper>
    </div>
  );
}
