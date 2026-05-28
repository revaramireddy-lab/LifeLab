import { motion } from "framer-motion";

const careers = [
  {
    title: "Medicine",
    jobs: ["Surgeon", "Pediatrician", "Psychiatrist"],
    color: "#dbeafe"
  },
  {
    title: "Business & Finance",
    jobs: ["Investment Banker", "Entrepreneur", "Marketing Director"],
    color: "#dcfce7"
  },
  {
    title: "Technology",
    jobs: ["Software Engineer", "AI Researcher", "UX Designer"],
    color: "#f3e8ff"
  }
];

export default function App() {
  return (
    <div className="app">
      <header className="hero">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          LifeLab
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Explore careers, balance life, and shape your future.
        </motion.p>

        <button className="primary-btn">Start Your Journey</button>
      </header>

      <section className="stats-section">
        <h2>Your Life Stats</h2>

        <div className="stats-grid">
          <div className="card">
            <h3>Money</h3>
            <p>$12,000</p>
          </div>

          <div className="card">
            <h3>Stress</h3>
            <p>42%</p>
          </div>

          <div className="card">
            <h3>Happiness</h3>
            <p>81%</p>
          </div>

          <div className="card">
            <h3>Knowledge</h3>
            <p>67%</p>
          </div>
        </div>
      </section>

      <section className="timeline">
        <h2>Future Timeline</h2>

        <div className="timeline-grid">
          <div className="timeline-card">
            <h3>Age 18</h3>
            <p>Applying for scholarships and building skills.</p>
          </div>

          <div className="timeline-card">
            <h3>Age 25</h3>
            <p>Balancing work, finances, and personal life.</p>
          </div>

          <div className="timeline-card">
            <h3>Age 35</h3>
            <p>Career growth, leadership, and burnout management.</p>
          </div>
        </div>
      </section>

      <section className="careers">
        <h2>Career Paths</h2>

        <div className="career-grid">
          {careers.map((career) => (
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="career-card"
              style={{ background: career.color }}
              key={career.title}
            >
              <h3>{career.title}</h3>

              <ul>
                {career.jobs.map((job) => (
                  <li key={job}>{job}</li>
                ))}
              </ul>

              <button>Explore</button>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="decision-section">
        <h2>Life Decisions</h2>

        <div className="decision-card">
          <h3>You have a major math test tomorrow.</h3>

          <div className="decision-buttons">
            <button>Study All Night</button>
            <button>Relax with Friends</button>
            <button>Hire a Tutor</button>
          </div>
        </div>
      </section>

      <footer>
        <p>LifeLab © 2026 — Build your future wisely.</p>
      </footer>
    </div>
  );
}
