import { Link } from 'react-router-dom';
import { ArrowUpRight, ChevronDown, Coffee, Play, Sparkles, Star, Utensils } from 'lucide-react';
import { useLang } from '@/context/LangContext';
import { t, tr, rooms } from '@/data/content';

const photos = {
  hero: 'https://images.pexels.com/photos/2854553/pexels-photo-2854553.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  room: 'https://images.pexels.com/photos/35747339/pexels-photo-35747339.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  roomTwo: 'https://images.pexels.com/photos/34645131/pexels-photo-34645131.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  dining: 'https://images.pexels.com/photos/33144658/pexels-photo-33144658.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  pool: 'https://images.pexels.com/photos/11363037/pexels-photo-11363037.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  spa: 'https://images.pexels.com/photos/31234756/pexels-photo-31234756.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
};

export default function Home({ onBook }: { onBook: () => void }) {
  const { lang } = useLang();
  return (
    <main>
      <section className="hero" style={{ backgroundImage: `url(${photos.hero})` }}>
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow light">{tr(t.hero.eyebrow, lang)}</p>
          <h1>{tr(t.hero.title1, lang)}<br /><em>{tr(t.hero.title2, lang)}</em></h1>
          <p className="hero-copy">{tr(t.hero.copy, lang)}</p>
          <div className="hero-actions">
            <button className="primary-button" onClick={onBook}>{tr(t.hero.cta1, lang)} <ArrowUpRight size={18} /></button>
            <button className="play-button"><span><Play size={14} fill="currentColor" /></span> {tr(t.hero.cta2, lang)}</button>
          </div>
        </div>
        <div className="hero-note"><span className="line" /> <span>HOSSANA / 07°33′S 037°51′E</span></div>
        <div className="hero-scroll">{tr(t.hero.scroll, lang)} <ChevronDown size={16} /></div>
      </section>

      <section className="booking-bar">
        <div className="booking-field"><span className="field-icon">📅</span><label>{tr(t.booking.checkin, lang)} <strong>21 Aug 2026</strong></label></div>
        <div className="booking-field"><span className="field-icon">📅</span><label>{tr(t.booking.checkout, lang)} <strong>24 Aug 2026</strong></label></div>
        <div className="booking-field"><span className="field-icon">👥</span><label>{tr(t.booking.guests, lang)} <strong>2 adults, 1 room</strong></label></div>
        <button onClick={onBook}>{tr(t.booking.check, lang)}</button>
      </section>

      <section className="intro section-pad">
        <div className="intro-mark">L</div>
        <div>
          <p className="eyebrow">{tr(t.sections.stayEyebrow, lang)}</p>
          <h2>{tr(t.sections.stayTitle1, lang)}<br /><em>{tr(t.sections.stayTitle2, lang)}</em></h2>
        </div>
        <div className="intro-copy">
          <p>{tr(t.hero.copy, lang)}</p>
          <Link className="text-link" to="/rooms">{tr(t.sections.viewAll, lang)} <ArrowUpRight size={16} /></Link>
        </div>
      </section>

      <section className="feature-section section-pad" id="stay">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{tr(t.sections.stayEyebrow, lang)}</p>
            <h2>{tr(t.sections.stayTitle1, lang)}<br /><em>{tr(t.sections.stayTitle2, lang)}</em></h2>
          </div>
          <Link className="text-link" to="/rooms">{tr(t.sections.viewAll, lang)} <ArrowUpRight size={16} /></Link>
        </div>
        <div className="room-grid">
          <article className="room-card featured-room">
            <img src={rooms[0].image} alt={tr(rooms[0].name, lang)} />
            <div className="room-info">
              <div>
                <p className="eyebrow">01 / 03</p>
                <h3>{tr(rooms[0].name, lang)}</h3>
                <span>{rooms[0].bed} · {tr(rooms[0].view, lang)} · {rooms[0].size}</span>
              </div>
              <div className="price">{tr(t.rooms.from, lang)} <strong>ETB {rooms[0].price.toLocaleString()}</strong> <ArrowUpRight size={17} /></div>
            </div>
          </article>
          <article className="room-card">
            <img src={rooms[1].image} alt={tr(rooms[1].name, lang)} />
            <div className="room-info">
              <div>
                <p className="eyebrow">02 / 03</p>
                <h3>{tr(rooms[1].name, lang)}</h3>
                <span>{rooms[1].bed} · {tr(rooms[1].view, lang)} · {rooms[1].size}</span>
              </div>
              <div className="price">{tr(t.rooms.from, lang)} <strong>ETB {rooms[1].price.toLocaleString()}</strong> <ArrowUpRight size={17} /></div>
            </div>
          </article>
        </div>
      </section>

      <section className="experience-grid">
        <div className="experience-image" style={{ backgroundImage: `url(${photos.pool})` }}>
          <div className="image-label">{tr(t.sections.expTitle1, lang)}<br /><span>{tr(t.sections.expTitle2, lang)}</span></div>
        </div>
        <div className="experience-copy">
          <p className="eyebrow">{tr(t.sections.expEyebrow, lang)}</p>
          <h2>{tr(t.sections.expTitle1, lang)}<br /><em>{tr(t.sections.expTitle2, lang)}</em></h2>
          <p>{tr(t.hero.copy, lang)}</p>
          <div className="amenity-list">
            <div><Coffee size={21} /><span>{tr(t.about.value1, lang)}<small>{tr(t.about.value1Desc, lang)}</small></span></div>
            <div><Utensils size={21} /><span>{tr(t.sections.diningTitle1, lang)}<small>{tr(t.sections.diningTitle2, lang)}</small></span></div>
            <div><Sparkles size={21} /><span>{tr(t.about.value3, lang)}<small>{tr(t.about.value3Desc, lang)}</small></span></div>
          </div>
          <Link className="text-link" to="/menu">{tr(t.sections.diningTitle1, lang)} <ArrowUpRight size={16} /></Link>
        </div>
      </section>

      <section className="dining-section section-pad">
        <div className="dining-copy">
          <p className="eyebrow">{tr(t.sections.diningEyebrow, lang)}</p>
          <h2>{tr(t.sections.diningTitle1, lang)}<br /><em>{tr(t.sections.diningTitle2, lang)}</em></h2>
          <p>{tr(t.menu.subtitle, lang)}</p>
          <Link className="text-link" to="/menu">{tr(t.nav.menu, lang)} <ArrowUpRight size={16} /></Link>
        </div>
        <div className="dining-image" style={{ backgroundImage: `url(${photos.dining})` }}>
          <span>{tr(t.menu.breakfast, lang)} · {tr(t.menu.lunch, lang)} · {tr(t.menu.dinner, lang)}</span>
        </div>
      </section>

      <section className="quote-section">
        <div className="quote-mark">"</div>
        <blockquote>{tr(t.hero.copy, lang)}</blockquote>
        <div className="quote-author">
          <span className="avatar">N</span>
          <span><strong>Nardos M.</strong><small>Guest since 2024</small></span>
          <div className="stars"><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /></div>
        </div>
      </section>

      <section className="gallery-section section-pad">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{tr(t.sections.galleryEyebrow, lang)}</p>
            <h2>{tr(t.sections.galleryTitle1, lang)}<br /><em>{tr(t.sections.galleryTitle2, lang)}</em></h2>
          </div>
          <Link className="text-link" to="/gallery">{tr(t.nav.gallery, lang)} <ArrowUpRight size={16} /></Link>
        </div>
        <div className="gallery-grid">
          <img className="gallery-large" src={photos.spa} alt="Spa" />
          <img src={photos.pool} alt="Pool" />
          <img src={rooms[1].image} alt="Room" />
        </div>
      </section>

      <section className="footer-cta">
        <div>
          <p className="eyebrow light">{tr(t.hero.eyebrow, lang)}</p>
          <h2>{tr(t.hero.title1, lang)}<br /><em>{tr(t.hero.title2, lang)}</em></h2>
        </div>
        <button className="primary-button" onClick={onBook}>{tr(t.nav.book, lang)} <ArrowUpRight size={18} /></button>
      </section>
    </main>
  );
}
