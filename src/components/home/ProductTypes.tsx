import { motion } from "framer-motion";
import { Package, Truck, Zap, Cog } from "lucide-react";
import { Button } from "@/components/ui/button";
import productParts from "@/assets/product-parts.jpg";
import productMachinery from "@/assets/product-machinery.jpg";
import productConveyors from "@/assets/product-conveyors.jpg";
import productElectronics from "@/assets/product-electronics.jpg";

const products = [
  {
    title: "Repuestos Generales",
    image: productParts,
    icon: Package,
    items: ["Rodamientos", "Sellos", "Filtros", "Correas"],
  },
  {
    title: "Maquinaria Pesada",
    image: productMachinery,
    icon: Truck,
    items: ["Motores", "Sistemas hidráulicos", "Transmisiones", "Frenos"],
  },
  {
    title: "Sistemas de Transporte",
    image: productConveyors,
    icon: Cog,
    items: ["Correas transportadoras", "Rodillos", "Poleas", "Raspadores"],
  },
  {
    title: "Componentes Eléctricos",
    image: productElectronics,
    icon: Zap,
    items: ["Sensores", "Controladores", "Cables", "Conectores"],
  },
];

const ProductTypes = () => {
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
            Tipos de productos
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Repuestos de calidad para todas las necesidades de tu operación minera
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                className="bg-card rounded-lg overflow-hidden hover-lift shadow-lg cursor-pointer transition-all duration-300 hover:shadow-accent/20"
                onClick={() => console.log(`Clicked: ${product.title}`)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <product.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-semibold mb-4 text-card-foreground">
                    {product.title}
                  </h3>
                  <ul className="space-y-2">
                    {product.items.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground flex items-start">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
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
            Ver más
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductTypes;
