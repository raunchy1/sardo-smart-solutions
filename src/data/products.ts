export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  discountPrice?: number;
  category: string;
  description: string;
  image: string;
  stock: number;
  featured?: boolean;
  offer?: boolean;
}

export const categories = [
  "Elettrodomestici Grandi",
  "Elettrodomestici Piccoli",
  "TV & Audio",
  "Telefonia & Informatica",
  "Riscaldamento & Clima",
  "Gaming",
  "Casa & Tempo Libero",
];

export const defaultProducts: Product[] = [
  { id: "1", name: "Lavatrice Samsung 9kg", brand: "Samsung", price: 549, discountPrice: 449, category: "Elettrodomestici Grandi", description: "Lavatrice a carica frontale, classe energetica A, centrifuga 1400 giri.", image: "", stock: 5, featured: true, offer: true },
  { id: "2", name: "Asciugatrice Beko 8kg", brand: "Beko", price: 499, discountPrice: 399, category: "Elettrodomestici Grandi", description: "Asciugatrice a pompa di calore, classe A++, capacità 8kg.", image: "", stock: 3, offer: true },
  { id: "3", name: "Frigorifero Side-by-Side Samsung", brand: "Samsung", price: 899, category: "Elettrodomestici Grandi", description: "Frigorifero americano con dispenser acqua e ghiaccio, classe E.", image: "", stock: 2, featured: true },
  { id: "4", name: "Lavastoviglie Bosch 14 Coperti", brand: "Bosch", price: 649, discountPrice: 549, category: "Elettrodomestici Grandi", description: "Lavastoviglie libera installazione, programma Eco, classe A.", image: "", stock: 4, offer: true },
  { id: "5", name: "Lavatrice Haier 10kg", brand: "Haier", price: 599, discountPrice: 479, category: "Elettrodomestici Grandi", description: "Lavatrice Smart con motore inverter Direct Motion.", image: "", stock: 3, offer: true },
  { id: "6", name: "Macchina Caffè De'Longhi", brand: "De'Longhi", price: 349, category: "Elettrodomestici Piccoli", description: "Macchina da caffè automatica con macinacaffè integrato.", image: "", stock: 8, featured: true },
  { id: "7", name: "Aspirapolvere Dyson V15", brand: "Dyson", price: 699, discountPrice: 599, category: "Elettrodomestici Piccoli", description: "Aspirapolvere senza filo con tecnologia laser, autonomia 60 min.", image: "", stock: 4, offer: true },
  { id: "8", name: "Robot da Cucina Kenwood", brand: "Kenwood", price: 449, category: "Elettrodomestici Piccoli", description: "Robot da cucina multifunzione con 8 accessori inclusi.", image: "", stock: 5 },
  { id: "9", name: "Samsung TV QLED 50\"", brand: "Samsung", price: 699, discountPrice: 599, category: "TV & Audio", description: "Smart TV 4K QLED, processore Quantum, HDR10+.", image: "", stock: 3, featured: true, offer: true },
  { id: "10", name: "TCL TV LED 43\"", brand: "TCL", price: 349, category: "TV & Audio", description: "Smart TV LED Full HD, Android TV, Google Assistant integrato.", image: "", stock: 6 },
  { id: "11", name: "TCL TV QLED 55\"", brand: "TCL", price: 549, discountPrice: 479, category: "TV & Audio", description: "Smart TV 4K QLED, Dolby Vision, audio Dolby Atmos.", image: "", stock: 4, offer: true },
  { id: "12", name: "Samsung Galaxy S25", brand: "Samsung", price: 899, category: "Telefonia & Informatica", description: "Smartphone flagship con Galaxy AI, display 6.2\" AMOLED.", image: "", stock: 6, featured: true },
  { id: "13", name: "Redmi Note 15", brand: "Xiaomi", price: 249, category: "Telefonia & Informatica", description: "Smartphone con display AMOLED 6.67\", batteria 5000mAh.", image: "", stock: 10 },
  { id: "14", name: "Lenovo IdeaPad Slim 3", brand: "Lenovo", price: 549, discountPrice: 479, category: "Telefonia & Informatica", description: "Notebook 15.6\" Full HD, AMD Ryzen 5, 8GB RAM, 512GB SSD.", image: "", stock: 4, offer: true },
  { id: "15", name: "MacBook Air 13\"", brand: "Apple", price: 1199, category: "Telefonia & Informatica", description: "MacBook Air con chip M3, 8GB RAM, 256GB SSD, display Liquid Retina.", image: "", stock: 3 },
  { id: "16", name: "iPad Air 11\"", brand: "Apple", price: 749, category: "Telefonia & Informatica", description: "iPad Air con chip M2, display Liquid Retina 11\", Wi-Fi 6E.", image: "", stock: 5 },
  { id: "17", name: "Stufa Elettrica Ceramica 2000W", brand: "De'Longhi", price: 89, category: "Riscaldamento & Clima", description: "Termoventilatore ceramico oscillante, termostato regolabile.", image: "", stock: 12 },
  { id: "18", name: "Termoconvettore Slim 1500W", brand: "Argo", price: 69, category: "Riscaldamento & Clima", description: "Termoconvettore da parete/pavimento, timer 24h.", image: "", stock: 8 },
  { id: "19", name: "PlayStation 5 Standard", brand: "Sony", price: 549, category: "Gaming", description: "Console next-gen con lettore disco, controller DualSense incluso.", image: "", stock: 3, featured: true },
  { id: "20", name: "Nintendo Switch OLED", brand: "Nintendo", price: 349, category: "Gaming", description: "Console ibrida con schermo OLED 7\", dock incluso.", image: "", stock: 5 },
  { id: "21", name: "Drone DJI Mini 4K", brand: "DJI", price: 399, category: "Casa & Tempo Libero", description: "Drone ultraleggero con camera 4K, autonomia 31 minuti.", image: "", stock: 4 },
  { id: "22", name: "Notebook HP 15s", brand: "HP", price: 499, discountPrice: 429, category: "Telefonia & Informatica", description: "Notebook 15.6\" HD, Intel Core i5, 8GB RAM, 256GB SSD.", image: "", stock: 5, offer: true },
  { id: "23", name: "Soundbar Samsung HW-C450", brand: "Samsung", price: 199, category: "TV & Audio", description: "Soundbar 2.1 con subwoofer wireless, Bluetooth, 300W.", image: "", stock: 6 },
  { id: "24", name: "Lavastoviglie Beko 13 Coperti", brand: "Beko", price: 449, category: "Elettrodomestici Grandi", description: "Lavastoviglie slim libera installazione, classe E.", image: "", stock: 3 },
];
