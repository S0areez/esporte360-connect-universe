
import React, { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { MessageCircle, ThumbsUp, Eye, UserPlus, MessageSquare, Book, Calendar, Award, Star } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';

const Comunidade = () => {
  const [activeTab, setActiveTab] = useState('populares');

  // Mock data para tópicos do fórum
  const topicos = [
    {
      id: 1,
      titulo: 'Dicas para treinamento de resistência em futebol',
      autor: {
        nome: 'Carlos Silva',
        avatar: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
      },
      categoria: 'Treinamento',
      dataCriacao: '2 dias atrás',
      visualizacoes: 342,
      comentarios: 28,
      curtidas: 76,
      conteudo: 'Quais são as melhores estratégias para melhorar a resistência no campo durante partidas longas? Tenho treinado 3x por semana mas sinto que preciso melhorar meu condicionamento...'
    },
    {
      id: 2,
      titulo: 'Calendário de Torneios Amadores 2025 - SP',
      autor: {
        nome: 'Ana Cardoso',
        avatar: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
      },
      categoria: 'Eventos',
      dataCriacao: '3 dias atrás',
      visualizacoes: 517,
      comentarios: 42,
      curtidas: 93,
      conteudo: 'Alguém tem informações sobre os torneios amadores que vão acontecer em São Paulo no primeiro semestre de 2025? Estou organizando um time e precisamos nos preparar com antecedência...'
    },
    {
      id: 3,
      titulo: 'Análise tática: O que acharam do último clássico?',
      autor: {
        nome: 'Roberto Costa',
        avatar: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952',
      },
      categoria: 'Análise',
      dataCriacao: '1 semana atrás',
      visualizacoes: 823,
      comentarios: 97,
      curtidas: 124,
      conteudo: 'A formação 4-3-3 foi surpreendente considerando os jogadores disponíveis. O que vocês acharam das mudanças táticas do treinador durante o segundo tempo? Pessoalmente acho que a substituição do...'
    },
    {
      id: 4,
      titulo: 'Recomendações de nutrição pré-jogo para atletas',
      autor: {
        nome: 'Mariana Santos',
        avatar: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
      },
      categoria: 'Saúde',
      dataCriacao: '5 dias atrás',
      visualizacoes: 412,
      comentarios: 36,
      curtidas: 82,
      conteudo: 'Quais alimentos vocês consomem antes de uma partida importante? Tenho dúvidas sobre o tempo ideal para a última refeição e quais carboidratos funcionam melhor para manter a energia durante o jogo inteiro...'
    },
  ];

  // Mock data para comunidades populares
  const comunidades = [
    { id: 1, nome: 'Atletas de Rua', membros: 4328, topicos: 876, icone: <Award size={18} /> },
    { id: 2, nome: 'Futebol Amador Brasil', membros: 8765, topicos: 1432, icone: <Star size={18} /> },
    { id: 3, nome: 'Basquete para Todos', membros: 2513, topicos: 643, icone: <Book size={18} /> },
    { id: 4, nome: 'Corredores SP', membros: 5127, topicos: 921, icone: <Calendar size={18} /> },
  ];

  return (
    <Layout>
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
          <div className="w-full md:w-2/3">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold">Fórum & Comunidade</h1>
              <Button>Novo Tópico</Button>
            </div>

            <div className="mb-6">
              <Input 
                type="search" 
                placeholder="Pesquisar no fórum..." 
                className="w-full"
              />
            </div>

            <Tabs defaultValue="populares" className="mb-8">
              <TabsList className="mb-4">
                <TabsTrigger value="populares" onClick={() => setActiveTab('populares')}>Populares</TabsTrigger>
                <TabsTrigger value="recentes" onClick={() => setActiveTab('recentes')}>Recentes</TabsTrigger>
                <TabsTrigger value="semRespostas" onClick={() => setActiveTab('semRespostas')}>Sem Respostas</TabsTrigger>
                <TabsTrigger value="meusTópicos" onClick={() => setActiveTab('meusTópicos')}>Meus Tópicos</TabsTrigger>
              </TabsList>

              <TabsContent value="populares" className="space-y-4">
                {topicos.map((topico) => (
                  <Card key={topico.id} className="hover:bg-muted/50 transition-colors">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between">
                        <div className="flex space-x-2 items-center">
                          <span className="text-xs font-medium px-2.5 py-0.5 rounded bg-primary/10 text-primary">
                            {topico.categoria}
                          </span>
                          <span className="text-xs text-muted-foreground">{topico.dataCriacao}</span>
                        </div>
                      </div>
                      <CardTitle className="text-lg cursor-pointer hover:text-primary transition-colors">
                        {topico.titulo}
                      </CardTitle>
                      <CardDescription className="line-clamp-2 mt-2">
                        {topico.conteudo}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className="flex items-center space-x-2">
                        <Avatar className="h-8 w-8">
                          <img src={topico.autor.avatar} alt={topico.autor.nome} />
                        </Avatar>
                        <span className="text-sm font-medium">{topico.autor.nome}</span>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between pt-2 text-muted-foreground text-sm">
                      <div className="flex space-x-4">
                        <span className="flex items-center space-x-1"><Eye size={16} /><span>{topico.visualizacoes}</span></span>
                        <span className="flex items-center space-x-1"><MessageSquare size={16} /><span>{topico.comentarios}</span></span>
                        <span className="flex items-center space-x-1"><ThumbsUp size={16} /><span>{topico.curtidas}</span></span>
                      </div>
                      <Button variant="ghost" size="sm">Ler mais</Button>
                    </CardFooter>
                  </Card>
                ))}
              </TabsContent>

              {/* Outros tabs teriam conteúdo semelhante mas não precisamos implementar todos */}
              <TabsContent value="recentes" className="space-y-4">
                <p className="text-muted-foreground text-center py-8">
                  Carregando tópicos recentes...
                </p>
              </TabsContent>
              
              <TabsContent value="semRespostas" className="space-y-4">
                <p className="text-muted-foreground text-center py-8">
                  Carregando tópicos sem respostas...
                </p>
              </TabsContent>
              
              <TabsContent value="meusTópicos" className="space-y-4">
                <p className="text-muted-foreground text-center py-8">
                  Você precisa fazer login para ver seus tópicos
                </p>
              </TabsContent>
            </Tabs>
          </div>

          <div className="w-full md:w-1/3 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Estatísticas da Comunidade</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Usuários</span>
                    <span className="font-medium">24,897</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tópicos</span>
                    <span className="font-medium">14,582</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Posts</span>
                    <span className="font-medium">89,432</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Ativos hoje</span>
                    <span className="font-medium">432</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Comunidades Populares</CardTitle>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="space-y-4">
                  {comunidades.map((comunidade) => (
                    <div key={comunidade.id} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center justify-center h-9 w-9 rounded-full bg-primary/10 text-primary">
                          {comunidade.icone}
                        </div>
                        <div>
                          <h4 className="text-sm font-medium">{comunidade.nome}</h4>
                          <p className="text-xs text-muted-foreground">{comunidade.topicos} tópicos</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="h-8">
                        <UserPlus size={16} className="mr-1" />
                        <span>Seguir</span>
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Ver Todas</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Discussões Recentes</CardTitle>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="space-y-4">
                  <div className="border-l-2 border-primary pl-3 py-1">
                    <h4 className="text-sm font-medium hover:text-primary cursor-pointer">Novo calendário de torneios regionais 2025</h4>
                    <p className="text-xs text-muted-foreground">14 comentários • 2 horas atrás</p>
                  </div>
                  <div className="border-l-2 border-muted pl-3 py-1">
                    <h4 className="text-sm font-medium hover:text-primary cursor-pointer">Dicas para recuperação pós-treino intenso</h4>
                    <p className="text-xs text-muted-foreground">32 comentários • 5 horas atrás</p>
                  </div>
                  <div className="border-l-2 border-muted pl-3 py-1">
                    <h4 className="text-sm font-medium hover:text-primary cursor-pointer">Equipamentos para treino em casa - recomendações</h4>
                    <p className="text-xs text-muted-foreground">8 comentários • 12 horas atrás</p>
                  </div>
                  <div className="border-l-2 border-muted pl-3 py-1">
                    <h4 className="text-sm font-medium hover:text-primary cursor-pointer">Análise tática do último campeonato</h4>
                    <p className="text-xs text-muted-foreground">47 comentários • 1 dia atrás</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full text-muted-foreground">Ver Mais</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Comunidade;
