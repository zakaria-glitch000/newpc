
import React from 'react';
import {
  Calendar,
  Phone,
  ArrowRight,
  ShoppingCart,
  Settings,
  TrendingUp,
  Users,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

import innoshopImage from '@/assets/inno.jpeg';
import './Innoshop.css';

export default function Innoshop() {
  const whatsappNumber = '212661973253';

  const handleWhatsAppDemo = () => {
    const message = encodeURIComponent(
      'Bonjour, je souhaite demander une démonstration de la solution INNOSHOP.'
    );

    window.open(
      `https://wa.me/${whatsappNumber}?text=${message}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  const handleContact = () => {
    window.location.href = '/#contact';
  };

  const features = [
    {
      icon: ShoppingCart,
      title: 'Une solution complète',
      description: 'Pour votre magasin',
    },
    {
      icon: Settings,
      title: 'Une démonstration',
      description: 'Adaptée à vos besoins',
    },
    {
      icon: TrendingUp,
      title: 'Des fonctionnalités',
      description: 'Dédiées au retail',
    },
    {
      icon: Users,
      title: 'Un accompagnement',
      description: 'Par nos experts',
    },
  ];

  return (
    <main className="ns ns-demo">

      {/* HERO */}
      <section className="ns-demo-hero">
        <div className="ns-demo-container ns-demo-grid">

          {/* TEXTE */}
          <div className="ns-demo-content">

            <div className="ns-demo-eyebrow">
              <span className="ns-demo-eyebrow-dot" />
              <Sparkles size={15} />
              SOLUTION RETAIL
            </div>

            <h1 className="ns-demo-title">
              Découvrez notre solution
              <span> en action.</span>
            </h1>

            <p className="ns-demo-description">
              Demandez une démonstration personnalisée et découvrez comment
              INNOSHOP peut simplifier la gestion de votre magasin, optimiser
              vos ventes et faciliter votre quotidien.
            </p>

            <div className="ns-demo-actions">
              <button
                type="button"
                onClick={handleWhatsAppDemo}
                className="ns-demo-btn ns-demo-btn-primary"
              >
                <Calendar size={19} />
                <span>Demander une démo</span>
                <ArrowRight size={19} className="ns-demo-btn-arrow" />
              </button>

              <button
                type="button"
                onClick={handleContact}
                className="ns-demo-btn ns-demo-btn-outline"
              >
                <Phone size={19} />
                <span>Nous contacter</span>
                <ArrowRight size={19} className="ns-demo-btn-arrow" />
              </button>
            </div>

            <div className="ns-demo-assurance">
              <CheckCircle2 size={17} />
              <span>Une solution adaptée à votre activité</span>
            </div>

            {/* MINI INFORMATIONS */}
            <div className="ns-demo-stats">
              <div>
                <span className="ns-demo-stat-number">01</span>
                <span className="ns-demo-stat-label">Solution complète</span>
              </div>

              <div>
                <span className="ns-demo-stat-number">02</span>
                <span className="ns-demo-stat-label">Démo personnalisée</span>
              </div>

              <div>
                <span className="ns-demo-stat-number">03</span>
                <span className="ns-demo-stat-label">Accompagnement</span>
              </div>
            </div>
          </div>

          {/* IMAGE */}
          <div className="ns-demo-visual">

            <div className="ns-demo-image-decoration" />

            <div className="ns-demo-image-frame">
              <img
                src={innoshopImage}
                alt="Solution de caisse et logiciel de gestion INNOSHOP"
                className="ns-demo-image"
              />

              <div className="ns-demo-image-overlay" />

              <div className="ns-demo-image-card">
                <div className="ns-demo-image-card-info">
                  <span>Solution de gestion</span>
                  <strong>INNOSHOP</strong>
                  <small>La gestion de votre magasin, simplifiée.</small>
                </div>

                <div className="ns-demo-image-icon">
                  <ShoppingCart size={25} />
                </div>
              </div>
            </div>

            <div className="ns-demo-floating-card">
              <span className="ns-demo-floating-icon">
                <TrendingUp size={19} />
              </span>
              <div>
                <strong>Gestion optimisée</strong>
                <span>Votre activité sous contrôle</span>
              </div>
            </div>

            <span className="ns-demo-orbit ns-demo-orbit-one" />
            <span className="ns-demo-orbit ns-demo-orbit-two" />
          </div>
        </div>
      </section>

      {/* FONCTIONNALITÉS */}
      <section className="ns-demo-features">
        <div className="ns-demo-container">

          <div className="ns-demo-section-heading">
            <span className="ns-demo-section-tag">L'UNIVERS INNOSHOP</span>

            <h2>
              Une solution pensée
              <span> pour votre magasin.</span>
            </h2>

            <p>
              Tous les outils nécessaires pour simplifier votre gestion
              et développer votre activité au quotidien.
            </p>
          </div>

          <div className="ns-demo-feature-grid">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
                  className="ns-demo-feature-card"
                  style={{ '--feature-index': index } as React.CSSProperties}
                >
                  <div className="ns-demo-feature-top">
                    <span className="ns-demo-feature-icon">
                      <Icon size={24} />
                    </span>

                    <span className="ns-demo-feature-number">
                      0{index + 1}
                    </span>
                  </div>

                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>

                  <div className="ns-demo-feature-line" />
                </article>
              );
            })}
          </div>

          {/* CTA FINAL */}
          <div className="ns-demo-cta">
            <div className="ns-demo-cta-decoration" />

            <div className="ns-demo-cta-content">
              <span className="ns-demo-cta-tag">
                <Sparkles size={14} />
                PASSEZ À L'ACTION
              </span>

              <h2>Prêt à découvrir INNOSHOP ?</h2>

              <p>
                Contactez notre équipe pour découvrir la solution
                adaptée à votre magasin.
              </p>
            </div>

            <button
              type="button"
              onClick={handleWhatsAppDemo}
              className="ns-demo-btn ns-demo-btn-cta"
            >
              Demander une démo
              <ArrowRight size={19} />
            </button>
          </div>

        </div>
      </section>
    </main>
  );
}
