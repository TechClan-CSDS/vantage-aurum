import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const Venue = () => {
  return (
    <section id="venue" className="relative py-20 md:py-28 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-4xl md:text-6xl font-display font-black text-foreground uppercase tracking-tight mb-4">
            Find us <span className="text-gradient-gold">here.</span>
          </h2>
          <div className="inline-flex items-center gap-3 px-4 py-2 border-2 border-gold/30 bg-gold/5">
            <MapPin className="w-4 h-4 text-gold" />
            <p className="text-sm text-foreground/80 font-body">
              DSCE · Kumaraswamy Layout, 91st Cross · Bangalore
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-2 border-gold/20 overflow-hidden"
        >
          <iframe
            title="DSCE Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6693089498547!2d77.56184507507645!3d12.922026787390246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae156310100001%3A0x71be53da4480fbbe!2sDayananda%20Sagar%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.8) contrast(1.2)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Venue;
