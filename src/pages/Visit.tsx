import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

export function Visit() {
  return (
    <div className="bg-background min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <span className="text-primary font-medium tracking-widest uppercase text-sm">Find Us</span>
          <h1 className="text-5xl md:text-6xl font-serif text-text font-bold">Visit Comma</h1>
          <p className="text-text-light text-lg leading-relaxed">
            We're located in the heart of the city, ready to serve you the perfect cup. Drop by, say hello, and take a pause.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-12"
          >
            <div className="space-y-8">
              <h2 className="text-3xl font-serif text-text">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold mb-2">Location</h3>
                    <p className="text-text-light leading-relaxed">
                      123 Coffee Avenue,<br />
                      Amman, Jordan
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold mb-2">Hours</h3>
                    <ul className="text-text-light leading-relaxed space-y-1">
                      <li>Mon - Fri: 7:00 AM - 10:00 PM</li>
                      <li>Saturday: 8:00 AM - 11:00 PM</li>
                      <li>Sunday: 8:00 AM - 10:00 PM</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold mb-2">Contact</h3>
                    <p className="text-text-light leading-relaxed">
                      +962 6 123 4567<br />
                      hello@commacoffee.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-serif text-text mb-6">Send a Message</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-4 rounded-lg font-medium tracking-wide transition-all hover:bg-primary-dark hover:shadow-lg flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send size={18} />
                </button>
              </form>
            </div>
          </motion.div>

          {/* Map / Image Area */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full h-full min-h-[500px] rounded-2xl overflow-hidden shadow-2xl relative bg-gray-100"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27078.68239031024!2d35.89733072210086!3d31.95159489241951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca071250269c3%3A0x289745b6329c3b88!2sJabal%20Amman%2C%20Amman%2C%20Jordan!5e0!3m2!1sen!2s!4v1710000000000!5m2!1sen!2s" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
