import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import Framer Motion
import "../styles/styles.css";

const GroceryList = () => {
  const [groceries, setGroceries] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/groceries")
      .then((res) => res.json())
      .then((data) => setGroceries(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <motion.div 
      className="grocery-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.h2 
        className="grocery-heading"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        🛒 Your Grocery List
      </motion.h2>

      {groceries.length === 0 ? (
        <motion.p 
          className="no-items"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          No groceries found.
        </motion.p>
      ) : (
        <motion.div 
          className="grocery-list"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } }
          }}
        >
          {groceries.map((g, index) => (
            <motion.div 
              className="grocery-card"
              key={g.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)" }}
            >
              <h3 className="grocery-name">{g.name}</h3>
              <p className="grocery-info">
                <strong>📅 Expiry:</strong> {g.expiry_date}
              </p>
              <p className="grocery-info">
                <strong>📦 Quantity:</strong> {g.quantity}
              </p>
              <Link to={`/update/${g.id}`} className="edit-button">✏ Edit</Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default GroceryList;
