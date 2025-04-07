
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  React.useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="container flex min-h-[70vh] flex-col items-center justify-center text-center">
        <h1 className="text-9xl font-bold text-muted-foreground">404</h1>
        <h2 className="mb-4 mt-4 text-2xl font-bold">Página não encontrada</h2>
        <p className="mb-8 max-w-md text-muted-foreground">
          Ops! A página que você está procurando não existe ou foi movida.
        </p>
        <Button className="flex items-center gap-2">
          <Home size={18} />
          <span>Voltar para o início</span>
        </Button>
      </div>
    </Layout>
  );
};

export default NotFound;
