import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Inicio", path: "/" },
    { name: "Sobre Nosotros", path: "/sobre-nosotros" },
    { name: "Servicios", path: "/servicios" },
    { name: "Contacto", path: "/contacto" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-heading font-bold text-primary">Global Parts</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-sm font-body transition-colors hover:text-accent",
                  isActive(item.path) ? "text-accent font-semibold" : "text-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Button variant="cta" size="default" asChild>
              <Link to="/contacto">Conversemos</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in-up">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block py-2 text-base font-body transition-colors hover:text-accent",
                  isActive(item.path) ? "text-accent font-semibold" : "text-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Button variant="cta" size="default" className="w-full" asChild>
              <Link to="/contacto" onClick={() => setIsOpen(false)}>
                Conversemos
              </Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
