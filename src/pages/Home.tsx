import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Coffee, Star, MapPin, Instagram } from 'lucide-react';
import clsx from 'clsx';
import heroImage from '../../images/Whisk_0b888c221fa762181c14a20fd4078133dr.png';
import design1 from '../../images/Untitled design (1).png';
import design2 from '../../images/Untitled design (2).png';
import design3 from '../../images/Untitled design (3).png';
import gallery1 from '../../images/Whisk_82725a6e8237482aa3d49aa4ea42fe9ddr.png';
import gallery2 from '../../images/Whisk_c15511890739789a27e47b21997612c3dr.png';
import experienceImg from '../../images/Whisk_e1385a6486958069dd24f43803962d7bdr.png';
import newExperienceImg from '../../images/Whisk_1657238b89773b8a8d7480ece1b73cb8dr.png';
import bs1 from '../../images/Whisk_1b56dc54c0db251a52b4d47507793bd1dr.png';
import bs2 from '../../images/Whisk_2e4509d28718d42b7364302b601c2007dr.png';
import bs3 from '../../images/Whisk_8f669feaf555a3bb6d7458c5d8bc6b49dr.png';
import bs4 from '../../images/Whisk_37c3b97b4156a0e8bb04cfa0bed52d3ddr.png';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const wordContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.2 }
  }
};

const charVariant = {
  hidden: { opacity: 0, y: 15, filter: 'blur(4px)' },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

const line1 = "Pause.";
const line2 = "Sip.";
const line3 = " Enjoy.";

export function Home() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Comma Coffee Atmosphere"
            className="w-full h-full object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center text-white mt-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl mx-auto space-y-8"
          >
            <motion.h1 
              variants={wordContainer} 
              className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight"
            >
              <span className="inline-block">
                {line1.split('').map((char, i) => (
                  <motion.span key={`l1-${i}`} variants={charVariant} className="inline-block">
                    {char}
                  </motion.span>
                ))}
              </span>
              <br />
              <span className="inline-block text-primary-light">
                {line2.split('').map((char, i) => (
                  <motion.span key={`l2-${i}`} variants={charVariant} className="inline-block">
                    {char}
                  </motion.span>
                ))}
              </span>
              <span className="inline-block">
                {line3.split('').map((char, i) => (
                  <motion.span key={`l3-${i}`} variants={charVariant} className="inline-block">
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-white/90 font-light max-w-xl mx-auto">
              Experience the art of coffee in every cup. A moment of clarity in your busy day.
            </motion.p>
            <motion.div variants={fadeInUp} className="pt-8">
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:bg-white hover:text-primary shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Explore Menu
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Drinks */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24 space-y-4">
            <span className="text-primary font-medium tracking-widest uppercase text-sm">Signature Taste</span>
            <h2 className="text-4xl md:text-5xl font-serif text-text">Crafted to Perfection</h2>
            <p className="text-text-light text-lg">Discover our most loved creations, made with premium ingredients and expert precision.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 w-full">
            {[
              {
                name: "Iced Matcha Latte",
                desc: "Premium ceremonial grade matcha with perfectly textured milk.",
                img: design1
              },
              {
                name: "Caramel Macchiato",
                desc: "Rich espresso layered with vanilla syrup and caramel drizzle.",
                img: design2
              },
              {
                name: "Signature Chocolate",
                desc: "Decadent dark chocolate blended with velvety steamed milk.",
                img: design3
              }
            ].map((drink, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="group flex flex-col items-center text-center space-y-6 w-full"
              >
                <div className="relative w-full rounded-2xl overflow-hidden transition-transform duration-500 group-hover:scale-105 shadow-md">
                  <img src={drink.img} alt={drink.name} className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-serif text-text">{drink.name}</h3>
                  <p className="text-text-light leading-relaxed">{drink.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 md:py-32 bg-primary text-white overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full lg:w-1/2 relative"
            >
              <div className="w-full rounded-2xl overflow-hidden shadow-2xl bg-white flex items-center justify-center">
                <img
                  src={newExperienceImg}
                  alt="Coffee Splash"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-xl max-w-xs hidden md:block text-text">
                <Coffee className="text-primary w-10 h-10 mb-4" />
                <h4 className="font-serif text-xl mb-2">Artisanal Roasts</h4>
                <p className="text-text-light text-sm">We source only the top 1% of Arabica beans globally.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="w-full lg:w-1/2 space-y-8"
            >
              <span className="text-primary-light font-medium tracking-widest uppercase text-sm">Our Philosophy</span>
              <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
                More than just a cup of coffee.
              </h2>
              <p className="text-white/80 text-lg leading-relaxed">
                At Comma, we believe that coffee is an experience. It's the pause in your sentence, the moment of reflection before you continue your day. Our master baristas treat every extraction as a work of art, ensuring that from bean to cup, excellence is maintained.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  "Ethically sourced single-origin beans",
                  "Precision brewing methods",
                  "Expertly trained baristas",
                  "A welcoming, modern atmosphere"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white">
                    <Star className="text-primary w-5 h-5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-8">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-primary-light font-medium hover:text-white transition-colors group"
                >
                  Read Our Story
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24 space-y-4">
            <span className="text-primary font-medium tracking-widest uppercase text-sm">Crowd Favorites</span>
            <h2 className="text-4xl md:text-5xl font-serif text-text">Best Sellers</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Spanish Latte",
                desc: "A sweet, creamy blend of espresso and condensed milk.",
                img: bs1
              },
              {
                name: "V60 Pour Over",
                desc: "Clean, complex flavors highlighting our single-origin beans.",
                img: bs2
              },
              {
                name: "Pistachio Latte",
                desc: "Rich espresso combined with our house-made pistachio cream.",
                img: bs3
              },
              {
                name: "Cold Brew",
                desc: "Steeped for 18 hours for a smooth, refreshing finish.",
                img: bs4
              }
            ].map((drink, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }
                }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6 shadow-md group-hover:shadow-xl transition-shadow duration-500">
                  <img 
                    src={drink.img} 
                    alt={drink.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-serif text-text group-hover:text-primary transition-colors">{drink.name}</h3>
                  <p className="text-sm text-text-light leading-relaxed">{drink.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24 space-y-4">
            <span className="text-primary font-medium tracking-widest uppercase text-sm">The Atmosphere</span>
            <h2 className="text-4xl md:text-5xl font-serif text-text">A Space to Breathe</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              gallery1,
              gallery2,
              gallery1,
              gallery2,
              gallery1,
              gallery2
            ].map((img, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, scale: 0.95 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: i * 0.1 } }
                }}
                className={clsx(
                  "relative group overflow-hidden rounded-2xl",
                  i === 0 || i === 3 ? "md:col-span-2 lg:col-span-1" : ""
                )}
              >
                <div className="aspect-square md:aspect-[4/3] w-full">
                  <img
                    src={img}
                    alt={`Gallery image ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-24 md:py-32 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <Instagram className="w-8 h-8 mx-auto text-primary mb-4" />
            <h2 className="text-4xl md:text-5xl font-serif text-text">Follow Our Journey</h2>
            <a 
              href="https://www.instagram.com/comma.jo/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block text-primary font-medium hover:text-primary-dark transition-colors tracking-wide"
            >
              @comma.jo
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=600&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=600&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=600&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=600&auto=format&fit=crop"
            ].map((img, i) => (
              <a 
                key={i} 
                href="https://www.instagram.com/comma.jo/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative group aspect-square overflow-hidden bg-background block rounded-xl"
              >
                <img 
                  src={img} 
                  alt="Instagram post" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Instagram className="text-white w-8 h-8" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1600&auto=format&fit=crop" 
            alt="Coffee background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/90 mix-blend-multiply" />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="container mx-auto px-6 max-w-4xl relative z-10 space-y-8">
          <h2 className="text-4xl md:text-6xl font-serif font-bold">Ready for your daily pause?</h2>
          <p className="text-xl text-white/80 font-light max-w-2xl mx-auto">
            Visit us today and experience the difference of truly artisanal coffee in a space designed for your comfort.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link
              to="/visit"
              className="w-full sm:w-auto bg-white text-primary px-8 py-4 rounded-full font-medium tracking-wide transition-all hover:bg-background hover:shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <MapPin size={18} />
              Find Our Location
            </Link>
            <Link
              to="/menu"
              className="w-full sm:w-auto bg-transparent border border-white/30 text-white px-8 py-4 rounded-full font-medium tracking-wide transition-all hover:bg-white/10 flex items-center justify-center gap-2"
            >
              View Menu
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
