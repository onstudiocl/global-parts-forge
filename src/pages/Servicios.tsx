import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import productParts from "@/assets/product-parts.jpg";
import productMachinery from "@/assets/product-machinery.jpg";
import productConveyors from "@/assets/product-conveyors.jpg";
import productElectronics from "@/assets/product-electronics.jpg";

const services = [
  {
    id: "byg",
    name: "ByG Quality",
    image: productParts,
    description: "Repuestos de primera calidad para equipos mineros. Certificados y probados en las condiciones más exigentes.",
    features: [
      "Rodamientos industriales de alta resistencia",
      "Sellos y empaques especializados",
      "Sistemas de lubricación",
      "Componentes de transmisión",
    ],
  },
  {
    id: "phoenix",
    name: "Phoenix",
    image: productMachinery,
    description: "Soluciones completas para maquinaria pesada. Maximiza la disponibilidad y confiabilidad de tus equipos.",
    features: [
      "Sistemas hidráulicos completos",
      "Componentes de motor",
      "Partes de tren de fuerza",
      "Sistemas de enfriamiento",
    ],
  },
  {
    id: "mtb",
    name: "MTB",
    image: productConveyors,
    description: "Especialistas en sistemas de transporte y manejo de materiales. Optimiza tu cadena productiva.",
    features: [
      "Correas transportadoras de alta resistencia",
      "Sistemas de rodillos y poleas",
      "Componentes de limpieza",
      "Estructuras de soporte",
    ],
  },
  {
    id: "otros",
    name: "Otros productos",
    image: productElectronics,
    description: "Amplia gama de repuestos complementarios para todas tus necesidades operativas.",
    features: [
      "Componentes eléctricos y electrónicos",
      "Sistemas de control y automatización",
      "Herramientas especializadas",
      "Equipos de seguridad industrial",
    ],
  },
];

const Servicios = () => {
  const [activeService, setActiveService] = useState(services[0].id);
  const currentService = services.find((s) => s.id === activeService) || services[0];

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
              Nuestros Servicios
            </h1>
            <p className="text-xl text-muted-foreground">
              Soluciones integrales en repuestos mineros de las mejores marcas
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Menu */}
      <section className="py-8 bg-background sticky top-16 z-40 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className="relative group"
              >
                <div className="flex flex-col items-center space-y-2 p-4 rounded-lg hover:bg-secondary/50 transition-colors">
                  <div className="w-16 h-16 rounded-lg overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span
                    className={`text-sm font-medium transition-colors ${
                      activeService === service.id ? "text-accent" : "text-foreground"
                    }`}
                  >
                    {service.name}
                  </span>
                </div>
                {activeService === service.id && (
                  <motion.div
                    layoutId="activeService"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Service Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            key={activeService}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">
                {currentService.name}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {currentService.description}
              </p>
              <div className="space-y-3">
                <h3 className="text-xl font-heading font-semibold text-foreground">
                  Características principales:
                </h3>
                <ul className="space-y-2">
                  {currentService.features.map((feature) => (
                    <li key={feature} className="flex items-start space-x-3">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="relative">
              <motion.img
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                src={currentService.image}
                alt={currentService.name}
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Servicios;
