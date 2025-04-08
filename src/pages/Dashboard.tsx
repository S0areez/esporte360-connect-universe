
import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ResponsiveContainer, LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';
import { Activity, ArrowDown, ArrowUp, Calendar, Clock, Heart, TrendingUp, Upload, User } from 'lucide-react';

const Dashboard = () => {
  // Dados fictícios para os gráficos
  const perfData = [
    { dia: 'Seg', desempenho: 70, media: 65 },
    { dia: 'Ter', desempenho: 68, media: 65 },
    { dia: 'Qua', desempenho: 75, media: 65 },
    { dia: 'Qui', desempenho: 72, media: 65 },
    { dia: 'Sex', desempenho: 80, media: 65 },
    { dia: 'Sab', desempenho: 85, media: 65 },
    { dia: 'Dom', desempenho: 78, media: 65 },
  ];

  const treinos = [
    { nome: 'Resistência', horas: 8 },
    { nome: 'Técnica', horas: 6 },
    { nome: 'Tático', horas: 5 },
    { nome: 'Físico', horas: 7 },
    { nome: 'Recuperação', horas: 4 },
  ];

  const fcData = [
    { tempo: '0min', fc: 70 },
    { tempo: '10min', fc: 120 },
    { tempo: '20min', fc: 145 },
    { tempo: '30min', fc: 160 },
    { tempo: '40min', fc: 155 },
    { tempo: '50min', fc: 165 },
    { tempo: '60min', fc: 150 },
    { tempo: '70min', fc: 140 },
    { tempo: '80min', fc: 130 },
    { tempo: '90min', fc: 120 },
  ];

  const estatisticas = [
    { id: 1, titulo: 'Treinos Realizados', valor: 28, tendencia: 'up', percentual: '+12%' },
    { id: 2, titulo: 'Horas de Atividade', valor: 42, tendencia: 'up', percentual: '+8%' },
    { id: 3, titulo: 'Jogos Oficiais', valor: 5, tendencia: 'neutral', percentual: '0%' },
    { id: 4, titulo: 'FC Máxima Média', valor: 175, tendencia: 'down', percentual: '-3%' },
  ];

  // Dados do último treino
  const ultimoTreino = {
    tipo: 'Treino Físico',
    data: '08/04/2025',
    duracao: '1h 30min',
    fcMedia: 145,
    fcMax: 172,
    calorias: 650,
    intensidade: [
      { nome: 'Leve', valor: 15 },
      { nome: 'Moderado', valor: 40 },
      { nome: 'Intenso', valor: 35 },
      { nome: 'Máximo', valor: 10 },
    ]
  };

  // Dados de metas e objetivos
  const metas = [
    { id: 1, titulo: 'Treinos Semanais', meta: 5, atual: 4, percentual: 80 },
    { id: 2, titulo: 'Horas de Atividade', meta: 15, atual: 12, percentual: 80 },
    { id: 3, titulo: 'Recuperação', meta: 100, atual: 85, percentual: 85 },
  ];

  // Cores para o gráfico de pizza
  const COLORS = ['#8884d8', '#83a6ed', '#8dd1e1', '#82ca9d'];

  return (
    <Layout>
      <div className="container py-8">
        <div className="flex flex-col space-y-8">
          {/* Cabeçalho */}
          <div>
            <h1 className="text-3xl font-bold">Dashboard de Desempenho</h1>
            <p className="text-muted-foreground">
              Acompanhe seu desempenho e estatísticas esportivas
            </p>
          </div>

          {/* Resumo em Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {estatisticas.map((estatistica) => (
              <Card key={estatistica.id}>
                <CardContent className="p-6">
                  <div className="flex flex-col space-y-2">
                    <p className="text-sm text-muted-foreground">{estatistica.titulo}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold">{estatistica.valor}</span>
                      <span className={`flex items-center text-sm ${
                        estatistica.tendencia === 'up' ? 'text-green-500' : 
                        estatistica.tendencia === 'down' ? 'text-red-500' : 'text-muted-foreground'
                      }`}>
                        {estatistica.tendencia === 'up' ? <ArrowUp size={16} /> : 
                         estatistica.tendencia === 'down' ? <ArrowDown size={16} /> : null}
                        {estatistica.percentual}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Gráficos e Análises */}
          <Tabs defaultValue="desempenho" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="desempenho">Desempenho</TabsTrigger>
              <TabsTrigger value="treinos">Treinos</TabsTrigger>
              <TabsTrigger value="metas">Metas & Objetivos</TabsTrigger>
            </TabsList>

            {/* Tab de Desempenho */}
            <TabsContent value="desempenho" className="space-y-6 mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Gráfico de Desempenho */}
                <Card>
                  <CardHeader>
                    <CardTitle>Índice de Desempenho</CardTitle>
                    <CardDescription>Últimos 7 dias vs. média</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={perfData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="dia" />
                          <YAxis domain={[0, 100]} />
                          <Tooltip />
                          <Legend />
                          <Line 
                            type="monotone" 
                            dataKey="desempenho" 
                            stroke="hsl(var(--primary))" 
                            strokeWidth={2}
                            activeDot={{ r: 8 }} 
                          />
                          <Line 
                            type="monotone" 
                            dataKey="media" 
                            stroke="hsl(var(--muted-foreground))" 
                            strokeDasharray="5 5" 
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>

                {/* Último Treino */}
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>Último Treino</CardTitle>
                        <CardDescription>{ultimoTreino.tipo} - {ultimoTreino.data}</CardDescription>
                      </div>
                      <Badge className="ml-auto">Concluído</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <Clock className="mx-auto mb-1 h-4 w-4 text-muted-foreground" />
                        <p className="text-lg font-medium">{ultimoTreino.duracao}</p>
                        <p className="text-xs text-muted-foreground">Duração</p>
                      </div>
                      <div className="text-center">
                        <Heart className="mx-auto mb-1 h-4 w-4 text-muted-foreground" />
                        <p className="text-lg font-medium">{ultimoTreino.fcMedia} bpm</p>
                        <p className="text-xs text-muted-foreground">FC Média</p>
                      </div>
                      <div className="text-center">
                        <Activity className="mx-auto mb-1 h-4 w-4 text-muted-foreground" />
                        <p className="text-lg font-medium">{ultimoTreino.calorias}</p>
                        <p className="text-xs text-muted-foreground">Calorias</p>
                      </div>
                    </div>
                    <div className="h-48">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={ultimoTreino.intensidade}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            fill="#8884d8"
                            paddingAngle={5}
                            dataKey="valor"
                            label={({ nome, valor }) => `${nome}: ${valor}%`}
                          >
                            {ultimoTreino.intensidade.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>

                {/* Frequência Cardíaca */}
                <Card>
                  <CardHeader>
                    <CardTitle>Frequência Cardíaca</CardTitle>
                    <CardDescription>Último treino registrado</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={fcData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="tempo" />
                          <YAxis domain={[50, 200]} />
                          <Tooltip />
                          <Line 
                            type="monotone" 
                            dataKey="fc" 
                            stroke="#ff0000" 
                            strokeWidth={2}
                            dot={{ stroke: '#ff0000', strokeWidth: 2, r: 1 }}
                            activeDot={{ r: 5 }} 
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>

                {/* Distribuição de Treinos */}
                <Card>
                  <CardHeader>
                    <CardTitle>Distribuição de Treinos</CardTitle>
                    <CardDescription>Por tipo (últimos 30 dias)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={treinos}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="nome" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Bar dataKey="horas" fill="hsl(var(--primary))" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Tab de Treinos */}
            <TabsContent value="treinos" className="space-y-6 mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Histórico de Treinos Recentes</h3>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between">
                        <div>
                          <CardTitle>Treino Físico</CardTitle>
                          <CardDescription>08/04/2025 - 16:00</CardDescription>
                        </div>
                        <Badge>Realizado</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <p className="text-sm text-muted-foreground">Foco em preparação física e resistência.</p>
                      <div className="flex justify-between mt-2 text-sm">
                        <span>Duração: 1h 30min</span>
                        <span>FC Média: 145 bpm</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="ghost" size="sm">Ver Detalhes</Button>
                    </CardFooter>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between">
                        <div>
                          <CardTitle>Treino Tático</CardTitle>
                          <CardDescription>06/04/2025 - 15:30</CardDescription>
                        </div>
                        <Badge>Realizado</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <p className="text-sm text-muted-foreground">Foco em jogadas ensaiadas e posicionamento.</p>
                      <div className="flex justify-between mt-2 text-sm">
                        <span>Duração: 2h</span>
                        <span>FC Média: 130 bpm</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="ghost" size="sm">Ver Detalhes</Button>
                    </CardFooter>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between">
                        <div>
                          <CardTitle>Jogo Amistoso</CardTitle>
                          <CardDescription>04/04/2025 - 19:00</CardDescription>
                        </div>
                        <Badge>Realizado</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <p className="text-sm text-muted-foreground">Amistoso contra FC Unidos.</p>
                      <div className="flex justify-between mt-2 text-sm">
                        <span>Duração: 1h 45min</span>
                        <span>FC Média: 160 bpm</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="ghost" size="sm">Ver Detalhes</Button>
                    </CardFooter>
                  </Card>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Próximos Treinos</h3>
                  <Card>
                    <CardHeader>
                      <CardTitle>Calendário de Treinos</CardTitle>
                      <CardDescription>Planejamento semanal</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center p-3 border rounded-lg">
                        <Calendar className="mr-3 h-5 w-5 text-muted-foreground" />
                        <div className="flex-1">
                          <p className="font-medium">Treino Físico</p>
                          <p className="text-sm text-muted-foreground">Amanhã - 07:00</p>
                        </div>
                        <Badge variant="outline">Agendado</Badge>
                      </div>
                      
                      <div className="flex items-center p-3 border rounded-lg">
                        <Calendar className="mr-3 h-5 w-5 text-muted-foreground" />
                        <div className="flex-1">
                          <p className="font-medium">Treino Tático</p>
                          <p className="text-sm text-muted-foreground">10/04/2025 - 16:00</p>
                        </div>
                        <Badge variant="outline">Agendado</Badge>
                      </div>
                      
                      <div className="flex items-center p-3 border rounded-lg">
                        <Calendar className="mr-3 h-5 w-5 text-muted-foreground" />
                        <div className="flex-1">
                          <p className="font-medium">Jogo Amistoso</p>
                          <p className="text-sm text-muted-foreground">12/04/2025 - 15:00</p>
                        </div>
                        <Badge variant="outline">Agendado</Badge>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">
                        <Upload className="mr-2 h-4 w-4" /> Importar Calendário
                      </Button>
                    </CardFooter>
                  </Card>
                  
                  <div className="mt-6">
                    <h3 className="text-lg font-medium mb-4">Estatísticas Gerais</h3>
                    <Card>
                      <CardContent className="pt-6">
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Treinos Completados</span>
                            <span className="font-medium">28 de 30</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2.5">
                            <div className="bg-primary h-2.5 rounded-full" style={{ width: '93%' }}></div>
                          </div>
                          
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Horas de Treinamento</span>
                            <span className="font-medium">42h</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2.5">
                            <div className="bg-primary h-2.5 rounded-full" style={{ width: '84%' }}></div>
                          </div>
                          
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Índice de Recuperação</span>
                            <span className="font-medium">85%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2.5">
                            <div className="bg-primary h-2.5 rounded-full" style={{ width: '85%' }}></div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Tab de Metas */}
            <TabsContent value="metas" className="space-y-6 mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Metas Atuais</CardTitle>
                    <CardDescription>Seu progresso semanal</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {metas.map((meta) => (
                      <div key={meta.id} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">{meta.titulo}</span>
                          <span className="text-sm text-muted-foreground">{meta.atual} de {meta.meta}</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2.5">
                          <div 
                            className="bg-primary h-2.5 rounded-full" 
                            style={{ width: `${meta.percentual}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">Definir Novas Metas</Button>
                  </CardFooter>
                </Card>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Evolução</CardTitle>
                      <CardDescription>Comparativo com período anterior</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <div className="w-full max-w-md">
                            <div className="flex justify-between mb-1">
                              <span className="text-sm">Resistência</span>
                              <span className="text-sm text-green-500 flex items-center">
                                <TrendingUp size={12} className="mr-1" /> +15%
                              </span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-2.5">
                              <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center">
                          <div className="w-full max-w-md">
                            <div className="flex justify-between mb-1">
                              <span className="text-sm">Velocidade</span>
                              <span className="text-sm text-green-500 flex items-center">
                                <TrendingUp size={12} className="mr-1" /> +8%
                              </span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-2.5">
                              <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '78%' }}></div>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center">
                          <div className="w-full max-w-md">
                            <div className="flex justify-between mb-1">
                              <span className="text-sm">Técnica</span>
                              <span className="text-sm text-green-500 flex items-center">
                                <TrendingUp size={12} className="mr-1" /> +5%
                              </span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-2.5">
                              <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '73%' }}></div>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center">
                          <div className="w-full max-w-md">
                            <div className="flex justify-between mb-1">
                              <span className="text-sm">Tático</span>
                              <span className="text-sm text-green-500 flex items-center">
                                <TrendingUp size={12} className="mr-1" /> +10%
                              </span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-2.5">
                              <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Recomendações</CardTitle>
                      <CardDescription>Com base no seu histórico</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-4">
                        <li className="flex gap-3">
                          <User className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-medium">Aumente seu tempo de recuperação</p>
                            <p className="text-sm text-muted-foreground">
                              Você teve uma semana intensa. Considere incluir mais tempo para recuperação muscular.
                            </p>
                          </div>
                        </li>
                        <li className="flex gap-3">
                          <Activity className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-medium">Melhore sua capacidade aeróbica</p>
                            <p className="text-sm text-muted-foreground">
                              Seus treinos de resistência têm mostrado progresso, continue com essa frequência.
                            </p>
                          </div>
                        </li>
                        <li className="flex gap-3">
                          <Heart className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-medium">Mantenha sua frequência cardíaca</p>
                            <p className="text-sm text-muted-foreground">
                              Sua zona cardíaca ótima está entre 150-165 bpm durante exercícios intensos.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
