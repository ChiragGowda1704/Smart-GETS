import { motion } from "framer-motion";
import "../styles/Dashboard.css";

const Dashboard = () => {
  return (
    <motion.div 
      className="dashboard-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div 
        className="dashboard-header"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1>🚀 Welcome to <span>Smart GETS</span></h1>
        <p>Manage your groceries effortlessly. Add, track, and reduce waste with ease!</p>
      </motion.div>

      <div className="features-grid">
        {[
          { title: "🛒 Add Items", desc: "Quickly add groceries, set expiry dates, and keep track of everything with ease!" },
          { title: "🗑️ Delete Items", desc: "Remove expired or unnecessary groceries with a single click." },
          { title: "✏️ Update Items", desc: "Modify grocery details like name, quantity, or expiry date anytime!" },
          { title: "📋 View Groceries", desc: "Access your entire grocery list with expiry details in one place." },
          { title: "⏳ Expiring Soon Alerts", desc: "Get reminders for items that are about to expire so you can use them in time!" },
          { title: "📊 Smart Insights", desc: "Get data-driven insights on your grocery usage to optimize shopping habits." },
        ].map((feature, index) => (
          <motion.div 
            key={index} 
            className="feature-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <h2>{feature.title}</h2>
            <p>{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Dashboard;
