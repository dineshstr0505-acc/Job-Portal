import './Home.css';
function Home() {
  const categories = [
    {
      title: "Software Development",
      jobs: "120 Jobs",
      icon: "💻",
    },
    {
      title: "Marketing",
      jobs: "85 Jobs",
      icon: "📢",
    },
    {
      title: "Finance",
      jobs: "60 Jobs",
      icon: "💰",
    },
    {
      title: "Healthcare",
      jobs: "95 Jobs",
      icon: "🏥",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Find Your <span>Dream Job</span>
          </h1>

          <p>
            Discover thousands of job opportunities with all the information
            you need. Build your career with the best companies.
          </p>

          <button onClick={() => window.location.href = '/jobs'}>Get Started</button>
        </div>
      </section>

      {/* Categories */}
      <section className="categories">
        <h2>Popular Categories</h2>

        <div className="category-container">
          {categories.map((item, index) => (
            <div className="category-card" key={index}>
              <h3>{item.title}</h3>
              <p>{item.jobs}</p>
              <div className="icon">{item.icon}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose */}
      <section className="why-us">
        <h2>Why Choose Us?</h2>

        <div className="why-container">
          <div className="why-card">
            <h3>1000+ Jobs</h3>
            <p>Explore thousands of verified job opportunities.</p>
          </div>

          <div className="why-card">
            <h3>Top Companies</h3>
            <p>Apply to leading companies across different industries.</p>
          </div>

          <div className="why-card">
            <h3>Easy Apply</h3>
            <p>Apply for jobs with just a few clicks.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Ready to Start Your Career?</h2>

        <p>Join thousands of job seekers and get hired today.</p>

        <button>Get Started</button>
      </section>
    </>
  );
}

export default Home;