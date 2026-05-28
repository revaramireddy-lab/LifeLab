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
  });

  const startGame = () => {
    setGameState("age22");
  };

  const makeChoice = (choice) => {
    if (choice === "college") {
      setStats({ ...stats, money: stats.money - 30000, year: 25 });
      setGameState("age25_college");
    } else if (choice === "work") {
      setStats({ ...stats, money: stats.money + 40000, career: "Manager", year: 25 });
      setGameState("age25_work");
    } else if (choice === "travel") {
      setStats({ ...stats, money: stats.money - 20000, happiness: stats.happiness + 20, year: 25 });
      setGameState("age25_travel");
    } else if (choice === "startup") {
      setStats({ ...stats, money: stats.money + 100000, career: "Entrepreneur", happiness: stats.happiness + 15, year: 30 });
      setGameState("age30_startup");
    } else if (choice === "stability") {
      setStats({ ...stats, money: stats.money + 60000, health: stats.health + 10, career: "Senior Manager", year: 30 });
      setGameState("age30_stability");
    } else if (choice === "slowdown") {
      setStats({ ...stats, happiness: stats.happiness + 25, health: stats.health + 20, year: 30 });
      setGameState("age30_slowdown");
    } else if (choice === "retire") {
      setGameState("ending_success");
    } else if (choice === "continue") {
      setGameState("age40");
    } else if (choice === "restart") {
      setGameState("start");
      setStats({ money: 50000, happiness: 75, health: 80, career: "Entry Level", year: 22 });
    }
  };

  return (
    <div className="app">
      {gameState === "start" && (
        <motion.div className="screen" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h1>LIFE SIMULATOR</h1>
          <p>Make choices that shape your future. Your decisions matter.</p>
          <button className="big-btn" onClick={startGame}>START GAME</button>
        </motion.div>
      )}

      {gameState === "age22" && (
        <motion.div className="screen" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h2>Age 22 - Just Starting Out</h2>
          <p>You're fresh out of high school with $50,000 and no debt. What's your next move?</p>
          <div className="choices">
            <button onClick={() => makeChoice("college")}>Go to College (Cost: $30k)</button>
            <button onClick={() => makeChoice("work")}>Start Working (Earn: $40k)</button>
            <button onClick={() => makeChoice("travel")}>Travel the World (Cost: $20k)</button>
          </div>
        </motion.div>
      )}

      {gameState === "age25_college" && (
        <motion.div className="screen" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h2>Age 25 - College Graduate</h2>
          <p>You graduated! Now you have a degree but less money. What's next?</p>
          <Stats stats={stats} />
          <div className="choices">
            <button onClick={() => makeChoice("startup")}>Start a Startup (Risky!)</button>
            <button onClick={() => makeChoice("stability")}>Get a Corporate Job</button>
            <button onClick={() => makeChoice("slowdown")}>Focus on Happiness</button>
          </div>
        </motion.div>
      )}

      {gameState === "age25_work" && (
        <motion.div className="screen" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h2>Age 25 - Working Since 22</h2>
          <p>You've been climbing the corporate ladder. You're doing well financially!</p>
          <Stats stats={stats} />
          <div className="choices">
            <button onClick={() => makeChoice("startup")}>Start a Startup (Risk it all!)</button>
            <button onClick={() => makeChoice("stability")}>Keep the Safe Job</button>
            <button onClick={() => makeChoice("slowdown")}>Relax and Enjoy Life</button>
          </div>
        </motion.div>
      )}

      {gameState === "age25_travel" && (
        <motion.div className="screen" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h2>Age 25 - Traveler & Wanderer</h2>
          <p>You spent 3 years exploring the world. You're happy but low on cash.</p>
          <Stats stats={stats} />
          <div className="choices">
            <button onClick={() => makeChoice("stability")}>Get a Stable Job Now</button>
            <button onClick={() => makeChoice("slowdown")}>Keep Traveling (Find Work Abroad)</button>
            <button onClick={() => makeChoice("startup")}>Start Remote Business</button>
          </div>
        </motion.div>
      )}

      {gameState === "age30_startup" && (
        <motion.div className="screen" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h2>Age 30 - Startup Success!</h2>
          <p>Your startup took off! You're wealthy and happy. The future looks bright!</p>
          <Stats stats={stats} />
          <div className="choices">
            <button onClick={() => makeChoice("retire")}>Retire Early & Travel</button>
            <button onClick={() => makeChoice("continue")}>Keep Growing the Business</button>
          </div>
        </motion.div>
      )}

      {gameState === "age30_stability" && (
        <motion.div className="screen" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h2>Age 30 - Stable & Secure</h2>
          <p>You've built a comfortable life with a good job, savings, and stability.</p>
          <Stats stats={stats} />
          <div className="choices">
            <button onClick={() => makeChoice("retire")}>Start Planning Retirement</button>
            <button onClick={() => makeChoice("continue")}>Push for More Growth</button>
          </div>
        </motion.div>
      )}

      {gameState === "age30_slowdown" && (
        <motion.div className="screen" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h2>Age 30 - Living Your Best Life</h2>
          <p>You prioritized happiness and health. Life is good, though money is tight.</p>
          <Stats stats={stats} />
          <div className="choices">
            <button onClick={() => makeChoice("stability")}>Find a Good Paying Job</button>
            <button onClick={() => makeChoice("continue")}>Keep Living Simply</button>
          </div>
        </motion.div>
      )}

      {gameState === "age40" && (
        <motion.div className="screen" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h2>Age 40 - The Long Game</h2>
          <p>A decade has passed. You've accumulated wisdom and experience.</p>
          <Stats stats={stats} />
          <div className="choices">
            <button onClick={() => makeChoice("retire")}>Retire Now</button>
            <button onClick={() => makeChoice("continue")}>Work Until 50</button>
          </div>
        </motion.div>
      )}

      {gameState === "ending_success" && (
        <motion.div className="screen" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h2>🎉 You Did It!</h2>
          <p>Congratulations! You've built a life and now you're ready for the next chapter.</p>
          <Stats stats={stats} />
          <p className="final-message">Your choices shaped your destiny. Every decision mattered.</p>
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
      <div className="stat">💼 Career: {stats.career}</div>
      <div className="stat">📅 Age: {stats.year}</div>
    </div>
  );
}
