import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import footerBackground from "@/assets/footer-background.png";

const Footer = () => {
  return (
    <footer 
      className="py-12 mt-20 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${footerBackground})` }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up">
          {/* Logo & Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-heading font-bold" style={{ color: '#fafafa' }}>Global Parts</h3>
            <p className="text-sm" style={{ color: '#fafafa', opacity: 0.9 }}>
              Proveedor líder de repuestos mineros en Chile. Manteniendo tu operación en marcha desde 1998.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-heading font-semibold" style={{ color: '#fafafa' }}>Contacto</h4>
            <div className="space-y-3 text-sm" style={{ color: '#fafafa', opacity: 0.9 }}>
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
            <h4 className="text-lg font-heading font-semibold" style={{ color: '#fafafa' }}>Síguenos</h4>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-sm hover:text-accent transition-all hover:scale-110"
              style={{ color: '#fafafa', opacity: 0.9 }}
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 text-center text-sm" style={{ borderTop: '1px solid rgba(250, 250, 250, 0.2)', color: '#fafafa', opacity: 0.7 }}>
          <p>&copy; {new Date().getFullYear()} Global Parts. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
