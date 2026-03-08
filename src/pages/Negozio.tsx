import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import ProductCard from "@/components/ProductCard";
import { useProducts } from "@/context/ProductContext";
import { categories } from "@/data/products";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, SlidersHorizontal, ArrowUpDown, ChevronLeft, ChevronRight } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import SEO from "@/components/SEO";

const ITEMS_PER_PAGE = 24;

type SortOption = "default" | "price-asc" | "price-desc" | "name-asc" | "name-desc" | "discount";

const sortLabels: Record<SortOption, string> = {
  default: "Predefinito",
  "price-asc": "Prezzo: basso → alto",
  "price-desc": "Prezzo: alto → basso",
  "name-asc": "Nome: A → Z",
  "name-desc": "Nome: Z → A",
  discount: "Sconto maggiore",
};

export default function Negozio() {
  const { products } = useProducts();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Tutti");
  const [onlyOffers, setOnlyOffers] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  const [showFilters, setShowFilters] = useState(false);
  const [brandFilter, setBrandFilter] = useState("Tutte");
  const [sortBy, setSortBy] = useState<SortOption>("default");
  const [page, setPage] = useState(1);

  const brands = useMemo(() => {
    const b = new Set(products.map(p => p.brand));
    return ["Tutte", ...Array.from(b).sort()];
  }, [products]);

  const filtered = useMemo(() => {
    let result = products.filter(p => {
      const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.brand.toLowerCase().includes(search.toLowerCase());
      const matchCat = category === "Tutti" || p.category === category;
      const matchOffer = !onlyOffers || p.offer;
      const effectivePrice = p.discountPrice || p.price;
      const matchPrice = effectivePrice >= priceRange[0] && effectivePrice <= priceRange[1];
      const matchBrand = brandFilter === "Tutte" || p.brand === brandFilter;
      return matchSearch && matchCat && matchOffer && matchPrice && matchBrand;
    });

    // Sort
    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => (a.discountPrice || a.price) - (b.discountPrice || b.price));
        break;
      case "price-desc":
        result.sort((a, b) => (b.discountPrice || b.price) - (a.discountPrice || a.price));
        break;
      case "name-asc":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "discount":
        result.sort((a, b) => {
          const discA = a.discountPrice ? ((a.price - a.discountPrice) / a.price) : 0;
          const discB = b.discountPrice ? ((b.price - b.discountPrice) / b.price) : 0;
          return discB - discA;
        });
        break;
    }

    return result;
  }, [products, search, category, onlyOffers, priceRange, brandFilter, sortBy]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  // Reset page when filters change
  const resetPage = () => setPage(1);

  return (
    <div>
      <SEO
        title="Negozio Expert City"
        description="Scopri oltre 215 prodotti Expert City Arzana: smartphone, TV, elettrodomestici, gaming e molto altro con offerte esclusive."
      />

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
              Volantino SOTTOPREZZI • {products.length} prodotti reali dal catalogo Expert
            </motion.p>
          </div>
        </div>
      </section>

      <SectionWrapper>
        {/* Search + Sort + Filters */}
        <div className="mb-10 space-y-4">
          <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Cerca prodotti, marche..."
                value={search}
                onChange={e => { setSearch(e.target.value); resetPage(); }}
                className="pl-10"
              />
            </div>
            <Select value={sortBy} onValueChange={(v) => { setSortBy(v as SortOption); resetPage(); }}>
              <SelectTrigger className="w-full sm:w-[200px]">
                <ArrowUpDown className="w-3 h-3 mr-1" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(sortLabels).map(([key, label]) => (
                  <SelectItem key={key} value={key}>{label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {["Tutti", ...categories].map(c => (
              <Button key={c} size="sm" variant={category === c ? "default" : "outline"} onClick={() => { setCategory(c); resetPage(); }} className="text-xs">
                {c}
              </Button>
            ))}
          </div>
          <div className="flex gap-2 justify-center">
            <Button size="sm" variant={onlyOffers ? "default" : "outline"} onClick={() => { setOnlyOffers(!onlyOffers); resetPage(); }} className="text-xs">
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
                  onValueChange={(v) => { setPriceRange(v as [number, number]); resetPage(); }}
                />
              </div>
              <div>
                <label className="text-xs text-muted-foreground mb-2 block">Marca</label>
                <div className="flex flex-wrap gap-1.5">
                  {brands.slice(0, 15).map(b => (
                    <Button key={b} size="sm" variant={brandFilter === b ? "default" : "outline"} onClick={() => { setBrandFilter(b); resetPage(); }} className="text-[10px] h-7 px-2">
                      {b}
                    </Button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Count */}
        <p className="text-xs text-muted-foreground text-center mb-6">
          {filtered.length} prodotti trovati
          {totalPages > 1 && ` • Pagina ${page} di ${totalPages}`}
        </p>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {paginated.map(p => <ProductCard key={p.id} product={p} />)}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground mt-10">Nessun prodotto trovato.</p>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-10">
            <Button
              size="sm"
              variant="outline"
              disabled={page <= 1}
              onClick={() => { setPage(p => p - 1); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
              <Button
                key={p}
                size="sm"
                variant={page === p ? "default" : "outline"}
                onClick={() => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                className="w-9"
              >
                {p}
              </Button>
            ))}
            <Button
              size="sm"
              variant="outline"
              disabled={page >= totalPages}
              onClick={() => { setPage(p => p + 1); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        )}
      </SectionWrapper>
    </div>
  );
}
