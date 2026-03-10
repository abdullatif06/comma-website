import { motion } from 'motion/react';
import { Coffee, Droplet, Wind, Leaf, Wrench, Cake, Plus, Droplets } from 'lucide-react';
import clsx from 'clsx';

const menuData = [
  {
    category: "Hot Drink",
    icon: <Coffee className="w-6 h-6" />,
    items: [
      { name: "Espresso", price: "1.00 JD", ar: "اسبريسو" },
      { name: "Macchiato", price: "1.25 JD", ar: "مكياتو" },
      { name: "Mocha", price: "2.50 JD", ar: "موكا" },
      { name: "White", price: "2.50 JD", ar: "وايت" },
      { name: "Dark", price: "2.50 JD", ar: "دارك" },
      { name: "Latte", price: "1.75 JD", ar: "لاتيه" },
      { name: "Spanish", price: "2.25 JD", ar: "سبانيش" },
      { name: "Pistachio", price: "2.25 JD", ar: "بستاشيو" },
      { name: "Saffron", price: "2.25 JD", ar: "زعفران" },
      { name: "Caramel", price: "2.25 JD", ar: "كراميل" },
      { name: "Vanilla", price: "2.25 JD", ar: "فانيلا" },
      { name: "Hazelnut", price: "2.25 JD", ar: "بندق" },
      { name: "Caramel Macchiato", price: "2.75 JD", ar: "كراميل مكياتو" },
      { name: "American", price: "1.50 JD", ar: "أمريكان" },
      { name: "Americano", price: "1.50 JD", ar: "أمريكانو" },
      { name: "Flat White", price: "1.50 JD", ar: "فلات وايت" },
      { name: "Cappuccino", price: "1.75 JD", ar: "كابتشينو" },
      { name: "Hot Chocolate", price: "2.50 JD", ar: "هوت شوكلت" },
    ]
  },
  {
    category: "Cold Drink",
    icon: <Droplet className="w-6 h-6" />,
    items: [
      { name: "Iced Latte", price: "1.75 JD", ar: "آيس لاتيه" },
      { name: "Spanish", price: "2.25 JD", ar: "سبانيش" },
      { name: "Pistachio", price: "2.25 JD", ar: "بستاشيو" },
      { name: "Saffron", price: "2.25 JD", ar: "زعفران" },
      { name: "Caramel", price: "2.25 JD", ar: "كراميل" },
      { name: "Vanilla", price: "2.25 JD", ar: "فانيلا" },
      { name: "Hazelnut", price: "2.25 JD", ar: "بندق" },
      { name: "Caramel Macchiato", price: "2.75 JD", ar: "كراميل مكياتو" },
      { name: "Frappe Caramel", price: "2.50 JD", ar: "فرابيه كراميل" },
      { name: "Frappe Vanilla", price: "2.50 JD", ar: "فرابيه فانيلا" },
      { name: "Frappe Hazelnut", price: "2.50 JD", ar: "فرابيه بندق" },
      { name: "Toffee Crunch", price: "2.75 JD", ar: "توفي كرنش" },
      { name: "Mocha White", price: "2.50 JD", ar: "موكا وايت" },
      { name: "Mocha Dark", price: "2.50 JD", ar: "موكا دارك" },
      { name: "Cold Brew", price: "3.00 JD", ar: "كولد برو" },
    ]
  },
  {
    category: "Fizzy Drink",
    icon: <Wind className="w-6 h-6" />,
    items: [
      { name: "Passion Fruits", price: "2.00 JD", ar: "باشن فروت" },
      { name: "Blueberry", price: "2.00 JD", ar: "بلوبيري" },
      { name: "Cherry Lime", price: "2.00 JD", ar: "شيري لايم" },
      { name: "Strawberry", price: "2.00 JD", ar: "فراولة" },
      { name: "Pomegranate", price: "2.00 JD", ar: "رمان" },
      { name: "Blue Comma", price: "2.00 JD", ar: "بلو كوما" },
    ]
  },
  {
    category: "Smoothie",
    icon: <Droplet className="w-6 h-6" />,
    items: [
      { name: "Passion Fruits", price: "2.50 JD", ar: "باشن فروت" },
      { name: "Mango", price: "2.50 JD", ar: "مانجا" },
      { name: "Strawberry", price: "2.50 JD", ar: "فراولة" },
      { name: "Milk Blueberry", price: "2.50 JD", ar: "ميلك بلوبيري" },
      { name: "Peach", price: "2.50 JD", ar: "خوخ" },
    ]
  },
  {
    category: "Tea Leaf",
    icon: <Leaf className="w-6 h-6" />,
    items: [
      { name: "Matcha", price: "2.50 JD", ar: "ماتشا" },
      { name: "Chai Latte", price: "2.50 JD", ar: "شاي لاتيه" },
      { name: "Iced Tea (Peach, Strawberry)", price: "1.50 JD", ar: "آيس تي (خوخ، فراولة)" },
    ]
  },
  {
    category: "Manual Tools",
    icon: <Wrench className="w-6 h-6" />,
    items: [
      { name: "V60", price: "3.00 JD", ar: "في 60" },
      { name: "Chemix", price: "3.00 JD", ar: "كيميكس" },
      { name: "Aero Press", price: "3.00 JD", ar: "إيرو بريس" },
    ]
  },
  {
    category: "Pastries",
    icon: <Cake className="w-6 h-6" />,
    items: [
      { name: "Cookies", price: "1.00 JD", ar: "كوكيز" },
      { name: "Pastries (Cheese & Za'atar)", price: "1.00 JD", ar: "فطاير جبن وزعتر" },
      { name: "Oreshki (Caramel/Nutella)", price: "1.50 JD", ar: "جوزية كراميل/نوتيلا" },
      { name: "Brownies", price: "2.00 JD", ar: "براونيز" },
      { name: "Flake Cake", price: "2.50 JD", ar: "فليك كيك" },
      { name: "Nutella Cake", price: "3.00 JD", ar: "نوتيلا كيك" },
    ]
  },
  {
    category: "Add On",
    icon: <Plus className="w-6 h-6" />,
    items: [
      { name: "Flavor", price: "0.50 JD", ar: "نكهة" },
      { name: "Espresso Shot", price: "0.50 JD", ar: "شوت اسبريسو" },
      { name: "Almond Milk", price: "0.75 JD", ar: "حليب اللوز" },
      { name: "Lactos Free Milk", price: "0.75 JD", ar: "حليب خالي من اللاكتوز" },
      { name: "Oat Milk", price: "0.75 JD", ar: "حليب الشوفان" },
    ]
  },
  {
    category: "Water",
    icon: <Droplets className="w-6 h-6" />,
    items: [
      { name: "Water", price: "0.50 JD", ar: "مياه معدنية" },
      { name: "Sparkling Water", price: "1.25 JD", ar: "مياه غازية" },
    ]
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export function Menu() {
  return (
    <div className="bg-background min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <span className="text-primary font-medium tracking-widest uppercase text-sm">Our Selection</span>
          <h1 className="text-5xl md:text-6xl font-serif text-text font-bold">The Menu</h1>
          <p className="text-text-light text-lg leading-relaxed">
            Carefully curated and expertly crafted. Explore our range of premium beverages and artisanal pastries.
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-20">
          {menuData.map((section, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              className="space-y-8"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 border-b-2 border-primary/20 pb-4">
                <div className="bg-primary text-white p-3 rounded-full shadow-md">
                  {section.icon}
                </div>
                <h2 className="text-3xl font-serif text-primary-dark">{section.category}</h2>
              </div>

              {/* Items List */}
              <ul className="space-y-6">
                {section.items.map((item, i) => (
                  <li key={i} className="group cursor-default p-3 -mx-3 rounded-xl hover:bg-white hover:shadow-sm transition-all duration-300 border border-transparent hover:border-gray-100">
                    <div className="flex justify-between items-baseline gap-4">
                      <div className="flex flex-col">
                        <span className="text-lg font-medium text-text group-hover:text-primary transition-colors">
                          {item.name}
                        </span>
                        <span className="text-sm text-text-light font-serif group-hover:text-primary/70 transition-colors" dir="rtl">
                          {item.ar}
                        </span>
                      </div>
                      
                      {/* Dotted Line */}
                      <div className="flex-grow border-b border-dotted border-text-light/30 mx-4 relative top-[-6px] group-hover:border-primary/30 transition-colors"></div>
                      
                      <span className="text-lg font-serif font-semibold text-primary shrink-0 group-hover:scale-105 transition-transform origin-right">
                        {item.price}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
