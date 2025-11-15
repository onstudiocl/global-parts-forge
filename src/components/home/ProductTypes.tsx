import { motion } from "framer-motion";
import { Package, Truck, Zap, Cog, Link } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link as Link2 } from "react-router-dom";
import miningLighting from "@/assets/productTypes_Card1.jpg";
import wearParts from "@/assets/productTypes_Card2.jpg";
import thermalBlankets from "@/assets/productTypes_Card3.jpg";
import miningTires from "@/assets/productTypes_Card4.jpg";
import otherProducts from "@/assets/productTypes_Card5.jpg";

const products = [
  {
    title: "Iluminación Minera",
    image: miningLighting,
    description: "Iluminación para palas, cargadores, equipos auxiliares, plantas y bodegas"
    // icon: Package,
    // items: ["Rodamientos", "Sellos", "Filtros", "Correas"],
  },
  {
    title: "Elementos de  desgaste",
    image: wearParts,
    description: "Cuchillas, martillos, punteros y cadenas"
    // icon: Truck
    // items: ["Motores", "Sistemas hidráulicos", "Transmisiones", "Frenos"],
  },
  {
    title: "Mantas térmicas",
    image: thermalBlankets,
    description: "Soluciones de prevención de incendio para motores de combustión"
    // icon: Cog,
    // items: ["Correas transportadoras", "Rodillos", "Poleas", "Raspadores"],
  },
  {
    title: "Neumáticos mineros",
    image: miningTires,
    description: "Soluciones y servicios de neumáticos personalizados a más de 40 reconocidos fabricantes de equipos y gigantes mineros"
    // icon: Zap,
    // items: ["Sensores", "Controladores", "Cables", "Conectores"],
  },
  {
    title: "Otros productos",
    image: otherProducts,
    description: "Repuestos para palas y cargadores, filtros, rodamientos, zapatas, soportes de tonelaje y accesorios varios"
    // icon: Zap,
    // items: ["Sensores", "Controladores", "Cables", "Conectores"],
  }
];

const ProductTypes = () => {
  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4" style={{ color: '#1a1a1a' }}>
            Tipos de productos
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#1a1a1a' }}>
            Repuestos de calidad para todas las necesidades de tu operación minera
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group"
            >
              <div 
                className="rounded-lg overflow-hidden hover-lift shadow-lg cursor-pointer transition-all duration-300 hover:shadow-accent/20"
                style={{ backgroundColor: '#fafafa' }}
                onClick={() => console.log(`Clicked: ${product.title}`)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 lg:group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    {/* <product.icon className="w-8 h-8 text-white" /> */}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg lg:text-sm font-heading font-semibold mb-4" style={{ color: '#1a1a1a' }}>
                    {product.title}
                  </h3>
                  <div className="space-y-2 text-zinc-900 h-20 lg:mb-4 lg:text-sm">
                    {product.description}
                    {/* {product.items.map((item) => (
                      <li key={item} className="text-sm flex items-start" style={{ color: '#1a1a1a' }}>
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))} */}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button variant="cta" size="lg">
            <Link2 to="/servicios" className="inline-flex items-center gap-2">
              Ver más
            </Link2>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductTypes;
