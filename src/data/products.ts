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
  "Telefonia",
  "Informatica",
  "TV & Audio",
  "Wearable & Accessori",
  "Gaming & Tempo Libero",
  "Casa & Accessori",
];

export const defaultProducts: Product[] = [
  // ── TELEFONIA ──
  {
    id: "1", name: "iPhone 15 128GB", brand: "Apple", price: 629.90, discountPrice: 599.90,
    category: "Telefonia", description: "Display OLED 6.1\", fotocamera 48 Mpx, Bluetooth 5.3, 5G, iOS 17, colore nero.",
    image: "https://tpthumb.azureedge.net/ediel/832935.jpg?width=400&height=480", stock: 5, featured: true, offer: true,
  },
  {
    id: "2", name: "iPhone 16 128GB", brand: "Apple", price: 799.00, discountPrice: 729.90,
    category: "Telefonia", description: "Display OLED 6.1\", fotocamera 48 Mpx, Bluetooth 5.3, 5G, iOS 18, colore nero.",
    image: "https://tpthumb.azureedge.net/ediel/868275.jpg?width=400&height=480", stock: 6, featured: true, offer: true,
  },
  {
    id: "3", name: "Google Pixel 10 Pro XL 256GB", brand: "Google", price: 1299.00, discountPrice: 999.90,
    category: "Telefonia", description: "Display OLED 6.7\", 16GB RAM, fotocamera 50 Mpx, Bluetooth 6.0, 5G, Android 16.",
    image: "https://tpthumb.azureedge.net/ediel/903140.jpg?width=400&height=480", stock: 3, featured: true, offer: true,
  },
  {
    id: "4", name: "Samsung Galaxy S25 256GB", brand: "Samsung", price: 699.90,
    category: "Telefonia", description: "Display AMOLED 6.2\", 12GB RAM, fotocamera 50 Mpx, Bluetooth 5.4, 5G, Android 15.",
    image: "https://tpthumb.azureedge.net/ediel/883874.jpg?width=400&height=480", stock: 4, featured: true,
  },
  {
    id: "5", name: "Samsung Galaxy A36 5G 128GB", brand: "Samsung", price: 299.90,
    category: "Telefonia", description: "Display Super AMOLED 6.7\", 6GB RAM, fotocamera 50 Mpx, batteria 5000 mAh, Android 15.",
    image: "https://tpthumb.azureedge.net/ediel/884345.jpg?width=400&height=480", stock: 8,
  },
  {
    id: "6", name: "Samsung Galaxy A16 128GB", brand: "Samsung", price: 149.90,
    category: "Telefonia", description: "Display Super AMOLED 6.7\", 4GB RAM, fotocamera 50 Mpx, batteria 5000 mAh, Android 14.",
    image: "https://tpthumb.azureedge.net/ediel/876023.jpg?width=400&height=480", stock: 10,
  },
  {
    id: "7", name: "Redmi Note 15 4G 256GB", brand: "Xiaomi", price: 229.90, discountPrice: 199.90,
    category: "Telefonia", description: "Display OLED 6.77\", fotocamera 108 Mpx, batteria 6000 mAh/33W, Xiaomi HyperOS.",
    image: "https://tpthumb.azureedge.net/ediel/907357.jpg?width=400&height=480", stock: 7, featured: true, offer: true,
  },
  {
    id: "8", name: "Redmi Note 15 Pro 4G 256GB", brand: "Xiaomi", price: 299.90, discountPrice: 279.90,
    category: "Telefonia", description: "Display OLED 6.77\", fotocamera 200 Mpx, batteria 6500 mAh/45W, Xiaomi HyperOS.",
    image: "https://tpthumb.azureedge.net/ediel/907354.jpg?width=400&height=480", stock: 5, offer: true,
  },
  {
    id: "9", name: "Redmi Note 15 Pro 5G 256GB", brand: "Xiaomi", price: 379.90, discountPrice: 349.90,
    category: "Telefonia", description: "Display OLED 6.83\", fotocamera 200 Mpx, batteria 6580 mAh/45W, 5G, Xiaomi HyperOS.",
    image: "https://tpthumb.azureedge.net/ediel/907347.jpg?width=400&height=480", stock: 4, offer: true,
  },
  {
    id: "10", name: "Honor Magic 8 Lite 5G 256GB", brand: "Honor", price: 379.90,
    category: "Telefonia", description: "Display AMOLED 6.79\", fotocamera 108 Mpx, batteria silicio-carbonio, Bluetooth 5.2, 5G.",
    image: "https://tpthumb.azureedge.net/ediel/908723.jpg?width=400&height=480", stock: 6,
  },
  {
    id: "11", name: "Honor 400 5G 512GB", brand: "Honor", price: 499.90, discountPrice: 459.90,
    category: "Telefonia", description: "Display AMOLED 6.55\", fotocamera 200 Mpx, batteria 5300 mAh/66W, 5G.",
    image: "https://tpthumb.azureedge.net/ediel/888514.jpg?width=400&height=480", stock: 4, offer: true,
  },
  {
    id: "12", name: "Motorola Moto G56 5G 256GB", brand: "Motorola", price: 189.90,
    category: "Telefonia", description: "Display LCD 6.72\", 8GB RAM, fotocamera 50 Mpx, batteria 5200 mAh, ricarica 33W.",
    image: "https://tpthumb.azureedge.net/ediel/886827.jpg?width=400&height=480", stock: 8,
  },
  {
    id: "13", name: "Motorola Edge 60 Neo 5G 256GB", brand: "Motorola", price: 369.90,
    category: "Telefonia", description: "Display pOLED 6.36\", 8GB RAM, fotocamera 50 Mpx, 5G, Android 15.",
    image: "https://tpthumb.azureedge.net/ediel/904192.jpg?width=400&height=480", stock: 3,
  },
  {
    id: "14", name: "Motorola Moto G06 128GB", brand: "Motorola", price: 139.90, discountPrice: 119.90,
    category: "Telefonia", description: "Display LCD 6.88\", 4GB RAM, fotocamera 50 Mpx, batteria 5200 mAh, Bluetooth 6.0.",
    image: "https://tpthumb.azureedge.net/ediel/903460.jpg?width=400&height=480", stock: 10, offer: true,
  },
  {
    id: "15", name: "Oppo A6 Pro 5G 256GB", brand: "Oppo", price: 299.99, discountPrice: 269.90,
    category: "Telefonia", description: "Display AMOLED 6.57\", 8GB RAM, fotocamera 50 Mpx, 5G, Android 15.",
    image: "https://tpthumb.azureedge.net/ediel/899850.jpg?width=400&height=480", stock: 5, offer: true,
  },
  {
    id: "16", name: "Oppo Reno 15 FS 5G 512GB", brand: "Oppo", price: 469.90,
    category: "Telefonia", description: "Display AMOLED 6.57\", 8GB RAM, fotocamera 50+50 Mpx, 5G, Android 16.",
    image: "https://tpthumb.azureedge.net/ediel/911019.jpg?width=400&height=480", stock: 3,
  },
  {
    id: "17", name: "Realme 14T 5G 256GB", brand: "Realme", price: 209.90,
    category: "Telefonia", description: "Display AMOLED 6.67\", fotocamera 50 Mpx, batteria 6000 mAh/45W, 5G, Android 15.",
    image: "https://tpthumb.azureedge.net/ediel/887282.jpg?width=400&height=480", stock: 6,
  },
  {
    id: "18", name: "Realme GT7 5G 512GB", brand: "Realme", price: 799.99, discountPrice: 649.90,
    category: "Telefonia", description: "Display OLED 6.78\", fotocamera 50 Mpx, batteria 7000 mAh/120W SuperVOOC, 5G.",
    image: "https://tpthumb.azureedge.net/ediel/889096.jpg?width=400&height=480", stock: 3, featured: true, offer: true,
  },
  {
    id: "19", name: "Google Pixel 10 256GB", brand: "Google", price: 699.90,
    category: "Telefonia", description: "Display OLED 6.3\", 12GB RAM, fotocamera 48 Mpx, Bluetooth 6.0, 5G, Android 16.",
    image: "https://tpthumb.azureedge.net/ediel/903125.jpg?width=400&height=480", stock: 3,
  },
  {
    id: "20", name: "ZTE Blade A55 128GB", brand: "ZTE", price: 109.90, discountPrice: 89.90,
    category: "Telefonia", description: "Display TFT 6.75\", 4GB RAM, fotocamera 13 Mpx, Android 14.",
    image: "https://tpthumb.azureedge.net/ediel/896162.jpg?width=400&height=480", stock: 10, offer: true,
  },
  {
    id: "21", name: "Oppo A5X 4G 128GB", brand: "Oppo", price: 99.90,
    category: "Telefonia", description: "Display LCD 6.67\", 4GB RAM, fotocamera 32 Mpx, Android 15.",
    image: "https://tpthumb.azureedge.net/ediel/892092.jpg?width=400&height=480", stock: 8,
  },

  // ── WEARABLE & ACCESSORI ──
  {
    id: "22", name: "Amazfit BIP 6", brand: "Amazfit", price: 79.90, discountPrice: 69.90,
    category: "Wearable & Accessori", description: "Smartwatch GPS, display AMOLED 1.97\", microfono, speaker, water resistant.",
    image: "https://tpthumb.azureedge.net/ediel/884803.jpg?width=400&height=480", stock: 8, offer: true,
  },
  {
    id: "23", name: "Garmin Forerunner 55", brand: "Garmin", price: 139.90, discountPrice: 129.90,
    category: "Wearable & Accessori", description: "Smartwatch GPS, display AMOLED 1.04\", monitoraggio attività.",
    image: "https://tpthumb.azureedge.net/ediel/749124.jpg?width=400&height=480", stock: 4, offer: true,
  },
  {
    id: "24", name: "Garmin Vivoactive 5", brand: "Garmin", price: 189.90,
    category: "Wearable & Accessori", description: "Smartwatch GPS 4GB, display AMOLED 1.2\", water resistant 50m, compatibile iOS/Android.",
    image: "https://tpthumb.azureedge.net/ediel/831713.jpg?width=400&height=480", stock: 5,
  },
  {
    id: "25", name: "Huawei Watch Fit 3", brand: "Huawei", price: 89.90,
    category: "Wearable & Accessori", description: "Smartwatch GPS, display AMOLED 1.82\", cassa in alluminio, water resistant.",
    image: "https://tpthumb.azureedge.net/ediel/872700.jpg?width=400&height=480", stock: 6,
  },
  {
    id: "26", name: "Samsung Galaxy Watch", brand: "Samsung", price: 159.90,
    category: "Wearable & Accessori", description: "Smartwatch GPS 32GB, display Super AMOLED 1.3\", Wear OS, water resistant 50m.",
    image: "https://tpthumb.azureedge.net/ediel/860204.jpg?width=400&height=480", stock: 4, featured: true,
  },
  {
    id: "27", name: "Xiaomi Smart Band 9 Active", brand: "Xiaomi", price: 26.99, discountPrice: 24.90,
    category: "Wearable & Accessori", description: "Smart band, display LCD 1.47\", water resistant, compatibile Android/iOS.",
    image: "https://tpthumb.azureedge.net/ediel/876222.jpg?width=400&height=480", stock: 15, offer: true,
  },
  {
    id: "28", name: "JBL Vibe Beam 2", brand: "JBL", price: 59.90,
    category: "Wearable & Accessori", description: "Auricolari BT TWS con noise cancelling, colore nero.",
    image: "https://tpthumb.azureedge.net/ediel/879402.jpg?width=400&height=480", stock: 8,
  },
  {
    id: "29", name: "JBL Sense Lite", brand: "JBL", price: 99.99, discountPrice: 89.90,
    category: "Wearable & Accessori", description: "Auricolari BT TWS IP54, noise cancelling premium.",
    image: "https://tpthumb.azureedge.net/ediel/898442.jpg?width=400&height=480", stock: 6, offer: true,
  },
  {
    id: "30", name: "Samsung Galaxy Buds FE", brand: "Samsung", price: 169.90,
    category: "Wearable & Accessori", description: "Auricolari Bluetooth 5.4 con riduzione attiva del rumore.",
    image: "https://tpthumb.azureedge.net/ediel/860195.jpg?width=400&height=480", stock: 4,
  },
  {
    id: "31", name: "SBS Power Bank 10000mAh", brand: "SBS", price: 14.95,
    category: "Wearable & Accessori", description: "Power bank extra slim con porta USB 2.1A Intelligent Charge.",
    image: "https://tpthumb.azureedge.net/ediel/710301.jpg?width=400&height=480", stock: 12,
  },
  {
    id: "32", name: "SBS Power Bank 20000mAh", brand: "SBS", price: 24.95,
    category: "Wearable & Accessori", description: "Power bank extra slim con porta USB 2.1A Intelligent Charge.",
    image: "https://tpthumb.azureedge.net/ediel/710302.jpg?width=400&height=480", stock: 8,
  },
  {
    id: "33", name: "SBS Caricatore 45W USB-C", brand: "SBS", price: 24.95,
    category: "Wearable & Accessori", description: "Caricatore rapido 45W con porta USB-C.",
    image: "https://tpthumb.azureedge.net/ediel/813397.jpg?width=400&height=480", stock: 10,
  },

  // ── INFORMATICA ──
  {
    id: "34", name: "MacBook Air 13\" M4 16GB 256GB", brand: "Apple", price: 969.00,
    category: "Informatica", description: "Notebook 13.6\", chip M4, 16GB RAM, 256GB SSD, display Liquid Retina.",
    image: "https://tpthumb.azureedge.net/ediel/884788.jpg?width=400&height=480", stock: 4, featured: true,
  },
  {
    id: "35", name: "Lenovo IdeaPad 5 i5", brand: "Lenovo", price: 899.00, discountPrice: 799.00,
    category: "Informatica", description: "Notebook 14\", Intel Core i5-13420H, 16GB RAM, 512GB SSD.",
    image: "https://tpthumb.azureedge.net/ediel/879322.jpg?width=400&height=480", stock: 3, offer: true,
  },
  {
    id: "36", name: "Lenovo Yoga Slim 7 Ultra 7", brand: "Lenovo", price: 1199.00, discountPrice: 999.00,
    category: "Informatica", description: "Notebook 14\", Intel Core Ultra 7 155H, 32GB RAM, 1TB SSD.",
    image: "https://tpthumb.azureedge.net/ediel/892000.jpg?width=400&height=480", stock: 2, featured: true, offer: true,
  },
  {
    id: "37", name: "Lenovo IdeaPad Slim 3 i7", brand: "Lenovo", price: 749.00, discountPrice: 599.00,
    category: "Informatica", description: "Notebook 15.3\", Intel Core i7-13620H, 16GB RAM, 512GB SSD.",
    image: "https://tpthumb.azureedge.net/ediel/909592.jpg?width=400&height=480", stock: 5, featured: true, offer: true,
  },
  {
    id: "38", name: "HP Notebook 15\" i3", brand: "HP", price: 499.99, discountPrice: 429.00,
    category: "Informatica", description: "Notebook 15.6\", Intel Core i3 N305U, 8GB RAM, 512GB SSD.",
    image: "https://tpthumb.azureedge.net/ediel/896332.jpg?width=400&height=480", stock: 4, offer: true,
  },
  {
    id: "39", name: "Acer Aspire Lite 15\"", brand: "Acer", price: 349.00, discountPrice: 299.00,
    category: "Informatica", description: "Notebook 15.6\", Intel Celeron N4500, 4GB RAM, 128GB eMMC.",
    image: "https://tpthumb.azureedge.net/ediel/882254.jpg?width=400&height=480", stock: 6, offer: true,
  },
  {
    id: "40", name: "Asus VivoBook Go 15\" Ryzen 5", brand: "Asus", price: 549.00, discountPrice: 499.00,
    category: "Informatica", description: "Notebook 15.6\", AMD Ryzen 5 7520U, 16GB RAM, 512GB SSD.",
    image: "https://tpthumb.azureedge.net/ediel/893426.jpg?width=400&height=480", stock: 4, offer: true,
  },
  {
    id: "41", name: "MSI Cyborg 15 Gaming", brand: "MSI", price: 1549.00, discountPrice: 1299.00,
    category: "Informatica", description: "Notebook gaming 15.6\", Intel Core 7 240H, 16GB RAM, 1TB SSD.",
    image: "https://tpthumb.azureedge.net/ediel/892498.jpg?width=400&height=480", stock: 2, offer: true,
  },
  {
    id: "42", name: "Samsung Galaxy Book 15\"", brand: "Samsung", price: 699.00,
    category: "Informatica", description: "Notebook 15.6\", Intel Core 7 150U, 16GB RAM, 512GB SSD.",
    image: "https://tpthumb.azureedge.net/ediel/870245.jpg?width=400&height=480", stock: 3,
  },
  {
    id: "43", name: "iPad 11\" 128GB", brand: "Apple", price: 369.00,
    category: "Informatica", description: "Tablet 11\", chip A16, 128GB, Wi-Fi 6, Bluetooth 5.3.",
    image: "https://tpthumb.azureedge.net/ediel/884693.jpg?width=400&height=480", stock: 6,
  },
  {
    id: "44", name: "Lenovo Tab M10 10.1\"", brand: "Lenovo", price: 129.00,
    category: "Informatica", description: "Tablet 10.1\", 4GB RAM, 128GB, Wi-Fi 5, processore Helio G85.",
    image: "https://tpthumb.azureedge.net/ediel/878983.jpg?width=400&height=480", stock: 8,
  },
  {
    id: "45", name: "Lenovo IdeaTab Plus 12.1\"", brand: "Lenovo", price: 349.00, discountPrice: 299.00,
    category: "Informatica", description: "Tablet 12.1\", 8GB RAM, 256GB, Dimensity 6400, Wi-Fi 5.",
    image: "https://tpthumb.azureedge.net/ediel/897505.jpg?width=400&height=480", stock: 4, offer: true,
  },
  {
    id: "46", name: "Canon Pixma TS3750i", brand: "Canon", price: 39.90,
    category: "Informatica", description: "Stampante inkjet multifunzione, WiFi, USB, fino a 4800x1200 dpi, formato A4.",
    image: "https://tpthumb.azureedge.net/ediel/868610.jpg?width=400&height=480", stock: 8,
  },
  {
    id: "47", name: "Epson EcoTank ET-2951", brand: "Epson", price: 269.00,
    category: "Informatica", description: "Stampante inkjet EcoTank, WiFi, USB, 4800x1200 dpi, formato A4.",
    image: "https://tpthumb.azureedge.net/ediel/903891.jpg?width=400&height=480", stock: 3,
  },
  {
    id: "48", name: "Brother DCP-L2627DWE", brand: "Brother", price: 189.00, discountPrice: 179.00,
    category: "Informatica", description: "Stampante laser multifunzione, WiFi, USB, formato A4.",
    image: "https://tpthumb.azureedge.net/ediel/837271.jpg?width=400&height=480", stock: 5, offer: true,
  },
  {
    id: "49", name: "Acer Monitor 27\" IPS", brand: "Acer", price: 99.90,
    category: "Informatica", description: "Monitor TFT 27\", 16:9, HDMI, VESA 100x100mm, angolo visione 178°.",
    image: "https://tpthumb.azureedge.net/ediel/866199.jpg?width=400&height=480", stock: 6,
  },
  {
    id: "50", name: "Logitech Kit Tastiera e Mouse Wireless", brand: "Logitech", price: 29.90,
    category: "Informatica", description: "Kit tastiera e mouse wireless ottico, tastierino numerico incluso.",
    image: "https://tpthumb.azureedge.net/ediel/718480.jpg?width=400&height=480", stock: 10,
  },
  {
    id: "51", name: "EZVIZ Telecamera TY1 1080p", brand: "EZVIZ", price: 24.90, discountPrice: 19.90,
    category: "Casa & Accessori", description: "Telecamera Wi-Fi motorizzata 360°, 1080p, visione notturna, slot microSD fino a 256GB.",
    image: "https://tpthumb.azureedge.net/ediel/737274.jpg?width=400&height=480", stock: 12, offer: true,
  },
  {
    id: "52", name: "Tapo TC40 Telecamera Outdoor", brand: "TP-Link", price: 34.90,
    category: "Casa & Accessori", description: "Telecamera esterna IP65, Full HD 1080p, Wi-Fi, pan/tilt 360°/130°, visione notturna.",
    image: "https://tpthumb.azureedge.net/ediel/835794.jpg?width=400&height=480", stock: 8,
  },

  // ── TV & AUDIO ──
  {
    id: "53", name: "Samsung QLED 50\" 4K", brand: "Samsung", price: 359.00,
    category: "TV & Audio", description: "Smart TV QD-LED 50\", Ultra HD 4K HDR, Wi-Fi, Ethernet, DLNA.",
    image: "https://tpthumb.azureedge.net/ediel/888124.jpg?width=400&height=480", stock: 4, featured: true,
  },
  {
    id: "54", name: "Samsung OLED 55\" 4K", brand: "Samsung", price: 849.00,
    category: "TV & Audio", description: "Smart TV OLED 55\", Ultra HD 4K HDR, Wi-Fi, Ethernet, DLNA.",
    image: "https://tpthumb.azureedge.net/ediel/888029.jpg?width=400&height=480", stock: 2, featured: true,
  },
  {
    id: "55", name: "Samsung QLED 65\" Q7", brand: "Samsung", price: 649.00,
    category: "TV & Audio", description: "Smart TV QD-LED 65\", Ultra HD 4K HDR, Wi-Fi, Ethernet, DLNA.",
    image: "https://tpthumb.azureedge.net/ediel/888129.jpg?width=400&height=480", stock: 3,
  },
  {
    id: "56", name: "Samsung QLED 65\" Q6", brand: "Samsung", price: 649.00,
    category: "TV & Audio", description: "Smart TV QD-LED 65\", Ultra HD 4K HDR, Wi-Fi, PVR integrato.",
    image: "https://tpthumb.azureedge.net/ediel/898408.jpg?width=400&height=480", stock: 3,
  },
  {
    id: "57", name: "Samsung LED 27\" Smart TV", brand: "Samsung", price: 249.00, discountPrice: 199.00,
    category: "TV & Audio", description: "Smart TV LED 27\", HDR, Wi-Fi, Ethernet, DLNA.",
    image: "https://tpthumb.azureedge.net/ediel/888241.jpg?width=400&height=480", stock: 5, offer: true,
  },
  {
    id: "58", name: "LG QNED EVO 43\" 4K", brand: "LG", price: 399.00,
    category: "TV & Audio", description: "TV QNED EVO 43\", Ultra HD 4K HDR, 60Hz, Wi-Fi, Ethernet.",
    image: "https://tpthumb.azureedge.net/ediel/895903.jpg?width=400&height=480", stock: 4,
  },
  {
    id: "59", name: "Hisense LED 50\" 4K", brand: "Hisense", price: 299.00,
    category: "TV & Audio", description: "Smart TV LED 50\", Ultra HD 4K HDR, 60Hz, Wi-Fi, Ethernet, DLNA.",
    image: "https://tpthumb.azureedge.net/ediel/887100.jpg?width=400&height=480", stock: 5,
  },
  {
    id: "60", name: "Hisense LED 55\" 4K", brand: "Hisense", price: 329.00,
    category: "TV & Audio", description: "Smart TV LED 55\", Ultra HD 4K HDR, 60Hz, Wi-Fi, Ethernet, DLNA.",
    image: "https://tpthumb.azureedge.net/ediel/887101.jpg?width=400&height=480", stock: 4,
  },
  {
    id: "61", name: "TCL LED 43\" 4K", brand: "TCL", price: 229.00,
    category: "TV & Audio", description: "Smart TV LED 43\", Ultra HD 4K HDR, 60Hz, Wi-Fi, Ethernet.",
    image: "https://tpthumb.azureedge.net/ediel/886622.jpg?width=400&height=480", stock: 6,
  },
  {
    id: "62", name: "TCL QLED 55\" 4K", brand: "TCL", price: 349.00,
    category: "TV & Audio", description: "Smart TV QD-LED 55\", Ultra HD 4K HDR, 60Hz, Wi-Fi, Ethernet.",
    image: "https://tpthumb.azureedge.net/ediel/885491.jpg?width=400&height=480", stock: 4,
  },
  {
    id: "63", name: "TCL LED 75\" 4K", brand: "TCL", price: 549.00,
    category: "TV & Audio", description: "Smart TV LED 75\", Ultra HD 4K HDR, 60Hz, Wi-Fi, Ethernet.",
    image: "https://tpthumb.azureedge.net/ediel/886618.jpg?width=400&height=480", stock: 2,
  },
  {
    id: "64", name: "Saba LED 65\" 4K", brand: "Saba", price: 499.00, discountPrice: 399.00,
    category: "TV & Audio", description: "Smart TV LED 65\", Ultra HD 4K HDR, Wi-Fi, Ethernet.",
    image: "https://tpthumb.azureedge.net/ediel/877380.jpg?width=400&height=480", stock: 3, offer: true,
  },
  {
    id: "65", name: "Hisense LED 32\" HD", brand: "Hisense", price: 149.00,
    category: "TV & Audio", description: "Smart TV LED 32\", HDR, 60Hz, Wi-Fi, Ethernet.",
    image: "https://tpthumb.azureedge.net/ediel/887107.jpg?width=400&height=480", stock: 8,
  },
  {
    id: "66", name: "QBell LED 32\"", brand: "QBell", price: 99.90,
    category: "TV & Audio", description: "TV LED 32\", decoder DVB-S2/DVB-T2, 2 prese USB.",
    image: "https://tpthumb.azureedge.net/ediel/852509.jpg?width=400&height=480", stock: 10,
  },

  // ── GAMING & TEMPO LIBERO ──
  {
    id: "67", name: "Trust Gaming Desk GXT 709 RGB", brand: "Trust", price: 189.99, discountPrice: 169.90,
    category: "Gaming & Tempo Libero", description: "Scrivania gaming robusta illuminata a LED RGB.",
    image: "https://tpthumb.azureedge.net/ediel/845029.jpg?width=400&height=480", stock: 4, offer: true,
  },
  {
    id: "68", name: "Trust Tastiera Gaming RGB", brand: "Trust", price: 49.99, discountPrice: 39.90,
    category: "Gaming & Tempo Libero", description: "Tastiera USB gaming con illuminazione RGB.",
    image: "https://tpthumb.azureedge.net/ediel/850195.jpg?width=400&height=480", stock: 6, offer: true,
  },
  {
    id: "69", name: "Logitech Mouse MX Master", brand: "Logitech", price: 54.90,
    category: "Gaming & Tempo Libero", description: "Mouse ottico laser a filo, precisione professionale.",
    image: "https://tpthumb.azureedge.net/ediel/799999.jpg?width=400&height=480", stock: 4,
  },
  {
    id: "70", name: "MSI MAG Infinite S3 Desktop Gaming", brand: "MSI", price: 1749.00, discountPrice: 1499.00,
    category: "Gaming & Tempo Libero", description: "PC desktop gaming, Intel Core i7-14700F, 16GB DDR5, 1TB SSD, RTX 5060 8GB.",
    image: "https://tpthumb.azureedge.net/ediel/910096.jpg?width=400&height=480", stock: 2, featured: true, offer: true,
  },

  // ── CASA & ACCESSORI ──
  {
    id: "71", name: "Fritz! Range Extender WiFi 7", brand: "Fritz!", price: 119.00, discountPrice: 99.90,
    category: "Casa & Accessori", description: "Range extender WiFi 7 (802.11be), Ethernet Gigabit, 3600 Mb/s.",
    image: "https://tpthumb.azureedge.net/ediel/896194.jpg?width=400&height=480", stock: 5, offer: true,
  },
  {
    id: "72", name: "Strong Router 4G Pro 1200", brand: "Strong", price: 79.90,
    category: "Casa & Accessori", description: "Router 4G, 802.11ac, 4 porte Ethernet, colore bianco.",
    image: "https://tpthumb.azureedge.net/ediel/845263.jpg?width=400&height=480", stock: 6,
  },
  {
    id: "73", name: "TP-Link Router Mobile 4G M7010", brand: "TP-Link", price: 49.99, discountPrice: 39.90,
    category: "Casa & Accessori", description: "Router mobile 4G, 802.11n, 150 Mb/s, portatile.",
    image: "https://tpthumb.azureedge.net/ediel/758463.jpg?width=400&height=480", stock: 8, offer: true,
  },
  {
    id: "74", name: "SumUp Solo Lite + Base", brand: "SumUp", price: 34.90,
    category: "Casa & Accessori", description: "Terminale POS contactless con base di ricarica.",
    image: "https://tpthumb.azureedge.net/ediel/880146.jpg?width=400&height=480", stock: 10,
  },
  {
    id: "75", name: "HP All-in-One 24\" i3", brand: "HP", price: 699.99, discountPrice: 549.00,
    category: "Informatica", description: "PC desktop All-in-One 23.8\", Intel Core i3-1315U, 8GB RAM, 512GB SSD.",
    image: "https://tpthumb.azureedge.net/ediel/848827.jpg?width=400&height=480", stock: 3, offer: true,
  },
  {
    id: "76", name: "Trust Mouse Wireless", brand: "Trust", price: 14.90,
    category: "Casa & Accessori", description: "Mouse ottico LED Bluetooth, 4 tasti, ricevitore wireless nano.",
    image: "https://tpthumb.azureedge.net/ediel/737370.jpg?width=400&height=480", stock: 15,
  },
  {
    id: "77", name: "HP Smart Tank 5105", brand: "HP", price: 159.00,
    category: "Informatica", description: "Stampante inkjet multifunzione, WiFi, USB, risoluzione fino a 4800x1200 dpi.",
    image: "https://tpthumb.azureedge.net/ediel/842375.jpg?width=400&height=480", stock: 4,
  },
  {
    id: "78", name: "Samsung Monitor Gaming 27\"", brand: "Samsung", price: 179.00,
    category: "Gaming & Tempo Libero", description: "Monitor LCD 27\", 16:9, HDMI, VESA 75x75mm.",
    image: "https://tpthumb.azureedge.net/ediel/908632.jpg?width=400&height=480", stock: 5,
  },
];
