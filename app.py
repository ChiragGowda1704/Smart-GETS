from flask import Flask, request, jsonify
from datetime import datetime, timedelta
import mysql.connector
from mysql.connector import Error
from flask_cors import CORS
import os
import time
import bcrypt
import jwt

app = Flask(__name__)
CORS(app) 
app.config['SECRET_KEY'] = os.getenv("SECRET_KEY", "your_secret_key_here")

# Database Configuration
DB_CONFIG = {
    "host": "localhost",
    "user": os.getenv("DB_USER", "root"),
    "password": os.getenv("DB_PASSWORD", "chirag2004A"),
    "database": "grocery_db"
}

# Function to establish database connection
def get_db_connection(retries=3):
    for _ in range(retries):
        try:
            return mysql.connector.connect(**DB_CONFIG)
        except Error as err:
            print(f"❌ Database Connection Error: {err}")
            time.sleep(2)
    return None

# 1️⃣ Add a Grocery Item
@app.route('/add', methods=['POST'])
def add_grocery():
    try:
        data = request.get_json()
        name, expiry_date, quantity = data.get('name'), data.get('expiry_date'), data.get('quantity')

        if not name or not expiry_date or not quantity:
            return jsonify({"error": "All fields are required"}), 400

        db = get_db_connection()
        if db is None:
            return jsonify({"error": "Database connection failed"}), 500

        with db.cursor() as cursor:
            query = "INSERT INTO groceries (name, expiry_date, quantity) VALUES (%s, %s, %s)"
            cursor.execute(query, (name, expiry_date, quantity))
            db.commit()
        db.close()

        return jsonify({"message": "Grocery item added successfully!"}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# 2️⃣ Retrieve All Grocery Items
@app.route('/groceries', methods=['GET'])
def get_groceries():
    try:
        db = get_db_connection()
        if db is None:
            return jsonify({"error": "Database connection failed"}), 500

        with db.cursor() as cursor:
            cursor.execute("SELECT * FROM groceries")
            groceries = cursor.fetchall()

        db.close()
        return jsonify([
            {"id": g[0], "name": g[1], "expiry_date": str(g[2]), "quantity": g[3]} 
            for g in groceries
        ])
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# 3️⃣ Update a Grocery Item
@app.route('/update/<int:item_id>', methods=['PUT'])
def update_grocery(item_id):
    try:
        data = request.get_json()
        name, expiry_date, quantity = data.get('name'), data.get('expiry_date'), data.get('quantity')

        if not name or not expiry_date or not quantity:
            return jsonify({"error": "All fields are required"}), 400

        db = get_db_connection()
        if db is None:
            return jsonify({"error": "Database connection failed"}), 500

        with db.cursor() as cursor:
            query = "UPDATE groceries SET name=%s, expiry_date=%s, quantity=%s WHERE id=%s"
            cursor.execute(query, (name, expiry_date, quantity, item_id))
            db.commit()
        db.close()

        return jsonify({"message": "Grocery item updated successfully!"})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# 4️⃣ Get Items Expiring in the Next 3 Days
@app.route('/expiring-soon', methods=['GET'])
def expiring_soon():
    try:
        db = get_db_connection()
        if db is None:
            return jsonify({"error": "Database connection failed"}), 500

        today = datetime.today()
        soon = today + timedelta(days=3)

        with db.cursor() as cursor:
            query = "SELECT * FROM groceries WHERE expiry_date BETWEEN %s AND %s"
            cursor.execute(query, (today.strftime('%Y-%m-%d'), soon.strftime('%Y-%m-%d')))
            items = cursor.fetchall()

        db.close()
        return jsonify({"expiring_soon": [
            {"id": item[0], "name": item[1], "expiry_date": str(item[2]), "quantity": item[3]} for item in items
        ]})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# 5️⃣ Delete Expired Items
@app.route('/delete-expired', methods=['DELETE'])
def delete_expired():
    try:
        db = get_db_connection()
        if db is None:
            return jsonify({"error": "Database connection failed"}), 500

        today = datetime.today().strftime('%Y-%m-%d')
        with db.cursor() as cursor:
            cursor.execute("DELETE FROM groceries WHERE expiry_date < %s", (today,))
            db.commit()
        db.close()

        return jsonify({"message": "Expired items deleted!"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# 6️⃣ Delete a Specific Grocery Item
@app.route('/delete/<int:item_id>', methods=['DELETE'])
def delete_grocery(item_id):
    try:
        db = get_db_connection()
        if db is None:
            return jsonify({"error": "Database connection failed"}), 500

        with db.cursor() as cursor:
            # Check if item exists before deleting
            cursor.execute("SELECT * FROM groceries WHERE id = %s", (item_id,))
            item = cursor.fetchone()
            if not item:
                return jsonify({"error": "Grocery item not found"}), 404

            cursor.execute("DELETE FROM groceries WHERE id = %s", (item_id,))
            db.commit()

        db.close()
        return jsonify({"message": "Grocery item deleted successfully!"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route('/')
def home():
    return jsonify({"message": "Welcome to Smart Grocery Expiry Tracker API!"})

if __name__ == "__main__":
    app.run(debug=True)
