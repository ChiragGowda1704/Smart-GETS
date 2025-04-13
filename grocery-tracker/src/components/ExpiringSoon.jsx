import { useEffect, useState } from "react";
import noItemsImg from "../assets/expiring-soon.jpg";
import { motion } from "framer-motion"; // Import Framer Motion for animation
import { Link } from "react-router-dom";
import "../styles/styles.css";

const ExpiringSoon = () => {
  const [expiringItems, setExpiringItems] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/expiring-soon")
      .then((res) => res.json())
      .then((data) => {
        const today = new Date();
        const threeDaysLater = new Date();
        threeDaysLater.setDate(today.getDate() + 3);

        const filteredItems = data.expiring_soon.filter((item) => {
          const expiryDate = new Date(item.expiry_date);
          return expiryDate <= threeDaysLater && expiryDate >= today;
        });

        setExpiringItems(filteredItems);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="expiring-container">
      <motion.h2
        className="page-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        🚨 Expiring Soon ( In Next 3 Days )
      </motion.h2>

      {expiringItems.length === 0 ? (
        <motion.div
          className="no-items-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={noItemsImg}
            alt="No Expiring Items"
            className="no-items-img"
          />
          <p className="no-items-text">No items expiring soon.</p>
        </motion.div>
      ) : (
        <motion.div
          className="expiring-grid"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
          }}
        >
          {expiringItems.map((item) => {
            const expiryDate = new Date(item.expiry_date);
            const today = new Date();
            const isToday = expiryDate.toDateString() === today.toDateString();

            return (
              <motion.div
                key={item.id}
                className={`expiring-card ${isToday ? "urgent" : "warning"}`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <span className="item-name"> {item.name}</span> <br />
                <span className="item-date">📅 {item.expiry_date}</span>
              </motion.div>
            );
          })}
        </motion.div>
      )}
    </div>
  );
};

export default ExpiringSoon;
