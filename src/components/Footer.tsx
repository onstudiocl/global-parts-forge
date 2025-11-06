import { Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up">
          {/* Logo & Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-heading font-bold">Global Parts</h3>
            <p className="text-sm text-primary-foreground/80">
              Proveedor líder de repuestos mineros en Chile. Manteniendo tu operación en marcha desde 1998.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-heading font-semibold">Contacto</h4>
            <div className="space-y-3 text-sm text-primary-foreground/80">
              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                <a href="mailto:contacto@globalparts.cl" className="hover:text-accent transition-colors">
                  contacto@globalparts.cl
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                <a href="tel:+56912345678" className="hover:text-accent transition-colors">
                  +56 9 1234 5678
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Santiago, Chile</span>
              </div>
            </div>
          </div>

          {/* Social & Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-heading font-semibold">Síguenos</h4>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-sm text-primary-foreground/80 hover:text-accent transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Global Parts. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
