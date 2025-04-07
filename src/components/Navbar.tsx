
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { 
  Home, 
  Calendar, 
  Activity, 
  Newspaper, 
  Award, 
  Users, 
  User, 
  Search,
  Menu,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

type NavLinkProps = {
  to: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
};

const NavLink = ({ to, icon, children, isActive, onClick }: NavLinkProps) => (
  <Link 
    to={to} 
    className={cn("nav-link", isActive && "active")}
    onClick={onClick}
  >
    {icon}
    <span>{children}</span>
  </Link>
);

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  // In a real app, this would come from the router
  const currentPath = window.location.pathname;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
          <div className="rounded-full bg-primary p-1.5">
            <div className="h-5 w-5 rounded-full border-2 border-white"></div>
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">Esporte360</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-4 lg:space-x-6">
          <NavLink to="/" icon={<Home size={18} />} isActive={currentPath === "/"}>
            Home
          </NavLink>
          <NavLink to="/agenda" icon={<Calendar size={18} />} isActive={currentPath === "/agenda"}>
            Agenda
          </NavLink>
          <NavLink to="/dashboard" icon={<Activity size={18} />} isActive={currentPath === "/dashboard"}>
            Dashboard
          </NavLink>
          <NavLink to="/noticias" icon={<Newspaper size={18} />} isActive={currentPath === "/noticias"}>
            Notícias
          </NavLink>
          <NavLink to="/gamificacao" icon={<Award size={18} />} isActive={currentPath === "/gamificacao"}>
            Gamificação
          </NavLink>
          <NavLink to="/comunidade" icon={<Users size={18} />} isActive={currentPath === "/comunidade"}>
            Comunidade
          </NavLink>
          <NavLink to="/perfil" icon={<User size={18} />} isActive={currentPath === "/perfil"}>
            Conta
          </NavLink>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex md:items-center md:space-x-2">
          <Button variant="ghost" size="icon" onClick={toggleSearch} aria-label="Buscar">
            <Search size={20} />
          </Button>
          <Button className="ml-2">Entrar</Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-2 md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleSearch} aria-label="Buscar">
            <Search size={20} />
          </Button>
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Menu">
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      {isSearchOpen && (
        <div className="border-t p-2 md:hidden">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar eventos, notícias, perfis..."
              className="w-full pl-8"
            />
          </div>
        </div>
      )}

      {/* Desktop Search Bar */}
      {isSearchOpen && (
        <div className="hidden border-t p-2 md:block">
          <div className="container">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar eventos, notícias, perfis..."
                className="w-full pl-8"
              />
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="border-t md:hidden">
          <div className="container space-y-1 py-3">
            <NavLink to="/" icon={<Home size={18} />} isActive={currentPath === "/"} onClick={closeMenu}>
              Home
            </NavLink>
            <NavLink to="/agenda" icon={<Calendar size={18} />} isActive={currentPath === "/agenda"} onClick={closeMenu}>
              Agenda
            </NavLink>
            <NavLink to="/dashboard" icon={<Activity size={18} />} isActive={currentPath === "/dashboard"} onClick={closeMenu}>
              Dashboard
            </NavLink>
            <NavLink to="/noticias" icon={<Newspaper size={18} />} isActive={currentPath === "/noticias"} onClick={closeMenu}>
              Notícias
            </NavLink>
            <NavLink to="/gamificacao" icon={<Award size={18} />} isActive={currentPath === "/gamificacao"} onClick={closeMenu}>
              Gamificação
            </NavLink>
            <NavLink to="/comunidade" icon={<Users size={18} />} isActive={currentPath === "/comunidade"} onClick={closeMenu}>
              Comunidade
            </NavLink>
            <NavLink to="/perfil" icon={<User size={18} />} isActive={currentPath === "/perfil"} onClick={closeMenu}>
              Conta
            </NavLink>
            <div className="pt-2">
              <Button className="w-full">Entrar</Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};
