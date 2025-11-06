import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-accent/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary">
            Mantén tu operación en marcha hoy
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Cuéntanos qué necesitas y nuestro equipo se pondrá en acción de inmediato. 
            Sin demoras, sin complicaciones.
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
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
