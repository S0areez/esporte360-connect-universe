
import React, { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Bell, Edit, LogOut, Mail, Shield, Trophy, User, UserRound, Settings, Calendar, Activity } from 'lucide-react';

const Perfil = () => {
  const [isEditing, setIsEditing] = useState(false);
  
  // Dados fictícios do usuário
  const userData = {
    name: "Carlos Silva",
    username: "carlossilva10",
    email: "carlos.silva@email.com",
    position: "Atacante",
    team: "FC Estrelas",
    memberSince: "Janeiro 2023",
    bio: "Atacante com experiência em competições regionais. Apaixonado por futebol desde criança e sempre buscando evoluir.",
    stats: {
      events: 28,
      badges: 12,
      points: 1450,
      followers: 134,
      following: 89
    },
    achievements: [
      { id: 1, title: "Goleador do Mês", date: "Março 2024", icon: <Trophy size={16} /> },
      { id: 2, title: "100% de Presença", date: "Fevereiro 2024", icon: <Calendar size={16} /> },
      { id: 3, title: "Estrela em Ascensão", date: "Dezembro 2023", icon: <Activity size={16} /> }
    ],
    activities: [
      { id: 1, type: "evento", title: "Treino Tático", date: "Ontem às 18:30" },
      { id: 2, type: "conquista", title: "Conquistou emblema de Resistência", date: "3 dias atrás" },
      { id: 3, type: "jogo", title: "Partida vs. FC Unidos", date: "Semana passada" },
      { id: 4, type: "evento", title: "Workshop de Nutrição Esportiva", date: "2 semanas atrás" }
    ],
    notificationSettings: {
      email: true,
      app: true,
      events: true,
      messages: true,
      achievements: true,
      teamUpdates: false
    }
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <Layout>
      <div className="container py-8">
        <div className="flex flex-col space-y-8">
          {/* Header do Perfil */}
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <Avatar className="w-24 h-24 border-4 border-primary/20">
              <img 
                src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952" 
                alt="Foto do perfil" 
                className="aspect-square h-full w-full"
              />
            </Avatar>
            
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-bold">{userData.name}</h1>
                  <p className="text-muted-foreground flex items-center gap-1">
                    @{userData.username} · <Badge variant="outline">{userData.position}</Badge>
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {userData.team} · Membro desde {userData.memberSince}
                  </p>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={handleEdit}>
                    <Edit size={16} className="mr-2" /> Editar Perfil
                  </Button>
                  <Button variant="default" size="sm">
                    Ver Dashboard
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Bio */}
          <Card>
            <CardContent className="pt-6">
              <p>{userData.bio}</p>
            </CardContent>
          </Card>

          {/* Estatísticas */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <Card>
              <CardContent className="p-4 text-center">
                <p className="text-3xl font-bold">{userData.stats.events}</p>
                <p className="text-sm text-muted-foreground">Eventos</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <p className="text-3xl font-bold">{userData.stats.badges}</p>
                <p className="text-sm text-muted-foreground">Emblemas</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <p className="text-3xl font-bold">{userData.stats.points}</p>
                <p className="text-sm text-muted-foreground">Pontos</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <p className="text-3xl font-bold">{userData.stats.followers}</p>
                <p className="text-sm text-muted-foreground">Seguidores</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <p className="text-3xl font-bold">{userData.stats.following}</p>
                <p className="text-sm text-muted-foreground">Seguindo</p>
              </CardContent>
            </Card>
          </div>

          {/* Tabs de Conteúdo */}
          <Tabs defaultValue="atividades" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="atividades">Atividades</TabsTrigger>
              <TabsTrigger value="conquistas">Conquistas</TabsTrigger>
              <TabsTrigger value="configuracoes">Configurações</TabsTrigger>
              <TabsTrigger value="seguranca">Segurança</TabsTrigger>
            </TabsList>

            {/* Tab de Atividades */}
            <TabsContent value="atividades" className="space-y-4 mt-6">
              <h3 className="text-lg font-medium">Atividades Recentes</h3>
              {userData.activities.map((activity) => (
                <Card key={activity.id}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">{activity.title}</p>
                        <p className="text-sm text-muted-foreground">{activity.date}</p>
                      </div>
                      <Badge variant={activity.type === 'conquista' ? 'default' : 'secondary'}>
                        {activity.type}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            {/* Tab de Conquistas */}
            <TabsContent value="conquistas" className="space-y-4 mt-6">
              <h3 className="text-lg font-medium">Emblemas e Conquistas</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {userData.achievements.map((achievement) => (
                  <Card key={achievement.id}>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        {achievement.icon} {achievement.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Conquistado em {achievement.date}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Tab de Configurações */}
            <TabsContent value="configuracoes" className="space-y-6 mt-6">
              <div>
                <h3 className="text-lg font-medium mb-4">Informações Pessoais</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Nome Completo</label>
                    <Input defaultValue={userData.name} readOnly={!isEditing} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Nome de Usuário</label>
                    <Input defaultValue={userData.username} readOnly={!isEditing} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input defaultValue={userData.email} readOnly={!isEditing} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Posição</label>
                    <Input defaultValue={userData.position} readOnly={!isEditing} />
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-medium mb-4">Notificações</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="notifications-email" checked={userData.notificationSettings.email} />
                    <label htmlFor="notifications-email" className="text-sm font-medium">
                      Receber notificações por email
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="notifications-app" checked={userData.notificationSettings.app} />
                    <label htmlFor="notifications-app" className="text-sm font-medium">
                      Receber notificações no aplicativo
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="notifications-events" checked={userData.notificationSettings.events} />
                    <label htmlFor="notifications-events" className="text-sm font-medium">
                      Eventos e lembrete de treinos
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="notifications-messages" checked={userData.notificationSettings.messages} />
                    <label htmlFor="notifications-messages" className="text-sm font-medium">
                      Mensagens e comentários
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button>Salvar Alterações</Button>
              </div>
            </TabsContent>

            {/* Tab de Segurança */}
            <TabsContent value="seguranca" className="space-y-6 mt-6">
              <div>
                <h3 className="text-lg font-medium mb-4">Alterar Senha</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Senha Atual</label>
                    <Input type="password" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Nova Senha</label>
                    <Input type="password" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Confirmar Nova Senha</label>
                    <Input type="password" />
                  </div>
                </div>
                <Button className="mt-4">Atualizar Senha</Button>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-medium mb-4">Conta</h3>
                <div className="space-y-4">
                  <Button variant="outline" className="w-full sm:w-auto">
                    <Shield size={16} className="mr-2" /> Verificação em Duas Etapas
                  </Button>
                  <Button variant="outline" className="w-full sm:w-auto">
                    <UserRound size={16} className="mr-2" /> Gerenciar Sessões Ativas
                  </Button>
                  <Button variant="destructive" className="w-full sm:w-auto">
                    <LogOut size={16} className="mr-2" /> Sair de Todos os Dispositivos
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Perfil;
