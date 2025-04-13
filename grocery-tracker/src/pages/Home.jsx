import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/home.css";
import heroImage from "../assets/Grocery.jpg";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/expiring-soon");
  };

  return (
    <motion.div 
      className="home-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Never Let Your Groceries Go to Waste !
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Track expiry dates, reduce waste, and save money effortlessly.
          </motion.p>

          <motion.div
            className="hero-input"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <input
              type="text"
              placeholder="Search expiring grocery items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <motion.button
              onClick={handleSearch}
              whileHover={{ scale: 1.05 }}
            >
              Search
            </motion.button>
          </motion.div>
        </div>

        <motion.img
          src={heroImage}
          alt="Grocery Tracking"
          className="hero-image"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />
      </section>

     
      <motion.section
        className="features"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>Why Use Our System ?</h2>
        <div className="feature-grid">
          {[
            { title: "📅 Expiry Alerts", desc: "Never let your groceries go to waste! Get timely notifications." },
            { title: "📊 Easy Tracking", desc: "View and manage your grocery list with ease." },
            { title: "🔄 Simple Updates", desc: "Update or remove expired items in just a few clicks." }
          ].map((feature, index) => (
            <motion.div 
              key={index} 
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

     
      <motion.section
        className="cta"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>Get Started Today! 🚀</h2>
        <p>Track your groceries effortlessly and avoid wastage.</p>
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link to="/dashboard" className="cta-btn">
            What We Can Do?
          </Link>
        </motion.div>
      </motion.section>

    
      <motion.footer
        className="footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <p>© 2025 Smart Grocery Expiry Tracking System | Developed with ❤️</p>
      </motion.footer>
    </motion.div>
  );
};

export default Home;
