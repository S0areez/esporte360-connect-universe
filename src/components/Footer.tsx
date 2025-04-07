
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="rounded-full bg-primary p-1.5">
                <div className="h-4 w-4 rounded-full border-2 border-white"></div>
              </div>
              <span className="text-lg font-bold">Esporte360</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Conectando atletas, técnicos, clubes e torcedores em uma experiência esportiva completa e interativa.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Links - Column 1 */}
          <div>
            <h3 className="mb-4 text-sm font-medium">Recursos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/agenda" className="text-muted-foreground hover:text-primary">Agenda</Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-muted-foreground hover:text-primary">Dashboard</Link>
              </li>
              <li>
                <Link to="/noticias" className="text-muted-foreground hover:text-primary">Notícias</Link>
              </li>
              <li>
                <Link to="/gamificacao" className="text-muted-foreground hover:text-primary">Gamificação</Link>
              </li>
              <li>
                <Link to="/comunidade" className="text-muted-foreground hover:text-primary">Comunidade</Link>
              </li>
            </ul>
          </div>

          {/* Links - Column 2 */}
          <div>
            <h3 className="mb-4 text-sm font-medium">Sobre</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">Sobre Nós</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">Termos de Uso</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">Política de Privacidade</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">Ajuda & Suporte</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">Trabalhe Conosco</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-medium">Contato</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <Mail size={14} className="text-muted-foreground" />
                <a href="mailto:contato@esporte360.com" className="text-muted-foreground hover:text-primary">
                  contato@esporte360.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={14} className="text-muted-foreground" />
                <a href="tel:+551199999999" className="text-muted-foreground hover:text-primary">
                  +55 11 9999-9999
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t pt-6">
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Esporte360. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
