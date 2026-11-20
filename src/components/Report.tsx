import React from "react";
import {
  BarChart3, Clock, Smartphone, ShieldCheck, AlertCircle, RotateCcw, Gift,
  CalendarDays, Star, CreditCard, Share2, Laptop, Tablet, Check,
} from "lucide-react";
import crsImage from '@/assets/crs.png';

/* ---------- Palette : blanc + orange ---------- */
const ORANGE = "#ea580c";      // orange-600
const ORANGE_DARK = "#c2410c"; // orange-700 (petits textes sur blanc)
const ORANGE_SOFT = "#fdba74"; // orange-300
const INK = "#1e293b";         // slate-800

const ICON_GRADIENTS = [
  "from-orange-400 to-orange-600",
  "from-amber-400 to-orange-500",
];

const Icon = ({ i = 0, children }) => (
  <div className={`w-11 h-11 rounded-full flex items-center justify-center text-white shrink-0 shadow-md shadow-orange-500/30 bg-gradient-to-br ${ICON_GRADIENTS[i % 2]}`}>
    {children}
  </div>
);

/* ---------- Mini tables ---------- */
const MiniTable = ({ title, color, heads, rows, redCol }) => (
  <div className="bg-orange-50 border border-orange-100 rounded-lg p-2 text-[9px] mt-3">
    <div className="flex items-center gap-1 font-semibold mb-1.5 text-slate-800">
      <span className="w-2.5 h-2.5 rounded-sm" style={{ background: color }} /> {title}
    </div>
    <table className="w-full">
      <thead>
        <tr className="text-slate-500 text-left">{heads.map((h) => <th key={h} className="font-medium pb-1">{h}</th>)}</tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i} className="border-t border-orange-100">
            {r.map((c, j) => (
              <td key={j} className={`py-1 ${j === redCol ? "text-red-600 font-medium" : "text-slate-600"}`}>{c}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const FeatureCard = ({ icon, i, title, text, children }) => (
  <div className="bg-white border border-orange-100 rounded-2xl p-4 shadow-lg shadow-orange-900/5 transition-all hover:border-orange-400 hover:shadow-orange-500/15">
    <div className="flex gap-3">
      <Icon i={i}>{icon}</Icon>
      <div>
        <h3 className="font-bold text-[15px] text-slate-900">{title}</h3>
        <p className="text-[12px] text-slate-500 leading-snug mt-1">{text}</p>
      </div>
    </div>
    {children}
  </div>
);

/* ---------- Mock screens (hero) ---------- */
const Bars = ({ n = 28, colors = [ORANGE, ORANGE_SOFT], h = "h-24" }) => (
  <div className={`flex items-end gap-[3px] ${h}`}>
    {Array.from({ length: n }).map((_, i) => (
      <div key={i} className="flex-1 rounded-t-sm"
        style={{ height: `${25 + ((i * 37) % 70)}%`, background: colors[i % colors.length] }} />
    ))}
  </div>
);

/* Monitor, Laptop_, Tablet_ et Phone sont définis plus bas, après Donut. */

/* ---------- Feature visuals ---------- */
const Donut = ({ stops, size = 110, hole = "bg-white" }) => (
  <div className="rounded-full relative shrink-0" style={{ width: size, height: size, background: `conic-gradient(${stops})` }}>
    <div className={`absolute inset-[22%] ${hole} rounded-full`} />
  </div>
);

/* ---------- Maquettes d'appareils (hero) ---------- */
const PAY_STOPS = "#ea580c 0 45%, #fb923c 45% 75%, #fdba74 75% 90%, #1e293b 90% 100%";
const PAY_LEGEND = [["#ea580c", "CB", "45%"], ["#fb923c", "Espèces", "30%"], ["#fdba74", "Tickets", "15%"], ["#1e293b", "Autres", "10%"]];
const TOP_SALES = [["Burger", 520, 100], ["Pizza", 480, 90], ["Salade", 320, 62], ["Frites", 280, 54], ["Boisson", 250, 48]];

const Kpi = ({ label, value, color }) => (
  <div className="bg-orange-50 border border-orange-100 rounded-md px-1.5 py-1.5 min-w-0">
    <div className="text-[7px] text-slate-500 flex items-center gap-1 whitespace-nowrap">
      <i className="inline-block w-1.5 h-1.5 rounded-full shrink-0" style={{ background: color }} />{label}
    </div>
    <div className="text-[11px] font-bold text-slate-900 mt-0.5 whitespace-nowrap">{value}</div>
  </div>
);

/* Écran de bureau : tableau de bord complet */
const Monitor = () => (
  <div>
    <div className="rounded-xl border-[6px] border-slate-800 bg-white shadow-2xl shadow-orange-950/40 overflow-hidden">
      <div className="flex h-[232px]">
        <div className="w-9 shrink-0 bg-orange-50 border-r border-orange-100 flex flex-col items-center gap-3 py-3">
          <span className="w-5 h-5 rounded-md flex items-center justify-center text-white" style={{ background: ORANGE }}><BarChart3 size={11} /></span>
          {[CalendarDays, Star, CreditCard, Share2].map((I, i) => <I key={i} size={12} className="text-slate-400" />)}
        </div>
        <div className="flex-1 min-w-0 p-2.5">
          <div className="flex items-center justify-between">
            <div className="text-[10px] font-bold text-slate-900">Tableau de bord</div>
            <div className="flex gap-1 text-[7px]">
              {["Jour", "Semaine", "Mois"].map((p, i) => (
                <span key={p} className={`px-1.5 py-0.5 rounded ${i === 0 ? "text-white" : "bg-orange-50 text-slate-500"}`} style={i === 0 ? { background: ORANGE } : undefined}>{p}</span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-[1.7fr_1fr_1fr_1fr] gap-1.5 mt-2">
            <Kpi label="Chiffre d’affaires" value="12 450,00 DH" color={ORANGE} />
            <Kpi label="Ventes" value="238" color="#22c55e" />
            <Kpi label="Annulations" value="5" color="#ef4444" />
            <Kpi label="Retours" value="2" color="#f59e0b" />
          </div>
          <div className="grid grid-cols-5 gap-1.5 mt-2">
            <div className="col-span-3 bg-orange-50 border border-orange-100 rounded-md p-1.5">
              <div className="flex items-center justify-between text-[8px] mb-1.5">
                <span className="font-semibold text-slate-900">Comparatif CA</span>
                <span className="flex gap-2 text-slate-500">
                  <span><i className="inline-block w-1.5 h-1.5 mr-1" style={{ background: ORANGE }} />2026</span>
                  <span><i className="inline-block w-1.5 h-1.5 mr-1" style={{ background: ORANGE_SOFT }} />2025</span>
                </span>
              </div>
              <Bars n={20} />
            </div>
            <div className="col-span-2 bg-orange-50 border border-orange-100 rounded-md p-1.5">
              <div className="text-[8px] font-semibold text-slate-900 mb-1.5">Règlements</div>
              <div className="flex items-center gap-2">
                <Donut size={46} stops={PAY_STOPS} hole="bg-orange-50" />
                <div className="flex-1 space-y-1 text-[7px] text-slate-600">
                  {PAY_LEGEND.map(([c, n, p]) => (
                    <div key={n} className="flex items-center justify-between gap-1">
                      <span className="flex items-center gap-1"><i className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: c }} />{n}</span>
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="mx-auto w-16 h-4 bg-gradient-to-b from-slate-300 to-slate-400" />
    <div className="mx-auto w-32 h-1.5 rounded-full bg-slate-300 shadow-lg shadow-orange-950/30" />
  </div>
);

/* Mobile : les chiffres du jour */
const Phone = () => (
  <div className="w-[128px] h-[272px] rounded-[26px] border-[5px] border-slate-800 bg-white shadow-2xl shadow-orange-950/50 overflow-hidden relative">
    <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-9 h-1.5 rounded-full bg-slate-800" />
    <div className="px-2.5 pt-6 pb-2.5">
      <div className="flex items-center justify-between text-[8px] font-bold text-slate-900">
        <span>CSI Reporting</span><span className="text-slate-400">⋮</span>
      </div>
      <div className="mt-2 rounded-lg p-2 bg-orange-50 border border-orange-100">
        <div className="text-[7px] text-slate-500">Chiffre d’affaires</div>
        <div className="text-[12px] font-extrabold text-slate-900 leading-tight mt-0.5 whitespace-nowrap">12 450,00 <span className="text-[8px] font-semibold text-slate-500">DH</span></div>
        <div className="mt-1.5"><Bars n={16} colors={[ORANGE]} h="h-6" /></div>
      </div>
      <div className="mt-2 space-y-1.5">
        {[["Ventes", "238", "#22c55e"], ["Annulations", "5", "#ef4444"], ["Retours", "2", "#f59e0b"], ["Pertes", "0", "#a855f7"]].map(([n, v, c]) => (
          <div key={n} className="flex items-center justify-between bg-white border border-orange-100 shadow-sm rounded-md px-2 py-1 text-[8px] text-slate-600">
            <span className="flex items-center gap-1.5"><i className="inline-block w-1.5 h-1.5 rounded-full" style={{ background: c }} />{n}</span>
            <span className="font-bold text-slate-900">{v}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* Ordinateur portable : ventes détaillées */
const Laptop_ = () => (
  <div>
    <div className="rounded-t-xl border-[5px] border-b-0 border-slate-800 bg-white shadow-2xl shadow-orange-950/40 overflow-hidden h-[166px] p-2.5">
      <div className="flex items-center justify-between">
        <div className="text-[9px] font-bold text-slate-900">Ventes détaillées</div>
        <span className="text-[7px] px-1.5 py-0.5 rounded text-white" style={{ background: ORANGE }}>Aujourd’hui</span>
      </div>
      <table className="w-full text-[8px] mt-2">
        <thead>
          <tr className="text-slate-500 text-left">
            <th className="font-medium pb-1">Ticket</th><th className="font-medium pb-1">Article</th><th className="font-medium pb-1">Qté</th><th className="font-medium pb-1 text-right">Total</th>
          </tr>
        </thead>
        <tbody>
          {[["10346", "Burger", "1", "15.00"], ["10346", "Burger", "1", "16.00"], ["10347", "Salade", "1", "9.00"], ["10348", "Dessert", "1", "10.00"]].map((r, i) => (
            <tr key={i} className="border-t border-orange-100 text-slate-600">
              <td className="py-1">{r[0]}</td><td>{r[1]}</td><td>{r[2]}</td><td className="text-right font-medium text-slate-900">{r[3]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between border-t border-orange-200 pt-1 text-[8px] font-bold text-slate-900">
        <span>Total</span><span style={{ color: ORANGE_DARK }}>50.00</span>
      </div>
    </div>
    <div className="relative h-2.5 -mx-3 rounded-b-2xl bg-gradient-to-b from-slate-200 to-slate-400 shadow-lg shadow-orange-950/30">
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-14 h-1 rounded-b bg-slate-500" />
    </div>
  </div>
);

/* Tablette : top des ventes */
const Tablet_ = () => (
  <div className="rounded-2xl border-[6px] border-slate-800 bg-white shadow-2xl shadow-orange-950/40 h-[152px] p-2.5 overflow-hidden">
    <div className="flex items-center justify-between">
      <div className="text-[9px] font-bold text-slate-900">Top des ventes</div>
      <span className="text-[7px] px-1.5 py-0.5 rounded bg-orange-50 text-slate-500">Cette semaine</span>
    </div>
    <div className="mt-1.5">
      {TOP_SALES.map(([n, v, w], i) => (
        <div key={n} className="flex items-center gap-2 py-[3px] border-t border-orange-100 text-[8px] text-slate-600">
          <span className="w-2.5 text-slate-400">{i + 1}</span>
          <span className="w-11">{n}</span>
          <div className="flex-1"><div className="h-1.5 rounded-sm" style={{ width: `${w}%`, background: i === 0 ? ORANGE : ORANGE_SOFT }} /></div>
          <span className="w-6 text-right font-medium text-slate-900">{v}</span>
        </div>
      ))}
    </div>
  </div>
);

export default function OraliReporting() {
  return (
    <div className="max-w-[1024px] mx-auto bg-white text-slate-800 font-sans overflow-hidden selection:bg-orange-600 selection:text-white">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden px-8 pt-6 pb-8 bg-gradient-to-br from-white via-white to-orange-50 border-b border-orange-100">
        {/* Grand panneau orange derrière les appareils */}
        <div aria-hidden="true" className="absolute right-0 top-6 bottom-4 left-[424px] rounded-l-[56px] overflow-hidden bg-gradient-to-br from-orange-500 to-orange-600">
          <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-white/10" />
          <div className="absolute left-20 -bottom-24 w-72 h-72 rounded-full bg-orange-400/40" />
          <div className="absolute right-24 bottom-10 w-24 h-24 rounded-full border-[10px] border-white/10" />
        </div>

        <div className="relative flex items-center gap-2">
          <div>
            <br />
          </div>
        </div>

        <div className="relative grid grid-cols-12 gap-6 mt-6 items-center">
          <div className="col-span-5">
            <p
              className="text-[36px] font-bold tracking-wide"
              style={{ color: ORANGE }}
            >
              REPORTING
            </p>
            <h1 className="text-[34px] leading-[1.1] mt-1 text-slate-900">
              <b className="font-extrabold">Toutes les informations de votre activité</b>
              <br /><span className="font-light" style={{ color: ORANGE }}>au même endroit</span>
            </h1>
            <p className="text-[17px] text-slate-600 leading-snug mt-3 font-light">
              Un suivi complet et détaillé de votre établissement, accessible partout, à tout moment, sur ordinateur, tablette et mobile.
            </p>

            <div className="grid grid-cols-2 gap-2.5 mt-6">
              {[
                [<BarChart3 key="a" size={20} />, "Vision globale", "de votre activité"],
                [<Clock key="b" size={20} />, "En temps réel", "24h/24 - 7j/7"],
                [<Smartphone key="c" size={20} />, "Accessible", "sur tous vos appareils"],
                [<ShieldCheck key="d" size={20} />, "Données sécurisées", "en local, sans cloud"],
              ].map(([ic, t, s], i) => (
                <div key={t} className="flex items-center gap-2.5 bg-white border border-orange-100 rounded-xl shadow-md shadow-orange-900/5 p-2.5">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center text-white shrink-0 shadow-md shadow-orange-500/30 bg-gradient-to-br ${ICON_GRADIENTS[i % 2]}`}>{ic}</div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-bold text-slate-900 leading-tight">{t}</div>
                    <div className="text-[9px] text-slate-500 leading-tight mt-0.5">{s}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Collage d'appareils : écran, mobile, portable, tablette */}
          <div className="col-span-7 relative h-[480px]">
            <div className="absolute top-0 left-4 w-[420px] z-10"><Monitor /></div>
            <div className="absolute top-6 right-0 z-30"><Phone /></div>
            <div className="absolute bottom-0 left-6 w-[285px] z-20"><Laptop_ /></div>
            <div className="absolute bottom-3 right-0 w-[230px] z-20"><Tablet_ /></div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="px-5 pt-8 pb-6 bg-orange-50/60">
        <p className="text-[16px] font-medium" style={{ color: ORANGE_DARK }}>DES FONCTIONNALITÉS COMPLÈTES</p>
        <h2 className="text-[28px] font-extrabold text-slate-900">Un contrôle total de votre établissement</h2>
        <div className="h-1 w-16 rounded-full mt-2 mb-5" style={{ background: ORANGE }} />

        <div className="grid grid-cols-4 gap-3">
          <FeatureCard i={0} icon={<BarChart3 />} title="Ventes détaillées"
            text="Consultez toutes vos ventes en détail : tickets, articles, modes de règlement, TVA…">
            <MiniTable title="Ventes" color={ORANGE}
              heads={["Date", "Ticket", "Article", "Qté", "Total"]}
              rows={[["2026-10-13", "10346", "Burger", "1", "15.00"], ["2026-10-13", "10346", "Burger", "1", "16.00"],
                ["2026-10-13", "10347", "Salade", "1", "9.00"], ["2026-10-13", "10348", "Dessert", "1", "10.00"]]} />
          </FeatureCard>

          <FeatureCard i={1} icon={<AlertCircle />} title="Annulations"
            text="Suivez les annulations par article, par utilisateur et par motif.">
            <MiniTable title="Annulations" color="#ef4444"
              heads={["Date", "Ticket", "Article", "Utilisateur", "Montant"]}
              rows={[["2026-10-13", "10348", "Pizza", "Manager", "25.00"], ["2026-10-13", "10348", "Salade", "Manager", "8.00"],
                ["2026-10-13", "10348", "Boisson", "Manager", "12.00"], ["2026-10-13", "10348", "Dessert", "Manager", "6.00"]]} />
          </FeatureCard>

          <FeatureCard i={0} icon={<RotateCcw />} title="Retours et pertes"
            text="Analysez les retours, pertes et motifs pour mieux maîtriser vos coûts.">
            <MiniTable title="Retours" color="#fb923c" redCol={3}
              heads={["Date", "Article", "Quantité", "Montant"]}
              rows={[["2026-10-13", "Burger", "-1", "-15.00"], ["2026-10-13", "Frites", "-1", "-8.00"],
                ["2026-10-13", "Salade", "-2", "-18.00"], ["2026-10-13", "Boisson", "-1", "-5.00"]]} />
          </FeatureCard>

          <FeatureCard i={1} icon={<Gift />} title="Offres et remises"
            text="Visualisez l'impact de vos offres commerciales et remises sur votre chiffre d'affaires.">
            <MiniTable title="Offerts / remises" color="#f59e0b" redCol={3}
              heads={["Date", "Type", "Article", "Montant"]}
              rows={[["2026-10-13", "Offert", "Café", "0.00"], ["2026-10-13", "Remise", "Pizza", "-10.00"],
                ["2026-10-13", "Offert", "Dessert", "0.00"], ["2026-10-13", "Remise", "Menu", "-15.00"]]} />
          </FeatureCard>

          {/* Row 2 */}
          <FeatureCard i={1} icon={<CalendarDays />} title="Analyse par période"
            text="Comparez votre chiffre d'affaires par jour, semaine, mois ou année.">
            <div className="bg-orange-50 border border-orange-100 rounded-lg p-2 mt-3 text-[9px]">
              <div className="font-semibold mb-1 text-slate-800">Comparatif CA</div>
              <div className="flex gap-3 text-slate-500 mb-1">
                <span><i className="inline-block w-2 h-2 mr-1" style={{ background: ORANGE }} />CA 2026</span>
                <span><i className="inline-block w-2 h-2 mr-1" style={{ background: ORANGE_SOFT }} />CA 2025</span>
              </div>
              <Bars n={24} />
              <div className="flex justify-between text-[7px] text-slate-500 mt-1">
                {["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Aoû", "Sep", "Oct", "Nov", "Déc"].map((m) => <span key={m}>{m}</span>)}
              </div>
            </div>
          </FeatureCard>

          <FeatureCard i={0} icon={<Star />} title="Meilleures ventes"
            text="Identifiez vos articles, catégories et menus les plus vendus.">
            <div className="bg-orange-50 border border-orange-100 rounded-lg p-2 mt-3 text-[9px]">
              <div className="font-semibold mb-1.5 text-slate-800">Top des ventes</div>
              {[["Burger", 520, 100], ["Pizza", 480, 90], ["Salade", 320, 62], ["Frites", 280, 54], ["Boisson", 250, 48]].map(([n, v, w], i) => (
                <div key={n} className="flex items-center gap-2 py-[5px] border-t border-orange-100 text-slate-600">
                  <span className="w-3 text-slate-400">{i + 1}</span>
                  <span className="w-12">{n}</span>
                  <div className="flex-1"><div className="h-2 rounded-sm bg-gradient-to-r from-orange-600 to-amber-400" style={{ width: `${w}%` }} /></div>
                  <span className="w-7 text-right font-medium text-slate-900">{v}</span>
                </div>
              ))}
            </div>
          </FeatureCard>

          <FeatureCard i={1} icon={<CreditCard />} title="Ventes par règlement"
            text="Analysez vos encaissements par mode de règlement (espèces, carte, titres, …).">
            <div className="bg-orange-50 border border-orange-100 rounded-lg p-2 mt-3 text-[9px]">
              <div className="font-semibold mb-1.5 text-slate-800">Répartition des règlements</div>
              <div className="flex items-center gap-3">
                <Donut size={90} stops={PAY_STOPS} hole="bg-orange-50" />
                <div className="space-y-1.5 flex-1 text-slate-600">
                  {PAY_LEGEND.map(([c, n, p]) => (
                    <div key={n} className="flex items-center justify-between">
                      <span className="flex items-center gap-1"><i className="w-2 h-2 rounded-full inline-block" style={{ background: c }} />{n}</span>
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FeatureCard>

          <FeatureCard i={0} icon={<Share2 />} title="Multi-sites"
            text="Pilotez plusieurs points de vente depuis une seule interface.">
            <div className="bg-orange-50 border border-orange-100 rounded-lg p-2 mt-3 text-[9px] text-slate-600">
              <div className="font-semibold mb-1.5 text-slate-800">Sélection du point de vente</div>
              <div className="border border-orange-200 bg-white rounded px-2 py-1 mb-2 flex justify-between text-slate-600">Tous les établissements <span>⌄</span></div>
              {[["Restaurant Centre", "5 630.50", true], ["Restaurant Plage", "3 240.00", false], ["Café Ville", "2 180.00", false]].map(([n, v, c]) => (
                <div key={n} className="flex items-center justify-between py-1">
                  <span className="flex items-center gap-1.5">
                    <i className={`w-3 h-3 rounded-sm border inline-flex items-center justify-center ${c ? "bg-orange-600 border-orange-600 text-white" : "border-orange-300 bg-white"}`}>{c && <Check size={9} />}</i>{n}
                  </span><span>{v}</span>
                </div>
              ))}
              <div className="flex justify-between font-bold border-t border-orange-200 pt-1 mt-1 text-slate-900"><span>Total Général</span><span>11 050.50</span></div>
            </div>
          </FeatureCard>
        </div>
      </section>

      {/* ================= FOOTER BAND ================= */}
      <section className="grid grid-cols-12 gap-4 px-5 pt-6 pb-8 items-center bg-white border-t border-orange-100">
        <div className="col-span-5 relative rounded-r-3xl text-white flex items-center overflow-hidden min-h-[220px] shadow-xl shadow-orange-500/25 bg-gradient-to-br from-orange-600 to-orange-700">
          <div aria-hidden="true" className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white/10" />
          <div className="relative w-[45%] p-2 flex items-center justify-center">
            <img
              src={crsImage}
              alt="WhatsApp Illustration"
              className="w-52 h-52 object-contain drop-shadow-2xl scale-110"
            />
          </div>
          <div className="relative flex-1 pr-6 py-4 flex items-center gap-3">
            <div>
              <h3 className="font-bold text-[19px] leading-tight text-white">Recevez vos rapports sur WhatsApp</h3>
              <p className="text-[12px] mt-2 leading-snug text-orange-50">Recevez automatiquement vos rapports quotidiens ou horaires directement sur WhatsApp.</p>
            </div>
          </div>
        </div>

        <div className="col-span-4 text-center">
          <p className="text-[14px] font-medium text-left" style={{ color: ORANGE_DARK }}>ACCESSIBLE PARTOUT</p>
          <h3 className="text-[22px] font-extrabold text-left mb-3 text-slate-900">Sur tous vos appareils</h3>
          <div className="flex justify-around" style={{ color: ORANGE }}>
            {[[Laptop, "Ordinateur"], [Tablet, "Tablette"], [Smartphone, "Mobile"]].map(([I, l]) => (
              <div key={l}>
                <div className="w-[72px] h-[72px] rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center mx-auto">
                  <I size={40} strokeWidth={1.5} />
                </div>
                <div className="text-[12px] text-slate-600 mt-2">{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-3 rounded-2xl border border-orange-200 bg-orange-50 p-3">
          <div className="flex gap-2 items-start">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white shrink-0 shadow-md shadow-orange-500/30" style={{ background: ORANGE }}><ShieldCheck /></div>
            <div>
              <div className="text-[11px] font-semibold" style={{ color: ORANGE_DARK }}>SOLUTION SÉCURISÉE</div>
              <div className="text-[13px] font-bold leading-tight text-slate-900">pour le suivi des vos chiffres</div>
            </div>
          </div>
          <ul className="mt-3 space-y-1.5 text-[11px] text-slate-600">
            {["Vos données restent sur votre serveur", "Accès local ou à distance sécurisé", "Analyse & Statéstiques en temp réel", "Une solution performante et fiable"].map((t) => (
              <li key={t} className="flex gap-1.5"><Check size={14} className="shrink-0" style={{ color: ORANGE }} />{t}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}