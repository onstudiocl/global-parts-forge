import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Eye, Zap } from "lucide-react";
import heroImage from "@/assets/hero-sobre-nosotros.jpg";
import logoWatermark from "@/assets/logo-global-parts-watermark.png";

const QuienesSomos = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Equipo minero Global Parts"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-primary mb-6 drop-shadow-lg">
              Más de 25 años manteniendo la minería chilena en movimiento
            </h1>
          </motion.div>
        </div>
      </section>

      {/* About Section with Watermark */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <img
            src={logoWatermark}
            alt="Global Parts Logo"
            className="w-[800px] h-[800px] object-contain"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto space-y-6 text-lg leading-relaxed text-muted-foreground"
          >
            <p>
              <span className="text-2xl font-heading font-bold text-primary">Global Parts SpA</span> es una empresa chilena joven y dinámica, formada por profesionales con más de 25 años de experiencia en la industria minera, comprometidos con brindar soluciones confiables, innovadoras y sostenibles para las principales operaciones mineras del país.
            </p>
            
            <p>
              Especializada en la comercialización de repuestos, componentes y servicios técnicos para equipos mineros, Global Parts se consolida como un socio estratégico que entiende de primera mano las necesidades y exigencias del sector. Su equipo ha desarrollado una amplia trayectoria en áreas clave como mantenimiento de equipos, soporte técnico, gestión de proyectos y atención comercial, lo que permite entregar un servicio integral, ágil y de alto valor agregado.
            </p>
            
            <p>
              Con una visión enfocada en la eficiencia, la tecnología y la sostenibilidad, Global Parts busca optimizar la productividad de sus clientes mediante soluciones personalizadas, asegurando rendimiento, disponibilidad y continuidad operacional.
            </p>
            
            <p>
              Respaldada por una sólida red de alianzas nacional e internacionales y un enfoque en la mejora continua, Global Parts se posiciona como un referente en el suministro de productos, repuestos y servicios para equipos mineros en Chile, aportando innovación y confianza a cada proyecto.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision - Bold Design */}
      <section className="py-20 bg-gradient-to-br from-accent/10 via-background to-secondary/5 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-accent/20 hover:border-accent/40 transition-all duration-300 hover-lift h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/70 rounded-xl flex items-center justify-center shadow-lg">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-4xl font-heading font-bold text-primary">
                    Nuestra Misión
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Impulsar la <span className="text-accent font-semibold">continuidad operacional</span> de la minería chilena entregando repuestos y soluciones técnicas de <span className="text-accent font-semibold">clase mundial</span>, con velocidad excepcional y compromiso inquebrantable. Somos el aliado estratégico que transforma cada desafío en oportunidad, manteniendo las operaciones en movimiento cuando más lo necesitan.
                </p>
              </div>
            </motion.div>
            
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover-lift h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center shadow-lg">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-4xl font-heading font-bold text-primary">
                    Nuestra Visión
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Ser el <span className="text-primary font-semibold">referente indiscutido</span> en soluciones mineras de Chile y Latinoamérica. Una organización que redefine estándares, innova constantemente y establece nuevos paradigmas de <span className="text-primary font-semibold">excelencia, velocidad y confiabilidad</span>. Donde cada cliente nos elige no solo por lo que hacemos, sino por cómo transformamos su operación.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Values Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 max-w-4xl mx-auto"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-primary/20 to-accent/20 rounded-2xl blur-xl" />
              <div className="relative bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-8 border border-accent/30">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Zap className="w-8 h-8 text-accent" />
                  <h3 className="text-2xl font-heading font-bold text-primary">
                    Nuestro Compromiso
                  </h3>
                </div>
                <p className="text-center text-lg text-muted-foreground">
                  Innovación tecnológica, respuesta inmediata y soluciones sostenibles que potencian cada operación. Porque en la minería, <span className="text-accent font-semibold">cada segundo cuenta</span> y la <span className="text-primary font-semibold">excelencia no es negociable</span>.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QuienesSomos;
