import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Stats = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const leftX = useTransform(scrollYProgress, [0, 1], ["-20%", "0%"]);
  const rightX = useTransform(scrollYProgress, [0, 1], ["20%", "0%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6]);

  return (
    <section ref={sectionRef} className="py-20 bg-accent text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <motion.div
            style={{ opacity }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6">
              +25 años de experiencia
            </h2>
          </motion.div>
          
          <motion.div
            style={{ opacity }}
          >
            <p className="text-lg md:text-xl lg:text-2xl font-body leading-relaxed">
              y una cartera creciente de clientes que avalan nuestro <strong>compromiso, rapidez y resultados.</strong>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
