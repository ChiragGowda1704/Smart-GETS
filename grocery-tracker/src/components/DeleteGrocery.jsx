import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/styles.css"; 
import { motion } from "framer-motion"; 

const DeleteGrocery = () => {
  const [groceries, setGroceries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchGroceries();
  }, []);

  const fetchGroceries = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://127.0.0.1:5000/groceries");
      if (!response.ok) throw new Error("Failed to fetch groceries");

      const data = await response.json();
      setGroceries(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this item?");
    if (!confirmDelete) return;

    try {
      const response = await fetch(`http://127.0.0.1:5000/delete/${id}`, { method: "DELETE" });
      if (!response.ok) throw new Error("Failed to delete item");

      alert("Item deleted successfully!");
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <motion.div
      className="delete-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div 
        className="delete-card"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2 className="delete-title">Manage Your Groceries</h2>

        {loading ? (
          <p className="loading-message">Loading groceries...</p>
        ) : error ? (
          <p className="error-message">{error}</p>
        ) : groceries.length === 0 ? (
          <p className="no-items">No grocery items found.</p>
        ) : (
          <motion.div
            className="grocery-grid"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {groceries.map((item) => (
              <motion.div
                key={item.id}
                className="grocery-item"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 * groceries.indexOf(item) }}
              >
                <h3 className="grocery-name">{item.name}</h3>
                <p className="grocery-details">📅 Expiry: {item.expiry_date}</p>
                <p className="grocery-details">📦 Quantity: {item.quantity}</p>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className="delete-button"
                  onClick={() => handleDelete(item.id)}
                >
                  🗑 Delete
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default DeleteGrocery;