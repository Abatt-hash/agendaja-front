import { CalendarCheck2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import './BrandLogo.css';

export default function BrandLogo({ variant = 'sidebar', subtitle, to }) {
  const content = (
    <>
      <span className="brand-logo__mark">
        <CalendarCheck2 aria-hidden="true" />
      </span>
      <span className="brand-logo__copy">
        <strong className="brand-logo__name">AgendaJá</strong>
        {subtitle ? <span className="brand-logo__subtitle">{subtitle}</span> : null}
      </span>
    </>
  );

  if (to) {
    return (
      <Link className={`brand-logo brand-logo--${variant}`} to={to} aria-label="Voltar para a landing page">
        {content}
      </Link>
    );
  }

  return <div className={`brand-logo brand-logo--${variant}`}>{content}</div>;
}