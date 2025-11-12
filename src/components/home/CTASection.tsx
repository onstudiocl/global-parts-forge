import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ctaImage from "@/assets/cta-mining-efficiency.jpg";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-[600px]">
        {/* Image Half */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-full min-h-[400px] lg:min-h-[600px]"
        >
          <img
            src={ctaImage}
            alt="Eficiencia minera y tecnología"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/20" />
        </motion.div>

        {/* Content Half */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center px-8 lg:px-16 py-20 bg-accent/5"
        >
          <div className="max-w-xl space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
              Mantén tu operación en marcha hoy
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Cuéntanos qué necesitas y nos pondremos en acción de inmediato. Sin demoras, sin complicaciones.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="cta" size="lg" asChild className="text-lg px-8 py-6 h-auto">
                <Link to="/contacto" className="inline-flex items-center gap-2">
                  Conectemos operaciones!
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
