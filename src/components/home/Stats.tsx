import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Stats = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const leftX = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const rightX = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6]);

  return (
    <section ref={sectionRef} className="py-32 bg-primary text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="space-y-12">
          <motion.div
            style={{ x: leftX, opacity }}
            className="text-center md:text-left"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight">
              Más de 25 años de experiencia
            </h2>
          </motion.div>
          
          <motion.div
            style={{ x: rightX, opacity }}
            className="text-center md:text-right"
          >
            <p className="text-2xl md:text-3xl lg:text-4xl font-body leading-relaxed text-primary-foreground/90">
              ...y una cartera creciente de clientes que avalan nuestro compromiso, rapidez y resultados.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
