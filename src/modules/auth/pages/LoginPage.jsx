import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { ROUTE_PATHS } from '../../../core/router/paths';
import BrandLogo from '../../../shared/components/BrandLogo';
import ThemeToggle from '../../../shared/components/ThemeToggle';
import { useAuthActions } from '../hooks/useAuthActions';

const INITIAL_LOGIN_FORM = {
  email: '',
  senha: '',
};

export default function LoginPage() {
  const location = useLocation();
  const { errorMessage, isSubmitting, submitLogin } = useAuthActions();
  const [loginForm, setLoginForm] = useState(INITIAL_LOGIN_FORM);
  const [showMobileAccountScreen, setShowMobileAccountScreen] = useState(false);

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    await submitLogin(loginForm);
  };

  return (
    <main className={`auth-shell ${showMobileAccountScreen ? 'auth-shell--account' : 'auth-shell--welcome'}`}>
      <aside className="auth-hero">
        <BrandLogo variant="auth" to={ROUTE_PATHS.root} />

        <div className="auth-hero__copy">
          <h1>Seu bairro, seus serviços, na hora certa.</h1>
          <p>
            Encontre profissionais locais confiáveis e organize sua agenda em um só lugar.
            Agende serviços perto de você em poucos minutos.
          </p>
        </div>

        <button className="auth-mobile-entry button button--secondary" type="button" onClick={() => setShowMobileAccountScreen(true)}>
          Entrar ou criar conta
          <ArrowRight size={18} aria-hidden="true" />
        </button>
      </aside>

      <ThemeToggle className="theme-toggle--floating" />

      <section className="auth-form-panel">
        <div className="auth-form-box">
          <button className="auth-mobile-back" type="button" onClick={() => setShowMobileAccountScreen(false)}>
            <ArrowLeft size={18} aria-hidden="true" />
            Voltar
          </button>
          <h2>Entrar</h2>
          <p className="auth-form-box__subtitle">
            Conecte-se aos especialistas locais de confiança e acesse sua conta hoje mesmo.
          </p>

          {location.state?.message ? <p className="feedback feedback--success">{location.state.message}</p> : null}
          {errorMessage ? <p className="feedback feedback--danger">{errorMessage}</p> : null}

          <form className="form-stack" onSubmit={handleLoginSubmit}>
            <label className="field">
              <span>Email</span>
              <input
                type="email"
                value={loginForm.email}
                onChange={(event) => setLoginForm((current) => ({ ...current, email: event.target.value }))}
                placeholder="seunome@exemplo.com"
                required
              />
            </label>

            <label className="field">
              <span>Senha</span>
              <input
                type="password"
                value={loginForm.senha}
                onChange={(event) => setLoginForm((current) => ({ ...current, senha: event.target.value }))}
                placeholder="••••••••••••"
                required
              />
            </label>

            <button className="button button--primary" type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Entrando...' : 'Entrar'}
            </button>
          </form>

          <p className="auth-card__footer">
            Ainda não tem conta? <Link to={ROUTE_PATHS.register}>Cadastre-se</Link>
          </p>
          <p className="auth-card__footer">
            Esqueceu sua senha? <Link to={ROUTE_PATHS.passwordRecovery}>Recuperar senha</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
