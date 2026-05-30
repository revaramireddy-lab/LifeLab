import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./styles.css";

export default function App() {
  const [gameState, setGameState] = useState("start");
  const [character, setCharacter] = useState({
    name: "You",
    age: 22,
    energy: 100,
    hunger: 100,
    happiness: 100,
    money: 5000,
    career: "None",
    careerLevel: 0,
    skills: [],
    outfit: "casual",
    home: "apartment",
    level: 1,
    experience: 0,
  });

  const [selectedTab, setSelectedTab] = useState("home");
  const [gameTime, setGameTime] = useState(0);

  // Simulate time passing
  useEffect(() => {
    const interval = setInterval(() => {
      setGameTime(t => t + 1);
      setCharacter(prev => ({
        ...prev,
        energy: Math.max(0, prev.energy - 1),
        hunger: Math.max(0, prev.hunger - 1),
        happiness: Math.max(0, prev.happiness - 0.5),
      }));
    }, 3000); // Every 3 seconds = 1 hour in game

    return () => clearInterval(interval);
  }, []);

  const startGame = () => {
    setGameState("game");
  };

  const work = () => {
    if (character.energy < 20) {
      alert("You're too tired! Rest first.");
      return;
    }
    const earnedMoney = Math.random() * 100 + 50;
    const earnedExp = Math.random() * 10 + 5;
    setCharacter(prev => ({
      ...prev,
      money: prev.money + earnedMoney,
      energy: prev.energy - 30,
      happiness: prev.happiness - 10,
      experience: prev.experience + earnedExp,
      careerLevel: Math.floor((prev.experience + earnedExp) / 50),
    }));
  };

  const playGame = () => {
    if (character.energy < 10) {
      alert("You're too tired!");
      return;
    }
    const earnedMoney = Math.random() * 50 + 20;
    setCharacter(prev => ({
      ...prev,
      money: prev.money + earnedMoney,
      energy: prev.energy - 20,
      happiness: prev.happiness + 30,
    }));
  };

  const eatFood = () => {
    if (character.money < 15) {
      alert("Not enough money!");
      return;
    }
    setCharacter(prev => ({
      ...prev,
      hunger: 100,
      money: prev.money - 15,
      happiness: prev.happiness + 10,
    }));
  };

  const sleep = () => {
    setCharacter(prev => ({
      ...prev,
      energy: 100,
      happiness: prev.happiness + 5,
    }));
  };

  const buyOutfit = (outfit, cost) => {
    if (character.money < cost) {
      alert("Not enough money!");
      return;
    }
    setCharacter(prev => ({
      ...prev,
      outfit,
      money: prev.money - cost,
      happiness: prev.happiness + 15,
    }));
  };

  const buyHome = (home, cost) => {
    if (character.money < cost) {
      alert("Not enough money!");
      return;
    }
    setCharacter(prev => ({
      ...prev,
      home,
      money: prev.money - cost,
      happiness: prev.happiness + 20,
    }));
  };

  const getCharacterImage = () => {
    const outfitColors = {
      casual: "👨‍💼",
      professional: "🧑‍💻",
      fancy: "🤵",
      athletic: "🏃",
    };
    const careerEmojis = {
      None: "😐",
      Developer: "💻",
      Manager: "📊",
      Doctor: "👨‍⚕️",
      CEO: "👔",
    };
    return outfitColors[character.outfit] || "👨";
  };

  const getHomeImage = () => {
    const homes = {
      apartment: "🏢",
      house: "🏠",
      mansion: "🏰",
    };
    return homes[character.home] || "🏢";
  };

  const eatHunger = character.hunger < 30;
  const tiredEnergy = character.energy < 30;
  const sadHappiness = character.happiness < 30;

  return (
    <div className="app">
      {gameState === "start" && (
        <motion.div className="start-screen" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h1>💼 CAREER LIFE SIMULATOR</h1>
          <p>Build your career, manage your life, and chase your dreams!</p>
          <div className="start-content">
            <div className="start-features">
              <p>✨ Choose your career path</p>
              <p>💰 Earn money and build wealth</p>
              <p>🏠 Buy homes and customize your lifestyle</p>
              <p>⚡ Manage energy, hunger, and happiness</p>
              <p>📈 Level up and progress</p>
            </div>
          </div>
          <button className="big-btn" onClick={startGame}>START YOUR JOURNEY</button>
        </motion.div>
      )}

      {gameState === "game" && (
        <div className="game-container">
          {/* Header */}
          <div className="header">
            <div className="character-preview">
              <span className="character-emoji">{getCharacterImage()}</span>
              <div className="character-info">
                <h2>{character.name}</h2>
                <p>Age: {character.age} | Level: {character.level}</p>
              </div>
            </div>
            <div className="money-display">
              💰 ${character.money.toFixed(0)}
            </div>
          </div>

          {/* Stats Bar */}
          <div className="stats-bar">
            <div className={`stat ${tiredEnergy ? "critical" : ""}`}>
              <span>⚡ Energy</span>
              <div className="stat-bar">
                <div className="stat-fill" style={{ width: `${character.energy}%` }}></div>
              </div>
              <span>{character.energy.toFixed(0)}%</span>
            </div>
            <div className={`stat ${eatHunger ? "critical" : ""}`}>
              <span>🍔 Hunger</span>
              <div className="stat-bar">
                <div className="stat-fill" style={{ width: `${character.hunger}%` }}></div>
              </div>
              <span>{character.hunger.toFixed(0)}%</span>
            </div>
            <div className={`stat ${sadHappiness ? "critical" : ""}`}>
              <span>😊 Happiness</span>
              <div className="stat-bar">
                <div className="stat-fill" style={{ width: `${character.happiness}%` }}></div>
              </div>
              <span>{character.happiness.toFixed(0)}%</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="game-content">
            {selectedTab === "home" && (
              <motion.div className="tab-content" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <h3>Your Home {getHomeImage()}</h3>
                <div className="home-display">{getHomeImage()}</div>
                <div className="actions-grid">
                  <button 
                    className="action-btn"
                    onClick={sleep}
                    disabled={character.energy === 100}
                  >
                    😴 Sleep
                  </button>
                  <button 
                    className="action-btn"
                    onClick={eatFood}
                    disabled={character.hunger === 100}
                  >
                    🍽️ Eat Food
                  </button>
                </div>
              </motion.div>
            )}

            {selectedTab === "work" && (
              <motion.div className="tab-content" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <h3>💼 Career: {character.career || "Choose one!"}</h3>
                <div className="career-level">Level: {character.careerLevel} / Exp: {character.experience.toFixed(0)}</div>
                
                {character.career === "None" && (
                  <div className="career-options">
                    <button 
                      className="career-btn"
                      onClick={() => setCharacter({...character, career: "Developer"})}
                    >
                      💻 Become a Developer
                    </button>
                    <button 
                      className="career-btn"
                      onClick={() => setCharacter({...character, career: "Manager"})}
                    >
                      📊 Become a Manager
                    </button>
                    <button 
                      className="career-btn"
                      onClick={() => setCharacter({...character, career: "Doctor"})}
                    >
                      👨‍⚕️ Become a Doctor
                    </button>
                    <button 
                      className="career-btn"
                      onClick={() => setCharacter({...character, career: "CEO"})}
                    >
                      👔 Become a CEO
                    </button>
                  </div>
                )}

                {character.career !== "None" && (
                  <div className="work-actions">
                    <button 
                      className="action-btn large"
                      onClick={work}
                      disabled={character.energy < 20}
                    >
                      💪 Work ({character.careerLevel})
                    </button>
                    <p>Earn: $50-150 | Uses Energy</p>
                  </div>
                )}
              </motion.div>
            )}

            {selectedTab === "play" && (
              <motion.div className="tab-content" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <h3>🎮 Mini Games</h3>
                <div className="minigame-section">
                  <p>Play games to earn money and relax!</p>
                  <button 
                    className="action-btn large"
                    onClick={playGame}
                    disabled={character.energy < 10}
                  >
                    🎯 Play Trivia Game
                  </button>
                  <p>Earn: $20-70 | Uses Energy</p>
                </div>
              </motion.div>
            )}

            {selectedTab === "shop" && (
              <motion.div className="tab-content" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <h3>🛍️ Shop</h3>
                
                <div className="shop-section">
                  <h4>👕 Outfits</h4>
                  <div className="shop-items">
                    <button 
                      className={`shop-item ${character.outfit === "casual" ? "owned" : ""}`}
                      onClick={() => buyOutfit("casual", 100)}
                    >
                      👨‍💼 Casual ($100)
                    </button>
                    <button 
                      className={`shop-item ${character.outfit === "professional" ? "owned" : ""}`}
                      onClick={() => buyOutfit("professional", 300)}
                    >
                      🧑‍💻 Professional ($300)
                    </button>
                    <button 
                      className={`shop-item ${character.outfit === "fancy" ? "owned" : ""}`}
                      onClick={() => buyOutfit("fancy", 500)}
                    >
                      🤵 Fancy ($500)
                    </button>
                    <button 
                      className={`shop-item ${character.outfit === "athletic" ? "owned" : ""}`}
                      onClick={() => buyOutfit("athletic", 200)}
                    >
                      🏃 Athletic ($200)
                    </button>
                  </div>
                </div>

                <div className="shop-section">
                  <h4>🏠 Homes</h4>
                  <div className="shop-items">
                    <button 
                      className={`shop-item ${character.home === "apartment" ? "owned" : ""}`}
                      onClick={() => buyHome("apartment", 500)}
                    >
                      🏢 Apartment ($500)
                    </button>
                    <button 
                      className={`shop-item ${character.home === "house" ? "owned" : ""}`}
                      onClick={() => buyHome("house", 5000)}
                    >
                      🏠 House ($5000)
                    </button>
                    <button 
                      className={`shop-item ${character.home === "mansion" ? "owned" : ""}`}
                      onClick={() => buyHome("mansion", 20000)}
                    >
                      🏰 Mansion ($20000)
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {selectedTab === "stats" && (
              <motion.div className="tab-content" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <h3>📊 Your Stats</h3>
                <div className="stats-detailed">
                  <div className="stat-detail">
                    <strong>Name:</strong> {character.name}
                  </div>
                  <div className="stat-detail">
                    <strong>Age:</strong> {character.age}
                  </div>
                  <div className="stat-detail">
                    <strong>Level:</strong> {character.level}
                  </div>
                  <div className="stat-detail">
                    <strong>Career:</strong> {character.career}
                  </div>
                  <div className="stat-detail">
                    <strong>Career Level:</strong> {character.careerLevel}
                  </div>
                  <div className="stat-detail">
                    <strong>Home:</strong> {character.home}
                  </div>
                  <div className="stat-detail">
                    <strong>Outfit:</strong> {character.outfit}
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Navigation Tabs */}
          <div className="nav-tabs">
            <button 
              className={`nav-btn ${selectedTab === "home" ? "active" : ""}`}
              onClick={() => setSelectedTab("home")}
            >
              🏠 Home
            </button>
            <button 
              className={`nav-btn ${selectedTab === "work" ? "active" : ""}`}
              onClick={() => setSelectedTab("work")}
            >
              💼 Career
            </button>
            <button 
              className={`nav-btn ${selectedTab === "play" ? "active" : ""}`}
              onClick={() => setSelectedTab("play")}
            >
              🎮 Play
            </button>
            <button 
              className={`nav-btn ${selectedTab === "shop" ? "active" : ""}`}
              onClick={() => setSelectedTab("shop")}
            >
              🛍️ Shop
            </button>
            <button 
              className={`nav-btn ${selectedTab === "stats" ? "active" : ""}`}
              onClick={() => setSelectedTab("stats")}
            >
              📊 Stats
            </button>
          </div>

          {/* Critical Alerts */}
          <div className="alerts">
            {eatHunger && <div className="alert">🚨 You're hungry! Eat something!</div>}
            {tiredEnergy && <div className="alert">🚨 You're exhausted! Sleep!</div>}
            {sadHappiness && <div className="alert">🚨 You're sad! Do something fun!</div>}
          </div>
        </div>
      )}
    </div>
  );
}
