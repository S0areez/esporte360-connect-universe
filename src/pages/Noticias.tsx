
import React, { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { BookmarkIcon, Calendar, Heart, MessageSquare, Share2, ThumbsUp, Bookmark, Filter } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

const Noticias = () => {
  const [activeTab, setActiveTab] = useState("destaques");
  
  // Dados fictícios de notícias
  const noticias = [
    {
      id: 1,
      titulo: "FC Estrelas vence de virada e assume liderança do campeonato",
      resumo: "Em jogo emocionante, a equipe do FC Estrelas mostrou força ao virar o placar nos minutos finais e assumir a ponta da tabela.",
      imagem: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1976&auto=format&fit=crop",
      autor: "Ana Silva",
      data: "08/04/2025",
      categoria: "Campeonato Regional",
      curtidas: 245,
      comentarios: 32,
      compartilhamentos: 18,
      destaque: true,
      conteudo: "O FC Estrelas conquistou uma vitória importante neste domingo contra o tradicional rival FC Unidos, por 3x2, de virada. A partida, realizada no Estádio Municipal, contou com grande público e emoção do início ao fim. Com o resultado, a equipe assume a liderança do Campeonato Regional, com 26 pontos, dois a mais que o segundo colocado.\n\nOs gols da equipe foram marcados por Miguel Santos (2) e Carlos Ferreira, que vem se destacando na temporada com 8 gols em 10 jogos. O técnico Roberto Mendes elogiou a postura da equipe: \"Mostramos muita força mental para reverter o placar adverso. Este grupo tem um espírito vencedor que faz a diferença nos momentos decisivos.\"\n\nA equipe volta a campo no próximo sábado, fora de casa, contra o Atlético Juventude, em busca de manter a liderança conquistada."
    },
    {
      id: 2,
      titulo: "Novo centro de treinamento será inaugurado no próximo mês",
      resumo: "Com instalações modernas e tecnologia de ponta, o novo CT promete elevar o nível dos atletas da região.",
      imagem: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1976&auto=format&fit=crop",
      autor: "Pedro Costa",
      data: "07/04/2025",
      categoria: "Infraestrutura",
      curtidas: 189,
      comentarios: 24,
      compartilhamentos: 37,
      destaque: true,
      conteudo: "O novo Centro de Treinamento Esporte360 será inaugurado no dia 15 de maio, após 14 meses de obras. Com investimento de R$ 12 milhões, o complexo conta com quatro campos oficiais, academia com equipamentos de última geração, centro médico, sala de fisioterapia, espaço para recuperação com piscinas aquecidas e crioterapia.\n\nSegundo Paulo Menezes, diretor de infraestrutura do projeto, o CT foi desenvolvido seguindo padrões internacionais: \"Estudamos os melhores centros de treinamento do mundo para trazer o que há de mais moderno em termos de preparação esportiva. Nossa meta é potencializar o desenvolvimento de atletas regionais com estrutura de nível mundial\".\n\nO espaço atenderá tanto atletas profissionais quanto as categorias de base, com programas específicos para cada faixa etária e nível técnico. A expectativa é que cerca de 300 atletas sejam beneficiados inicialmente."
    },
    {
      id: 3,
      titulo: "Nutricionista revela segredos da alimentação dos atletas campeões",
      resumo: "Dieta balanceada e suplementação adequada são fatores fundamentais para o alto rendimento esportivo.",
      imagem: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1976&auto=format&fit=crop",
      autor: "Juliana Mendes",
      data: "06/04/2025",
      categoria: "Saúde",
      curtidas: 321,
      comentarios: 48,
      compartilhamentos: 73,
      destaque: false,
      conteudo: "Em entrevista exclusiva, a nutricionista Carla Rodrigues, responsável pela alimentação do time campeão FC Estrelas, revelou os principais aspectos da dieta que contribuiu para o sucesso da equipe na temporada.\n\n\"A nutrição esportiva é um dos pilares fundamentais para o alto rendimento. Trabalhamos com planejamentos individualizados, considerando as características fisiológicas de cada atleta, posição em campo e fase de treinamento\", explicou Carla.\n\nEntre as estratégias adotadas, destaca-se o consumo controlado de carboidratos complexos antes dos jogos, proteínas de alta qualidade para recuperação muscular e suplementação específica para cada fase da temporada. \"Fazemos ajustes semanais baseados em exames regulares e no feedback dos próprios atletas quanto à recuperação e energia\".\n\nA especialista também mencionou a importância da hidratação avançada, com bebidas isotônicas formuladas especificamente para cada atleta, de acordo com sua taxa de sudorese e necessidades eletrolíticas."
    },
    {
      id: 4,
      titulo: "Jovem talento de 17 anos é observado por clubes europeus",
      resumo: "Matheus Oliveira, destaque nas categorias de base, desperta interesse de olheiros internacionais após atuações impressionantes.",
      imagem: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1976&auto=format&fit=crop",
      autor: "Carlos Eduardo",
      data: "05/04/2025",
      categoria: "Mercado",
      curtidas: 276,
      comentarios: 39,
      compartilhamentos: 42,
      destaque: false,
      conteudo: "O atacante Matheus Oliveira, de apenas 17 anos, tem chamado a atenção de observadores técnicos de clubes europeus. Após marcar 23 gols em 18 jogos pelo campeonato sub-17, o jovem talento já é monitorado por equipes da Alemanha, Portugal e França.\n\nSegundo fontes próximas ao atleta, ao menos três propostas oficiais devem ser apresentadas nas próximas semanas. O empresário do jogador, Rodrigo Teixeira, confirmou o interesse internacional: \"Realmente há procura de várias equipes, mas estamos avaliando com calma qual seria o melhor caminho para o desenvolvimento do Matheus\".\n\nO FC Estrelas, clube formador do atleta, já sinalizou interesse em promovê-lo ao time principal na próxima temporada, mas não descarta uma negociação caso as propostas sejam vantajosas. O valor de mercado estimado do jovem gira em torno de 5 milhões de euros, quantia expressiva para um atleta de sua idade."
    },
    {
      id: 5,
      titulo: "Tecnologia wearable: como os dispositivos estão revolucionando o treinamento",
      resumo: "Sensores e dispositivos vestíveis permitem monitoramento em tempo real e análises aprofundadas sobre o desempenho dos atletas.",
      imagem: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1976&auto=format&fit=crop",
      autor: "Marina Gomes",
      data: "04/04/2025",
      categoria: "Tecnologia",
      curtidas: 198,
      comentarios: 27,
      compartilhamentos: 31,
      destaque: false,
      conteudo: "A integração de tecnologias wearable (vestíveis) está transformando a preparação física e o monitoramento de atletas em diversos esportes. Dispositivos como GPS avançados, monitores cardíacos, sensores de aceleração e impacto fornecem dados que antes eram impossíveis de se obter com precisão.\n\nSegundo o preparador físico Ricardo Almeida, os benefícios são imensos: \"Conseguimos acompanhar em tempo real parâmetros como distância percorrida, velocidade máxima, zonas de frequência cardíaca e carga neuromuscular. Isso nos permite ajustar os treinos de maneira muito mais eficaz e personalizada\".\n\nEntre as tecnologias mais utilizadas estão os coletes com sensores que medem mais de 200 parâmetros diferentes por segundo, transmitindo os dados instantaneamente para tablets e computadores da comissão técnica. \"A evolução nessa área nos últimos cinco anos foi extraordinária. Hoje temos acesso a métricas que nos ajudam a prevenir lesões e otimizar o rendimento com uma precisão impressionante\", complementa Almeida.\n\nEspecialistas acreditam que o próximo passo será a integração dos dispositivos wearable com inteligência artificial, gerando recomendações automatizadas para cada atleta."
    },
    {
      id: 6,
      titulo: "Campeonato Interescolar define semifinalistas em jogos emocionantes",
      resumo: "Competição que revela talentos das escolas da região chega à fase decisiva com partidas equilibradas.",
      imagem: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1976&auto=format&fit=crop",
      autor: "Rafael Torres",
      data: "03/04/2025",
      categoria: "Base",
      curtidas: 143,
      comentarios: 19,
      compartilhamentos: 14,
      destaque: false,
      conteudo: "O Campeonato Interescolar 2025 definiu seus semifinalistas após uma rodada de quartas de final repleta de emoção e jogos equilibrados. As escolas classificadas foram o Colégio Presidente (atual campeão), Instituto Educacional Progresso, Escola Técnica Municipal e o estreante Colégio Novos Talentos.\n\nO destaque da fase foi a classificação do Colégio Novos Talentos, que eliminou um dos favoritos, o tradicional Colégio São Pedro, nos pênaltis após empate em 2x2 no tempo normal. O atacante Luis Felipe, de 16 anos, foi o grande nome da equipe com uma atuação decisiva.\n\nAs semifinais serão disputadas no próximo final de semana, no Ginásio Municipal, com entrada gratuita. A competição, que está em sua 12ª edição, é reconhecida por revelar talentos para equipes profissionais – nos últimos cinco anos, 27 atletas que participaram do torneio foram contratados por clubes das séries A e B."
    }
  ];

  // Categorias para filtro
  const categorias = [
    "Todos",
    "Campeonato Regional",
    "Infraestrutura",
    "Saúde",
    "Mercado",
    "Tecnologia",
    "Base"
  ];

  // Encontrar notícias em destaque
  const noticiasDestaque = noticias.filter(noticia => noticia.destaque);
  
  // Notícia principal (primeira notícia em destaque)
  const noticiaPrincipal = noticiasDestaque[0];
  
  // Notícias secundárias
  const noticiasSecundarias = noticias.slice(1, 4);
  
  // Notícias para a lista completa
  const todasNoticias = noticias;

  return (
    <Layout>
      <div className="container py-8">
        <div className="flex flex-col space-y-8">
          {/* Cabeçalho */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold">Feed de Notícias</h1>
              <p className="text-muted-foreground">
                Acompanhe as últimas novidades e atualizações do mundo esportivo
              </p>
            </div>
            <div className="w-full sm:max-w-xs flex space-x-2">
              <Input placeholder="Pesquisar notícias..." />
              <Button size="icon" variant="outline">
                <Filter size={18} />
              </Button>
            </div>
          </div>

          {/* Tabs de Navegação */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="destaques">Destaques</TabsTrigger>
              <TabsTrigger value="recentes">Mais Recentes</TabsTrigger>
              <TabsTrigger value="populares">Mais Populares</TabsTrigger>
              <TabsTrigger value="salvos">Salvos</TabsTrigger>
            </TabsList>

            {/* Tab de Destaques */}
            <TabsContent value="destaques" className="space-y-6 mt-6">
              {/* Notícia Principal */}
              <Card className="overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="aspect-video md:aspect-auto overflow-hidden">
                    <img 
                      src={noticiaPrincipal.imagem} 
                      alt={noticiaPrincipal.titulo} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <Badge className="w-fit mb-2">{noticiaPrincipal.categoria}</Badge>
                    <h2 className="text-2xl font-bold mb-2">{noticiaPrincipal.titulo}</h2>
                    <p className="text-muted-foreground mb-4">{noticiaPrincipal.resumo}</p>
                    <div className="flex items-center gap-2 mb-4">
                      <Avatar className="h-8 w-8">
                        <img src="https://github.com/shadcn.png" alt="Avatar" />
                      </Avatar>
                      <div className="text-sm">
                        <p className="font-medium">{noticiaPrincipal.autor}</p>
                        <p className="text-muted-foreground">{noticiaPrincipal.data}</p>
                      </div>
                    </div>
                    <div className="flex justify-between mt-auto">
                      <div className="flex gap-4">
                        <Button variant="ghost" size="sm" className="flex items-center gap-1">
                          <ThumbsUp size={16} /> {noticiaPrincipal.curtidas}
                        </Button>
                        <Button variant="ghost" size="sm" className="flex items-center gap-1">
                          <MessageSquare size={16} /> {noticiaPrincipal.comentarios}
                        </Button>
                        <Button variant="ghost" size="sm" className="flex items-center gap-1">
                          <Share2 size={16} /> {noticiaPrincipal.compartilhamentos}
                        </Button>
                      </div>
                      <Button variant="ghost" size="sm" className="flex items-center gap-1">
                        <Bookmark size={16} /> Salvar
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Notícias Secundárias */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {noticiasSecundarias.map((noticia) => (
                  <Card key={noticia.id} className="overflow-hidden">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={noticia.imagem} 
                        alt={noticia.titulo} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <Badge className="w-fit mb-1">{noticia.categoria}</Badge>
                      <CardTitle className="text-lg">{noticia.titulo}</CardTitle>
                    </CardHeader>
                    <CardContent className="pb-3">
                      <p className="text-sm text-muted-foreground line-clamp-2">{noticia.resumo}</p>
                      <div className="flex items-center gap-2 mt-3">
                        <Avatar className="h-6 w-6">
                          <img src="https://github.com/shadcn.png" alt="Avatar" />
                        </Avatar>
                        <div className="text-xs">
                          <p className="font-medium">{noticia.autor}</p>
                          <p className="text-muted-foreground">{noticia.data}</p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-0 flex justify-between">
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm" className="h-8 px-2">
                          <ThumbsUp size={14} />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 px-2">
                          <MessageSquare size={14} />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 px-2">
                          <Share2 size={14} />
                        </Button>
                      </div>
                      <Button variant="ghost" size="sm" className="h-8 px-2">
                        <Bookmark size={14} />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Tab Mais Recentes */}
            <TabsContent value="recentes" className="space-y-6 mt-6">
              {/* Filtro de Categorias */}
              <ScrollArea className="whitespace-nowrap pb-4 -mx-4 px-4">
                <div className="flex space-x-2">
                  {categorias.map((categoria) => (
                    <Button 
                      key={categoria} 
                      variant={categoria === "Todos" ? "default" : "outline"}
                      size="sm"
                    >
                      {categoria}
                    </Button>
                  ))}
                </div>
              </ScrollArea>

              {/* Lista de Notícias Recentes */}
              <div className="space-y-4">
                {todasNoticias.sort((a, b) => {
                  const dateA = new Date(a.data.split('/').reverse().join('-'));
                  const dateB = new Date(b.data.split('/').reverse().join('-'));
                  return dateB.getTime() - dateA.getTime();
                }).map((noticia) => (
                  <Card key={noticia.id}>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div className="md:col-span-1 overflow-hidden">
                        <img 
                          src={noticia.imagem} 
                          alt={noticia.titulo} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="md:col-span-3 p-4 md:p-6 flex flex-col">
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                          <Badge className="w-fit">{noticia.categoria}</Badge>
                          <span className="text-xs text-muted-foreground flex items-center">
                            <Calendar size={12} className="mr-1" /> {noticia.data}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold mb-2">{noticia.titulo}</h3>
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{noticia.resumo}</p>
                        <div className="flex items-center gap-2 mb-4">
                          <Avatar className="h-6 w-6">
                            <img src="https://github.com/shadcn.png" alt="Avatar" />
                          </Avatar>
                          <span className="text-xs">{noticia.autor}</span>
                        </div>
                        <div className="flex justify-between mt-auto">
                          <div className="flex gap-3">
                            <Button variant="ghost" size="sm" className="flex items-center gap-1">
                              <ThumbsUp size={16} /> {noticia.curtidas}
                            </Button>
                            <Button variant="ghost" size="sm" className="flex items-center gap-1">
                              <MessageSquare size={16} /> {noticia.comentarios}
                            </Button>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="sm">
                              <Share2 size={16} />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Bookmark size={16} />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              
              <div className="flex justify-center">
                <Button variant="outline">Carregar mais notícias</Button>
              </div>
            </TabsContent>

            {/* Tab Mais Populares */}
            <TabsContent value="populares" className="space-y-6 mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Mais Curtidas</h3>
                  <div className="space-y-4">
                    {todasNoticias.sort((a, b) => b.curtidas - a.curtidas).slice(0, 3).map((noticia, index) => (
                      <Card key={noticia.id}>
                        <div className="flex p-4 gap-4">
                          <div className="text-2xl font-bold text-muted-foreground">0{index + 1}</div>
                          <div className="flex-1">
                            <Badge className="mb-2">{noticia.categoria}</Badge>
                            <h4 className="font-medium mb-1">{noticia.titulo}</h4>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Heart size={14} className="mr-1" /> {noticia.curtidas} curtidas
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Mais Comentadas</h3>
                  <div className="space-y-4">
                    {todasNoticias.sort((a, b) => b.comentarios - a.comentarios).slice(0, 3).map((noticia, index) => (
                      <Card key={noticia.id}>
                        <div className="flex p-4 gap-4">
                          <div className="text-2xl font-bold text-muted-foreground">0{index + 1}</div>
                          <div className="flex-1">
                            <Badge className="mb-2">{noticia.categoria}</Badge>
                            <h4 className="font-medium mb-1">{noticia.titulo}</h4>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <MessageSquare size={14} className="mr-1" /> {noticia.comentarios} comentários
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-lg font-medium mb-4">Mais Compartilhadas</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {todasNoticias.sort((a, b) => b.compartilhamentos - a.compartilhamentos).slice(0, 3).map((noticia) => (
                    <Card key={noticia.id} className="overflow-hidden">
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={noticia.imagem} 
                          alt={noticia.titulo} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-4">
                        <Badge className="mb-2">{noticia.categoria}</Badge>
                        <h4 className="font-medium mb-2 line-clamp-2">{noticia.titulo}</h4>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Share2 size={14} className="mr-1" /> {noticia.compartilhamentos} compartilhamentos
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Tab Salvos */}
            <TabsContent value="salvos" className="space-y-6 mt-6">
              <div className="text-center p-8 border rounded-lg">
                <BookmarkIcon className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium mb-2">Nenhuma notícia salva</h3>
                <p className="text-muted-foreground mb-4">
                  Você ainda não salvou nenhuma notícia. Clique no ícone de marcador em qualquer notícia para acessá-la facilmente depois.
                </p>
                <Button>Explorar notícias</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Noticias;
