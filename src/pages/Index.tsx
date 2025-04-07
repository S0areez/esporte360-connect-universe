
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Activity, Newspaper, Award, Users, ArrowRight } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  href 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  href: string; 
}) => (
  <Card className="sport-card h-full">
    <CardContent className="p-6">
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 rounded-full bg-primary/10 p-3 text-primary">
          {icon}
        </div>
        <h3 className="mb-2 text-lg font-medium">{title}</h3>
        <p className="mb-4 text-sm text-muted-foreground">{description}</p>
        <Link 
          to={href} 
          className="mt-auto inline-flex items-center text-sm font-medium text-primary hover:underline"
        >
          Saiba mais <ArrowRight size={14} className="ml-1" />
        </Link>
      </div>
    </CardContent>
  </Card>
);

const testimonials = [
  {
    name: "Carlos Silva",
    role: "Atleta Profissional",
    testimonial: "O Esporte360 revolucionou minha organização de treinos e competições. Agora consigo acompanhar meu desempenho com facilidade!",
    image: "https://i.pravatar.cc/100?img=1"
  },
  {
    name: "Patrícia Mendes",
    role: "Treinadora",
    testimonial: "Gerenciar minha equipe nunca foi tão simples. As ferramentas de análise me ajudam a tomar decisões melhores para o time.",
    image: "https://i.pravatar.cc/100?img=5"
  },
  {
    name: "Roberto Almeida",
    role: "Torcedor",
    testimonial: "Finalmente um lugar onde posso acompanhar meus times favoritos e participar de desafios com outros torcedores!",
    image: "https://i.pravatar.cc/100?img=8"
  }
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-sport-600 to-sport-500 py-16 md:py-24">
        <div className="container relative z-10">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div className="text-white">
              <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                Conectando o universo esportivo
              </h1>
              <p className="mb-8 text-lg text-white/90 md:text-xl">
                Uma plataforma completa para atletas, técnicos, clubes e torcedores. 
                Gerencie eventos, analise desempenho e conecte-se com a comunidade.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Cadastrar-se
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Explorar Funcionalidades
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute -left-8 -top-8 h-64 w-64 animate-pulse-light rounded-full bg-white/10"></div>
                <div className="absolute -bottom-10 -right-10 h-40 w-40 animate-pulse-light rounded-full bg-white/10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                  alt="Atletas em ação" 
                  className="relative h-96 w-full rounded-lg object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 mix-blend-overlay">
          <div className="hero-pattern h-full w-full"></div>
        </div>
      </section>

      {/* How it works section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Como Funciona</h2>
            <p className="text-muted-foreground">
              O Esporte360 oferece recursos específicos para cada perfil, 
              conectando todos os envolvidos no universo esportivo.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            <FeatureCard
              icon={<Calendar size={24} />}
              title="Agenda"
              description="Organize e acompanhe treinos, jogos e eventos esportivos."
              href="/agenda"
            />
            <FeatureCard
              icon={<Activity size={24} />}
              title="Dashboard"
              description="Visualize e analise dados de desempenho com gráficos interativos."
              href="/dashboard"
            />
            <FeatureCard
              icon={<Newspaper size={24} />}
              title="Notícias"
              description="Mantenha-se informado com um feed personalizado de notícias esportivas."
              href="/noticias"
            />
            <FeatureCard
              icon={<Award size={24} />}
              title="Gamificação"
              description="Participe de desafios, ganhe pontos e receba recompensas."
              href="/gamificacao"
            />
            <FeatureCard
              icon={<Users size={24} />}
              title="Comunidade"
              description="Conecte-se com outros atletas, técnicos e torcedores."
              href="/comunidade"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl rounded-lg bg-card p-8 text-center shadow-sm md:p-12">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">Pronto para elevar sua experiência esportiva?</h2>
            <p className="mb-6 text-muted-foreground">
              Junte-se a milhares de atletas, técnicos e torcedores que já estão usando o Esporte360.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-sport-600 to-sport-500 hover:from-sport-700 hover:to-sport-600">
              Comece Agora
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">O que dizem nossos usuários</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="sport-card">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="h-16 w-16 rounded-full object-cover"
                      />
                    </div>
                    <p className="mb-4 italic text-muted-foreground">"{testimonial.testimonial}"</p>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Secondary CTA */}
      <section className="relative overflow-hidden bg-gradient-to-r from-energy-500 to-energy-400 py-12">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center text-white">
            <h2 className="mb-4 text-3xl font-bold">Revolucione sua experiência esportiva hoje</h2>
            <p className="mb-6">
              Eventos, análises, comunidade - tudo em um só lugar.
            </p>
            <Button className="bg-white text-energy-600 hover:bg-white/90">
              Cadastrar-se
            </Button>
          </div>
        </div>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 mix-blend-overlay">
          <div className="hero-pattern h-full w-full"></div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
