
import React, { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { 
  Award, 
  Calendar, 
  ChevronDown,
  Crown, 
  Flag, 
  Gift, 
  HelpCircle, 
  Lightning, 
  Medal, 
  Play, 
  Share2, 
  Trophy, 
  Users
} from 'lucide-react';

const Gamificacao = () => {
  const [activeTab, setActiveTab] = useState("desafios");
  
  // Dados fictícios de desafios
  const desafios = [
    {
      id: 1,
      titulo: "Maratonista",
      descricao: "Complete 10 treinos de resistência em 30 dias",
      progresso: 70,
      recompensa: 500,
      dificuldade: "Médio",
      prazo: "15 dias restantes",
      tipo: "individual",
      destaque: true
    },
    {
      id: 2,
      titulo: "Mestre da Técnica",
      descricao: "Alcance precisão de 85% nos exercícios técnicos",
      progresso: 60,
      recompensa: 300,
      dificuldade: "Difícil",
      prazo: "7 dias restantes",
      tipo: "individual",
      destaque: false
    },
    {
      id: 3,
      titulo: "Espírito de Equipe",
      descricao: "Participe de 5 atividades coletivas",
      progresso: 80,
      recompensa: 400,
      dificuldade: "Fácil",
      prazo: "3 dias restantes",
      tipo: "equipe",
      destaque: true
    },
    {
      id: 4,
      titulo: "Ultramaratonista",
      descricao: "Acumule 100km em corridas no mês",
      progresso: 45,
      recompensa: 700,
      dificuldade: "Difícil",
      prazo: "20 dias restantes",
      tipo: "individual",
      destaque: false
    },
    {
      id: 5,
      titulo: "Coração de Ferro",
      descricao: "Mantenha FC na zona alvo em 10 treinos consecutivos",
      progresso: 30,
      recompensa: 500,
      dificuldade: "Médio",
      prazo: "25 dias restantes",
      tipo: "individual",
      destaque: false
    },
    {
      id: 6,
      titulo: "Desafio do Capitão",
      descricao: "Participe de um evento de liderança",
      progresso: 0,
      recompensa: 800,
      dificuldade: "Difícil",
      prazo: "14 dias restantes",
      tipo: "equipe",
      destaque: false
    }
  ];

  // Emblemas conquistados
  const emblemas = [
    {
      id: 1,
      nome: "Iniciante Dedicado",
      descricao: "Completou 10 treinos",
      data: "10/02/2025",
      icone: <Medal className="h-10 w-10 text-amber-400" />,
      nivel: "bronze"
    },
    {
      id: 2,
      nome: "Sempre Presente",
      descricao: "100% de presença por 1 mês",
      data: "05/03/2025",
      icone: <Calendar className="h-10 w-10 text-amber-400" />,
      nivel: "bronze"
    },
    {
      id: 3,
      nome: "Velocista",
      descricao: "Superou recorde pessoal de velocidade",
      data: "20/03/2025",
      icone: <Lightning className="h-10 w-10 text-slate-400" />,
      nivel: "prata"
    }
  ];
  
  // Emblemas bloqueados
  const emblemasBloqueados = [
    {
      id: 4,
      nome: "Campeão Regional",
      descricao: "Venceu um campeonato regional",
      icone: <Trophy className="h-10 w-10 text-zinc-600" />,
      nivel: "ouro"
    },
    {
      id: 5,
      nome: "Mestre da Técnica",
      descricao: "Atingiu excelência em habilidades técnicas",
      icone: <Crown className="h-10 w-10 text-zinc-600" />,
      nivel: "ouro"
    },
    {
      id: 6,
      nome: "Líder de Equipe",
      descricao: "Liderou sua equipe com sucesso",
      icone: <Flag className="h-10 w-10 text-zinc-600" />,
      nivel: "ouro"
    }
  ];
  
  // Ranking dos jogadores
  const ranking = [
    {
      id: 1,
      nome: "Rafael Oliveira",
      pontos: 8750,
      avatar: "https://github.com/shadcn.png",
      nivel: "Ouro",
      emblemas: 12,
      desafios: 24
    },
    {
      id: 2,
      nome: "Carla Silva",
      pontos: 7920,
      avatar: "https://github.com/shadcn.png",
      nivel: "Ouro",
      emblemas: 10,
      desafios: 21
    },
    {
      id: 3,
      nome: "Miguel Santos",
      pontos: 7540,
      avatar: "https://github.com/shadcn.png",
      nivel: "Ouro",
      emblemas: 9,
      desafios: 19
    },
    {
      id: 4,
      nome: "Amanda Costa",
      pontos: 6890,
      avatar: "https://github.com/shadcn.png",
      nivel: "Prata",
      emblemas: 8,
      desafios: 17
    },
    {
      id: 5,
      nome: "Carlos Silva",
      pontos: 5240,
      avatar: "https://github.com/shadcn.png",
      nivel: "Prata",
      emblemas: 7,
      desafios: 14
    }
  ];
  
  // Quizzes disponíveis
  const quizzes = [
    {
      id: 1,
      titulo: "Nutrição Esportiva",
      descricao: "Teste seus conhecimentos sobre alimentação para atletas",
      nivel: "Iniciante",
      perguntas: 10,
      tempo: "5 min",
      participantes: 128,
      pontos: 200
    },
    {
      id: 2,
      titulo: "Regras Oficiais",
      descricao: "Quanto você conhece sobre as regras do jogo?",
      nivel: "Intermediário",
      perguntas: 15,
      tempo: "8 min",
      participantes: 94,
      pontos: 300
    },
    {
      id: 3,
      titulo: "História do Esporte",
      descricao: "Grandes momentos e personalidades",
      nivel: "Especialista",
      perguntas: 20,
      tempo: "10 min",
      participantes: 76,
      pontos: 400
    }
  ];

  // Cor do badge de dificuldade
  const getBadgeVariant = (dificuldade: string) => {
    switch (dificuldade) {
      case "Fácil": return "default";
      case "Médio": return "secondary";
      case "Difícil": return "destructive";
      default: return "default";
    }
  };

  // Cor do badge de nível para quizzes
  const getQuizBadgeVariant = (nivel: string) => {
    switch (nivel) {
      case "Iniciante": return "default";
      case "Intermediário": return "secondary";
      case "Especialista": return "destructive";
      default: return "default";
    }
  };

  return (
    <Layout>
      <div className="container py-8">
        <div className="flex flex-col space-y-8">
          {/* Cabeçalho */}
          <div>
            <h1 className="text-3xl font-bold">Gamificação & Desafios</h1>
            <p className="text-muted-foreground">
              Participe de desafios, ganhe pontos e conquiste emblemas
            </p>
          </div>

          {/* Resumo de Pontos */}
          <div className="bg-primary/10 rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="col-span-1 md:col-span-2 flex flex-col justify-center">
                <h2 className="text-xl font-bold mb-2">Seu Progresso</h2>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-bold">5,240</span>
                  <span className="text-muted-foreground">pontos</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Nível Atual: Prata</span>
                    <span>Próximo Nível: 7,500 pontos</span>
                  </div>
                  <Progress value={70} className="h-2" />
                  <p className="text-xs text-muted-foreground">2,260 pontos para o próximo nível</p>
                </div>
              </div>
              
              <div className="flex flex-col justify-center items-center border-l border-r px-4">
                <Trophy className="h-10 w-10 text-amber-400 mb-2" />
                <p className="text-center">
                  <span className="text-2xl font-bold block">7</span>
                  <span className="text-sm text-muted-foreground">Emblemas</span>
                </p>
              </div>
              
              <div className="flex flex-col justify-center items-center">
                <Award className="h-10 w-10 text-primary mb-2" />
                <p className="text-center">
                  <span className="text-2xl font-bold block">14</span>
                  <span className="text-sm text-muted-foreground">Desafios Completos</span>
                </p>
              </div>
            </div>
          </div>

          {/* Tabs de Conteúdo */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="desafios">Desafios</TabsTrigger>
              <TabsTrigger value="emblemas">Emblemas</TabsTrigger>
              <TabsTrigger value="ranking">Ranking</TabsTrigger>
              <TabsTrigger value="quizzes">Quizzes</TabsTrigger>
            </TabsList>

            {/* Tab de Desafios */}
            <TabsContent value="desafios" className="space-y-6 mt-6">
              {/* Desafios em Destaque */}
              <div>
                <h2 className="text-xl font-bold mb-4">Desafios em Destaque</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {desafios.filter(d => d.destaque).map((desafio) => (
                    <Card key={desafio.id} className="border-primary/50">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between">
                          <CardTitle>{desafio.titulo}</CardTitle>
                          <Badge variant={getBadgeVariant(desafio.dificuldade)}>
                            {desafio.dificuldade}
                          </Badge>
                        </div>
                        <CardDescription>{desafio.descricao}</CardDescription>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Progresso</span>
                            <span>{desafio.progresso}%</span>
                          </div>
                          <Progress value={desafio.progresso} className="h-2" />
                          <div className="flex justify-between text-sm text-muted-foreground">
                            <span>Recompensa: {desafio.recompensa} pontos</span>
                            <span>{desafio.prazo}</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="pt-2">
                        <Button className="w-full">Continuar Desafio</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
              
              {/* Desafios Individuais */}
              <div>
                <h2 className="text-xl font-bold mb-4">Seus Desafios</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {desafios
                    .filter(d => !d.destaque && d.tipo === "individual")
                    .map((desafio) => (
                      <Card key={desafio.id}>
                        <CardHeader className="pb-2">
                          <div className="flex justify-between">
                            <CardTitle className="text-lg">{desafio.titulo}</CardTitle>
                            <Badge variant={getBadgeVariant(desafio.dificuldade)}>
                              {desafio.dificuldade}
                            </Badge>
                          </div>
                          <CardDescription className="line-clamp-2">{desafio.descricao}</CardDescription>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>Progresso</span>
                              <span>{desafio.progresso}%</span>
                            </div>
                            <Progress value={desafio.progresso} className="h-2" />
                            <div className="flex justify-between text-xs text-muted-foreground">
                              <span>{desafio.recompensa} pts</span>
                              <span>{desafio.prazo}</span>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="pt-2">
                          <Button size="sm" className="w-full">Ver Detalhes</Button>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              </div>
              
              {/* Desafios de Equipe */}
              <div>
                <h2 className="text-xl font-bold mb-4">Desafios de Equipe</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {desafios
                    .filter(d => !d.destaque && d.tipo === "equipe")
                    .map((desafio) => (
                      <Card key={desafio.id}>
                        <CardHeader className="pb-2">
                          <div className="flex justify-between">
                            <CardTitle className="text-lg">{desafio.titulo}</CardTitle>
                            <Badge variant={getBadgeVariant(desafio.dificuldade)}>
                              {desafio.dificuldade}
                            </Badge>
                          </div>
                          <CardDescription className="line-clamp-2">{desafio.descricao}</CardDescription>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>Progresso da Equipe</span>
                              <span>{desafio.progresso}%</span>
                            </div>
                            <Progress value={desafio.progresso} className="h-2" />
                            <div className="flex justify-between text-xs text-muted-foreground">
                              <span>{desafio.recompensa} pts</span>
                              <span>{desafio.prazo}</span>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="pt-2">
                          <Button size="sm" className="w-full">Ver Detalhes</Button>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
                <div className="flex justify-center mt-6">
                  <Button variant="outline">Ver Todos os Desafios</Button>
                </div>
              </div>
            </TabsContent>

            {/* Tab de Emblemas */}
            <TabsContent value="emblemas" className="space-y-6 mt-6">
              {/* Emblemas Conquistados */}
              <div>
                <h2 className="text-xl font-bold mb-4">Seus Emblemas</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {emblemas.map((emblema) => (
                    <Card key={emblema.id}>
                      <CardContent className="p-6 flex flex-col items-center text-center">
                        <div className="mb-4">
                          {emblema.icone}
                        </div>
                        <h3 className="font-bold mb-1">{emblema.nome}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{emblema.descricao}</p>
                        <Badge variant="outline">{emblema.nivel}</Badge>
                        <p className="text-xs text-muted-foreground mt-3">
                          Conquistado em {emblema.data}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              
              {/* Emblemas Bloqueados */}
              <div>
                <h2 className="text-xl font-bold mb-4">Emblemas a Conquistar</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {emblemasBloqueados.map((emblema) => (
                    <Card key={emblema.id} className="bg-muted/40">
                      <CardContent className="p-6 flex flex-col items-center text-center">
                        <div className="mb-4 opacity-60">
                          {emblema.icone}
                        </div>
                        <h3 className="font-bold mb-1">{emblema.nome}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{emblema.descricao}</p>
                        <Badge variant="outline">{emblema.nivel}</Badge>
                        <Button variant="outline" size="sm" className="mt-4">
                          <HelpCircle size={14} className="mr-1" /> Como desbloquear
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              
              {/* Sistema de Níveis */}
              <div>
                <h2 className="text-xl font-bold mb-4">Sistema de Níveis</h2>
                <Card>
                  <CardContent className="p-6">
                    <Collapsible className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium">Como funcionam os níveis</h3>
                        <CollapsibleTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <ChevronDown className="h-4 w-4" />
                            <span className="sr-only">Toggle</span>
                          </Button>
                        </CollapsibleTrigger>
                      </div>
                      <CollapsibleContent className="space-y-4">
                        <div className="rounded-md border p-4">
                          <h4 className="text-sm font-medium mb-2">Níveis e Pontuações</h4>
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="flex items-center">
                                <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                                <span>Bronze</span>
                              </span>
                              <span className="text-sm text-muted-foreground">0 - 5,000 pontos</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="flex items-center">
                                <div className="h-3 w-3 rounded-full bg-slate-400 mr-2"></div>
                                <span>Prata</span>
                              </span>
                              <span className="text-sm text-muted-foreground">5,001 - 7,500 pontos</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="flex items-center">
                                <div className="h-3 w-3 rounded-full bg-amber-400 mr-2"></div>
                                <span>Ouro</span>
                              </span>
                              <span className="text-sm text-muted-foreground">7,501 - 12,000 pontos</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="flex items-center">
                                <div className="h-3 w-3 rounded-full bg-cyan-500 mr-2"></div>
                                <span>Platina</span>
                              </span>
                              <span className="text-sm text-muted-foreground">12,001 - 20,000 pontos</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="flex items-center">
                                <div className="h-3 w-3 rounded-full bg-purple-500 mr-2"></div>
                                <span>Diamante</span>
                              </span>
                              <span className="text-sm text-muted-foreground">Acima de 20,001 pontos</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Ganhe pontos ao completar desafios, participar de atividades, marcar presença em treinos e jogos, e contribuir com a comunidade.
                          Cada nível desbloqueia novas recompensas, desafios e emblemas exclusivos.
                        </p>
                      </CollapsibleContent>
                    </Collapsible>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Tab de Ranking */}
            <TabsContent value="ranking" className="space-y-6 mt-6">
              {/* Ranking de Jogadores */}
              <div>
                <h2 className="text-xl font-bold mb-4">Ranking Geral</h2>
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {ranking.map((jogador, index) => (
                        <div 
                          key={jogador.id} 
                          className={`flex items-center p-3 rounded-lg ${
                            index === 0 ? 'bg-amber-100 dark:bg-amber-950/20' : 
                            index === 1 ? 'bg-slate-100 dark:bg-slate-950/20' : 
                            index === 2 ? 'bg-orange-100 dark:bg-orange-950/20' : 
                            'bg-card'
                          } ${index < 3 ? 'border border-primary/20' : 'border'}`}
                        >
                          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-muted mr-4 font-bold">
                            {index + 1}
                          </div>
                          <Avatar className="h-10 w-10 mr-4">
                            <img src={jogador.avatar} alt={jogador.nome} />
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                              <div>
                                <p className="font-medium">{jogador.nome}</p>
                                <div className="flex items-center text-xs text-muted-foreground">
                                  <Trophy size={12} className="mr-1" />
                                  <span>Nível {jogador.nivel}</span>
                                </div>
                              </div>
                              <div className="flex items-center gap-4 mt-2 sm:mt-0">
                                <div className="text-center">
                                  <p className="text-lg font-bold">{jogador.pontos}</p>
                                  <p className="text-xs text-muted-foreground">pontos</p>
                                </div>
                                <div className="text-center">
                                  <p className="font-medium">{jogador.emblemas}</p>
                                  <p className="text-xs text-muted-foreground">emblemas</p>
                                </div>
                                <div className="text-center">
                                  <p className="font-medium">{jogador.desafios}</p>
                                  <p className="text-xs text-muted-foreground">desafios</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Sua Posição */}
              <div>
                <h2 className="text-xl font-bold mb-4">Sua Posição</h2>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center p-3 bg-primary/10 rounded-lg border border-primary/20">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/20 mr-4 font-bold">
                        5
                      </div>
                      <Avatar className="h-10 w-10 mr-4">
                        <img src="https://github.com/shadcn.png" alt="Carlos Silva" />
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                          <div>
                            <p className="font-medium">Carlos Silva</p>
                            <div className="flex items-center text-xs text-muted-foreground">
                              <Trophy size={12} className="mr-1" />
                              <span>Nível Prata</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-4 mt-2 sm:mt-0">
                            <div className="text-center">
                              <p className="text-lg font-bold">5,240</p>
                              <p className="text-xs text-muted-foreground">pontos</p>
                            </div>
                            <div className="text-center">
                              <p className="font-medium">7</p>
                              <p className="text-xs text-muted-foreground">emblemas</p>
                            </div>
                            <div className="text-center">
                              <p className="font-medium">14</p>
                              <p className="text-xs text-muted-foreground">desafios</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center mt-4">
                      <div className="flex items-center">
                        <Badge variant="outline" className="mr-2">+980</Badge>
                        <span className="text-sm">pontos para subir uma posição</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Outros Rankings */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Ranking por Equipe</CardTitle>
                    <CardDescription>Desempenho coletivo</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="flex items-center justify-center h-6 w-6 rounded-full bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300 mr-3 text-xs font-bold">
                            1
                          </div>
                          <span>FC Estrelas</span>
                        </div>
                        <span className="font-medium">28,450 pts</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="flex items-center justify-center h-6 w-6 rounded-full bg-slate-100 text-slate-700 dark:bg-slate-950 dark:text-slate-300 mr-3 text-xs font-bold">
                            2
                          </div>
                          <span>Atlético Juventude</span>
                        </div>
                        <span className="font-medium">25,780 pts</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="flex items-center justify-center h-6 w-6 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-300 mr-3 text-xs font-bold">
                            3
                          </div>
                          <span>FC Unidos</span>
                        </div>
                        <span className="font-medium">24,390 pts</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" className="w-full">Ver Ranking Completo</Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Premiações da Temporada</CardTitle>
                    <CardDescription>Principais conquistas</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <Trophy className="h-10 w-10 text-amber-400 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Atleta do Mês</p>
                          <p className="text-sm text-muted-foreground">Rafael Oliveira</p>
                          <Badge variant="outline" className="mt-1">1,200 pontos</Badge>
                        </div>
                      </div>
                      <Separator />
                      <div className="flex gap-3">
                        <Trophy className="h-10 w-10 text-slate-400 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Revelação da Temporada</p>
                          <p className="text-sm text-muted-foreground">Matheus Oliveira</p>
                          <Badge variant="outline" className="mt-1">1,000 pontos</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Tab de Quizzes */}
            <TabsContent value="quizzes" className="space-y-6 mt-6">
              {/* Quizzes Disponíveis */}
              <div>
                <h2 className="text-xl font-bold mb-4">Quizzes Disponíveis</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {quizzes.map((quiz) => (
                    <Card key={quiz.id}>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between">
                          <CardTitle>{quiz.titulo}</CardTitle>
                          <Badge variant={getQuizBadgeVariant(quiz.nivel)}>
                            {quiz.nivel}
                          </Badge>
                        </div>
                        <CardDescription>{quiz.descricao}</CardDescription>
                      </CardHeader>
                      <CardContent className="pb-3">
                        <div className="flex justify-between text-sm my-2">
                          <span className="flex items-center">
                            <HelpCircle size={14} className="mr-1" /> {quiz.perguntas} perguntas
                          </span>
                          <span className="flex items-center">
                            <Clock size={14} className="mr-1" /> {quiz.tempo}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm text-muted-foreground">
                          <span className="flex items-center">
                            <Users size={14} className="mr-1" /> {quiz.participantes} participantes
                          </span>
                          <span className="flex items-center">
                            <Trophy size={14} className="mr-1" /> {quiz.pontos} pts
                          </span>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">
                          <Play size={16} className="mr-2" /> Iniciar Quiz
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
              
              {/* Programa de Recompensas */}
              <div className="mt-8">
                <Card className="bg-primary/5">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Gift className="mr-2 h-5 w-5" /> Programa de Recompensas
                    </CardTitle>
                    <CardDescription>
                      Troque seus pontos por benefícios exclusivos
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card>
                        <CardContent className="p-4 text-center">
                          <Trophy className="h-8 w-8 mx-auto mb-2 text-primary" />
                          <h3 className="font-medium mb-1">Equipamentos Exclusivos</h3>
                          <p className="text-xs text-muted-foreground mb-3">
                            Produtos esportivos com desconto
                          </p>
                          <Badge>2,500 pontos</Badge>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4 text-center">
                          <Calendar className="h-8 w-8 mx-auto mb-2 text-primary" />
                          <h3 className="font-medium mb-1">Eventos VIP</h3>
                          <p className="text-xs text-muted-foreground mb-3">
                            Acesso a eventos e treinamentos especiais
                          </p>
                          <Badge>5,000 pontos</Badge>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4 text-center">
                          <Crown className="h-8 w-8 mx-auto mb-2 text-primary" />
                          <h3 className="font-medium mb-1">Sessão com Profissional</h3>
                          <p className="text-xs text-muted-foreground mb-3">
                            Treino personalizado com especialista
                          </p>
                          <Badge>7,500 pontos</Badge>
                        </CardContent>
                      </Card>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-center">
                    <Button>
                      <Share2 size={16} className="mr-2" /> Compartilhar Conquistas
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Gamificacao;
