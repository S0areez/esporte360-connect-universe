
import React, { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bell, Calendar as CalendarIcon, CheckCircle, Clock, MapPin, Plus, Users } from 'lucide-react';

const Agenda = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [view, setView] = useState('calendario');

  // Dados fictícios de eventos
  const eventos = [
    {
      id: 1,
      titulo: "Treino Tático",
      data: new Date(2025, 3, 8, 16, 0),
      local: "Campo Principal - CT Esporte360",
      tipo: "treino",
      participantes: 24,
      descricao: "Foco em jogadas ensaiadas e posicionamento defensivo."
    },
    {
      id: 2,
      titulo: "Jogo Amistoso vs FC Unidos",
      data: new Date(2025, 3, 10, 15, 0),
      local: "Estádio Municipal",
      tipo: "jogo",
      participantes: 32,
      descricao: "Jogo preparatório para o campeonato regional."
    },
    {
      id: 3,
      titulo: "Workshop de Nutrição Esportiva",
      data: new Date(2025, 3, 12, 14, 30),
      local: "Sala de Conferências - CT Esporte360",
      tipo: "workshop",
      participantes: 18,
      descricao: "Orientações sobre alimentação pré e pós-treino."
    },
    {
      id: 4,
      titulo: "Treino Físico",
      data: new Date(2025, 3, 9, 7, 0),
      local: "Academia - CT Esporte360",
      tipo: "treino",
      participantes: 22,
      descricao: "Foco em preparação física e resistência."
    },
    {
      id: 5,
      titulo: "Reunião de Equipe",
      data: new Date(2025, 3, 11, 19, 0),
      local: "Sala de Vídeo - CT Esporte360",
      tipo: "reuniao",
      participantes: 30,
      descricao: "Análise do último jogo e planejamento semanal."
    }
  ];

  // Filtrar eventos para o dia selecionado
  const eventosDoDia = eventos.filter(evento => {
    if (!date) return false;
    return evento.data.getDate() === date.getDate() && 
           evento.data.getMonth() === date.getMonth() && 
           evento.data.getFullYear() === date.getFullYear();
  });

  // Marcar dias com eventos no calendário
  const diasComEventos = eventos.map(evento => new Date(
    evento.data.getFullYear(),
    evento.data.getMonth(),
    evento.data.getDate()
  ));

  // Função para formatar a data e hora
  const formatarDataHora = (data: Date) => {
    return data.toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Função para determinar a cor do badge de acordo com o tipo de evento
  const getBadgeVariant = (tipo: string) => {
    switch (tipo) {
      case 'treino': return 'default';
      case 'jogo': return 'destructive';
      case 'workshop': return 'secondary';
      case 'reuniao': return 'outline';
      default: return 'default';
    }
  };

  return (
    <Layout>
      <div className="container py-8">
        <div className="flex flex-col space-y-6">
          {/* Cabeçalho */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold">Agenda & Gestão de Eventos</h1>
              <p className="text-muted-foreground">
                Organize seus treinos, jogos e eventos esportivos
              </p>
            </div>
            <Button>
              <Plus size={16} className="mr-2" /> Novo Evento
            </Button>
          </div>

          {/* Seletor de Visualização */}
          <Tabs value={view} onValueChange={setView} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="calendario">Calendário</TabsTrigger>
              <TabsTrigger value="lista">Lista</TabsTrigger>
              <TabsTrigger value="historico">Histórico</TabsTrigger>
            </TabsList>
          </Tabs>

          {/* Conteúdo Principal */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Calendário */}
            <Card className="md:col-span-1">
              <CardHeader>
                <CardTitle>Abril 2025</CardTitle>
                <CardDescription>Selecione uma data para ver os eventos</CardDescription>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                  modifiers={{
                    booked: diasComEventos,
                  }}
                  modifiersStyles={{
                    booked: {
                      fontWeight: 'bold',
                      backgroundColor: 'hsl(var(--primary) / 0.1)',
                      color: 'hsl(var(--primary))'
                    }
                  }}
                />
              </CardContent>
            </Card>

            {/* Eventos do Dia */}
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Eventos do Dia</CardTitle>
                <CardDescription>
                  {date ? date.toLocaleDateString('pt-BR', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  }) : 'Selecione uma data'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {eventosDoDia.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">Nenhum evento programado para este dia</p>
                    <Button variant="outline" className="mt-4">
                      <Plus size={16} className="mr-2" /> Adicionar Evento
                    </Button>
                  </div>
                ) : (
                  <ScrollArea className="h-[450px] pr-4">
                    <div className="space-y-4">
                      {eventosDoDia.sort((a, b) => a.data.getTime() - b.data.getTime()).map((evento) => (
                        <Card key={evento.id}>
                          <CardHeader className="pb-2">
                            <div className="flex items-start justify-between">
                              <CardTitle>{evento.titulo}</CardTitle>
                              <Badge variant={getBadgeVariant(evento.tipo)}>
                                {evento.tipo}
                              </Badge>
                            </div>
                          </CardHeader>
                          <CardContent className="pb-3">
                            <div className="space-y-2">
                              <p className="text-muted-foreground">{evento.descricao}</p>
                              <div className="flex items-center text-sm">
                                <Clock size={14} className="mr-1" />
                                <span>{formatarDataHora(evento.data)}</span>
                              </div>
                              <div className="flex items-center text-sm">
                                <MapPin size={14} className="mr-1" />
                                <span>{evento.local}</span>
                              </div>
                              <div className="flex items-center text-sm">
                                <Users size={14} className="mr-1" />
                                <span>{evento.participantes} participantes confirmados</span>
                              </div>
                            </div>
                          </CardContent>
                          <CardFooter className="flex justify-between pt-0">
                            <Button variant="outline" size="sm">Ver Detalhes</Button>
                            <Button size="sm">
                              <CheckCircle size={14} className="mr-1" /> Confirmar Presença
                            </Button>
                          </CardFooter>
                        </Card>
                      ))}
                    </div>
                  </ScrollArea>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Próximos Eventos */}
          <div>
            <h2 className="text-xl font-bold mb-4">Próximos Eventos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {eventos
                .filter(evento => evento.data > new Date())
                .sort((a, b) => a.data.getTime() - b.data.getTime())
                .slice(0, 4)
                .map(evento => (
                  <Card key={evento.id}>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-base">{evento.titulo}</CardTitle>
                        <Badge variant={getBadgeVariant(evento.tipo)}>
                          {evento.tipo}
                        </Badge>
                      </div>
                      <CardDescription>
                        {evento.data.toLocaleDateString('pt-BR')} às {formatarDataHora(evento.data)}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <p className="text-sm text-muted-foreground truncate">{evento.local}</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="ghost" size="sm" className="w-full">Ver Detalhes</Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Agenda;
