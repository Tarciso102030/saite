import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  Computer, 
  Shield, 
  Zap, 
  Users, 
  CheckCircle, 
  Phone, 
  Mail, 
  MapPin,
  ArrowRight,
  Monitor,
  Database,
  Cloud,
  Settings,
  Facebook,
  Instagram,
  Server,
  Cpu,
  HardDrive,
  Wifi,
  Lock,
  Globe,
  Smartphone,
  Tablet,
  Laptop
} from 'lucide-react';
import ContactForm from './components/ContactForm';
import AnimatedSection from './components/AnimatedSection';
import ParallaxBackground from './components/ParallaxBackground';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const openWhatsApp = () => {
    const whatsappUrl = 'https://api.whatsapp.com/send?phone=5551996668646&text=Gostaria de saber mais sobre os serviços AguiarT.I';
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* WhatsApp Floating Button */}
      <button
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        aria-label="Falar no WhatsApp"
      >
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
          alt="WhatsApp" 
          className="h-6 w-6"
        />
      </button>

      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <img 
                src="/LOGO copy copy copy copy copy copy copy.png" 
                alt="AguiarT.I Logo" 
                className="h-16 w-auto"
              />
              <div className="flex items-center space-x-2">
                <a
                  href="https://www.facebook.com/aguiartiad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-blue-400 hover:text-blue-300 hover:bg-gray-800 rounded-full transition-all duration-200"
                  aria-label="Facebook da AguiarT.I"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/aguiar_ti/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-pink-400 hover:text-pink-300 hover:bg-gray-800 rounded-full transition-all duration-200"
                  aria-label="Instagram da AguiarT.I"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                Serviços
              </button>
              <a
                href="/support"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                Suporte Técnico
              </a>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                Contato
              </button>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md text-gray-300 hover:text-blue-400 hover:bg-gray-800"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden pb-4 border-t border-gray-700 mt-4 pt-4">
              <div className="flex flex-col space-y-2">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-left py-2 px-3 text-gray-300 hover:text-blue-400 hover:bg-gray-800 rounded-md transition-colors duration-200"
                >
                  Início
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-left py-2 px-3 text-gray-300 hover:text-blue-400 hover:bg-gray-800 rounded-md transition-colors duration-200"
                >
                  Serviços
                </button>
                <a
                  href="/support"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-left py-2 px-3 text-gray-300 hover:text-blue-400 hover:bg-gray-800 rounded-md transition-colors duration-200 block"
                >
                  Suporte Técnico
                </a>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-left py-2 px-3 text-gray-300 hover:text-blue-400 hover:bg-gray-800 rounded-md transition-colors duration-200"
                >
                  Sobre
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-left py-2 px-3 text-gray-300 hover:text-blue-400 hover:bg-gray-800 rounded-md transition-colors duration-200"
                >
                  Contato
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative pt-20 pb-16 gradient-bg text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 tech-pattern opacity-30"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl floating-animation"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-500/10 rounded-full blur-xl floating-animation" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center relative z-10">
            <AnimatedSection animation="fadeInUp">
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-lg opacity-30 pulse-glow"></div>
                  <Server className="relative h-20 w-20 text-blue-200 mx-auto" />
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeInUp" delay={1}>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight hero-text-glow">
              Transforme Seu Negócio com
              <span className="block bg-gradient-to-r from-blue-200 via-white to-purple-200 bg-clip-text text-transparent">
                Tecnologia Inteligente
              </span>
            </h1>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeInUp" delay={2}>
              <p className="text-xl sm:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Especialistas em automação comercial e serviços de TI. Oferecemos soluções completas para modernizar e otimizar seus processos empresariais.
            </p>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeInUp" delay={3}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => scrollToSection('services')}
                className="btn-primary flex items-center justify-center gap-3 group"
              >
                Nossos Serviços
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={openWhatsApp}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl flex items-center justify-center gap-3 relative overflow-hidden group"
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                  alt="WhatsApp" 
                  className="h-6 w-6 group-hover:scale-110 transition-transform"
                />
                Falar no WhatsApp
              </button>
            </div>
            </AnimatedSection>
            
            {/* Tech Icons Floating */}
            <div className="absolute top-1/4 left-10 opacity-20">
              <Cpu className="h-8 w-8 text-blue-300 floating-animation" />
            </div>
            <div className="absolute top-1/3 right-16 opacity-20">
              <Database className="h-10 w-10 text-purple-300 floating-animation" style={{ animationDelay: '1s' }} />
            </div>
            <div className="absolute bottom-1/4 left-20 opacity-20">
              <Cloud className="h-6 w-6 text-blue-200 floating-animation" style={{ animationDelay: '3s' }} />
            </div>
            <div className="absolute bottom-1/3 right-10 opacity-20">
              <Shield className="h-8 w-8 text-green-300 floating-animation" style={{ animationDelay: '2s' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
        <div className="absolute inset-0 server-room-bg opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-white/95"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-20">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-20"></div>
                <Settings className="relative h-16 w-16 text-blue-600 mx-auto" />
              </div>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6">
              Nossos Serviços
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Oferecemos soluções completas em tecnologia para impulsionar seu negócio
            </p>
            <div className="section-divider"></div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Automação Comercial */}
            <AnimatedSection animation="fadeInUp" delay={1}>
              <div className="modern-card p-8 rounded-2xl card-hover group">
              <div className="relative w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <Zap className="relative h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-blue-700 transition-colors">Automação Comercial</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Sistemas completos para PDV, controle de estoque, emissão de NFCe/NFe e gestão financeira.
              </p>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center gap-3 group-hover:translate-x-2 transition-transform duration-300">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  Sistema PDV integrado
                </li>
                <li className="flex items-center gap-3 group-hover:translate-x-2 transition-transform duration-300" style={{ transitionDelay: '50ms' }}>
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  Controle de estoque
                </li>
                <li className="flex items-center gap-3 group-hover:translate-x-2 transition-transform duration-300" style={{ transitionDelay: '100ms' }}>
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  Emissão de notas fiscais
                </li>
                <li className="flex items-start gap-3 group-hover:translate-x-2 transition-transform duration-300" style={{ transitionDelay: '150ms' }}>
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  Venda e Manutenção de Balanças (para Checkouts e Balcão)
                </li>
              </ul>
            </div>
            </AnimatedSection>

            {/* Suporte Técnico */}
            <AnimatedSection animation="fadeInUp" delay={2}>
              <div className="modern-card p-8 rounded-2xl card-hover group">
              <div className="relative w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <Shield className="relative h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-green-700 transition-colors">Suporte Técnico</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Manutenção preventiva e corretiva de computadores, redes e sistemas empresariais. Infraestrutura completa em segurança e alta disponibilidade para o seu sistema, Implantação completa em Redes e Servidores.
              </p>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center gap-3 group-hover:translate-x-2 transition-transform duration-300">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  Manutenção de sistemas e hardware
                </li>
                <li className="flex items-start gap-3 group-hover:translate-x-2 transition-transform duration-300" style={{ transitionDelay: '50ms' }}>
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                 Implantação e Configurações de redes de Computadores
              </li>
                <li className="flex items-start gap-3 group-hover:translate-x-2 transition-transform duration-300" style={{ transitionDelay: '100ms' }}>
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  Monitoramento de Redes, Desktop e Servidores 
              </li>
                <li className="flex items-start gap-3 group-hover:translate-x-2 transition-transform duration-300" style={{ transitionDelay: '150ms' }}>
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                   implantação de switches e roteadores com as melhores marcas do mercado
              </li>
                <li className="flex items-start gap-3 group-hover:translate-x-2 transition-transform duration-300" style={{ transitionDelay: '200ms' }}>
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                   Garantia, segurança e qualidade para a sua rede de computadores e servidores
              </li>
                <li className="flex items-start gap-3 group-hover:translate-x-2 transition-transform duration-300" style={{ transitionDelay: '250ms' }}>
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    Proteja seus ativos com soluções confiáveis e eficiente
              </li>
                <li className="flex items-center gap-3 group-hover:translate-x-2 transition-transform duration-300" style={{ transitionDelay: '300ms' }}>
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  Suporte remoto 24/7
                </li>
              </ul>
            </div>
            </AnimatedSection>

            {/* Infraestrutura */}
            <AnimatedSection animation="fadeInUp" delay={3}>
              <div className="modern-card p-8 rounded-2xl card-hover group">
              <div className="relative w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <Database className="relative h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-purple-700 transition-colors">Infraestrutura de TI</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Planejamento e implementação de infraestrutura tecnológica robusta e segura.
              </p>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center gap-3 group-hover:translate-x-2 transition-transform duration-300">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  Servidores e storage
                </li>
                <li className="flex items-center gap-3 group-hover:translate-x-2 transition-transform duration-300" style={{ transitionDelay: '50ms' }}>
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  Backup e segurança
                </li>
                 <li className="flex items-start gap-3 group-hover:translate-x-2 transition-transform duration-300" style={{ transitionDelay: '100ms' }}>
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  Venda de Notebook, Computadores e Servidores
                 </li>
                <li className="flex items-start gap-3 group-hover:translate-x-2 transition-transform duration-300" style={{ transitionDelay: '150ms' }}>
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  Venda e implantação de switches e roteadores com as melhores marcas do mercado 
                  </li>
                <li className="flex items-start gap-3 group-hover:translate-x-2 transition-transform duration-300" style={{ transitionDelay: '200ms' }}>
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                   Consulte-nos para soluções personalizadas que atendam às suas necessidades 
                  </li>
                <li className="flex items-center gap-3 group-hover:translate-x-2 transition-transform duration-300" style={{ transitionDelay: '250ms' }}>
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  Monitoramento 24/7
                </li>                
              </ul>
            </div>
            </AnimatedSection>

            {/* Consultoria */}
            <AnimatedSection animation="fadeInUp" delay={4}>
              <div className="modern-card p-8 rounded-2xl card-hover group">
              <div className="relative w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <Users className="relative h-10 w-10 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-orange-700 transition-colors">Consultoria em TI</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Análise e otimização de processos tecnológicos para maximizar eficiência empresarial.
              </p>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center gap-3 group-hover:translate-x-2 transition-transform duration-300">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  Análise de processos
                </li>
                <li className="flex items-center gap-3 group-hover:translate-x-2 transition-transform duration-300" style={{ transitionDelay: '50ms' }}>
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  Planejamento estratégico
                </li>
                <li className="flex items-center gap-3 group-hover:translate-x-2 transition-transform duration-300" style={{ transitionDelay: '100ms' }}>
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  Treinamento de equipes
                </li>
              </ul>
            </div>
            </AnimatedSection>

            {/* Cloud Computing */}
            <AnimatedSection animation="fadeInUp" delay={5}>
              <div className="modern-card p-8 rounded-2xl card-hover group">
              <div className="relative w-20 h-20 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <Cloud className="relative h-10 w-10 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-indigo-700 transition-colors">Soluções em Nuvem</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Migração e gerenciamento de sistemas em nuvem para maior flexibilidade e economia.
              </p>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center gap-3 group-hover:translate-x-2 transition-transform duration-300">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  Migração para nuvem
                </li>
                <li className="flex items-center gap-3 group-hover:translate-x-2 transition-transform duration-300" style={{ transitionDelay: '50ms' }}>
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  Backup em nuvem
                </li>
                <li className="flex items-center gap-3 group-hover:translate-x-2 transition-transform duration-300" style={{ transitionDelay: '100ms' }}>
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  Acesso remoto
                </li>
              </ul>
            </div>
            </AnimatedSection>

            {/* Sistemas Personalizados */}
            <AnimatedSection animation="fadeInUp" delay={6}>
              <div className="modern-card p-8 rounded-2xl card-hover group">
              <div className="relative w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <Monitor className="relative h-10 w-10 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-red-700 transition-colors">Sistemas Personalizados</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Desenvolvimento de software sob medida para atender necessidades específicas do seu negócio.
              </p>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center gap-3 group-hover:translate-x-2 transition-transform duration-300">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  Desenvolvimento web
                </li>
                <li className="flex items-center gap-3 group-hover:translate-x-2 transition-transform duration-300" style={{ transitionDelay: '50ms' }}>
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  Aplicações desktop
                </li>
                <li className="flex items-center gap-3 group-hover:translate-x-2 transition-transform duration-300" style={{ transitionDelay: '100ms' }}>
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  Integração de sistemas
                </li>
              </ul>
            </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-24 bg-white overflow-hidden">
        <div className="absolute inset-0 data-center-bg opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/95"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <AnimatedSection animation="fadeInLeft">
              <div className="relative z-10">
              <div className="flex items-center mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-20"></div>
                  <Computer className="relative h-12 w-12 text-blue-600 mr-4" />
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                Sobre a AguiarT.I
              </h2>
              </div>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Com anos de experiência no mercado de tecnologia, a AguiarT.I se consolidou como referência em automação comercial e serviços de TI. Nossa missão é transformar negócios através de soluções tecnológicas inovadoras e eficientes.
              </p>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Trabalhamos com empresas de todos os portes, desde pequenos comércios até grandes corporações, oferecendo soluções personalizadas que atendem às necessidades específicas de cada cliente.
              </p>
              
              <div className="grid grid-cols-2 gap-10">
                <div className="text-center group">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">10+</div>
                  <div className="text-gray-600 font-medium">Anos de Experiência</div>
                </div>
                <div className="text-center group">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">500+</div>
                  <div className="text-gray-600 font-medium">Clientes Atendidos</div>
                </div>
                <div className="text-center group">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">24/7</div>
                  <div className="text-gray-600 font-medium">Suporte Disponível</div>
                </div>
                <div className="text-center group">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">100%</div>
                  <div className="text-gray-600 font-medium">Satisfação Cliente</div>
                </div>
              </div>
            </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeInRight">
              <div className="relative z-10">
              <div className="modern-card bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 rounded-3xl p-10 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-400/20 rounded-full blur-xl"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-8">
                    <div className="relative">
                      <div className="absolute inset-0 bg-white/20 rounded-2xl blur-lg"></div>
                      <Monitor className="relative h-16 w-16 text-blue-200" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold mb-8">Nossa Expertise</h3>
                <ul className="space-y-5">
                  <li className="flex items-center gap-4 group">
                    <CheckCircle className="h-6 w-6 text-blue-200 group-hover:text-white transition-colors" />
                    <span>Automação Comercial Completa</span>
                  </li>
                  <li className="flex items-center gap-4 group">
                    <CheckCircle className="h-6 w-6 text-blue-200 group-hover:text-white transition-colors" />
                    <span>Infraestrutura de TI Robusta</span>
                  </li>
                  <li className="flex items-center gap-4 group">
                    <CheckCircle className="h-6 w-6 text-blue-200 group-hover:text-white transition-colors" />
                    <span>Suporte Técnico Especializado</span>
                  </li>
                  <li className="flex items-center gap-4 group">
                    <CheckCircle className="h-6 w-6 text-blue-200 group-hover:text-white transition-colors" />
                    <span>Soluções Personalizadas</span>
                  </li>
                </ul>
                </div>
              </div>
            </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 overflow-hidden">
        <div className="absolute inset-0 network-bg opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-white/95"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-20">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-20"></div>
                <Mail className="relative h-16 w-16 text-blue-600 mx-auto" />
              </div>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6">
              Entre em Contato
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Pronto para transformar seu negócio? Fale conosco e descubra como podemos ajudar.
            </p>
            <div className="section-divider"></div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Info */}
            <AnimatedSection animation="fadeInLeft">
              <div className="relative z-10">
              <h3 className="text-3xl font-bold text-gray-900 mb-10">Informações de Contato</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6 p-6 modern-card rounded-2xl card-hover group">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">Telefone</h4>
                    <a 
                      href="tel:+5551996668646" 
                      className="text-gray-600 hover:text-blue-600 transition-colors text-lg"
                    >
                      (51) 99666-8646
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-6 p-6 modern-card rounded-2xl card-hover group">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                      alt="WhatsApp" 
                      className="h-6 w-6"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">WhatsApp</h4>
                    <button 
                      onClick={openWhatsApp}
                      className="text-gray-600 hover:text-green-600 transition-colors text-lg"
                    >
                      (51) 99666-8646
                    </button>
                  </div>
                </div>
                
                <div className="flex items-start gap-6 p-6 modern-card rounded-2xl card-hover group">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">E-mail</h4>
                    <a 
                      href="mailto:tarciso@aguiarti.com.br" 
                      className="text-gray-600 hover:text-blue-600 transition-colors block text-lg"
                    >
                      tarciso@aguiarti.com.br
                    </a>
                    <a 
                      href="mailto:comercial@aguiarti.com.br" 
                      className="text-gray-600 hover:text-blue-600 transition-colors block text-lg"
                    >
                      comercial@aguiarti.com.br
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-6 p-6 modern-card rounded-2xl card-hover group">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-100 to-red-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MapPin className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">Endereço</h4>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      Rua Cantegril, 906<br />
                      Centro - Viamão, RS<br />
                      CEP: 94440-000
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-blue-100">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-blue-600 mr-3" />
                  <h4 className="font-bold text-gray-900 text-lg">Horário de Atendimento</h4>
                </div>
                <div className="space-y-2 text-gray-600">
                  <p className="text-lg">Segunda a Sexta: 8h às 18h</p>
                  <p className="text-lg">Sábado: 8h às 12h</p>
                  <p className="text-lg font-semibold text-green-600">Suporte 24/7 para emergências</p>
                </div>
              </div>

              <div className="mt-8">
                <button
                  onClick={openWhatsApp}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-6 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl flex items-center justify-center gap-4 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                    alt="WhatsApp" 
                    className="h-7 w-7 group-hover:scale-110 transition-transform relative z-10"
                  />
                  <span className="relative z-10 text-xl">Falar no WhatsApp Agora</span>
                </button>
              </div>
            </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection animation="fadeInRight">
              <ContactForm />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-2 relative z-10">
              <div className="flex items-center space-x-6 mb-8">
                <img 
                  src="/LOGO copy copy copy copy copy copy copy.png" 
                  alt="AguiarT.I Logo" 
                  className="h-16 w-auto"
                />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Redes Sociais
              </h3>
              <div className="flex items-center space-x-4 mb-8">
                  <a
                    href="https://www.facebook.com/aguiartiad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-4 bg-blue-600/20 hover:bg-blue-600/40 rounded-2xl transition-all duration-300 transform hover:scale-110 hover:rotate-3"
                    aria-label="Facebook da AguiarT.I"
                  >
                    <Facebook className="h-7 w-7 text-blue-400 group-hover:text-blue-300" />
                  </a>
                  <a
                    href="https://www.instagram.com/aguiar_ti/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-4 bg-pink-600/20 hover:bg-pink-600/40 rounded-2xl transition-all duration-300 transform hover:scale-110 hover:-rotate-3"
                    aria-label="Instagram da AguiarT.I"
                  >
                    <Instagram className="h-7 w-7 text-pink-400 group-hover:text-pink-300" />
                  </a>
              </div>
              
              <p className="text-gray-300 mb-8 max-w-md text-lg leading-relaxed">
                Transformando negócios através de soluções tecnológicas inovadoras. Automação comercial e serviços de TI de qualidade.
              </p>
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-4 group">
                  <Phone className="h-6 w-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
                  <a 
                    href="tel:+5551996668646" 
                    className="text-gray-300 hover:text-white transition-colors text-lg"
                  >
                    (51) 99666-8646
                  </a>
                </div>
                <div className="flex items-center space-x-4 group">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                    alt="WhatsApp" 
                    className="h-6 w-6 group-hover:scale-110 transition-transform"
                  />
                  <button 
                    onClick={openWhatsApp}
                    className="text-gray-300 hover:text-green-400 transition-colors text-lg"
                  >
                    WhatsApp
                  </button>
                </div>
              </div>
            </div>
            
            <div className="relative z-10">
              <h4 className="text-xl font-bold mb-6 text-white">Serviços</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="hover:text-white transition-colors cursor-pointer hover:translate-x-2 transition-transform duration-200">Automação Comercial</li>
                <li className="hover:text-white transition-colors cursor-pointer hover:translate-x-2 transition-transform duration-200">Suporte Técnico</li>
                <li className="hover:text-white transition-colors cursor-pointer hover:translate-x-2 transition-transform duration-200">Infraestrutura de TI</li>
                <li className="hover:text-white transition-colors cursor-pointer hover:translate-x-2 transition-transform duration-200">Consultoria</li>
              </ul>
            </div>
            
            <div className="relative z-10">
              <h4 className="text-xl font-bold mb-6 text-white">Contato</h4>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <a 
                    href="mailto:tarciso@aguiarti.com.br" 
                    className="hover:text-white transition-colors hover:translate-x-2 transition-transform duration-200 inline-block"
                  >
                    tarciso@aguiarti.com.br
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:comercial@aguiarti.com.br" 
                    className="hover:text-white transition-colors hover:translate-x-2 transition-transform duration-200 inline-block"
                  >
                    comercial@aguiarti.com.br
                  </a>
                </li>
                <li>
                  <a 
                    href="tel:+5551996668646" 
                    className="hover:text-white transition-colors hover:translate-x-2 transition-transform duration-200 inline-block"
                  >
                    (51) 99666-8646
                  </a>
                </li>
                <li className="text-gray-400">VIAMÃO, RS</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center relative z-10">
            <p className="text-gray-300 text-lg">
              © 2024 AguiarT.I. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;