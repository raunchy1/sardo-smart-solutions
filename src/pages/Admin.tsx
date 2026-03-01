import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useProducts } from "@/context/ProductContext";
import { Product, categories } from "@/data/products";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { LayoutDashboard, Package, LogOut, Plus, Pencil, Trash2, X, Image } from "lucide-react";
import logo from "@/assets/logo-murgia.png";

const emptyProduct: Omit<Product, "id"> = {
  name: "", brand: "", price: 0, category: categories[0], description: "", image: "", stock: 0, featured: false, offer: false,
};

export default function Admin() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [view, setView] = useState<"dashboard" | "products">("dashboard");
  const [editing, setEditing] = useState<Product | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<Omit<Product, "id"> & { id?: string }>(emptyProduct);
  const { products, addProduct, updateProduct, deleteProduct } = useProducts();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "admin@murgia.it" && password === "murgia2026") {
      setLoggedIn(true);
      setLoginError("");
    } else {
      setLoginError("Email o password non corretti.");
    }
  };

  const openNew = () => { setFormData(emptyProduct); setEditing(null); setShowForm(true); };
  const openEdit = (p: Product) => { setFormData(p); setEditing(p); setShowForm(true); };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => setFormData(prev => ({ ...prev, image: ev.target?.result as string }));
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    if (!formData.name || !formData.brand) {
      toast({ title: "Errore", description: "Compila nome e marca.", variant: "destructive" });
      return;
    }
    if (editing) {
      updateProduct({ ...formData, id: editing.id } as Product);
      toast({ title: "Prodotto aggiornato con successo!" });
    } else {
      addProduct(formData);
      toast({ title: "Prodotto aggiunto con successo!" });
    }
    setShowForm(false);
  };

  if (!loggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-sm">
          <div className="text-center mb-8">
            <img src={logo} alt="Murgia F.lli" className="w-16 h-16 rounded-full mx-auto mb-4" />
            <h1 className="font-display text-2xl font-bold">Pannello Admin</h1>
            <p className="text-sm text-muted-foreground">Murgia F.lli S.n.c.</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4 bg-card border border-border rounded-lg p-6">
            <Input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
            <Input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
            {loginError && <p className="text-destructive text-sm">{loginError}</p>}
            <Button type="submit" className="w-full">Accedi</Button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex">
      <aside className="w-56 bg-card border-r border-border p-4 flex flex-col shrink-0">
        <div className="flex items-center gap-2 mb-8">
          <img src={logo} alt="Logo" className="w-8 h-8 rounded-full" />
          <span className="font-display text-sm font-semibold">Admin</span>
        </div>
        <nav className="space-y-1 flex-1">
          <button onClick={() => setView("dashboard")} className={`w-full flex items-center gap-2 px-3 py-2 rounded text-sm transition-colors ${view === "dashboard" ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground"}`}>
            <LayoutDashboard className="w-4 h-4" /> Dashboard
          </button>
          <button onClick={() => setView("products")} className={`w-full flex items-center gap-2 px-3 py-2 rounded text-sm transition-colors ${view === "products" ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground"}`}>
            <Package className="w-4 h-4" /> Prodotti
          </button>
        </nav>
        <button onClick={() => setLoggedIn(false)} className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-destructive transition-colors">
          <LogOut className="w-4 h-4" /> Esci
        </button>
      </aside>

      <div className="flex-1 p-6 overflow-auto">
        {view === "dashboard" && (
          <div>
            <h1 className="font-display text-2xl font-bold mb-6">Dashboard</h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                ["Prodotti Totali", products.length],
                ["In Offerta", products.filter(p => p.offer).length],
                ["Categorie", categories.length],
              ].map(([label, val], i) => (
                <div key={i} className="bg-card border border-border rounded-lg p-6">
                  <p className="text-sm text-muted-foreground">{label}</p>
                  <p className="text-3xl font-bold text-primary">{val}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {view === "products" && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h1 className="font-display text-2xl font-bold">Gestione Prodotti</h1>
              <Button onClick={openNew}><Plus className="w-4 h-4 mr-1" /> Aggiungi Prodotto</Button>
            </div>
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border text-left">
                      {["Img", "Nome", "Marca", "Prezzo", "Scontato", "Categoria", "Stock", "Azioni"].map(h => (
                        <th key={h} className="p-3 text-muted-foreground font-medium">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {products.map(p => (
                      <tr key={p.id} className="border-b border-border/50 hover:bg-secondary/30">
                        <td className="p-3">
                          <div className="w-10 h-10 bg-secondary rounded flex items-center justify-center overflow-hidden">
                            {p.image ? <img src={p.image} alt="" className="w-full h-full object-cover" /> : <span className="text-xs text-muted-foreground">{p.brand[0]}</span>}
                          </div>
                        </td>
                        <td className="p-3 font-medium">{p.name}</td>
                        <td className="p-3 text-muted-foreground">{p.brand}</td>
                        <td className="p-3">€{p.price}</td>
                        <td className="p-3 text-primary">{p.discountPrice ? `€${p.discountPrice}` : "–"}</td>
                        <td className="p-3 text-muted-foreground text-xs">{p.category}</td>
                        <td className="p-3">{p.stock}</td>
                        <td className="p-3">
                          <div className="flex gap-1">
                            <Button size="icon" variant="outline" className="h-7 w-7" onClick={() => openEdit(p)}><Pencil className="w-3 h-3" /></Button>
                            <Button size="icon" variant="outline" className="h-7 w-7 text-destructive" onClick={() => { deleteProduct(p.id); toast({ title: "Prodotto eliminato." }); }}><Trash2 className="w-3 h-3" /></Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <AnimatePresence>
              {showForm && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-background/80 flex items-center justify-center p-4">
                  <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} className="bg-card border border-border rounded-lg p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="font-display text-xl font-bold">{editing ? "Modifica Prodotto" : "Nuovo Prodotto"}</h2>
                      <button onClick={() => setShowForm(false)}><X className="w-5 h-5" /></button>
                    </div>
                    <div className="space-y-3">
                      <Input placeholder="Nome prodotto" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                      <Input placeholder="Marca" value={formData.brand} onChange={e => setFormData({ ...formData, brand: e.target.value })} />
                      <div className="grid grid-cols-2 gap-3">
                        <Input type="number" placeholder="Prezzo €" value={formData.price || ""} onChange={e => setFormData({ ...formData, price: Number(e.target.value) })} />
                        <Input type="number" placeholder="Prezzo scontato €" value={formData.discountPrice || ""} onChange={e => setFormData({ ...formData, discountPrice: Number(e.target.value) || undefined })} />
                      </div>
                      <select value={formData.category} onChange={e => setFormData({ ...formData, category: e.target.value })} className="w-full bg-secondary border border-border rounded-md px-3 py-2 text-sm text-foreground">
                        {categories.map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                      <Input type="number" placeholder="Stock" value={formData.stock || ""} onChange={e => setFormData({ ...formData, stock: Number(e.target.value) })} />
                      <Textarea placeholder="Descrizione" value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })} />
                      <div className="flex items-center gap-4">
                        <label className="flex items-center gap-2 text-sm cursor-pointer">
                          <input type="checkbox" checked={formData.featured || false} onChange={e => setFormData({ ...formData, featured: e.target.checked })} className="accent-primary" /> In evidenza
                        </label>
                        <label className="flex items-center gap-2 text-sm cursor-pointer">
                          <input type="checkbox" checked={formData.offer || false} onChange={e => setFormData({ ...formData, offer: e.target.checked })} className="accent-primary" /> In offerta
                        </label>
                      </div>
                      <div>
                        <label className="flex items-center gap-2 cursor-pointer bg-secondary border border-border rounded-md px-4 py-3 text-sm hover:bg-muted transition-colors">
                          <Image className="w-4 h-4 text-primary" />
                          📸 Carica Immagine
                          <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                        </label>
                        {formData.image && (
                          <img src={formData.image} alt="Preview" className="mt-3 w-full max-h-40 object-contain rounded border border-border" />
                        )}
                      </div>
                      <Button onClick={handleSave} className="w-full">Salva Prodotto</Button>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
}
