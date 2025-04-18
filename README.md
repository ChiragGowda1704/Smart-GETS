# **Smart Grocery Expiry Tracking System (Smart-GETS)** 🛒⏰   
![Flask](https://img.shields.io/badge/Flask-2.3-blue)
![React](https://img.shields.io/badge/React-18.2-blue)
![MySQL](https://img.shields.io/badge/MySQL-8.0-blue)   

A **web-based application** to track grocery expiry dates, reduce food waste, and send timely notifications. Built with a responsive frontend and secure backend.  

**Live Demo**:  

---

## **Key Features** ✨  
✔ **Expiry Alerts** – Notifications for items nearing expiry.  
✔ **CRUD Operations** – Add, update, or delete items easily.  
✔ **Search & Filter** – Find items by name, category, or expiry date.  
✔ **User Authentication** – Secure login/registration with encrypted passwords.  
✔ **Responsive UI** – Works on desktop, tablet, and mobile.  

---

## **Technology Stack** 🧰  
| **Frontend** | **Backend**| **Database**|  
|--------------|------------|-------------|  
| HTML5        |  Flask     | MySQL       |  
| CSS3         |            |             |
| JavaScript   |            |             |  

---

## **Installation** ⚙️  

### **1. Clone the Repository**  
```bash
git clone https://github.com/ChiragGowda1704/Smart-GETS.git
cd Smart-GETS
```

### **2. Install Dependencies**  
```bash
npm install
```

### **3. Set Up MySQL Database**  
1. Create a database:  
   ```sql
   CREATE DATABASE smart_gets;
   ```  
2. Import the schema from `database/schema.sql`.  
3. Configure `.env` file:  
   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=yourpassword
   DB_NAME=smart_gets
   JWT_SECRET=your_jwt_secret
   ```

### **4. Run the Application**  
```bash
python app.py
```
Access at: `http://localhost:3000`  

---

## **Project Structure** 📂  
```plaintext
Smart-GETS/
├── server.js               # Backend entry point
├── package.json            # Dependencies
├── app.py                  # Backend application
├── database/               # SQL scripts
│   └── schema.sql           
├── public/                 # Static assets
│   ├── css/                # Stylesheets
│   ├── js/                 # Client-side scripts
│   └── images/             # Logos/icons
├── routes/                 # API routes
│   ├── authRoutes.js       # Authentication
│   └── itemRoutes.js      # Grocery item CRUD
├── views/                  # Frontend pages
│   ├── index.html          # Dashboard
│   └── login.html          # Auth page
└── README.md               # Documentation
```

---

## **Screenshots** 📸    
1. **Dashboard**:  
   ![Screenshot 2025-04-13 171621](https://github.com/user-attachments/assets/e2f61bb7-3435-444c-8f2d-7d07b0244a33)
  
2. **Home Page**:
   ![Screenshot 2025-04-13 171731](https://github.com/user-attachments/assets/f08b5d81-baa4-4655-ab0c-d96077a03598)

3. **Add Item**:
   ![Screenshot 2025-04-13 171629](https://github.com/user-attachments/assets/b7682ad5-9420-4579-bf64-5a767a73816a)

4. **Home Page 02**:
   ![Screenshot 2025-04-13 171739](https://github.com/user-attachments/assets/8b548778-5b4b-42c9-96cb-32d2a0649509)




---

## **How to Contribute** 🤝  
1. **Fork** the repository.  
2. Create a branch:  
   ```bash
   git checkout -b feature/your-feature
   ```  
3. Commit changes:  
   ```bash
   git commit -m "Add awesome feature"
   ```  
4. Push and open a **Pull Request**.  

---



## **Contact** 📬  
**Chirag Gowda**  
📧 [chiragtsgowda2004@gmail.com](mailto:chiragtsgowda2004@gmail.com)  
🔗 [www.linkedin.com/in/chiraggowda17](www.linkedin.com/in/chiraggowda17)  

---

🚀 **Happy Tracking! Reduce Waste, Save Money!** 🚀  

---

### **Need Help?**  
- **MySQL Setup**: Refer to [MySQL Docs](https://dev.mysql.com/doc/).  
- **Node.js Issues**: Check [Stack Overflow](https://stackoverflow.com/).  
