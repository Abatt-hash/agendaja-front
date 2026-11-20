import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CalendarCheck2,
  Check,
  ChevronDown,
  MapPin,
  ShieldCheck,
  Store,
  Star,
} from 'lucide-react';
import { ROUTE_PATHS } from '../../../core/router/paths';
import './landing.css';

const benefits = [
  {
    icon: Store,
    title: 'Vitrine profissional',
    text: 'Mostre fotos, serviços e preços em um perfil organizado.',
  },
  {
    icon: CalendarCheck2,
    title: 'Agenda automática',
    text: 'Horários sincronizados para evitar marcações duplicadas.',
  },
  {
    icon: MapPin,
    title: 'Busca por proximidade',
    text: 'Clientes encontram profissionais do seu bairro.',
  },
  {
    icon: ShieldCheck,
    title: 'Reputação verificável',
    text: 'Avaliações reais dão credibilidade ao seu trabalho.',
  },
];

const faqs = [
  ['O AgendaJá é gratuito?', 'Durante a fase de lançamento, o cadastro de prestadores e clientes é gratuito.'],
  ['Preciso instalar algum aplicativo?', 'Não. O AgendaJá funciona no navegador do celular ou do computador.'],
  ['Como evito horários duplicados?', 'A agenda é sincronizada em tempo real: o horário reservado deixa de aparecer como livre.'],
  ['Como funcionam as avaliações?', 'Após o serviço concluído, o cliente pode avaliar o atendimento no perfil do profissional.'],
];

function Brand() {
  return (
    <Link className="landing-brand" to={ROUTE_PATHS.root} aria-label="AgendaJá, início">
      <span className="landing-brand__mark">
        <CalendarCheck2 size={21} strokeWidth={2.2} />
      </span>
      <span>AgendaJá</span>
    </Link>
  );
}

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [accountType, setAccountType] = useState('prestador');
  const [submitted, setSubmitted] = useState(false);

  const scrollToWaitlist = () => {
    setMenuOpen(false);
    document.getElementById('lista-espera')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="landing-page">
      <header className="landing-header">
        <div className="landing-wrap landing-nav">
          <Brand />
          <button
            className="landing-menu-button"
            type="button"
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span /><span /><span />
          </button>
          <nav className={menuOpen ? 'is-open' : ''} aria-label="Navegação principal">
            <a href="#beneficios" onClick={() => setMenuOpen(false)}>Benefícios</a>
            <a href="#como-funciona" onClick={() => setMenuOpen(false)}>Como funciona</a>
            <a href="#depoimentos" onClick={() => setMenuOpen(false)}>Depoimentos</a>
            <a href="#faq" onClick={() => setMenuOpen(false)}>Perguntas frequentes</a>
            <Link className="landing-nav__mobile-login" to={ROUTE_PATHS.login} onClick={() => setMenuOpen(false)}>Acessar sistema</Link>
          </nav>
          <div className="landing-nav__actions">
            <Link className="landing-button landing-button--secondary landing-nav__login" to={ROUTE_PATHS.login}>
              Acessar sistema
            </Link>
            <button className="landing-button landing-button--primary landing-nav__cta" type="button" onClick={scrollToWaitlist}>
              Entrar na lista
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="landing-hero">
          <div className="landing-wrap landing-hero__grid">
            <div className="landing-hero__copy">
              <span className="landing-tag">Em breve · marketplace de serviços locais</span>
              <h1>Seu bairro, seus serviços, <span>na hora certa.</span></h1>
              <p>Conectamos profissionais autônomos e clientes da mesma região. Organize sua agenda ou encontre um horário livre em minutos.</p>
              <div className="landing-hero__actions">
                <button className="landing-button landing-button--primary" type="button" onClick={scrollToWaitlist}>
                  Entrar na lista de espera
                </button>
                <a className="landing-button landing-button--secondary" href="#como-funciona">
                  Ver como funciona
                </a>
              </div>
              <small>Cadastro gratuito na fase de lançamento · Funciona no navegador</small>
            </div>

            <div className="landing-phone" aria-label="Exemplo da agenda do profissional">
              <div className="landing-phone__header">
                <strong>Sua agenda</strong>
                <span>Terça, 10 de junho</span>
              </div>
              <div className="landing-phone__body">
                <span className="landing-pill">2 solicitações pendentes</span>
                <article className="landing-request">
                  <div className="landing-request__top"><strong>Paulo R.</strong><em>Hoje, 15:00</em></div>
                  <p>Troca de tomadas · 1h · 2,3 km</p>
                  <div className="landing-request__actions"><span className="accept"><Check size={13} /> Aceitar</span><span className="decline">× Recusar</span></div>
                </article>
                <div className="landing-slot"><time>08:00</time><div><b>Regina L.</b><small>Instalação elétrica · 1h30</small></div></div>
                <div className="landing-slot"><time>10:00</time><div className="landing-slot__free">Horário livre</div></div>
                <div className="landing-slot"><time>11:30</time><div className="landing-slot__blue"><b>Fernando T.</b><small>Revisão do quadro · 2h</small></div></div>
              </div>
            </div>
          </div>
        </section>

        <section className="landing-section landing-value">
          <div className="landing-wrap">
            <div className="landing-section__heading landing-section__heading--center">
              <span>Proposta de valor</span>
              <h2>Menos conversa para marcar. Mais tempo para trabalhar.</h2>
              <p>Redes sociais e WhatsApp ajudam a divulgar, mas não organizam a agenda. O AgendaJá reúne tudo em um só lugar.</p>
            </div>
            <div className="landing-value__cards">
              <article className="landing-value-card landing-value-card--dark">
                <h3>Para quem presta serviço</h3>
                <p>Tenha uma vitrine profissional e uma agenda que se organiza sozinha.</p>
                <ul><li>Portfólio com fotos, preços e categorias</li><li>Cliente agenda nos horários que você liberou</li><li>Histórico de atendimentos guardado</li></ul>
              </article>
              <article className="landing-value-card">
                <h3>Para quem precisa de um serviço</h3>
                <p>Encontre profissionais perto de você e agende sem burocracia.</p>
                <ul><li>Busca por categoria e proximidade</li><li>Horários livres visíveis em tempo real</li><li>Avaliações antes de contratar</li></ul>
              </article>
            </div>
          </div>
        </section>

        <section className="landing-section landing-benefits" id="beneficios">
          <div className="landing-wrap">
            <div className="landing-section__heading landing-section__heading--center">
              <span>Benefícios</span>
              <h2>Tudo o que um profissional local precisa</h2>
            </div>
            <div className="landing-benefit-grid">
              {benefits.map(({ icon: Icon, title, text }) => (
                <article className="landing-benefit-card" key={title}>
                  <div className="landing-benefit-card__icon"><Icon size={24} /></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="landing-section" id="como-funciona">
          <div className="landing-wrap">
            <div className="landing-section__heading landing-section__heading--center">
              <span>Demonstração do produto</span>
              <h2>Como funciona, em 3 passos</h2>
            </div>
            <div className="landing-steps">
              <div><b>1</b><p><strong>Busque</strong><span>Veja profissionais próximos.</span></p></div>
              <div><b>2</b><p><strong>Escolha o horário</strong><span>Selecione uma vaga livre.</span></p></div>
              <div><b>3</b><p><strong>Confirme</strong><span>O profissional aceita pelo painel.</span></p></div>
            </div>
          </div>
        </section>

        <section className="landing-section landing-testimonials" id="depoimentos">
          <div className="landing-wrap">
            <div className="landing-section__heading landing-section__heading--center">
              <span>Depoimentos</span>
              <h2>O que esperamos ouvir de quem usa</h2>
            </div>
            <div className="landing-testimonial-grid">
              {[
                ['MP', 'Marcos P.', 'Eletricista autônomo', 'Eu perdia cliente por demorar a responder mensagem. Agora o cliente escolhe o horário e eu só confirmo.'],
                ['CR', 'Camila R.', 'Cliente', 'Ver o horário disponível na hora, sem esperar resposta, mudou a forma como contrato serviço.'],
                ['LM', 'Luana M.', 'Cliente', 'Avaliações de outras pessoas do bairro me dão segurança para chamar alguém que ainda não conheço.'],
              ].map(([initials, name, role, quote]) => (
                <article className="landing-testimonial" key={name}>
                  <div className="landing-stars"><Star /><Star /><Star /><Star /><Star /></div>
                  <p>“{quote}”</p>
                  <div className="landing-person"><span>{initials}</span><div><strong>{name}</strong><small>{role}</small></div></div>
                </article>
              ))}
            </div>
            <small className="landing-disclaimer">Depoimentos fictícios para fins de protótipo acadêmico.</small>
          </div>
        </section>

        <section className="landing-section landing-faq" id="faq">
          <div className="landing-wrap">
            <div className="landing-section__heading landing-section__heading--center">
              <span>Perguntas frequentes</span>
              <h2>Tire suas dúvidas</h2>
            </div>
            <div className="landing-faq-list">
              {faqs.map(([question, answer]) => (
                <details key={question}>
                  <summary>{question}<ChevronDown size={18} /></summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="landing-cta" id="lista-espera">
          <div className="landing-wrap landing-cta__grid">
            <div>
              <h2>Pronto para organizar sua agenda?</h2>
              <p>Entre na lista de espera e seja avisado assim que o AgendaJá abrir para a sua região.</p>
              <ul><li><Check /> Cadastro gratuito no lançamento</li><li><Check /> Perfil configurado em poucos passos</li><li><Check /> Funciona direto no navegador</li></ul>
            </div>
            <form className="landing-form" onSubmit={handleSubmit}>
              {submitted ? (
                <div className="landing-form__success" role="status">
                  <span><Check /></span>
                  <h3>Você entrou na lista!</h3>
                  <p>Em breve avisaremos você sobre a abertura na sua região.</p>
                </div>
              ) : (
                <>
                  <h3>Entrar na lista de espera</h3>
                  <p>Leva menos de 1 minuto.</p>
                  <label>Nome completo<input required name="name" placeholder="Ex.: Marcos Pereira" /></label>
                  <label>E-mail<input required type="email" name="email" placeholder="Ex.: marcos@email.com" /></label>
                  <label>Telefone<input required name="phone" placeholder="Ex.: (18) 99999-0000" /></label>
                  <span className="landing-form__label">Eu sou</span>
                  <div className="landing-account-type">
                    <button className={accountType === 'prestador' ? 'is-selected' : ''} type="button" onClick={() => setAccountType('prestador')}>Prestador de serviços</button>
                    <button className={accountType === 'cliente' ? 'is-selected' : ''} type="button" onClick={() => setAccountType('cliente')}>Cliente</button>
                  </div>
                  <button className="landing-button landing-button--primary" type="submit">Quero entrar na lista</button>
                  <small>Ao enviar, você concorda com a Política de Privacidade.</small>
                </>
              )}
            </form>
          </div>
        </section>
      </main>

      <footer className="landing-footer">
        <div className="landing-wrap">
          <div><strong>AgendaJá</strong> · Seu bairro, seus serviços, na hora certa.</div>
          <div>Projeto acadêmico · IFSP Câmpus Birigui · 2026</div>
        </div>
      </footer>
    </div>
  );
}
