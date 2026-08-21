import { ArrowUpRight, MapPin } from 'lucide-react';
import { useLang } from '@/context/LangContext';
import { t, tr, nearbySites } from '@/data/content';
import { PageHeader } from '@/components/Layout';

export default function Nearby() {
  const { lang } = useLang();
  return (
    <main>
      <PageHeader title={tr(t.nearby.title, lang)} subtitle={tr(t.nearby.subtitle, lang)} image={nearbySites[0].image} />
      <section className="nearby-section section-pad">
        <div className="nearby-grid">
          {nearbySites.map((site, i) => (
            <article key={i} className={`nearby-card ${i % 2 === 1 ? 'reverse' : ''}`}>
              <div className="nearby-card-image">
                <img src={site.image} alt={tr(site.name, lang)} />
              </div>
              <div className="nearby-card-body">
                <div className="nearby-distance">
                  <MapPin size={16} /> {site.distance} {tr(t.nearby.distance, lang)}
                </div>
                <h3>{tr(site.name, lang)}</h3>
                <p>{tr(site.desc, lang)}</p>
                <button className="text-link">{tr(t.nearby.visit, lang)} <ArrowUpRight size={16} /></button>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="nearby-map-cta">
        <div>
          <p className="eyebrow light">{tr(t.hero.eyebrow, lang)}</p>
          <h2>{tr(t.nearby.title, lang)}</h2>
          <p>{tr(t.nearby.subtitle, lang)}</p>
        </div>
      </section>
    </main>
  );
}
