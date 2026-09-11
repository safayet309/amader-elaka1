import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import ServiceCard from "../components/ServiceCard";
import "./Home.css";

const popularServices = [
  {
    icon: "🪪",
    title: "জাতীয় পরিচয়পত্র",
    description: "NID সংক্রান্ত প্রয়োজনীয় তথ্য ও সেবা",
    path: "/government-services",
  },
  {
    icon: "📜",
    title: "জন্ম নিবন্ধন",
    description: "জন্ম নিবন্ধন ও সংশোধন সংক্রান্ত সেবা",
    path: "/government-services",
  },
  {
    icon: "🏠",
    title: "ভূমি সেবা",
    description: "জমি সংক্রান্ত প্রয়োজনীয় তথ্য ও সেবা",
    path: "/government-services",
  },
  {
    icon: "🚗",
    title: "ড্রাইভিং লাইসেন্স",
    description: "লাইসেন্স সংক্রান্ত তথ্য ও প্রয়োজনীয় সেবা",
    path: "/government-services",
  },
];

const quickServices = [
  {
    icon: "🚨",
    title: "Emergency",
    description: "বাংলাদেশের জরুরি সেবা নম্বর",
    path: "/emergency",
    variant: "emergency",
  },
  {
    icon: "🏥",
    title: "হাসপাতাল খুঁজুন",
    description: "আপনার এলাকার হাসপাতাল খুঁজে দেখুন",
    path: "/hospitals",
    variant: "highlight",
  },
  {
    icon: "👨‍⚕️",
    title: "ডাক্তার খুঁজুন",
    description: "বিশেষজ্ঞসহ ডাক্তার খুঁজে দেখুন",
    path: "/doctors",
    variant: "highlight",
  },
];

function Home() {
  return (
    <div className="home-page">
      <Header />

      <main>

        {/* Hero Section */}
        <section className="hero-section">
          <div className="container hero-container">

            <div className="hero-content">

              <div className="hero-badge">
                🇧🇩 আপনার এলাকার সেবা, এক জায়গায়
              </div>

              <h1>
                আপনার প্রয়োজনীয়
                <span> নাগরিক সেবা </span>
                সহজেই খুঁজে নিন
              </h1>

              <p>
                সরকারি সেবা, হাসপাতাল, ডাক্তার, জরুরি নম্বরসহ
                প্রয়োজনীয় তথ্য এখন এক জায়গায়।
              </p>

              <div className="hero-search">
                <span className="search-icon">⌕</span>

                <input
                  type="text"
                  placeholder="কোন সেবা খুঁজছেন?"
                  aria-label="সেবা খুঁজুন"
                />

                <button type="button">
                  খুঁজুন
                </button>
              </div>

              <div className="search-tags">
                <span>জনপ্রিয়:</span>

                <button type="button">NID</button>
                <button type="button">জন্ম নিবন্ধন</button>
                <button type="button">পাসপোর্ট</button>
                <button type="button">ভূমি সেবা</button>
              </div>

            </div>

            <div className="hero-visual">

              <div className="hero-circle hero-circle-one"></div>
              <div className="hero-circle hero-circle-two"></div>

              <div className="hero-card-main">
                <div className="hero-card-icon">
                  🏛️
                </div>

                <div>
                  <strong>নাগরিক সেবা</strong>
                  <span>সহজ, দ্রুত ও নির্ভরযোগ্য</span>
                </div>
              </div>

              <div className="hero-floating-card">
                <span>✓</span>
                <div>
                  <strong>এক জায়গায়</strong>
                  <small>প্রয়োজনীয় তথ্য</small>
                </div>
              </div>

            </div>

          </div>
        </section>


        {/* Quick Services */}
        <section className="section quick-section">
          <div className="container">

            <div className="section-heading">
              <div>
                <span className="section-kicker">
                  দ্রুত সেবা
                </span>

                <h2 className="section-title">
                  প্রয়োজনীয় সেবা এক ক্লিকেই
                </h2>

                <p className="section-description">
                  সবচেয়ে বেশি প্রয়োজন হয় এমন সেবাগুলো দ্রুত খুঁজে নিন।
                </p>
              </div>
            </div>

            <div className="quick-grid">
              {quickServices.map((service) => (
                <ServiceCard
                  key={service.title}
                  {...service}
                />
              ))}
            </div>

          </div>
        </section>


        {/* Popular Services */}
        <section className="section popular-section">
          <div className="container">

            <div className="section-heading section-heading-row">

              <div>
                <span className="section-kicker">
                  জনপ্রিয় সেবা
                </span>

                <h2 className="section-title">
                  সবচেয়ে বেশি খোঁজা সেবা
                </h2>

                <p className="section-description">
                  নাগরিকদের প্রয়োজনীয় জনপ্রিয় সেবাগুলো।
                </p>
              </div>

              <a
                href="/government-services"
                className="view-all"
              >
                সব সেবা দেখুন →
              </a>

            </div>

            <div className="popular-grid">
              {popularServices.map((service) => (
                <ServiceCard
                  key={service.title}
                  {...service}
                />
              ))}
            </div>

          </div>
        </section>


        {/* Information Section */}
        <section className="section information-section">
          <div className="container">

            <div className="information-box">

              <div className="information-icon">
                💡
              </div>

              <div className="information-content">
                <h2>
                  আপনার এলাকার তথ্য এখন হাতের মুঠোয়
                </h2>

                <p>
                  হাসপাতাল, ডাক্তার, সরকারি সেবা ও জরুরি
                  যোগাযোগের তথ্য সহজে খুঁজে পেতে
                  amader-elaka ব্যবহার করুন।
                </p>
              </div>

              <a
                href="/dashboard"
                className="information-button"
              >
                Dashboard দেখুন →
              </a>

            </div>

          </div>
        </section>

      </main>

      <BottomNav />
    </div>
  );
}

export default Home;
