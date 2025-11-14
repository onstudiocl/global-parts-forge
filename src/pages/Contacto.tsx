import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Hash, Mail, Phone, MapPin, Clock } from "lucide-react";

const Contacto = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >  
              <div className="flex items-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary">
                  Conversemos&nbsp;
                </h1>
                <Hash className="size-9 text-accent stroke-[5px] mt-3" />
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Nuestro equipo está listo para ayudarte. Contáctanos ahora y mantengamos 
                tu operación en marcha.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-64 lg:h-96 bg-secondary rounded-lg overflow-hidden"
            >
              {/* Placeholder for map or image */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-accent/10 to-primary/10">
                <MapPin className="w-24 h-24 text-accent/30" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  info: "msv@globalpartsspa.com",
                  link: "msv@globalpartsspa.com",
                },
                {
                  icon: Phone,
                  title: "Teléfono",
                  info: "+56 9 3408 7045",
                  link: "tel:+56934087045",
                },
                {
                  icon: MapPin,
                  title: "Ubicación",
                  info: "Antofagasta, Cerro Moreno",
                  link: null,
                },
                {
                  icon: Clock,
                  title: "Horario",
                  info: "24 hrs, 7 días a la semana",
                  link: null,
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center space-y-3"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-accent/10 rounded-full">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground">
                    {item.title}
                  </h3>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-muted-foreground hover:text-accent transition-colors block"
                    >
                      {item.info}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{item.info}</p>
                  )}
                </motion.div>
              ))}
            </div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-accent/5 rounded-2xl p-8 md:p-12 text-center space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">
                ¿Necesitas repuestos urgentes?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Contáctanos ahora y nuestro equipo comercial te responderá de inmediato. 
                Estamos disponibles para emergencias 24/7.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="pt-4"
              >
                <Button
                  variant="cta"
                  size="lg"
                  className="text-lg px-10 py-6 h-auto"
                  asChild
                >
                  <a href="mailto:contacto@globalparts.cl">
                    Contáctanos ahora
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacto;
