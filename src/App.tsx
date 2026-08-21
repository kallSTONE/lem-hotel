import { useState } from 'react';
import {
  ArrowUpRight,
  BedDouble,
  Bell,
  CalendarDays,
  Check,
  ChevronDown,
  ChevronRight,
  Coffee,
  DoorOpen,
  Facebook,
  Instagram,
  LayoutDashboard,
  Menu,
  MessageCircle,
  MoreHorizontal,
  Play,
  Plus,
  Search,
  Settings,
  Sparkles,
  Star,
  Utensils,
  Users,
  X,
} from 'lucide-react';

const photos = {
  hero: 'https://images.pexels.com/photos/2854553/pexels-photo-2854553.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  room: 'https://images.pexels.com/photos/35747339/pexels-photo-35747339.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  dining: 'https://images.pexels.com/photos/33144658/pexels-photo-33144658.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  spa: 'https://images.pexels.com/photos/31234756/pexels-photo-31234756.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  roomTwo: 'https://images.pexels.com/photos/34645131/pexels-photo-34645131.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  pool: 'https://images.pexels.com/photos/11363037/pexels-photo-11363037.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
};

type Booking = { guest: string; room: string; dates: string; status: 'Confirmed' | 'Pending' };

const bookings: Booking[] = [
  { guest: 'Dawit Alemu', room: 'Executive Suite', dates: 'Aug 21 – Aug 24', status: 'Confirmed' },
  { guest: 'Hanna Tesfaye', room: 'Deluxe King', dates: 'Aug 22 – Aug 25', status: 'Pending' },
  { guest: 'Michael Chen', room: 'Classic Twin', dates: 'Aug 23 – Aug 27', status: 'Confirmed' },
];

function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [bookingSent, setBookingSent] = useState(false);
  const [announcement, setAnnouncement] = useState('Sunday brunch is now served from 8:00 AM to 2:00 PM.');

  const submitBooking = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setBookingSent(true);
  };

  return (
    <div className="site-shell">
      <div className="announcement"><span><Sparkles size={14} /> Welcome to Lem Hotel — your stay, beautifully considered.</span><button onClick={() => setAnnouncement('')} aria-label="Close announcement"><X size={15} /></button></div>
      {announcement && <div className="announcement-mobile">{announcement}</div>}
      <header className="nav-wrap">
        <a className="brand" href="#home"><img src="/image.png" alt="Lem Hotel" /><span>LEM HOTEL<small>HOSSANA · ETHIOPIA</small></span></a>
        <nav className={menuOpen ? 'nav-links mobile-visible' : 'nav-links'}>
          <a href="#stay" onClick={() => setMenuOpen(false)}>Stay</a><a href="#dining" onClick={() => setMenuOpen(false)}>Dining</a><a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a><a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
        <div className="nav-actions"><button className="admin-trigger" onClick={() => setAdminOpen(true)}><LayoutDashboard size={15} /> Staff view</button><button className="book-button" onClick={() => { setBookingOpen(true); setBookingSent(false); }}>Book your stay <ArrowUpRight size={17} /></button><button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">{menuOpen ? <X /> : <Menu />}</button></div>
      </header>

      <main>
        <section className="hero" id="home" style={{ backgroundImage: `url(${photos.hero})` }}>
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="eyebrow light">A gentler way to arrive</p>
            <h1>Stay awhile.<br /><em>Feel at home.</em></h1>
            <p className="hero-copy">A quiet, considered hotel in the heart of Hossana. Come for the view, stay for the warmth.</p>
            <div className="hero-actions"><button className="primary-button" onClick={() => setBookingOpen(true)}>Find your room <ArrowUpRight size={18} /></button><button className="play-button"><span><Play size={14} fill="currentColor" /></span> Watch our story</button></div>
          </div>
          <div className="hero-note"><span className="line" /> <span>HOSSANA / 07°33′S 037°51′E</span></div>
          <div className="hero-scroll">Scroll to explore <ChevronDown size={16} /></div>
        </section>

        <section className="booking-bar">
          <div className="booking-field"><CalendarDays size={20} /><label>Check in <strong>21 Aug 2026</strong></label></div><div className="booking-field"><CalendarDays size={20} /><label>Check out <strong>24 Aug 2026</strong></label></div><div className="booking-field"><Users size={20} /><label>Guests <strong>2 adults, 1 room</strong></label></div><button onClick={() => setBookingOpen(true)}>Check availability <Search size={18} /></button>
        </section>

        <section className="intro section-pad">
          <div className="intro-mark">L</div><div><p className="eyebrow">The Lem feeling</p><h2>Somewhere between<br /><em>here & there.</em></h2></div><div className="intro-copy"><p>We believe the best stays feel less like a hotel and more like a place you have always known. Slow mornings, open skies, and a warm welcome in Hossana.</p><a className="text-link" href="#experience">Discover our story <ArrowUpRight size={16} /></a></div>
        </section>

        <section className="feature-section section-pad" id="stay">
          <div className="section-heading"><div><p className="eyebrow">Stay with us</p><h2>Rooms with<br /><em>room to breathe.</em></h2></div><a className="text-link" href="#rooms">View all rooms <ArrowUpRight size={16} /></a></div>
          <div className="room-grid"><article className="room-card featured-room"><img src={photos.room} alt="Warmly lit Lem Hotel bedroom" /><div className="room-info"><div><p className="eyebrow">01 / 03</p><h3>Executive Suite</h3><span>King bed · City view · 42 m²</span></div><div className="price">From <strong>ETB 4,850</strong> <ArrowUpRight size={17} /></div></div></article><article className="room-card"><img src={photos.roomTwo} alt="Elegant hotel room" /><div className="room-info"><div><p className="eyebrow">02 / 03</p><h3>Deluxe King</h3><span>King bed · Garden view · 28 m²</span></div><div className="price">From <strong>ETB 3,650</strong> <ArrowUpRight size={17} /></div></div></article></div>
        </section>

        <section className="experience-grid" id="experience"><div className="experience-image" style={{ backgroundImage: `url(${photos.pool})` }}><div className="image-label">The courtyard<br /><span>Where days stretch longer</span></div></div><div className="experience-copy"><p className="eyebrow">A little more</p><h2>Made for the<br /><em>in-between.</em></h2><p>From an early coffee in the courtyard to a slow dinner under the stars, every corner of Lem is an invitation to pause. Experience Hossana at an unhurried pace.</p><div className="amenity-list"><div><Coffee size={21} /><span>Morning coffee ritual<small>Freshly brewed, every day</small></span></div><div><Utensils size={21} /><span>Table at Lem<small>Local ingredients, generous plates</small></span></div><div><Sparkles size={21} /><span>Quiet moments<small>Thoughtful spaces to simply be</small></span></div></div><a className="text-link" href="#dining">Explore the experience <ArrowUpRight size={16} /></a></div></section>

        <section className="dining-section section-pad" id="dining"><div className="dining-copy"><p className="eyebrow">At the table</p><h2>Good food,<br /><em>good company.</em></h2><p>Our kitchen follows the seasons and the stories of the region. Come hungry, leave with a new favourite.</p><button className="outline-button">Explore dining <ArrowUpRight size={17} /></button></div><div className="dining-image" style={{ backgroundImage: `url(${photos.dining})` }}><span>Breakfast · Lunch · Dinner</span></div></section>

        <section className="quote-section"><div className="quote-mark">“</div><blockquote>“Lem is the kind of place that makes you want to turn your phone off and stay one more night.”</blockquote><div className="quote-author"><span className="avatar">N</span><span><strong>Nardos M.</strong><small>Guest since 2024</small></span><div className="stars"><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /></div></div></section>

        <section className="gallery-section section-pad" id="gallery"><div className="section-heading"><div><p className="eyebrow">A glimpse of Lem</p><h2>Come as you are.<br /><em>Leave a little lighter.</em></h2></div><a className="text-link" href="#contact">Follow along <Instagram size={16} /></a></div><div className="gallery-grid"><img className="gallery-large" src={photos.spa} alt="Relaxing hotel spa" /><img src={photos.pool} alt="Hotel courtyard pool" /><img src={photos.roomTwo} alt="Lem Hotel suite" /></div></section>

        <section className="footer-cta" id="contact"><div><p className="eyebrow light">Your room is waiting</p><h2>Take the scenic<br /><em>route to Hossana.</em></h2></div><button className="primary-button" onClick={() => setBookingOpen(true)}>Book your stay <ArrowUpRight size={18} /></button></section>
      </main>

      <footer><div className="footer-brand"><img src="/image.png" alt="Lem Hotel" /><span>LEM HOTEL<small>HOSSANA · ETHIOPIA</small></span></div><p>Thoughtful stays in the heart of Hossana.</p><div className="footer-social"><Instagram size={17} /><Facebook size={17} /><span>© 2026 Lem Hotel</span></div></footer>

      {bookingOpen && <div className="modal-backdrop" onClick={() => setBookingOpen(false)}><div className="booking-modal" onClick={event => event.stopPropagation()}><button className="close-modal" onClick={() => setBookingOpen(false)}><X /></button>{bookingSent ? <div className="success-state"><div className="success-icon"><Check /></div><p className="eyebrow">Request received</p><h2>We’ll be in touch<br /><em>shortly.</em></h2><p>Your stay request has been saved. Our team will confirm availability with you soon.</p><button className="primary-button" onClick={() => setBookingOpen(false)}>Back to Lem <ArrowUpRight size={17} /></button></div> : <><p className="eyebrow">Make it yours</p><h2>Book your <em>stay.</em></h2><p className="modal-intro">Tell us a little about your visit and we’ll take care of the rest.</p><form onSubmit={submitBooking}><div className="form-row"><label>First name<input required placeholder="Your first name" /></label><label>Last name<input required placeholder="Your last name" /></label></div><label>Email address<input required type="email" placeholder="you@example.com" /></label><div className="form-row"><label>Check in<input required type="date" /></label><label>Check out<input required type="date" /></label></div><label>Room preference<select><option>Executive Suite</option><option>Deluxe King</option><option>Classic Twin</option></select></label><button className="primary-button full-width" type="submit">Request availability <ArrowUpRight size={18} /></button></form></>}</div></div>}

      {adminOpen && <div className="admin-panel"><div className="admin-top"><div className="admin-title"><div className="admin-logo"><LayoutDashboard size={19} /></div><span>Lem / <strong>Staff view</strong></span></div><div className="admin-user"><Bell size={18} /><span className="user-dot" /> <span>Admin</span><button onClick={() => setAdminOpen(false)}><X size={19} /></button></div></div><div className="admin-body"><aside><p className="side-label">Workspace</p><a className="active"><LayoutDashboard size={17} /> Overview</a><a><CalendarDays size={17} /> Bookings <b>12</b></a><a><Utensils size={17} /> Tables</a><a><MessageCircle size={17} /> Reviews <b>3</b></a><a><Bell size={17} /> Announcements</a><p className="side-label second">Manage</p><a><BedDouble size={17} /> Rooms</a><a><Settings size={17} /> Settings</a><div className="admin-help"><Sparkles size={18} /><strong>Need a hand?</strong><span>We’re here for you.</span></div></aside><div className="dashboard"><div className="dashboard-header"><div><p className="eyebrow">Thursday, 21 August 2026</p><h1>Good morning, Admin.</h1></div><button className="dark-button" onClick={() => setBookingOpen(true)}><Plus size={17} /> New booking</button></div><div className="stat-grid"><div><span>Total bookings</span><strong>48</strong><small className="positive">↑ 12.5% <i>vs last month</i></small></div><div><span>Occupancy rate</span><strong>76%</strong><small className="positive">↑ 8.4% <i>vs last month</i></small></div><div><span>Table reservations</span><strong>24</strong><small className="neutral">Today</small></div><div><span>Guest rating</span><strong>4.9 <Star size={17} fill="currentColor" /></strong><small className="positive">↑ 0.2 <i>vs last month</i></small></div></div><div className="dashboard-grid"><div className="dashboard-card bookings-card"><div className="card-title"><div><p className="eyebrow">Latest activity</p><h2>Upcoming bookings</h2></div><button>View all <ChevronRight size={16} /></button></div><div className="booking-table"><div className="table-head"><span>Guest</span><span>Room</span><span>Dates</span><span>Status</span><span /></div>{bookings.map(booking => <div className="table-row" key={booking.guest}><span className="guest-name"><span className="guest-avatar">{booking.guest.charAt(0)}</span>{booking.guest}</span><span>{booking.room}</span><span>{booking.dates}</span><span className={booking.status === 'Confirmed' ? 'status confirmed' : 'status pending'}>{booking.status}</span><MoreHorizontal size={18} /></div>)}</div></div><div className="dashboard-card announcement-card"><div className="card-title"><div><p className="eyebrow">Guest communication</p><h2>Announcement</h2></div><Bell size={19} /></div><p>Share a note with guests on the hotel website.</p><textarea value={announcement} onChange={event => setAnnouncement(event.target.value)} placeholder="Write an announcement..." /><button className="save-button" onClick={() => setAdminOpen(false)}><Check size={16} /> Publish announcement</button></div></div></div></div></div>}
    </div>
  );
}

export default App;
