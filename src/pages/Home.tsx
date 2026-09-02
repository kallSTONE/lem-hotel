import { useEffect, type CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { BedDouble, Clock3, MapPin, Utensils, Wifi, ArrowUpRight } from 'lucide-react';

const photos = {
  hero: '/assets/Images/welcome.webp',
  room: '/assets/Images/img3.webp',
  restaurant: '/assets/Images/LemHotelVenue.webp',
  corridor: '/assets/Images/Stage.webp',
  lounge: '/assets/Images/NightView.webp',
};

type HomeProps = {
  onBook: () => void;
};

const amenities = [
  { icon: BedDouble, title: 'COMFORTABLE', subtitle: 'ROOMS' },
  { icon: Utensils, title: 'RESTAURANT', subtitle: '& BAR' },
  { icon: Wifi, title: 'FREE', subtitle: 'WI-FI' },
  { icon: Clock3, title: '24/7', subtitle: 'SERVICE' },
];

export default function Home({ onBook }: HomeProps) {
  useEffect(() => {
    document.body.classList.add('lem-home-redesign');
    return () => document.body.classList.remove('lem-home-redesign');
  }, []);

  return (
    <main className="lem-home">
      <section
        className="lem-home-hero"
        style={{ '--lem-hero-image': `url(${photos.hero})` } as CSSProperties}
      >
        <div className="lem-hero-photo" aria-hidden="true" />

        <div className="lem-hero-panel">
          <div className="lem-hero-pattern" aria-hidden="true" />
          <div className="lem-hero-copy">
            <p className="lem-kicker">WELCOME TO</p>
            <h1>
              LEM
              <br />
              HOTEL
              <br />
              HOSSANA
            </h1>
            <span className="lem-rule" />
            <a className="lem-phone" href="tel:0996702253">
              phone no.: 0996702253
            </a>
          </div>
        </div>

        <div className="lem-hero-badge" aria-label="Lem Hotel">
          <span className="lem-badge-crown">♛</span>
          <span className="lem-badge-initials">LM</span>
          <span className="lem-badge-name">LEM HOTEL</span>
          <small>HOSSANA</small>
        </div>
      </section>

      <section className="lem-showcase">
        <div className="lem-photo-row">
          <figure>
            <img src={photos.room} alt="Comfortable hotel room" />
          </figure>
          <figure>
            <img src={photos.restaurant} alt="Hotel restaurant" />
          </figure>
          <figure>
            <img src={photos.corridor} alt="Hotel corridor" />
          </figure>
          <figure>
            <img src={photos.lounge} alt="Hotel lounge" />
          </figure>
        </div>

        <div className="lem-amenities">
          {amenities.map(({ icon: Icon, title, subtitle }) => (
            <div className="lem-amenity" key={`${title}-${subtitle}`}>
              <span className="lem-amenity-icon">
                <Icon size={36} strokeWidth={1.7} />
              </span>
              <strong>{title}</strong>
              <strong>{subtitle}</strong>
            </div>
          ))}
        </div>

        <div className="lem-divider" aria-hidden="true">
          <span />
          <i>✦</i>
          <span />
        </div>

        <div className="lem-address">
          <div className="lem-address-icon">
            <MapPin size={34} strokeWidth={1.8} />
          </div>
          <div className="lem-address-label">ADDRESS:-</div>
          <div className="lem-address-separator" />
          <div className="lem-address-value">ሆሳዕና ከተማ</div>
        </div>

        <div className="lem-social-line">
          <span>Lem International Hotel · 07–11</span>
          <span>#lemhotel #ሆሳዕና #hossana</span>
        </div>
      </section>

      <section className="lem-action-strip">
        <div>
          <span>LEM HOTEL HOSSANA</span>
          <p>Comfort, hospitality and a warm welcome in Hossana.</p>
        </div>
        <button className="lem-book-button" onClick={onBook}>
          BOOK NOW <ArrowUpRight size={17} />
        </button>
      </section>

      {/* Mobile-only fallback navigation; desktop uses the site's existing navbar. */}
      <nav className="lem-mobile-nav" aria-label="Home navigation">
        <Link to="/">HOME</Link>
        <Link to="/rooms">ROOMS</Link>
        <Link to="/menu">RESTAURANT</Link>
        <Link to="/gallery">GALLERY</Link>
        <button type="button" onClick={onBook}>BOOK NOW</button>
      </nav>
    </main>
  );
}