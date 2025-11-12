import { motion } from "framer-motion";
import { Zap, DollarSign, Award, Headphones } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Velocidad",
    description: "Nos movemos con la urgencia que tu operación requiere. Entregas rápidas para minimizar el tiempo de inactividad.",
  },
  {
    icon: DollarSign,
    title: "Precios competitivos",
    description: "Misma calidad, mejores precios. Optimizamos nuestra cadena de suministro para ofrecerte el mejor valor.",
  },
  {
    icon: Award,
    title: "Dedicación exclusiva",
    description: "Te sacamos de apuros cuando más lo necesitas. Tu operación es nuestra prioridad número uno.",
  },
  {
    icon: Headphones,
    title: "Servicio Post-Venta",
    description: "No termina con la entrega. Te acompañamos durante todo el ciclo de vida del producto con soporte técnico experto.",
  },
];

const WhyGlobalParts = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            ¿Por qué Global Parts?
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Tu socio estratégico en el suministro de repuestos mineros
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group"
            >
              <div className="text-center space-y-4 p-6 rounded-lg hover:bg-secondary/50 transition-colors duration-300">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full"
                >
                  <reason.icon className="w-8 h-8 text-accent" />
                </motion.div>
                <h3 className="text-xl font-heading font-semibold text-foreground">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyGlobalParts;
