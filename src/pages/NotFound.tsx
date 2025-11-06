import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center space-y-6 px-4">
        <h1 className="text-6xl md:text-8xl font-heading font-bold text-primary">404</h1>
        <p className="text-2xl md:text-3xl font-heading text-muted-foreground">Página no encontrada</p>
        <p className="text-base text-muted-foreground max-w-md mx-auto">
          Lo sentimos, la página que estás buscando no existe o ha sido movida.
        </p>
        <Button variant="hero" size="lg" asChild>
          <Link to="/" className="inline-flex items-center gap-2">
            <Home className="w-5 h-5" />
            Volver al inicio
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
