
import React, { useState } from 'react';
import {
  Users,
  Target,
  TrendingUp,
  Award,
  Star,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ChevronRight,
  ClipboardList,
  UserPlus,
  Mic2,
  CheckCircle2,
  Linkedin,
  Instagram,
  MailIcon
} from 'lucide-react';
import psiImg from './assets/img/psi.jpeg';
import psi2Img from './assets/img/psi2.jpeg';

const Header = () => (
  <header className="sticky top-0 z-50 bg-white shadow-sm py-4 px-6 md:px-12 flex items-center justify-between">
    <div className="flex items-center gap-2">
      <div className="flex items-center">
        <span className="text-orange-primary">★</span>
        <span className="text-2xl font-bold text-slate-800 ml-1">escolher</span>
      </div>
      <span className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold mt-1 hidden sm:block">Consultoria de Carreiras</span>
    </div>
    <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
      <a href="#solucoes" className="hover:text-orange-primary transition-colors">Nossas Soluções</a>
      <a href="#sobre" className="hover:text-orange-primary transition-colors">Sobre</a>
      <a href="#depoimentos" className="hover:text-orange-primary transition-colors">Depoimentos</a>
    </nav>
    <button className="bg-orange-primary text-white px-6 py-2 rounded-full text-sm font-bold hover:opacity-90 transition-all">
      Fale Conosco
    </button>
  </header>
);

const Hero = () => (
  <section className="bg-navy-900 text-white py-20 px-6 md:px-12 overflow-hidden">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
          Escolhas estratégicas, <br />
          <span className="text-orange-primary">resultados consistentes</span>
        </h1>
        <p className="text-slate-300 text-lg mb-8 italic">
          Escolher Consultoria de Carreiras <br />
          <span className="text-sm">por Psi Alessandra Reis</span>
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="bg-orange-primary px-8 py-3 rounded-md font-bold flex items-center gap-2 hover:bg-[#e06b45] transition-colors">
            Solicitar Proposta <ChevronRight size={18} />
          </button>
          <button className="border border-white/30 px-8 py-3 rounded-md font-bold hover:bg-white/10 transition-colors">
            Conhecer os Serviços
          </button>
        </div>
      </div>

      <div className="relative">
        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-lg font-bold">Contratar errado custa caro.</h3>
            <div className="bg-orange-primary/20 text-orange-primary border border-orange-primary px-3 py-1 rounded text-xs font-bold">
              60% <span className="font-normal block text-[10px] text-white">Redução Turnover</span>
            </div>
          </div>
          <p className="text-slate-400 text-sm mb-6">Tempo, dinheiro, clima organizacional e produtividade</p>
          <ul className="space-y-4">
            {[
              "Alta rotatividade (turnover)",
              "Dificuldade em avaliar perfil comportamental",
              "Pressão por decisões rápidas",
              "Falta de profundidade no processo seletivo"
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/5 text-sm">
                <div className="w-2 h-2 rounded-full bg-orange-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const Solutions = () => (
  <section id="solucoes" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <span className="text-orange-primary font-bold text-xs uppercase tracking-widest">Nossas Soluções</span>
      <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mt-2">
        Soluções para <span className="text-orange-primary">sua Empresa</span>
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
      {[
        { title: "Recrutamento e Seleção por Competências", icon: <Users className="text-orange-primary" />, color: "bg-navy-900", textColor: "text-white" },
        { title: "Plano de Desenvolvimento - PDI", icon: <ClipboardList className="text-orange-primary" />, color: "bg-white", textColor: "text-slate-800" },
        { title: "Programa de Outplacement", icon: <UserPlus className="text-orange-primary" />, color: "bg-white", textColor: "text-slate-800" },
        { title: "Palestras", icon: <Mic2 className="text-orange-primary" />, color: "bg-white", textColor: "text-slate-800" },
      ].map((card, idx) => (
        <div key={idx} className={`${card.color} ${card.textColor} p-8 rounded-2xl border border-slate-100 shadow-sm transition-transform hover:-translate-y-1 duration-300 flex flex-col h-full`}>
          <div className="bg-slate-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
            {card.icon}
          </div>
          <h3 className="text-xl font-bold mb-4">{card.title}</h3>
          <p className={`text-sm ${idx === 0 ? 'text-slate-300' : 'text-slate-500'} mb-6`}>
            {idx === 0 ? "Um processo estruturado e comprovado que garante assertividade na seleção e reduz significativamente o turnover." : "Apoio estratégico focado em resultados consistentes para sua gestão de talentos."}
          </p>
          <div className="flex flex-wrap items-center gap-3 mt-auto">
            <a href="#" className="text-orange-primary text-sm font-bold whitespace-nowrap hover:underline max-w-[120px] w-full text-center">Saiba mais</a>
            <button className={`px-4 py-2 rounded-md font-semibold text-sm whitespace-nowrap max-w-[150px] w-full text-center ${idx === 0 ? 'bg-orange-primary text-white border border-orange-primary' : 'border border-slate-200 hover:bg-slate-50 transition-colors'}`}>Quero este serviço</button>
          </div>
        </div>
      ))}
    </div>

    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800">
        Soluções para <span className="text-orange-primary">Você</span>
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {[
        { title: "Recrutamento e Seleção por Competências", icon: <Users className="text-orange-primary" />, color: "bg-navy-900", textColor: "text-white" },
        { title: "Palestras", icon: <Mic2 className="text-orange-primary" />, color: "bg-white", textColor: "text-slate-800" },
      ].map((card, idx) => (
        <div key={idx} className={`${card.color} ${card.textColor} p-10 rounded-2xl border border-slate-100 shadow-sm flex flex-col h-full`}>
          <div className="bg-slate-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
            {card.icon}
          </div>
          <h3 className="text-xl font-bold mb-4">{card.title}</h3>
          <p className={`text-sm ${idx === 0 ? 'text-slate-300' : 'text-slate-500'} mb-6`}>
            Focado no seu crescimento profissional e posicionamento estratégico no mercado de trabalho.
          </p>
          <div className="flex items-center gap-6 mt-auto">
            <a href="#" className="text-orange-primary text-sm font-bold whitespace-nowrap hover:underline">Saiba mais</a>
            <button className={`px-4 py-2 rounded-md font-semibold text-sm whitespace-nowrap ${idx === 0 ? 'bg-orange-primary text-white border border-orange-primary' : 'border border-slate-200 hover:bg-slate-50 transition-colors'}`}>
              Quero este serviço
            </button>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const About = () => (
  <section id="sobre" className="bg-slate-50 py-24 px-6 md:px-12">
    <div className="max-w-7xl mx-auto text-center mb-20">
      <span className="text-orange-primary font-bold text-xs uppercase tracking-widest">Sobre nós</span>
      <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800 mt-4 leading-tight">
        Escolher não é apenas contratar, é <br />
        <span className="text-orange-primary">decidir com responsabilidade</span>
      </h2>
      <p className="max-w-4xl mx-auto text-slate-500 mt-8 text-lg">
        A Escolher nasce da experiência de Alessandra Reis de mais de 10 anos em Recrutamento e Seleção e em Orientação Profissional e Avaliação Psicológica, ampliando essa expertise para apoiar empresas em decisões críticas e Gestão de Pessoas.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
      {[
        { icon: <Award className="text-navy-900" />, title: "10+ Anos de Experiência", text: "Experiência comprovada em decisões críticas de pessoas." },
        { icon: <Users className="text-navy-900" />, title: "Equipe Especializada", text: "Especialistas em comportamento e performance profissional." },
        { icon: <Target className="text-navy-900" />, title: "Foco em Resultados", text: "Processos orientados à performance e retenção." },
        { icon: <TrendingUp className="text-navy-900" />, title: "Melhoria Contínua", text: "Aprimoramento constante baseado em dados e feedback dos clientes." },
      ].map((item, idx) => (
        <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-start">
          <div className="bg-slate-100 p-3 rounded-lg mb-6">
            {item.icon}
          </div>
          <h4 className="font-bold text-slate-800 mb-2">{item.title}</h4>
          <p className="text-slate-500 text-sm">{item.text}</p>
        </div>
      ))}
    </div>

    <div className="mt-24">
      <h3 className="text-center text-3xl font-extrabold text-slate-800 mb-16">Quem está por trás</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {[
          {
            name: "Alessandra Reis",
            role: "Psicóloga",
            img: psiImg,
            bio: "Especialista em decisões estratégicas de pessoas, com atuação em orientação profissional, carreira e avaliação psicológica aplicada ao contexto organizacional."
          },
          {
            name: "Guttierrez Lima",
            role: "Administrador de Empresas",
            img: psi2Img,
            bio: "Especialista em Planejamento Estratégico e Gestão de Projetos, com foco em estruturar processos de decisão e crescimento organizacional."
          },
        ].map((person, idx) => (
          <div key={idx} className="bg-white px-10 py-16 rounded-[2.5rem] border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.04)] text-center transition-all hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
            <div className="relative inline-block mb-10">
              <div className="w-44 h-44 rounded-full border-[6px] border-[#ff7e541a] overflow-hidden mx-auto">
                <img src={person.img} alt={person.name} className="w-full h-full object-cover" />
              </div>
            </div>
            <h4 className="text-3xl font-extrabold text-[#1a2332] mb-1">{person.name}</h4>
            <span className="text-[#ff7e54] text-xl font-medium block mb-8">{person.role}</span>
            <p className="text-slate-500 leading-relaxed max-w-md mx-auto text-lg">
              {person.bio}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section id="depoimentos" className="bg-navy-900 py-24 px-6 md:px-12 text-white">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-orange-primary font-bold text-xs uppercase tracking-widest">Depoimentos</span>
        <h2 className="text-3xl md:text-4xl font-extrabold mt-4">
          O que nossos <span className="text-orange-primary">Clientes Dizem</span>
        </h2>
        <p className="text-slate-400 mt-2">A Escolher Consultoria de Carreiras</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
        {[
          { name: "Ana Lúcia Ferreira", role: "Diretora de RH, TechBrasil S.A.", text: "A metodologia de recrutamento por competências transformou nosso processo seletivo. Reduzimos o turnover em 45% no primeiro ano." },
          { name: "Fernando Santos", role: "CEO, Inovação Digital Ltda", text: "O treinamento para gestores foi excepcional. Nossa equipe de liderança agora conduz entrevistas com muito mais assertividade." },
          { name: "Carolina Mendes", role: "Tech Recruiter, StartupHub", text: "A imersão em LinkedIn revolucionou minha forma de prospectar talentos. Consegui aumentar em 300% minhas respostas de candidatos passivos." },
        ].map((t, idx) => (
          <div key={idx} className="bg-white p-8 rounded-2xl relative">
            <div className="flex text-orange-primary mb-6">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <p className="text-slate-600 italic mb-8">"{t.text}"</p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-navy-900 flex items-center justify-center font-bold">
                {t.name.charAt(0)}
              </div>
              <div>
                <h5 className="text-slate-800 font-bold text-sm">{t.name}</h5>
                <p className="text-slate-500 text-[10px]">{t.role}</p>
              </div>
            </div>
            <span className="absolute top-6 right-8 text-slate-100 text-6xl font-serif">"</span>
          </div>
        ))}
      </div>

      <div className="pt-20 border-t border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: "Redução de Turnover", value: "60%" },
            { label: "Tempo Médio de Contratação", value: "45 dias" },
            { label: "Taxa de Aprovação", value: "95%" },
            { label: "Contratações Realizadas", value: "500+" },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white/5 p-6 rounded-2xl border border-white/5">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-slate-400 text-xs font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
        <span className="font-bold text-xl tracking-tighter">TechBrasil</span>
        <span className="font-bold text-xl tracking-tighter">Inovação Digital</span>
        <span className="font-bold text-xl tracking-tighter">StartupHub</span>
        <span className="font-bold text-xl tracking-tighter">Global Corp</span>
        <span className="font-bold text-xl tracking-tighter">Nexus Tech</span>
        <span className="font-bold text-xl tracking-tighter">Futuro RH</span>
      </div>
    </div>
  </section>
);

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', phone: '', message: '' });

  const WHATSAPP_NUMBER = '558199138227'; // +55 81 999138227

  const openWhatsApp = (text: string) => {
    const encoded = encodeURIComponent(text);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
    window.open(url, '_blank');
  };

  const buildMessage = (data: { name: string; company: string; email: string; phone: string; message: string }) => {
    return `*Nova solicitação de proposta*\n\n*Nome:* ${data.name || '-'}\n*Empresa:* ${data.company || '-'}\n*E-mail:* ${data.email || '-'}\n*Telefone:* ${data.phone || '-'}\n*Mensagem:* ${data.message || '-'} `;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = buildMessage(formData);
    openWhatsApp(text);
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <span className="text-orange-primary font-bold text-xs uppercase tracking-widest">Contato</span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mt-4 leading-tight">
          Vamos Conversar Sobre <span className="text-orange-primary">Sua <br className="hidden md:block" /> Necessidade</span>
        </h2>
        <p className="max-w-2xl mx-auto text-slate-500 mt-6 text-sm">
          Entre em contato conosco para uma consultoria personalizada. Estamos prontos para ajudar sua empresa a encontrar e desenvolver os melhores talentos.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-7xl mx-auto">
          <div className="lg:col-span-4 bg-navy-900 text-white p-10 rounded-3xl flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold mb-8">Vamos Conversar Sobre <br /> <span className="text-orange-primary">Sua Necessidade</span></h3>
            <p className="text-slate-400 text-sm mb-12">Entre em contato conosco para uma consultoria personalizada. Estamos prontos para ajudar sua empresa a encontrar e desenvolver os melhores talentos.</p>

            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center"><Phone size={18} className="text-slate-400" /></div>
                <div>
                  <p className="text-xs text-slate-500">Telefone</p>
                  <p className="font-bold text-sm">(81)9 99138227</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center"><Mail size={18} className="text-slate-400" /></div>
                <div>
                  <p className="text-xs text-slate-500">E-mail</p>
                  <p className="font-bold text-sm">contato@escolher.com.br</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center"><MapPin size={18} className="text-slate-400" /></div>
                <div>
                  <p className="text-xs text-slate-500">Localização</p>
                  <p className="font-bold text-sm">Recife, PE</p>
                </div>
              </div>
            </div>
          </div>

          <button
            className="mt-12 bg-[#25D366] text-white w-full py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all"
            onClick={() => {
              const text = buildMessage(formData);
              openWhatsApp(text);
            }}
          >
            <MessageCircle size={20} /> Fale pelo WhatsApp
          </button>
        </div>

        <div className="lg:col-span-8 bg-white border border-slate-100 shadow-2xl p-10 rounded-3xl">
          <h3 className="text-2xl font-bold text-slate-800 mb-2">Solicite uma Proposta</h3>
          <p className="text-slate-500 text-sm mb-8">Preencha o formulário e nossa equipe entrará em contato.</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700">Nome</label>
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="w-full bg-slate-50 border border-slate-100 rounded-lg p-3 text-sm focus:outline-none focus:ring-1 focus:ring-orange-primary"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700">Empresa</label>
                <input
                  type="text"
                  placeholder="Nome da empresa"
                  className="w-full bg-slate-50 border border-slate-100 rounded-lg p-3 text-sm focus:outline-none focus:ring-1 focus:ring-orange-primary"
                  value={formData.company}
                  onChange={e => setFormData({ ...formData, company: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700">E-mail *</label>
                <input
                  type="email"
                  required
                  placeholder="seu@email.com"
                  className="w-full bg-slate-50 border border-slate-100 rounded-lg p-3 text-sm focus:outline-none focus:ring-1 focus:ring-orange-primary"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700">Telefone</label>
                <input
                  type="tel"
                  placeholder="(81) 99999-9999"
                  className="w-full bg-slate-50 border border-slate-100 rounded-lg p-3 text-sm focus:outline-none focus:ring-1 focus:ring-orange-primary"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700">Mensagem *</label>
              <textarea
                required
                rows={4}
                placeholder="Conte-nos sobre sua necessidade..."
                className="w-full bg-slate-50 border border-slate-100 rounded-lg p-3 text-sm focus:outline-none focus:ring-1 focus:ring-orange-primary"
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>
            <button type="submit" className="w-full bg-orange-primary text-white py-4 rounded-lg font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#e06b45] transition-colors">
              Enviar Mensagem <TrendingUp size={16} className="rotate-45" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-navy-900 text-white pt-20 pb-8 px-6 md:px-12">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-orange-primary text-4xl">★</span>
            <span className="text-4xl font-bold">escolher</span>
          </div>
          <p className="text-slate-400 text-sm max-w-sm">
            Escolher Consultoria de Carreiras. Escolhas estratégicas, resultados consistentes.
          </p>
          <div className="flex gap-4 mt-8">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-primary transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-primary transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-primary transition-colors">
              <MailIcon size={18} />
            </a>
          </div>
        </div>

        <div>
          <h5 className="font-bold mb-6 text-sm">Nossas Soluções</h5>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li><a href="#" className="hover:text-orange-primary">Recrutamento e Seleção</a></li>
            <li><a href="#" className="hover:text-orange-primary">PDI</a></li>
            <li><a href="#" className="hover:text-orange-primary">Outplacement</a></li>
            <li><a href="#" className="hover:text-orange-primary">Palestras</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold mb-6 text-sm">Empresa</h5>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li><a href="#" className="hover:text-orange-primary">Sobre Nós</a></li>
            <li><a href="#" className="hover:text-orange-primary">Depoimentos</a></li>
            <li><a href="#" className="hover:text-orange-primary">Contato</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold mb-6 text-sm">Legal</h5>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li><a href="#" className="hover:text-orange-primary">Política de Privacidade</a></li>
            <li><a href="#" className="hover:text-orange-primary">Termos de Uso</a></li>
            <li><a href="#" className="hover:text-orange-primary">LGPD</a></li>
          </ul>
        </div>
      </div>

      <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-500 gap-4">
        <p>© 2024 Escolher Consultoria de Carreiras. Todos os direitos reservados.</p>
        <p>por Psi Alessandra Reis</p>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Solutions />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
