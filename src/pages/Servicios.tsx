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
import { Lightbulb, Laptop, Shield, LifeBuoy, Settings, Zap } from "lucide-react";
import spUlIcon from "@/assets/sp_ul_icon.png";
import spCat1Cover from "@/assets/sp_cat1_cover.jpg";
import spCat1AdvImage from "@/assets/sp_cat1_adv-image.jpg";
import spCat1Logo from "@/assets/sp_cat1_logo.jpg";
import spCat1Prd1 from "@/assets/sp_cat1_prd1.jpg";
import spCat1Prd2 from "@/assets/sp_cat1_prd2.jpg";
import spCat1Prd3 from "@/assets/sp_cat1_prd3.jpg";
import productMachinery from "@/assets/productTypes_Card2.jpg";
import productConveyors from "@/assets/productTypes_Card3.jpg";
import productElectronics from "@/assets/productTypes_Card4.jpg";
import heroServiciosMineria from "@/assets/hero-servicios-mineria.jpg";

const services = [
  {
    id: "miningLighting",
    name: "Iluminación minera",
    icon: Lightbulb,
    image: spCat1Cover,
    advantageImage: spCat1AdvImage,
    logo: spCat1Logo,
    description: "Sistemas de iluminación LED Phoenix diseñados para operar en los entornos mineros más exigentes, garantizando seguridad, productividad y eficiencia energética en equipos e infraestructuras.",
    cta: "¿Te interesa algún sistema de iluminación",
    features: [
      "Tecnología LED de alta potencia para uso en minería subterránea y a cielo abierto.",
      "Iluminación resistente a vibraciones, polvo, humedad y temperaturas extremas y con opciones AC y DC.",
      "Diseños específicos para maquinaria móvil, plantas de procesamiento y zonas de carga.",
      "Ópticas que reducen el deslumbramiento y mejoran la visibilidad del operador.",
      "Luminarias con certificación para ubicaciones peligrosas y entornos explosivos."
    ],
    advantages: [
      {
        id: "1",
        title: "Mayor resistencia",
        description: "Cuchillas y cantoneras fundidas con refuerzo perimetral y nervio en la punta para evitar roturas."
      },
      {
        id: "2",
        title: "Protección total",
        description: "Grosor uniforme que protege la cabeza del tornillo y prolonga la vida útil del sistema."
      },
      {
        id: "3",
        title: "Adaptabilidad",
        description: "Fabricación personalizada para bulldozers, cargadoras, traillas y más."
      }
    ],
    products: [
      {
        id: 1,
        name: "Iluminacion AC Grandes Equipos",
        description: "La ModCom 3 de Phoenix es una luminaria LED de alta potencia y durabilidad, diseñada especialmente para palas mineras. Ofrece 130 lm/W, tecnología de monitoreo térmico y resistencia a impacto, vibración y corrosión. Está disponible en tres tamaños (LO, HI y MAX), con distintas ópticas, regulación de intensidad y versiones para entornos industriales o marítimos exigentes.",
        image: spCat1Prd1,
      },
      {
        id: 2,
        name: "Iluminacion DC Equipos Mineros",
        description: "La serie Sturdilite Master de Phoenix es una línea premium de luces LED robustas para equipos móviles en minería, puertos y construcción. Ofrece alta resistencia a impactos, vibraciones y condiciones extremas, garantizando seguridad y visibilidad. Disponible con ópticas antideslumbrantes y LEDs blancos o ámbar, se adapta a diversas máquinas y condiciones climáticas.",
        image: spCat1Prd2,
      },
      {
        id: 3,
        name: "Iluminacion Danger Light",
        description: "La Danger Light® de Phoenix proyecta un haz rojo estrecho que delimita zonas peligrosas alrededor del equipo, mejorando la seguridad y prevención de accidentes. Ideal para palas eléctricas y excavadoras, permite una carga lateral más segura y visible. Ofrece 3800 lúmenes LED, operación libre de mantenimiento y alta resistencia a impactos y vibraciones.",
        image: spCat1Prd3,
      },
      // {
      //   id: 4,
      //   name: "Dientes Excavadora",
      //   description: "Dientes de excavadora con sistema de fijación rápida",
      //   image: productParts,
      // },
      // {
      //   id: 5,
      //   name: "Placas de Desgaste",
      //   description: "Placas de acero reforzado para zonas de alto desgaste",
      //   image: productParts,
      // },
      // {
      //   id: 6,
      //   name: "Cuchillas",
      //   description: "Cuchillas de corte de alta durabilidad",
      //   image: productParts,
      // },
      // {
      //   id: 7,
      //   name: "Pernos de Anclaje",
      //   description: "Pernos y fijaciones de alta resistencia",
      //   image: productParts,
      // },
      // {
      //   id: 8,
      //   name: "Bujes",
      //   description: "Bujes de bronce y acero para maquinaria pesada",
      //   image: productParts,
      // },
      // {
      //   id: 9,
      //   name: "Rodillos",
      //   description: "Rodillos industriales de alto rendimiento",
      //   image: productParts,
      // },
      // {
      //   id: 10,
      //   name: "Cribas",
      //   description: "Cribas y mallas de clasificación de materiales",
      //   image: productParts,
      // },
    ],
  },
  {
    id: "wearItems",
    name: "Elementos de desgaste",
    icon: Laptop,
    image: productMachinery,
    description: "Cuchillas y cantoneras BYG fabricadas a medida o según referencia original. Diseñadas para ofrecer máxima durabilidad y rendimiento en condiciones de alta abrasión o impacto.",
    features: [
      "Fabricación a medida o según número de referencia OEM.",
      "Compatibles con las principales marcas del mercado (Caterpillar, Komatsu, Volvo, Esco y más).",
      "Disponibles en diferentes calidades de acero: 250 HB, 450 HB y 550 HB.",
      "Grosores desde 4 mm hasta 160 mm.",
      "Posibilidad de oxicorte y taladrado a medida.",
      "Diseño que permite sustituir o girar piezas individualmente para un mayor aprovechamiento del acero."
    ],
    advantages: [
      {
        id: 1,
        title: "Mayor resistencia",
        description: ""
      }
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
      // {
      //   id: 4,
      //   name: "Reflector Industrial",
      //   description: "Reflector LED 500W para áreas amplias",
      //   image: productMachinery,
      // },
      // {
      //   id: 5,
      //   name: "Luminaria Antiexplosiva",
      //   description: "Luminaria certificada para zonas ATEX",
      //   image: productMachinery,
      // },
      // {
      //   id: 6,
      //   name: "Luz de Trabajo",
      //   description: "Luz portátil LED recargable",
      //   image: productMachinery,
      // },
      // {
      //   id: 7,
      //   name: "Baliza de Advertencia",
      //   description: "Baliza LED intermitente para equipos",
      //   image: productMachinery,
      // },
      // {
      //   id: 8,
      //   name: "Faro de Búsqueda",
      //   description: "Faro orientable de largo alcance",
      //   image: productMachinery,
      // },
      // {
      //   id: 9,
      //   name: "Iluminación Cabina",
      //   description: "Kit de iluminación interior para cabinas",
      //   image: productMachinery,
      // },
      // {
      //   id: 10,
      //   name: "Panel LED",
      //   description: "Panel LED de montaje para talleres",
      //   image: productMachinery,
      // },
    ],
  },
  {
    id: "thermalBlankets",
    name: "Mantas térmicas",
    icon: Shield,
    image: productConveyors,
    description: "Mantas térmicas MTB diseñadas para proteger equipos y personal en operaciones mineras, reduciendo la exposición a altas temperaturas y disminuyendo significativamente el riesgo de incendios en entornos de alta exigencia térmica.",
    features: [
      "Fabricación a medida para adaptarse a maquinaria, tuberías y componentes críticos.",
      "Resistencia térmica hasta 1100 °C, garantizando protección en entornos extremos.",
      "Instalación técnica por especialistas, sin necesidad de detener la operación minera.",
      "Impermeables, removibles y reutilizables: ideales para mantenimiento y equipo móvil.",
    ],
    advantages: [
      {
        id: 1,
        title: "Mayor resistencia",
        description: ""
      }
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
      // {
      //   id: 4,
      //   name: "Manta de Escape",
      //   description: "Protección térmica para sistemas de escape",
      //   image: productConveyors,
      // },
      // {
      //   id: 5,
      //   name: "Cubierta de Motor",
      //   description: "Aislante térmico para motores diesel",
      //   image: productConveyors,
      // },
      // {
      //   id: 6,
      //   name: "Protector de Turbo",
      //   description: "Manta térmica para turbocompresores",
      //   image: productConveyors,
      // },
      // {
      //   id: 7,
      //   name: "Aislante de Tubería",
      //   description: "Sistema de aislamiento para tuberías",
      //   image: productConveyors,
      // },
      // {
      //   id: 8,
      //   name: "Manta Flexible",
      //   description: "Protección térmica flexible y moldeable",
      //   image: productConveyors,
      // },
      // {
      //   id: 9,
      //   name: "Kit de Protección",
      //   description: "Kit completo de mantas térmicas",
      //   image: productConveyors,
      // },
      // {
      //   id: 10,
      //   name: "Aislante Removible",
      //   description: "Sistema de aislamiento de fácil instalación",
      //   image: productConveyors,
      // },
    ],
  },
  {
    id: "tires",
    name: "Neumáticos",
    icon: LifeBuoy,
    image: productElectronics,
    description: "Techking es un fabricante de neumáticos radiales de alto rendimiento para minería y construcción, diseñado para operar en los entornos más exigentes y asegurar disponibilidad.",
    features: [
      "Especialización en neumáticos mineros y de construcción Techking se enfoca exclusivamente en neumáticos OTR y TBR, diseñados para rendimiento extremo, tracción y durabilidad en entornos mineros y de obra pesada. ",
      "Colaboración con fabricantes OEM globales Trabaja con más de 40 fabricantes de equipos originales, garantizando compatibilidad, calidad certificada y desarrollo conjunto de productos adaptados a cada aplicación. ",
      "Presencia y soporte internacional Opera en más de 160 países con equipos técnicos y de servicio locales, lo que permite respuestas rápidas, asistencia en terreno y soporte postventa especializado. ",
      "Eficiencia operativa y reducción de costos Su tecnología y diseño orientados al rendimiento permiten mayor vida útil y menor costo por hora (CPH), optimizando la productividad de las flotas en minería y construcción.",
    ],
    advantages: [
      {
        id: 1,
        title: "Mayor resistencia",
        description: ""
      }
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
      // {
      //   id: 4,
      //   name: "Kit de Herramientas",
      //   description: "Set profesional de herramientas",
      //   image: productElectronics,
      // },
      // {
      //   id: 5,
      //   name: "Equipo de Seguridad",
      //   description: "EPP certificado para minería",
      //   image: productElectronics,
      // },
      // {
      //   id: 6,
      //   name: "Cables Industriales",
      //   description: "Cables de potencia certificados",
      //   image: productElectronics,
      // },
      // {
      //   id: 7,
      //   name: "Conectores",
      //   description: "Conectores eléctricos industriales",
      //   image: productElectronics,
      // },
      // {
      //   id: 8,
      //   name: "Instrumentación",
      //   description: "Instrumentos de medición profesionales",
      //   image: productElectronics,
      // },
      // {
      //   id: 9,
      //   name: "Filtros",
      //   description: "Filtros hidráulicos y de aire",
      //   image: productElectronics,
      // },
      // {
      //   id: 10,
      //   name: "Lubricantes",
      //   description: "Lubricantes especializados para minería",
      //   image: productElectronics,
      // },
    ],
  },
  {
    id: "otherProducts",
    name: "Otros productos",
    icon: Settings,
    image: productElectronics,
    description: "Ofrecemos una amplia gama de repuestos para equipos mineros garantizando rendimiento, durabilidad y disponibilidad operativa. Nuestros productos cumplen con los más altos estándares de calidad para entornos mineros exigentes.",
    features: [
      "Bujes",
      "Repuestos de baldes",
      "Componentes mayores nuevos y REMAN",
      "Filtros",
      "Rodamientos",
      "Zapatas",
      "Accesorios varios"
    ],
    advantages: [
      {
        id: 1,
        title: "Mayor resistencia",
        description: ""
      }
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
      // {
      //   id: 4,
      //   name: "Kit de Herramientas",
      //   description: "Set profesional de herramientas",
      //   image: productElectronics,
      // },
      // {
      //   id: 5,
      //   name: "Equipo de Seguridad",
      //   description: "EPP certificado para minería",
      //   image: productElectronics,
      // },
      // {
      //   id: 6,
      //   name: "Cables Industriales",
      //   description: "Cables de potencia certificados",
      //   image: productElectronics,
      // },
      // {
      //   id: 7,
      //   name: "Conectores",
      //   description: "Conectores eléctricos industriales",
      //   image: productElectronics,
      // },
      // {
      //   id: 8,
      //   name: "Instrumentación",
      //   description: "Instrumentos de medición profesionales",
      //   image: productElectronics,
      // },
      // {
      //   id: 9,
      //   name: "Filtros",
      //   description: "Filtros hidráulicos y de aire",
      //   image: productElectronics,
      // },
      // {
      //   id: 10,
      //   name: "Lubricantes",
      //   description: "Lubricantes especializados para minería",
      //   image: productElectronics,
      // },
    ],
  }
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
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white drop-shadow-lg">
              Nuestros servicios
            </h1>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-8 drop-shadow-lg">
              <span className="text-accent">&</span> productos
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
                  <div>
                    <img src={currentService.logo} alt="Logo" className="rounded-xl" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary pt-5">
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

            {/* Products Advantages */}
            <div className="bg-gradient-to-br from-secondary to-background rounded-3xl p-8 md:p-12 lg:p-16 min-h-[70vh] flex flex-col justify-center shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <motion.img
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    src={currentService.advantageImage}
                    alt={currentService.name}
                    className="w-full rounded-2xl shadow-2xl"
                  />
                </div>
                <div className="space-y-6">
                  <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary text-center pt-5">
                      Ventajas
                  </h2>
                  <ul className="space-y-3">
                      {currentService.advantages.map((advantage) => (
                        <li key={advantage.id} className="outline outline-red-950/70 rounded-xl py-2">
                          <div className="flex items-center justify-center">
                            <img src={spUlIcon} alt="Li Icon" className="size-10" />
                            <h3 className="text-2xl font-light ml-3">{advantage.title}</h3>
                          </div>
                          <p className="text-center px-10">
                            {advantage.description}
                          </p>
                        </li>
                      ))}
                  </ul>
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
                      <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-4">
                          <div className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                            <div className="h-[250px] overflow-hidden">
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                              />
                            </div>
                            <div className="p-6 space-y-2 h-[320px]">
                              <h4 className="text-xl font-heading font-semibold text-foreground">
                                {product.name}
                              </h4>
                              <p className="text-muted-foreground ">
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
            <div className="bg-gradient-to-r from-red-950 via-zinc-600 to-red-950 rounded-xl p-8 md:p-12 text-center shadow-xl">
              <div className="flex items-center justify-center">
                <Zap className="text-accent size-9" />
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-zinc-100 mb-4 ml-2">
                  {currentService.cta}
                </h3>
              </div>
              <p className="text-xl text-zinc-100 mb-8 max-w-2xl mx-auto">
                Cuéntanos qué necesitas y nos pondremos en acción de inmediato. <br />Porque en la minería, <span className="text-accent">cada segundo cuenta.</span>
              </p>
              <Button
                size="lg"
                variant="cta"
                className="text-lg px-8 py-6 hover:scale-105 transition-transform"
                onClick={() => window.open("https://wa.me/+56934087045")}
              >
                Conversemos ahora
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
