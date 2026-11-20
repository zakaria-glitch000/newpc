import React from 'react';
import {
  BarChart3, Clock, Settings, ShieldCheck, Package, ShoppingCart, ChefHat, Users,
  TrendingUp, Building2, CalendarDays, Cloud, Laptop, Tablet, Smartphone, Utensils,
  Truck, Store,
} from 'lucide-react';

/* ---------- Petits composants ---------- */

const ICON_BG = 'bg-gradient-to-br from-orange-400 to-orange-600 text-white shadow-md shadow-orange-500/30';

const FeatureCard = ({ icon: Icon, title, bullets, children }) => (
  <div className="flex h-full flex-col bg-white border border-orange-100 rounded-2xl p-5 shadow-lg shadow-orange-900/5 hover:border-orange-400 hover:shadow-orange-500/15 transition">
    <div className="flex items-center gap-3 mb-4">
      <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${ICON_BG}`}>
        <Icon size={18} />
      </div>
      <h3 className="font-bold text-slate-900 text-sm">{title}</h3>
    </div>
    <ul className="text-xs text-slate-600 space-y-1.5 mb-4 list-disc pl-4 marker:text-orange-500">
      {bullets.map((b) => <li key={b}>{b}</li>)}
    </ul>
    <div className="mt-auto">{children}</div>
  </div>
);

const MiniTable = ({ heads, rows }) => (
  <div className="bg-orange-50 border border-orange-100 rounded-lg p-2 text-[10px] text-slate-700 overflow-x-auto">
    <table className="w-full">
      <thead>
        <tr className="text-slate-500 border-b border-orange-100">
          {heads.map((h, i) => (
            <th key={h} className={`pb-1 font-medium ${i === 0 ? 'text-left' : 'text-center'}`}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-orange-100">
        {rows.map((r, i) => (
          <tr key={i}>
            {r.map((c, j) => (
              <td key={j} className={`py-1 ${j === 0 ? '' : 'text-center'}`}>{c}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Amount = ({ children }) => <span className="font-semibold text-orange-700">{children}</span>;
const Tag = ({ color, children }) => <span className={`font-medium ${color}`}>{children}</span>;

/* ---------- Maquette GMS (hero) ---------- */

const HERO_MODULES = [
  [ShoppingCart, 'Ventes'],
  [Package, 'Stocks'],
  [Truck, 'Achats'],
  [ChefHat, 'Production'],
  [Users, 'Clients'],
  [BarChart3, 'Analyses'],
  [CalendarDays, 'Planning'],
  [Store, 'Multi-sites'],
];

const GmsMock = () => (
  <div className="relative">
    <div className="rounded-t-xl border-[6px] border-b-0 border-slate-800 bg-white shadow-2xl shadow-orange-950/40 overflow-hidden">
      <div className="flex items-center gap-2 bg-slate-800 px-3 py-2">
        <span className="w-4 h-4 rounded bg-orange-500" />
        <span className="text-[11px] font-bold tracking-wide text-white">CSI - GMS</span>
      </div>
      <div className="grid grid-cols-4 gap-2 bg-orange-50/60 p-3">
        {HERO_MODULES.map(([I, label]) => (
          <div key={label} className="flex flex-col items-center gap-1.5 rounded-xl border border-orange-100 bg-white px-1 py-3 shadow-sm">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-50 text-orange-600"><I size={17} /></span>
            <span className="text-[10px] font-medium text-slate-700 text-center leading-tight">{label}</span>
          </div>
        ))}
      </div>
    </div>
    <div className="relative -mx-4 h-3 rounded-b-2xl bg-gradient-to-b from-slate-200 to-slate-400 shadow-lg shadow-orange-950/30">
      <div className="absolute left-1/2 top-0 h-1 w-16 -translate-x-1/2 rounded-b bg-slate-500" />
    </div>

    {/* Carte flottante : CA du jour */}
    <div className="absolute -bottom-6 -right-2 sm:-right-6 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl shadow-orange-950/30">
      <span className={`flex h-9 w-9 items-center justify-center rounded-full ${ICON_BG}`}><TrendingUp size={17} /></span>
      <div>
        <div className="text-[10px] text-slate-500 leading-tight">CA du jour</div>
        <div className="text-sm font-extrabold text-slate-900 leading-tight">11 050,50</div>
      </div>
    </div>
  </div>
);

const TOP_BENEFITS = [
  [BarChart3, 'Centralisez', 'toutes vos données'],
  [Clock, 'Gagnez', 'du temps'],
  [Settings, 'Maîtrisez', 'vos coûts'],
  [ShieldCheck, 'Une gestion', 'sécurisée'],
];

const GmsCsiPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 selection:bg-orange-600 selection:text-white">
      {/* ========== HERO ========== */}
      <header className="relative overflow-hidden bg-gradient-to-br from-white via-white to-orange-50 border-b border-orange-100">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-14">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Texte */}
            <div className="lg:col-span-6 text-center lg:text-left">
              <h2 className="text-5xl md:text-6xl font-black tracking-tight">
                <span className="text-orange-600">GMS -</span>{' '}
                <span className="text-slate-900">Back Office</span>
              </h2>
              <p className="text-2xl md:text-3xl font-extrabold text-amber-600 mt-1 tracking-wide">
                ERP RESTAURATION
              </p>
              <p className="mt-4 text-lg font-semibold text-slate-800">
                Une solution complète, connectée à vos caisses CSI
              </p>
              <p className="mt-1 text-slate-600 text-sm md:text-base">
                De l'encaissement à la gestion de votre activité, tout est centralisé pour un pilotage simple et performant.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3 text-left">
                {TOP_BENEFITS.map(([I, t, s]) => (
                  <div key={t} className="flex items-center gap-3 rounded-xl border border-orange-100 bg-white p-3 shadow-md shadow-orange-900/5">
                    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${ICON_BG}`}><I size={18} /></span>
                    <span className="text-sm font-bold leading-tight text-slate-900">
                      {t}<br /><span className="text-xs font-normal text-slate-500">{s}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Panneau orange + maquette */}
            <div className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-orange-500 to-orange-600 px-6 pt-10 pb-14 sm:px-10">
                <div aria-hidden="true" className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10" />
                <div aria-hidden="true" className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-orange-400/40" />
                <div className="relative mx-auto max-w-md">
                  <GmsMock />
                </div>
              </div>
            </div>
          </div>

          {/* Cloud connection line */}
          <div className="flex justify-center mt-14">
            <div className="bg-orange-600 text-white text-xs md:text-sm font-semibold px-6 py-2.5 rounded-full flex items-center gap-2.5 shadow-lg shadow-orange-600/25 text-center">
              <Cloud className="w-5 h-5 shrink-0 text-orange-100" />
              Toutes les informations de vos caisses remontent automatiquement dans GMS-Back Office
            </div>
          </div>
        </div>
      </header>

      {/* ========== FONCTIONNALITÉS ========== */}
      <section className="py-16 bg-orange-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-orange-700 tracking-widest uppercase">
              DES FONCTIONNALITÉS COMPLÈTES
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-slate-900">
              Une gestion globale de votre restaurant
            </h2>
            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-orange-600" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 1. Ventes et encaissements */}
            <FeatureCard icon={BarChart3} title="Ventes et encaissements"
              bullets={["Suivi du chiffre d'affaires", 'Analyse par article, catégorie, serveur, table…', 'Tickets, panier moyen', 'Modes de règlement']}>
              <MiniTable heads={['Date', 'Heure', 'Total']} rows={[
                ['12/10/2025', '12:30', <Amount>101,00</Amount>],
                ['12/10/2025', '13:15', <Amount>85,50</Amount>],
                ['12/10/2025', '14:00', <Amount>156,00</Amount>],
              ]} />
            </FeatureCard>

            {/* 2. Stocks et inventaires */}
            <FeatureCard icon={Package} title="Stocks et inventaires"
              bullets={['Suivi des mouvements', 'Valorisation des stocks', 'Inventaires', 'Alertes de stock minimum', 'Gestion des pertes et écarts']}>
              <MiniTable heads={['Article', 'Stock', 'Prix']} rows={[
                [<Tag color="text-emerald-600">● Tomate</Tag>, '25,00', '12,00'],
                [<Tag color="text-red-600">● Mozzarella</Tag>, '12,00', '48,00'],
                [<Tag color="text-red-600">● Salade</Tag>, '18,00', '10,00'],
                [<Tag color="text-orange-600">● Viande hachée</Tag>, '8,00', '65,00'],
              ]} />
            </FeatureCard>

            {/* 3. Achats et fournisseurs */}
            <FeatureCard icon={ShoppingCart} title="Achats et fournisseurs"
              bullets={['Commandes fournisseurs', 'Réception et contrôle', 'Factures fournisseurs', "Suivi des prix d'achat", 'Gestion des fournisseurs']}>
              <MiniTable heads={['Date', 'Fournisseur', 'Statut']} rows={[
                ['12/10', 'Metro', <Tag color="text-emerald-600">Reçu</Tag>],
                ['10/10', 'DistriFood', <Tag color="text-emerald-600">Reçu</Tag>],
                ['08/10', 'Fresh Food', <Tag color="text-orange-600">En cours</Tag>],
                ['02/10', 'Boulangerie', <Tag color="text-emerald-600">Reçu</Tag>],
              ]} />
            </FeatureCard>

            {/* 4. Production et fiches techniques */}
            <FeatureCard icon={ChefHat} title="Production et fiches techniques"
              bullets={['Recettes et ingrédients', 'Coûts de revient', 'Consommation matières premières', 'Maîtrise des pertes', 'Suivi de la production']}>
              <div className="bg-orange-50 border border-orange-100 rounded-lg p-2 flex gap-2 items-center">
                <div className="text-[10px] flex-1 text-slate-600">
                  <p className="font-bold text-orange-700">Fiche technique : Burger</p>
                  <p>Pain burger : 1,00</p>
                  <p>Viande : 1,00</p>
                  <p>Salade : 0,50</p>
                </div>
                <div className={`w-14 h-14 rounded-lg flex items-center justify-center ${ICON_BG}`}>
                  <Utensils size={24} />
                </div>
              </div>
            </FeatureCard>

            {/* 5. Clients et fidélité */}
            <FeatureCard icon={Users} title="Clients et fidélité"
              bullets={['Base clients centralisée', 'Historique des achats', 'Programmes de fidélité', 'Analyse du comportement']}>
              <MiniTable heads={['Nom', 'Téléphone', 'Points']} rows={[
                ['Karim', '0612345678', <Amount>120</Amount>],
                ['Sara', '0661122334', <Amount>85</Amount>],
                ['Youssef', '0609988776', <Amount>60</Amount>],
              ]} />
            </FeatureCard>

            {/* 6. Rapports et statistiques */}
            <FeatureCard icon={TrendingUp} title="Rapports et statistiques"
              bullets={['Ventes, annulations, retours', 'Offerts et remises', 'Analyse par période', 'Export des données (Excel, PDF)']}>
              <div className="bg-orange-50 border border-orange-100 rounded-lg p-2 h-20 flex items-end justify-around">
                {[30, 45, 35, 60, 50, 70, 55, 80, 65, 90, 75, 85].map((h, i) => (
                  <div key={i} className="w-2.5 rounded-t bg-gradient-to-t from-orange-600 to-orange-400" style={{ height: `${h}%` }} />
                ))}
              </div>
              <p className="text-[10px] text-center text-slate-500 mt-1">Chiffre d'affaires 2025-2026</p>
            </FeatureCard>

            {/* 7. Gestion multi-sites */}
            <FeatureCard icon={Building2} title="Gestion multi-sites et franchises"
              bullets={['Centralisation des données', 'Comparaison des résultats', 'Suivi en temps réel', 'Tableaux de bord consolidés']}>
              <MiniTable heads={['Site', 'CA du jour']} rows={[
                [<Tag color="text-orange-600">● Centre</Tag>, '5 630,50'],
                [<Tag color="text-amber-500">● Plage</Tag>, '3 240,00'],
                [<Tag color="text-emerald-600">● Ville</Tag>, '2 180,00'],
              ]} />
            </FeatureCard>

            {/* 8. Planning et réservation */}
            <FeatureCard icon={CalendarDays} title="Planning et réservation"
              bullets={['Gestion des réservations', 'Planning des tables', "Suivi de l'occupation", 'Intégration avec la caisse']}>
              <MiniTable heads={['Heure', 'Table', 'Couverts', 'Statut']} rows={[
                ['12:30', 'Table 5', '4', <Tag color="text-emerald-600">Confirmée</Tag>],
                ['13:00', 'Table 8', '2', <Tag color="text-emerald-600">Confirmée</Tag>],
                ['14:00', 'Table 2', '6', <Tag color="text-emerald-600">Confirmée</Tag>],
              ]} />
            </FeatureCard>
          </div>
        </div>
      </section>

      {/* ========== FOOTER BENEFITS ========== */}
      <section className="py-12 bg-white border-t border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Accessible partout */}
            <div className="text-center">
              <p className="font-bold text-slate-900 mb-5 text-xl">
                Accessible partout
              </p>

              <div className="flex justify-center gap-8">
                {[[Laptop, 'Ordinateur'], [Tablet, 'Tablette'], [Smartphone, 'Mobile']].map(([I, label]) => (
                  <div key={label} className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-orange-50 border border-orange-100 rounded-2xl shadow-md shadow-orange-900/5 flex items-center justify-center text-orange-600">
                      <I size={30} strokeWidth={1.6} />
                    </div>
                    <span className="text-sm mt-2 text-slate-600 font-semibold">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sans cloud */}
            <div className="text-center">
              <div className="inline-flex items-center gap-3 rounded-2xl border border-orange-200 bg-orange-50 px-5 py-4 text-left">
                <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${ICON_BG}`}><ShieldCheck size={20} /></span>
                <span className="leading-tight">
                  <span className="block text-xs font-bold uppercase tracking-wide text-orange-700">Sans cloud</span>
                  <span className="block text-sm font-bold text-slate-900">Vos données restent sur votre serveur</span>
                </span>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <div className="inline-flex items-center gap-3 bg-orange-600 text-white px-6 py-3.5 rounded-full font-bold shadow-xl shadow-orange-600/25 hover:bg-orange-700 transition text-sm">
                <TrendingUp className="w-5 h-5 flex-shrink-0 text-orange-100" />
                <span className="text-left leading-tight">
                  Gérez votre restaurant en toute sérénité<br />
                  <span className="text-orange-100 font-black">avec GMS-Back Office</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GmsCsiPage;