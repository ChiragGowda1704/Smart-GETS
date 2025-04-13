import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/styles.css"; // Import the CSS file

function AddGrocery() {
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [quantity, setQuantity] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formattedExpiry = new Date(expiry).toISOString().split("T")[0];

    const groceryItem = {
      name: name.trim(),
      expiry_date: formattedExpiry,
      quantity: parseInt(quantity, 10),
    };

    try {
      const response = await fetch("http://127.0.0.1:5000/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(groceryItem),
      });

      if (!response.ok) throw new Error("Failed to add grocery");

      alert("Grocery added successfully!");

      // Redirect to home page
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="add-container">
      <div className="add-card">
        <h2 className="add-title">Add Grocery Item</h2>
        <form onSubmit={handleSubmit} className="add-form">
          <div className="input-group">
            <label className="form-label">Grocery Name</label>
            <input
              type="text"
              className="form-input"
              value={name}
              placeholder="Enter grocery name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label className="form-label">Expiry Date</label>
            <input
              type="date"
              className="form-input"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label className="form-label">Quantity</label>
            <input
              type="number"
              className="form-input"
              value={quantity}
              placeholder="Enter quantity"
              onChange={(e) => setQuantity(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="add-button">Add Item</button>
        </form>
      </div>
    </div>
  );
}

export default AddGrocery;

