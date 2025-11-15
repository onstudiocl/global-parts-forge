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
import spCat2Cover from "@/assets/sp_cat2_cover.jpg";
import spCat2AdvImage from "@/assets/sp_cat2_adv-image.jpg";
import spCat2Logo from "@/assets/sp_cat2_logo.jpg";
import spCat2Prd1 from "@/assets/sp_cat2_prd1.jpg";
import spCat2Prd2 from "@/assets/sp_cat2_prd2.jpg";
import spCat2Prd3 from "@/assets/sp_cat2_prd3.jpg";
import spCat3Cover from "@/assets/sp_cat3_cover.jpg";
import spCat3AdvImage from "@/assets/sp_cat3_adv-image.jpg";
import spCat3Logo from "@/assets/sp_cat3_logo.jpg";
import spCat3Prd1 from "@/assets/sp_cat3_prd1.jpg";
import spCat3Prd2 from "@/assets/sp_cat3_prd2.jpg";
import spCat3Prd3 from "@/assets/sp_cat3_prd3.jpg";
import spCat4Cover from "@/assets/sp_cat4_cover.jpg";
import spCat4AdvImage from "@/assets/sp_cat4_adv-image.jpg";
import spCat4Logo from "@/assets/sp_cat4_logo.jpg";
import spCat4Prd1 from "@/assets/sp_cat4_prd1.jpg";
import spCat4Prd2 from "@/assets/sp_cat4_prd2.jpg";
import spCat4Prd3 from "@/assets/sp_cat4_prd3.jpg";
import spCat5Cover from "@/assets/sp_cat5_cover.jpg";
import spCat5AdvImage from "@/assets/sp_cat5_adv-image.jpg";
import spCat5Logo from "@/assets/sp_cat5_logo.jpg";
import spCat5Prd1 from "@/assets/sp_cat5_prd1.jpg";
import spCat5Prd2 from "@/assets/sp_cat5_prd2.jpg";
import spCat5Prd3 from "@/assets/sp_cat5_prd3.jpg";
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
    image: spCat2Cover,
    advantageImage: spCat2AdvImage,
    logo: spCat2Logo,
    description: "Cuchillas y cantoneras BYG fabricadas a medida o según referencia original. Diseñadas para ofrecer máxima durabilidad y rendimiento en condiciones de alta abrasión o impacto.",
    cta: "¿Te interesa algún elemento de desgaste?",
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
        title: "Resistencia la entorno extremo",
        description: "Las luminarias están diseñadas específicamente para faenas mineras: soportan polvo, niebla salina, lluvia, vibración y shock."
      },
      {
        id: 2,
        title: "Mejora de visibilidad y ergonomía operativa",
        description: "Incluyen ópticas especializadas (control de deslumbramiento, luz uniforme) para garantizar mejor visibilidad, reducir la fatiga visual del operador y aumentar la seguridad. "
      },
      {
        id: 3,
        title: "Adaptadas para equipamiento móvil y fijo",
        description: "Disponibles tanto en versiones para maquinaria móvil (dumpers, excavadoras, cargadoras) como para infraestructura (planta de procesamiento, cintas, zonas abiertas), lo que amplía su aplicación en el sitio minero"
      }
    ],
    products: [
      {
        id: 1,
        name: "Cuchillas y cantoneras a medida",
        description: "BYG fabrican cuchillas, cantoneras y segmentos a medida en diferentes calidades de aceros: 250 HB; 450 HB; 550 HB. BYG fabricará sus cuchillas según sus especificaciones.  BYG dispone también de una gama completa de cantoneras adaptables para todo tipo de maquinaria: bulldozer, cargadora, traílla, etc",
        image: spCat2Prd1,
      },
      {
        id: 2,
        name: "Cuchillas y cantoneras fundidas",
        description: "BYG ofrece cuchillas y cantoneras fundidas diseñadas para aplicaciones de alta abrasión o impacto. Las cuchillas fundidas están notablemente reforzadas en su perímetro, las cantoneras fundidas, además presentan un nervio que las refuerza en la punta, proporcionando una mayor resistencia a la rotura.",
        image: spCat2Prd2,
      },
      {
        id: 3,
        name: "Martillos Neumáticos",
        description: "Los martillos hidráulicos BYG destacan por su alta potencia de impacto, diseño monobloque reforzado y sistema antigolpe en vacío, que prolonga su vida útil. Están disponibles para diferentes tonelajes de maquinaria, desde excavadoras medianas hasta equipos mineros pesados. Incorporan opciones de engrase automático y son aptos para trabajos de alta abrasión, demolición o minería intensiva.",
        image: spCat2Prd3,
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
    image: spCat3Cover,
    advantageImage: spCat3AdvImage,
    logo: spCat3Logo,
    description: "Mantas térmicas MTB diseñadas para proteger equipos y personal en operaciones mineras, reduciendo la exposición a altas temperaturas y disminuyendo significativamente el riesgo de incendios en entornos de alta exigencia térmica.",
    cta: "¿Te interesa alguna manta térmica?",
    features: [
      "Fabricación a medida para adaptarse a maquinaria, tuberías y componentes críticos.",
      "Resistencia térmica hasta 1100 °C, garantizando protección en entornos extremos.",
      "Instalación técnica por especialistas, sin necesidad de detener la operación minera.",
      "Impermeables, removibles y reutilizables: ideales para mantenimiento y equipo móvil.",
    ],
    advantages: [
      {
        id: 1,
        title: "Reduce el riesgo de incendios y quemaduras",
        description: ""
      },
      {
        id: 2,
        title: "Hecho a medida para cada equipo",
        description: ""
      },
      {
        id: 3,
        title: "Fácil de instalar e inspeccionar",
        description: ""
      }
    ],
    products: [
      {
        id: 1,
        name: "Mantas Térmicas Estándar",
        description: "Solución estándar – “Manta Térmica MTB”.  Una manta térmica fabricada para resistir altas temperaturas (hasta ~1100 °C) y diseñada para instalación sob medida en maquinaria y equipos móviles",
        image: spCat3Prd1,
      },
      {
        id: 2,
        name: "Mantas Térmicas Premium",
        description: "“Manta Térmica MTB Línea Premium”...La línea premium de MTB incluye materiales de mayor rendimiento, mayor durabilidad, resistencia térmica de hasta 1100 °C, instalación técnica, diseño especializado y servicio completo de ingeniería",
        image: spCat3Prd2,
      },
      {
        id: 3,
        name: "Mantas para Equipos Industriales, Forestales y Navales",
        description: "MTB fabrica mantas térmicas a medida para equipos forestales, navales y plantas industriales, ofreciendo aislamiento térmico, resistencia a altas temperaturas y mayor protección y eficiencia operativa.",
        image: spCat3Prd3,
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
    image: spCat4Cover,
    advantageImage: spCat4AdvImage,
    logo: spCat4Logo,
    description: "Techking es un fabricante de neumáticos radiales de alto rendimiento para minería y construcción, diseñado para operar en los entornos más exigentes y asegurar disponibilidad.",
    cta: "¿Te interesa algún neumático?",
    features: [
      "Especialización en neumáticos mineros y de construcción Techking se enfoca exclusivamente en neumáticos OTR y TBR, diseñados para rendimiento extremo, tracción y durabilidad en entornos mineros y de obra pesada. ",
      "Colaboración con fabricantes OEM globales Trabaja con más de 40 fabricantes de equipos originales, garantizando compatibilidad, calidad certificada y desarrollo conjunto de productos adaptados a cada aplicación. ",
      "Presencia y soporte internacional Opera en más de 160 países con equipos técnicos y de servicio locales, lo que permite respuestas rápidas, asistencia en terreno y soporte postventa especializado. ",
      "Eficiencia operativa y reducción de costos Su tecnología y diseño orientados al rendimiento permiten mayor vida útil y menor costo por hora (CPH), optimizando la productividad de las flotas en minería y construcción.",
    ],
    advantages: [
      {
        id: 1,
        title: "Alta durabilidad",
        description: "Neumáticos diseñados para resistir condiciones extremas en minería y construcción."
      },
      {
        id: 2,
        title: "Soporte global",
        description: "Presencia en más de 100 países con asistencia técnica local."
      },
      {
        id: 3,
        title: "Eficiencia operativa",
        description: "Mayor rendimiento y menor costo por hora (CPH) para las flotas"
      }
    ],
    products: [
      {
        id: 1,
        name: "MATE-S-L3",
        description: "Neumático diseñado para máximo rendimiento y tracción, con excelente control en cargadores exigentes y mayor resistencia al desgaste. Su puente de bloques reforzado y compuesto especial prolongan la vida útil incluso en condiciones severas.",
        image: spCat4Prd1,
      },
      {
        id: 2,
        name: "ETDT",
        description: "Neumático con alta tracción y menor deslizamiento, gracias a su diseño especial de banda de rodamiento. Ofrece gran resistencia a cortes por su compuesto reforzado y un mayor kilometraje gracias a sus bloques grandes y duraderos.",
        image: spCat4Prd2,
      },
      {
        id: 3,
        name: "PROLHD",
        description: "Neumático con perfil uniforme que distribuye mejor la carga, reduciendo daños parciales y desgaste. Su proceso de fabricación innovador mejora la durabilidad y el índice TKPH, mientras que sus nuevos compuestos y refuerzos aumentan la resistencia a cortes y abrasión.",
        image: spCat4Prd3,
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
    image: spCat5Cover,
    advantageImage: spCat5AdvImage,
    logo: spCat5Logo,
    description: "Ofrecemos una amplia gama de repuestos para equipos mineros garantizando rendimiento, durabilidad y disponibilidad operativa. Nuestros productos cumplen con los más altos estándares de calidad para entornos mineros exigentes.",
    cta: "¿Te interesa algún producto?",
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
        title: "Experiencia y conocimiento técnico",
        description: "Más de 25 años en la industria minera, ofreciendo soluciones precisas y confiables para equipos de gran exigencia."
      },
      {
        id: 2,
        title: "Precios más económicos manteniendo calidad OEM",
        description: "Ssuministra repuestos con altos estándares de calidad a costos competitivos, garantizando el mismo rendimiento que los originales."
      },
      {
        id: 3,
        title: "Atención personalizada y rápida respuesta",
        description: "Enfoque en la continuidad operativa del cliente, con entregas ágiles, soporte técnico y alianzas estratégicas con fabricantes internacionales."
      }
    ],
    products: [
      {
        id: 1,
        name: "Zapatas para palas P&H Y CAT",
        description: "Las zapatas para equipos mineros son componentes fundidos de aleación de acero de alta resistencia, diseñadas para soportar grandes cargas de compresión y tracción. Proporcionan excelente resistencia al desgaste, impacto y deformación, gracias a su tratamiento térmico y composición especial. Forman parte del sistema de orugas, distribuyendo el peso del equipo y garantizando estabilidad y tracción incluso en terrenos de alta abrasión",
        image: spCat5Prd1,
      },
      {
        id: 2,
        name: "Bujes y pasadores para baldes",
        description: "Los bujes y pasadores forjados están fabricados con acero AcMn de alta calidad, garantizando homogeneidad estructural y excelente resistencia mecánica. Presentan un diseño optimizado buje-pasador, que mejora la durabilidad y distribución de cargas. Los pasadores cuentan con overlay de 550–580 BHN y espesor de 9 a 12 mm, ofreciendo mayor vida útil y reducción de desgaste",
        image: spCat5Prd2,
      },
      {
        id: 3,
        name: "Torres solares",
        description: "Las torres solares no solo se utilizan para iluminación, sino también para alimentar sistemas de comunicación, cámaras de seguridad, sensores ambientales y equipos auxiliares en faenas mineras e industriales. Ofrecen energía limpia y autónoma, reduciendo emisiones y costos operativos, con estructura robusta y fácil instalación, ideales para zonas remotas o de difícil acceso.",
        image: spCat5Prd3,
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
                  <ul className="space-y-4">
                      {currentService.advantages.map((advantage) => (
                        <li key={advantage.id} className="h-30 outline outline-red-950/70 rounded-xl py-3">
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
