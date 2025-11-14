import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import footerBackground from "@/assets/footer-background.png";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer 
      className="py-12 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${footerBackground})` }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up">
          {/* Logo & Description */}
          <div className="space-y-4">
            <img src={logo} alt="Logo GP Solutions" className="w-[320px]" />
            <p className="text-sm" style={{ color: '#fafafa', opacity: 0.9 }}>
              Proveedor líder de repuestos mineros en Chile.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-heading font-semibold" style={{ color: '#fafafa' }}>Contacto</h4>
            <div className="space-y-3 text-sm" style={{ color: '#fafafa', opacity: 0.9 }}>
              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                <a href="mailto:msv@globalpartsspa.com" className="hover:text-accent transition-colors">
                  msv@globalpartsspa.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                <a href="tel:+56934087045" className="hover:text-accent transition-colors">
                  +56 9 3408 7045
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Antofagasta, Cerro Moreno</span>
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
          <p>&copy; {new Date().getFullYear()} ON Studio Latam. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
