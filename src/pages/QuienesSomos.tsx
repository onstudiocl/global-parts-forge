import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar } from "lucide-react";

const milestones = [
  {
    year: "1998",
    title: "Fundación",
    description: "Global Parts inicia operaciones en Santiago, Chile, con la visión de transformar el suministro de repuestos mineros.",
  },
  {
    year: "2005",
    title: "Expansión regional",
    description: "Ampliamos nuestra cobertura a las principales zonas mineras del norte de Chile.",
  },
  {
    year: "2012",
    title: "Certificación internacional",
    description: "Obtenemos certificaciones ISO 9001, consolidando nuestro compromiso con la calidad.",
  },
  {
    year: "2018",
    title: "Innovación tecnológica",
    description: "Implementamos sistemas de gestión digital para optimizar tiempos de respuesta y trazabilidad.",
  },
  {
    year: "2023",
    title: "Liderazgo en el sector",
    description: "Nos consolidamos como uno de los principales proveedores de repuestos mineros en Chile.",
  },
];

const QuienesSomos = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mb-6">
              Quiénes Somos
            </h1>
            <p className="text-xl text-muted-foreground">
              Más de 25 años manteniendo la minería chilena en movimiento
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-accent/30" />
              
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative mb-16 ${
                    index % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8"
                  }`}
                >
                  <div
                    className={`md:w-1/2 ${
                      index % 2 === 0 ? "md:ml-auto" : ""
                    }`}
                  >
                    <div className="bg-card rounded-lg p-6 shadow-lg hover-lift">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full mb-4">
                        <Calendar className="w-6 h-6 text-accent" />
                      </div>
                      <div className="text-3xl font-heading font-bold text-accent mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 top-8 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h2 className="text-3xl font-heading font-bold text-primary">
                Nuestra Misión
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Proporcionar repuestos mineros de la más alta calidad con velocidad excepcional, 
                asegurando que cada operación minera en Chile mantenga su continuidad productiva 
                sin compromisos en calidad ni servicio.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <h2 className="text-3xl font-heading font-bold text-primary">
                Nuestra Visión
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ser el proveedor preferido de repuestos mineros en Chile y Latinoamérica, 
                reconocidos por nuestra innovación tecnológica, compromiso con la excelencia 
                y capacidad de respuesta ante las necesidades más urgentes de nuestros clientes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QuienesSomos;
