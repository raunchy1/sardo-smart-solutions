import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import ProductCard from "@/components/ProductCard";
import { useProducts } from "@/context/ProductContext";
import { categories } from "@/data/products";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, SlidersHorizontal } from "lucide-react";
import { Slider } from "@/components/ui/slider";

export default function Negozio() {
  const { products } = useProducts();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Tutti");
  const [onlyOffers, setOnlyOffers] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  const [showFilters, setShowFilters] = useState(false);
  const [brandFilter, setBrandFilter] = useState("Tutte");

  const brands = useMemo(() => {
    const b = new Set(products.map(p => p.brand));
    return ["Tutte", ...Array.from(b).sort()];
  }, [products]);

  const filtered = useMemo(() => {
    return products.filter(p => {
      const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.brand.toLowerCase().includes(search.toLowerCase());
      const matchCat = category === "Tutti" || p.category === category;
      const matchOffer = !onlyOffers || p.offer;
      const effectivePrice = p.discountPrice || p.price;
      const matchPrice = effectivePrice >= priceRange[0] && effectivePrice <= priceRange[1];
      const matchBrand = brandFilter === "Tutte" || p.brand === brandFilter;
      return matchSearch && matchCat && matchOffer && matchPrice && matchBrand;
    });
  }, [products, search, category, onlyOffers, priceRange, brandFilter]);

  return (
    <div>
      {/* Expert City Banner */}
      <section className="pt-20 pb-6 px-4 border-b border-border/30">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="flex items-center gap-3">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Expert_logo.svg/1200px-Expert_logo.svg.png"
                alt="Expert City"
                className="h-10 md:h-14 object-contain"
                loading="lazy"
              />
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-3xl md:text-5xl font-bold"
            >
              Negozio Expert City Arzana
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground max-w-2xl"
            >
              Volantino SOTTOPREZZI • 215 prodotti reali dal catalogo Expert
            </motion.p>
          </div>
        </div>
      </section>

      <SectionWrapper>
        {/* Search + Filters */}
        <div className="mb-10 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Cerca prodotti, marche..."
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
          <div className="flex gap-2 justify-center">
            <Button size="sm" variant={onlyOffers ? "default" : "outline"} onClick={() => setOnlyOffers(!onlyOffers)} className="text-xs">
              🔥 Solo Offerte
            </Button>
            <Button size="sm" variant={showFilters ? "default" : "outline"} onClick={() => setShowFilters(!showFilters)} className="text-xs">
              <SlidersHorizontal className="w-3 h-3 mr-1" /> Filtri Avanzati
            </Button>
          </div>

          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              className="max-w-md mx-auto space-y-4 p-4 border border-border/50 rounded-lg bg-card"
            >
              <div>
                <label className="text-xs text-muted-foreground mb-2 block">
                  Prezzo: €{priceRange[0]} – €{priceRange[1]}
                </label>
                <Slider
                  min={0}
                  max={2000}
                  step={10}
                  value={priceRange}
                  onValueChange={(v) => setPriceRange(v as [number, number])}
                />
              </div>
              <div>
                <label className="text-xs text-muted-foreground mb-2 block">Marca</label>
                <div className="flex flex-wrap gap-1.5">
                  {brands.slice(0, 15).map(b => (
                    <Button key={b} size="sm" variant={brandFilter === b ? "default" : "outline"} onClick={() => setBrandFilter(b)} className="text-[10px] h-7 px-2">
                      {b}
                    </Button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Count */}
        <p className="text-xs text-muted-foreground text-center mb-6">{filtered.length} prodotti trovati</p>

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
