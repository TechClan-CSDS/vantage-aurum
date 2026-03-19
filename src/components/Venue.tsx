import { motion } from "framer-motion";
import { MapPin, Navigation, Map } from "lucide-react";

const Venue = () => {
  return (
    <section id="venue" className="relative py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-3 mb-6 rounded-full bg-gold/5 border border-gold/20 shadow-[0_0_15px_rgba(212,175,55,0.05)]">
            <Map className="w-5 h-5 text-gold" />
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tight">
            Event <span className="text-gradient-gold">Venue</span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          
          {/* Left: Venue Details Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 flex flex-col justify-center p-8 md:p-12 border border-gold/20 bg-[#0a0804]/80 backdrop-blur-md relative overflow-hidden group hover:border-gold/40 transition-colors duration-500"
          >
            {/* Background Glow */}
            <div className="absolute -top-32 -left-32 w-64 h-64 bg-gold/10 blur-[100px] rounded-full pointer-events-none" />

            {/* Bouncing Map Pin Icon */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold/10 border border-gold/30 mb-8 shadow-[0_4px_20px_rgba(212,175,55,0.15)]"
            >
              <MapPin className="w-6 h-6 text-gold" />
            </motion.div>

            <h3 className="text-2xl md:text-3xl font-display font-black text-foreground uppercase mb-2">
              Dayananda Sagar
            </h3>
            <h4 className="text-xl md:text-2xl font-display font-bold text-gold opacity-90 uppercase mb-6">
              College of Engineering
            </h4>

            <div className="space-y-4 mb-10">
              <p className="flex items-start text-sm md:text-base text-foreground/70 font-mono leading-relaxed">
                Shavige Malleshwara Hills,
                <br />
                91st Main Rd, 1st Stage,
                <br />
                Kumaraswamy Layout,
                <br />
                Bengaluru, Karnataka 560111
              </p>
            </div>

            <a
              href="https://maps.app.goo.gl/UoBV3WrExuy4N9z47"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 w-fit px-8 py-4 bg-gold text-black font-display font-bold text-sm uppercase tracking-wider transition-all hover:bg-gold-light hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.45)]"
            >
              <Navigation className="w-4 h-4" />
              Get Directions
            </a>
          </motion.div>

          {/* Right: The Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 min-h-[400px] lg:min-h-full border border-gold/20 relative group overflow-hidden"
          >
            {/* Map overlay tint (makes it look more 'gold/hacker' themed and blends with the dark UI) */}
            <div className="absolute inset-0 bg-gold/10 mix-blend-overlay pointer-events-none z-10" />
            
            <iframe
              title="DSCE Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6693089498547!2d77.56184507507645!3d12.922026787390246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae156310100001%3A0x71be53da4480fbbe!2sDayananda%20Sagar%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: "invert(100%) hue-rotate(180deg) brightness(0.85) contrast(1.1) sepia(20%)",
                position: "absolute",
                top: 0,
                left: 0,
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            
            {/* Subtle inner shadow border over the map */}
            <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(10,8,4,0.8)] pointer-events-none z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Venue;
