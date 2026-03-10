import { motion } from 'motion/react';
import { Coffee, Users, Globe, Leaf } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

export function About() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1600&auto=format&fit=crop"
            alt="Coffee Shop Interior"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center text-white mt-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-3xl mx-auto space-y-6"
          >
            <span className="text-primary-light font-medium tracking-widest uppercase text-sm">Our Story</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight">
              The Art of the Pause
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-serif text-text leading-tight">
                Crafting moments of clarity in a busy world.
              </h2>
              <p className="text-text-light text-lg leading-relaxed">
                Comma was born from a simple idea: that everyone deserves a moment to pause. In grammar, a comma represents a brief pause, a breath before continuing. We believe coffee serves the exact same purpose in our daily lives.
              </p>
              <p className="text-text-light text-lg leading-relaxed">
                We don't just serve coffee; we curate an experience designed to help you reset, refocus, and recharge. From the carefully selected beans to the minimalist design of our spaces, every detail is intentional.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1600&auto=format&fit=crop"
                  alt="Barista crafting coffee"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24 space-y-4">
            <span className="text-primary font-medium tracking-widest uppercase text-sm">Our Values</span>
            <h2 className="text-4xl md:text-5xl font-serif text-text">What Drives Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              {
                icon: <Coffee className="w-8 h-8" />,
                title: "Uncompromising Quality",
                desc: "We source only the top 1% of specialty grade Arabica beans from around the world."
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Community First",
                desc: "Our spaces are designed to foster connection, creativity, and collaboration."
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Ethical Sourcing",
                desc: "We build direct relationships with farmers, ensuring fair wages and sustainable practices."
              },
              {
                icon: <Leaf className="w-8 h-8" />,
                title: "Environmental Focus",
                desc: "From compostable cups to energy-efficient roasting, we minimize our footprint."
              }
            ].map((value, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }
                }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group border border-gray-100"
              >
                <div className="text-primary bg-primary/5 p-4 rounded-full inline-block mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-serif font-semibold mb-4 text-text">{value.title}</h3>
                <p className="text-text-light leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
