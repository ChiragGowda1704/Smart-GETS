import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/styles.css";

const UpdateGrocery = () => {
  const { id: itemId } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [quantity, setQuantity] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!itemId) return;

    fetch(`http://127.0.0.1:5000/groceries`)
      .then((res) => res.json())
      .then((data) => {
        const item = data.find((g) => g.id.toString() === itemId);
        if (item) {
          setName(item.name);
          setExpiry(item.expiry_date);
          setQuantity(item.quantity);
        } else {
          console.error("Item not found.");
        }
      })
      .catch((error) => console.error("Error fetching item:", error))
      .finally(() => setLoading(false));
  }, [itemId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!itemId) {
      alert("Error: No valid item selected for update.");
      return;
    }

    const updatedItem = {
      name: name.trim(),
      expiry_date: expiry,
      quantity: parseInt(quantity, 10),
    };

    try {
      const response = await fetch(`http://127.0.0.1:5000/update/${itemId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedItem),
      });

      if (!response.ok) throw new Error("Failed to update grocery");
      alert("Grocery updated successfully!");
      navigate("/");
    } catch (error) {
      console.error(error.message);
      alert(error.message);
    }
  };

  if (!itemId) return <p className="error-message">⚠️ Please select an item to update.</p>;
  if (loading) return <p className="loading-message">⏳ Loading item details...</p>;

  return (
    <div className="update-container">
      <h2 className="update-heading">📝 Update Grocery</h2>
      <form onSubmit={handleSubmit} className="update-form">
        <div className="input-group">
          <label className="form-label">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="form-input"
          />
        </div>

        <div className="input-group">
          <label className="form-label">Expiry Date:</label>
          <input
            type="date"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            required
            className="form-input"
          />
        </div>

        <div className="input-group">
          <label className="form-label">Quantity:</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
            className="form-input"
          />
        </div>

        <button type="submit" className="update-button">✅ Update</button>
        <button type="button" className="cancel-button" onClick={() => navigate("/")}>❌ Cancel</button>
      </form>
    </div>
  );
};

export default UpdateGrocery;
