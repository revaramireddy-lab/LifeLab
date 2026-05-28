import { useState } from "react";
import { motion } from "framer-motion";
import "./styles.css";

export default function App() {
  const [gameState, setGameState] = useState("start");
  const [stats, setStats] = useState({
    money: 50000,
    happiness: 75,
    health: 80,
    career: "Entry Level",
    year: 22,
    relationships: 50,
    skills: [],
  });

  const startGame = () => {
    setGameState("age22");
  };

  const makeChoice = (choice) => {
    if (choice === "college") {
      setStats({ 
        ...stats, 
        money: stats.money - 30000, 
        year: 23,
        skills: [...stats.skills, "Bachelor's Degree"]
      });
      setGameState("college_year1");
    } else if (choice === "work") {
      setStats({ 
        ...stats, 
        money: stats.money + 40000, 
        career: "Junior Developer", 
        year: 23,
        skills: [...stats.skills, "Work Experience"]
      });
      setGameState("work_year1");
    } else if (choice === "travel") {
      setStats({ 
        ...stats, 
        money: stats.money - 20000, 
        happiness: stats.happiness + 20, 
        year: 23,
        relationships: stats.relationships + 15,
        skills: [...stats.skills, "Travel Experience"]
      });
      setGameState("travel_year1");
    } else if (choice === "college_internship") {
      setStats({ 
        ...stats, 
        money: stats.money + 15000, 
        skills: [...stats.skills, "Internship"],
        year: 24
      });
      setGameState("age24_college");
    } else if (choice === "college_party") {
      setStats({ 
        ...stats, 
        happiness: stats.happiness + 15, 
        relationships: stats.relationships + 20,
        health: stats.health - 10,
        year: 24
      });
      setGameState("age24_college");
    } else if (choice === "work_promotion") {
      setStats({ 
        ...stats, 
        money: stats.money + 60000, 
        career: "Senior Developer",
        year: 24
      });
      setGameState("age24_work");
    } else if (choice === "work_switch") {
      setStats({ 
        ...stats, 
        money: stats.money + 30000, 
        career: "Product Manager",
        happiness: stats.happiness + 10,
        year: 24
      });
      setGameState("age24_work");
    } else if (choice === "travel_teach") {
      setStats({ 
        ...stats, 
        money: stats.money + 25000, 
        happiness: stats.happiness + 10,
        skills: [...stats.skills, "Teaching"],
        year: 24
      });
      setGameState("age24_travel");
    } else if (choice === "travel_backpack") {
      setStats({ 
        ...stats, 
        money: stats.money - 15000, 
        happiness: stats.happiness + 25,
        relationships: stats.relationships + 15,
        year: 24
      });
      setGameState("age24_travel");
    } else if (choice === "grad_startup") {
      setStats({ 
        ...stats, 
        money: stats.money - 20000, 
        career: "Startup Founder",
        happiness: stats.happiness + 15,
        year: 26
      });
      setGameState("age26_startup");
    } else if (choice === "grad_corporate") {
      setStats({ 
        ...stats, 
        money: stats.money + 80000, 
        career: "Manager",
        year: 26
      });
      setGameState("age26_corporate");
    } else if (choice === "startup_success") {
      setStats({ 
        ...stats, 
        money: stats.money + 200000, 
        happiness: stats.happiness + 20,
        career: "CEO",
        year: 28
      });
      setGameState("age28_startup_success");
    } else if (choice === "startup_fail") {
      setStats({ 
        ...stats, 
        money: stats.money - 30000, 
        happiness: stats.happiness - 15,
        health: stats.health - 20,
        year: 28
      });
      setGameState("age28_startup_fail");
    } else if (choice === "corporate_climb") {
      setStats({ 
        ...stats, 
        money: stats.money + 150000, 
        career: "Director",
        year: 28
      });
      setGameState("age28_corporate");
    } else if (choice === "corporate_quit") {
      setStats({ 
        ...stats, 
        money: stats.money + 50000, 
        happiness: stats.happiness + 25,
        health: stats.health + 15,
        year: 28
      });
      setGameState("age28_quit");
    } else if (choice === "marriage") {
      setStats({ 
        ...stats, 
        relationships: 100,
        happiness: stats.happiness + 30,
        year: 30
      });
      setGameState("age30_married");
    } else if (choice === "single") {
      setStats({ 
        ...stats, 
        happiness: stats.happiness + 10,
        year: 30
      });
      setGameState("age30_single");
    } else if (choice === "kids") {
      setStats({ 
        ...stats, 
        money: stats.money - 100000, 
        happiness: stats.happiness + 25,
        health: stats.health - 15,
        year: 32
      });
      setGameState("age32_kids");
    } else if (choice === "no_kids") {
      setStats({ 
        ...stats, 
        money: stats.money + 50000, 
        happiness: stats.happiness + 15,
        year: 32
      });
      setGameState("age32_no_kids");
    } else if (choice === "retire_early") {
      setGameState("ending_early_retirement");
    } else if (choice === "keep_working") {
      setStats({ 
        ...stats, 
        money: stats.money + 200000,
        year: 40
      });
      setGameState("age40_final");
    } else if (choice === "restart") {
      setGameState("start");
      setStats({ 
        money: 50000, 
        happiness: 75, 
        health: 80, 
        career: "Entry Level", 
        year: 22,
        relationships: 50,
        skills: []
      });
    }
  };

  return (
    <div className="app">
      {gameState === "start" && (
        <motion.div className="screen" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h1>LIFE SIMULATOR</h1>
          <p>Make choices that shape your future. Every decision matters.</p>
          <p style={{ fontSize: "0.9rem", color: "#888" }}>Your choices will determine your career, relationships, and happiness.</p>
          <button className="big-btn" onClick={startGame}>START GAME</button>
        </motion.div>
      )}

      {gameState === "age22" && (
        <motion.div className="screen" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h2>Age 22 - Just Starting Out</h2>
          <p>You just graduated high school. You have $50,000 saved up. What's your next move?</p>
          <div className="choices">
            <button onClick={() => makeChoice("college")}>📚 Go to College</button>
            <button onClick={() => makeChoice("work")}>💼 Start Working</button>
            <button onClick={() => makeChoice("travel")}>✈️ Travel the World</button>
          </div>
        </motion.div>
      )}

      {gameState === "college_year1" && (
        <motion.div className="screen" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h2>Age 23 - First Year of College</h2>
          <p>You're in your first year of college. Money is tight but you're learning a lot.</p>
          <Stats stats={stats} />
          <div className="choices">
            <button onClick={() => makeChoice("college_internship")}>🏢 Take a Summer Internship</button>
            <button onClick={() => makeChoice("college_party")}>🎉 Enjoy College Life</button>
          </div>
        </motion.div>
      )}

      {gameState === "age24_college" && (
        <motion.div className="screen" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h2>Age 24 - Near Graduation</h2>
          <p>You're finishing your degree. What comes next?</p>
          <Stats stats={stats} />
          <div className="choices">
            <button onClick={() => makeChoice("grad_startup")}>🚀 Start Your Own Business</button>
            <button onClick={() => makeChoice("grad_corporate")}>🏢 Join a Big Company</button>
          </div>
        </motion.div>
      )}

      {gameState === "work_year1" && (
        <motion.div className="screen" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h2>Age 23 - Your First Year Working</h2>
          <p>You've landed a solid job and making good money already.</p>
          <Stats stats={stats} />
          <div className="choices">
            <button onClick={() => makeChoice("work_promotion")}>📈 Climb the Corporate Ladder</button>
            <button onClick={() => makeChoice("work_switch")}>🔄 Switch to a Better Company</button>
          </div>
        </motion.div>
      )}

      {gameState === "age24_work" && (
        <motion.div className="screen" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h2>Age 24 - Career Success</h2>
          <p>You're doing well at work. Promotions and opportunities are coming your way.</p>
          <Stats stats={stats} />
          <div className="choices">
            <button onClick={() => makeChoice("grad_startup")}>🚀 Take the Risk - Start a Business</button>
            <button onClick={() => makeChoice("grad_corporate")}>📚 Keep Growing in Corporate</button>
          </div>
        </motion.div>
      )}

      {gameState === "travel_year1" && (
        <motion.div className="screen" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h2>Age 23 - A Year of Travel</h2>
          <p>You've been exploring the world and making new friends everywhere.</p>
          <Stats stats={stats} />
          <div className="choices">
            <button onClick={() => makeChoice("travel_teach")}>📚 Teach English Abroad & Make Money</button>
            <button onClick={() => makeChoice("travel_backpack")}>🎒 Continue Backpacking Adventures</button>
          </div>
        </motion.div>
      )}

      {gameState === "age24_travel" && (
        <motion.div className="screen" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h2>Age 24 - Still Traveling</h2>
          <p>You've seen more of the world than most. Time to settle down or continue?</p>
          <Stats stats={stats} />
          <div className="choices">
            <button onClick={() => makeChoice("grad_corporate")}>🏢 Get a Real Job</button>
            <button onClick={() => makeChoice("grad_startup")}>🚀 Start Digital Nomad Business</button>
          </div>
        </motion.div>
      )}

      {gameState === "age26_startup" && (
        <motion.div className="screen" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h2>Age 26 - Startup Founder</h2>
          <p>You took the leap! Your startup is in its early days. Will you succeed or fail?</p>
          <Stats stats={stats} />
          <div className="choices">
            <button onClick={() => makeChoice("startup_success")}>🎯 The Startup Takes Off!</button>
            <button onClick={() => makeChoice("startup_fail")}>📉 The Startup Struggles</button>
          </div>
        </motion.div>
      )}

      {gameState === "age26_corporate" && (
        <motion.div className="screen" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h2>Age 26 - Corporate Career</h2>
          <p>You're climbing the corporate ladder. Your career is on track.</p>
          <Stats stats={stats} />
          <div className="choices">
            <button onClick={() => makeChoice("corporate_climb")}>📈 Pursue Leadership & Power</button>
            <button onClick={() => makeChoice("corporate_quit")}>🏝️ Quit the Rat Race</button>
          </div>
        </motion.div>
      )}

      {gameState === "age28_startup_success" && (
        <motion.div className="screen" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h2>🎉 Age 28 - Startup Success!</h2>
          <p>Your startup exploded! You're now worth millions. Life is good!</p>
          <Stats stats={stats} />
          <div className="choices">
            <button onClick={() => makeChoice("marriage")}>💍 Find Love & Settle Down</button>
            <button onClick={() => makeChoice("single")}>🎊 Enjoy the Single Life</button>
          </div>
        </motion.div>
      )}

      {gameState === "age28_startup_fail" && (
        <motion.div className="screen" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h2>Age 28 - Startup Failed</h2>
          <p>Your startup didn't make it. But you learned a lot. Time for a new chapter.</p>
          <Stats stats={stats} />
          <div className="choices">
            <button onClick={() => makeChoice("grad_corporate")}>💼 Get a Corporate Job</button>
            <button onClick={() => makeChoice("startup_success")}>🚀 Try Another Startup</button>
          </div>
        </motion.div>
      )}

      {gameState === "age28_corporate" && (
        <motion.div className="screen" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h2>Age 28 - Top of the Game</h2>
          <p>You're a director at a major company. Money and respect are flowing in.</p>
          <Stats stats={stats} />
          <div className="choices">
            <button onClick={() => makeChoice("marriage")}>💍 Find Love & Settle Down</button>
            <button onClick={() => makeChoice("single")}>🎊 Keep Living for Yourself</button>
          </div>
        </motion.div>
      )}

      {gameState === "age28_quit" && (
        <motion.div className="screen" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h2>Age 28 - Freedom!</h2>
          <p>You quit the corporate world. You're happier, healthier, and ready for what's next.</p>
          <Stats stats={stats} />
          <div className="choices">
            <button onClick={() => makeChoice("marriage")}>💍 Find a Partner</button>
            <button onClick={() => makeChoice("single")}>🌍 Travel & Explore</button>
          </div>
        </motion.div>
      )}

      {gameState === "age30_married" && (
        <motion.div className="screen" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h2>Age 30 - Married!</h2>
          <p>You've found someone special and got married. Life feels complete in a new way.</p>
          <Stats stats={stats} />
          <div className="choices">
            <button onClick={() => makeChoice("kids")}>👶 Start a Family</button>
            <button onClick={() => makeChoice("no_kids")}>✨ Enjoy Marriage Without Kids</button>
          </div>
        </motion.div>
      )}

      {gameState === "age30_single" && (
        <motion.div className="screen" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h2>Age 30 - Living Solo</h2>
          <p>You're thriving as a single person. Full freedom and independence.</p>
          <Stats stats={stats} />
          <div className="choices">
            <button onClick={() => makeChoice("retire_early")}>🏝️ Plan Retirement</button>
            <button onClick={() => makeChoice("keep_working")}>💪 Push for More Success</button>
          </div>
        </motion.div>
      )}

      {gameState === "age32_kids" && (
        <motion.div className="screen" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h2>Age 32 - Parent Life</h2>
          <p>You have kids now. Life is busier, but more meaningful. Parenthood is rewarding.</p>
          <Stats stats={stats} />
          <div className="choices">
            <button onClick={() => makeChoice("keep_working")}>💼 Work Hard for Your Family</button>
            <button onClick={() => makeChoice("retire_early")}>🏡 Focus on Family Time</button>
          </div>
        </motion.div>
      )}

      {gameState === "age32_no_kids" && (
        <motion.div className="screen" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h2>Age 32 - Child-Free</h2>
          <p>You chose not to have kids. More freedom and flexibility in life.</p>
          <Stats stats={stats} />
          <div className="choices">
            <button onClick={() => makeChoice("keep_working")}>🚀 Pursue Ambitious Goals</button>
            <button onClick={() => makeChoice("retire_early")}>🌴 Start the Good Life</button>
          </div>
        </motion.div>
      )}

      {gameState === "age40_final" && (
        <motion.div className="screen" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h2>Age 40 - Peak of Life</h2>
          <p>A decade later, you've accumulated wisdom, wealth, and experience. Life is good.</p>
          <Stats stats={stats} />
          <div className="choices">
            <button onClick={() => makeChoice("retire_early")}>🏝️ Retire in Style</button>
          </div>
        </motion.div>
      )}

      {gameState === "ending_early_retirement" && (
        <motion.div className="screen" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h2>🎉 You Did It! Retirement!</h2>
          <p>Congratulations! You've built a life and earned your retirement. Enjoy the peace.</p>
          <Stats stats={stats} />
          <p className="final-message">
            Your journey was unique. Every choice you made shaped who you became. 
            {stats.money > 300000 && " You ended with great wealth!"}
            {stats.happiness > 90 && " You found true happiness!"}
            {stats.relationships === 100 && " You found love!"}
          </p>
          <button className="big-btn" onClick={() => makeChoice("restart")}>PLAY AGAIN</button>
        </motion.div>
      )}
    </div>
  );
}

function Stats({ stats }) {
  return (
    <div className="stats">
      <div className="stat">💰 Money: ${stats.money.toLocaleString()}</div>
      <div className="stat">😊 Happiness: {stats.happiness}%</div>
      <div className="stat">❤️ Health: {stats.health}%</div>
      <div className="stat">💑 Relationships: {stats.relationships}%</div>
      <div className="stat">💼 Career: {stats.career}</div>
      <div className="stat">📅 Age: {stats.year}</div>
      {stats.skills.length > 0 && (
        <div className="stat">🎯 Skills: {stats.skills.join(", ")}</div>
      )}
    </div>
  );
}
