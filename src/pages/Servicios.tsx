import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Settings, Lightbulb, Shield, Package } from "lucide-react";
import productParts from "@/assets/productTypes_Card1.jpg";
import productMachinery from "@/assets/productTypes_Card2.jpg";
import productConveyors from "@/assets/productTypes_Card3.jpg";
import productElectronics from "@/assets/productTypes_Card4.jpg";
import heroServiciosMineria from "@/assets/hero-servicios-mineria.jpg";

const services = [
  {
    id: "elementos-desgaste",
    name: "Elementos de desgaste",
    icon: Settings,
    image: productParts,
    description: "Componentes de alta resistencia diseñados para soportar las condiciones más exigentes de la minería.",
    features: [
      "Revestimientos y blindajes de acero",
      "Piezas de desgaste para chancadores",
      "Martillos y placas de impacto",
      "Cuchillas y dientes de excavadoras",
    ],
    products: [
      {
        id: 1,
        name: "Revestimiento de Molino",
        description: "Revestimientos de acero al manganeso de alta resistencia",
        image: productParts,
      },
      {
        id: 2,
        name: "Martillos de Impacto",
        description: "Martillos forjados para chancadores de alto rendimiento",
        image: productParts,
      },
      {
        id: 3,
        name: "Blindajes",
        description: "Blindajes de acero templado para protección de equipos",
        image: productParts,
      },
      {
        id: 4,
        name: "Dientes Excavadora",
        description: "Dientes de excavadora con sistema de fijación rápida",
        image: productParts,
      },
      {
        id: 5,
        name: "Placas de Desgaste",
        description: "Placas de acero reforzado para zonas de alto desgaste",
        image: productParts,
      },
      {
        id: 6,
        name: "Cuchillas",
        description: "Cuchillas de corte de alta durabilidad",
        image: productParts,
      },
      {
        id: 7,
        name: "Pernos de Anclaje",
        description: "Pernos y fijaciones de alta resistencia",
        image: productParts,
      },
      {
        id: 8,
        name: "Bujes",
        description: "Bujes de bronce y acero para maquinaria pesada",
        image: productParts,
      },
      {
        id: 9,
        name: "Rodillos",
        description: "Rodillos industriales de alto rendimiento",
        image: productParts,
      },
      {
        id: 10,
        name: "Cribas",
        description: "Cribas y mallas de clasificación de materiales",
        image: productParts,
      },
    ],
  },
  {
    id: "iluminacion",
    name: "Iluminación",
    icon: Lightbulb,
    image: productMachinery,
    description: "Sistemas de iluminación industrial diseñados para mejorar la seguridad y productividad en operaciones mineras.",
    features: [
      "Iluminación LED de alto rendimiento",
      "Luminarias antiexplosivas certificadas",
      "Sistemas de iluminación para maquinaria",
      "Torres de iluminación portátiles",
    ],
    products: [
      {
        id: 1,
        name: "Barra LED Industrial",
        description: "Barra LED de 200W con protección IP68",
        image: productMachinery,
      },
      {
        id: 2,
        name: "Faro LED Maquinaria",
        description: "Faro LED direccional para equipos móviles",
        image: productMachinery,
      },
      {
        id: 3,
        name: "Torre de Iluminación",
        description: "Torre portátil LED con generador integrado",
        image: productMachinery,
      },
      {
        id: 4,
        name: "Reflector Industrial",
        description: "Reflector LED 500W para áreas amplias",
        image: productMachinery,
      },
      {
        id: 5,
        name: "Luminaria Antiexplosiva",
        description: "Luminaria certificada para zonas ATEX",
        image: productMachinery,
      },
      {
        id: 6,
        name: "Luz de Trabajo",
        description: "Luz portátil LED recargable",
        image: productMachinery,
      },
      {
        id: 7,
        name: "Baliza de Advertencia",
        description: "Baliza LED intermitente para equipos",
        image: productMachinery,
      },
      {
        id: 8,
        name: "Faro de Búsqueda",
        description: "Faro orientable de largo alcance",
        image: productMachinery,
      },
      {
        id: 9,
        name: "Iluminación Cabina",
        description: "Kit de iluminación interior para cabinas",
        image: productMachinery,
      },
      {
        id: 10,
        name: "Panel LED",
        description: "Panel LED de montaje para talleres",
        image: productMachinery,
      },
    ],
  },
  {
    id: "mantas-termicas",
    name: "Mantas térmicas",
    icon: Shield,
    image: productConveyors,
    description: "Soluciones térmicas especializadas para protección y aislamiento de sistemas críticos en operaciones mineras.",
    features: [
      "Aislamiento térmico de alta eficiencia",
      "Protección para sistemas hidráulicos",
      "Mantas removibles y reutilizables",
      "Resistencia a temperaturas extremas",
    ],
    products: [
      {
        id: 1,
        name: "Manta Térmica Industrial",
        description: "Manta aislante hasta 1000°C",
        image: productConveyors,
      },
      {
        id: 2,
        name: "Protector Hidráulico",
        description: "Protección térmica para cilindros hidráulicos",
        image: productConveyors,
      },
      {
        id: 3,
        name: "Aislante de Válvulas",
        description: "Funda térmica para válvulas industriales",
        image: productConveyors,
      },
      {
        id: 4,
        name: "Manta de Escape",
        description: "Protección térmica para sistemas de escape",
        image: productConveyors,
      },
      {
        id: 5,
        name: "Cubierta de Motor",
        description: "Aislante térmico para motores diesel",
        image: productConveyors,
      },
      {
        id: 6,
        name: "Protector de Turbo",
        description: "Manta térmica para turbocompresores",
        image: productConveyors,
      },
      {
        id: 7,
        name: "Aislante de Tubería",
        description: "Sistema de aislamiento para tuberías",
        image: productConveyors,
      },
      {
        id: 8,
        name: "Manta Flexible",
        description: "Protección térmica flexible y moldeable",
        image: productConveyors,
      },
      {
        id: 9,
        name: "Kit de Protección",
        description: "Kit completo de mantas térmicas",
        image: productConveyors,
      },
      {
        id: 10,
        name: "Aislante Removible",
        description: "Sistema de aislamiento de fácil instalación",
        image: productConveyors,
      },
    ],
  },
  {
    id: "otros-productos",
    name: "Otros productos",
    icon: Package,
    image: productElectronics,
    description: "Amplia gama de productos complementarios para optimizar todas tus operaciones mineras.",
    features: [
      "Componentes eléctricos y electrónicos",
      "Sistemas de control y automatización",
      "Herramientas especializadas",
      "Equipos de seguridad industrial",
    ],
    products: [
      {
        id: 1,
        name: "Sistema de Control",
        description: "Controlador programable para equipos",
        image: productElectronics,
      },
      {
        id: 2,
        name: "Sensores Industriales",
        description: "Sensores de temperatura y presión",
        image: productElectronics,
      },
      {
        id: 3,
        name: "Variador de Frecuencia",
        description: "Variador para motores eléctricos",
        image: productElectronics,
      },
      {
        id: 4,
        name: "Kit de Herramientas",
        description: "Set profesional de herramientas",
        image: productElectronics,
      },
      {
        id: 5,
        name: "Equipo de Seguridad",
        description: "EPP certificado para minería",
        image: productElectronics,
      },
      {
        id: 6,
        name: "Cables Industriales",
        description: "Cables de potencia certificados",
        image: productElectronics,
      },
      {
        id: 7,
        name: "Conectores",
        description: "Conectores eléctricos industriales",
        image: productElectronics,
      },
      {
        id: 8,
        name: "Instrumentación",
        description: "Instrumentos de medición profesionales",
        image: productElectronics,
      },
      {
        id: 9,
        name: "Filtros",
        description: "Filtros hidráulicos y de aire",
        image: productElectronics,
      },
      {
        id: 10,
        name: "Lubricantes",
        description: "Lubricantes especializados para minería",
        image: productElectronics,
      },
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
      <section className="relative pt-40 pb-24 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroServiciosMineria})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-background" />
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-8 drop-shadow-lg">
              Nuestros servicios y productos
            </h1>
            <p className="text-2xl text-white/90 drop-shadow-md">
              Soluciones integrales en repuestos mineros de las mejores marcas internacionales
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Menu */}
      <section className="py-4 bg-background sticky top-16 z-40 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className="relative group"
                >
                  <div className="flex flex-col items-center space-y-1 p-2 rounded-lg hover:bg-secondary/50 transition-colors">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                      <Icon 
                        className={`w-6 h-6 transition-colors ${
                          activeService === service.id ? "text-accent" : "text-foreground"
                        }`}
                      />
                    </div>
                    <span
                      className={`text-xs font-medium transition-colors ${
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
              );
            })}
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
            className="space-y-16"
          >
            {/* Hero Section for Category */}
            <div className="bg-gradient-to-br from-secondary to-background rounded-3xl p-8 md:p-12 lg:p-16 min-h-[70vh] flex flex-col justify-center shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary">
                    {currentService.name}
                  </h2>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    {currentService.description}
                  </p>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-heading font-semibold text-foreground">
                      Características principales:
                    </h3>
                    <ul className="space-y-3">
                      {currentService.features.map((feature) => (
                        <li key={feature} className="flex items-start space-x-3">
                          <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                          <span className="text-lg text-muted-foreground">{feature}</span>
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
                    className="w-full rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>

            {/* Products Carousel */}
            <div className="space-y-8">
              <h3 className="text-3xl font-heading font-bold text-primary text-center">
                Productos destacados
              </h3>
              <div className="relative px-12">
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  className="w-full"
                >
                  <CarouselContent>
                    {currentService.products?.map((product) => (
                      <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/4">
                        <div className="p-4">
                          <div className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                            <div className="aspect-square overflow-hidden">
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                              />
                            </div>
                            <div className="p-6 space-y-2">
                              <h4 className="text-xl font-heading font-semibold text-foreground">
                                {product.name}
                              </h4>
                              <p className="text-muted-foreground line-clamp-2">
                                {product.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-0" />
                  <CarouselNext className="right-0" />
                </Carousel>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-primary to-accent rounded-3xl p-8 md:p-12 text-center shadow-xl">
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
                ¿Interesado en nuestros productos?
              </h3>
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Contacta a GP Solutions para obtener más información y cotizaciones personalizadas
              </p>
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6 hover:scale-105 transition-transform"
                onClick={() => window.location.href = "/contacto"}
              >
                Contactar ahora
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Servicios;
