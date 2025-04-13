

# **Smart Grocery Expiry Tracking System (Smart-GETS)** 🛒⏰  
![Node.js](https://img.shields.io/badge/Node.js-16%2B-green)  
![Express.js](https://img.shields.io/badge/Express.js-4.x-lightgrey)  
![MySQL](https://img.shields.io/badge/MySQL-8.0-blue)  
![License](https://img.shields.io/badge/License-MIT-yellow)  

A **web-based application** to track grocery expiry dates, reduce food waste, and send timely notifications. Built with a responsive frontend and secure backend.  

**Live Demo**: *[Add Vercel/Heroku link here]*  

---

## **Key Features** ✨  
✔ **Expiry Alerts** – Notifications for items nearing expiry.  
✔ **CRUD Operations** – Add, update, or delete items easily.  
✔ **Search & Filter** – Find items by name, category, or expiry date.  
✔ **User Authentication** – Secure login/registration with encrypted passwords.  
✔ **Responsive UI** – Works on desktop, tablet, and mobile.  

---

## **Technology Stack** 🧰  
| **Frontend** | **Backend** | **Database** |  
|--------------|------------|-------------|  
| HTML5        | Node.js    | MySQL       |  
| CSS3         | Express.js |             |  
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
node server.js
```
Access at: `http://localhost:3000`  

---

## **Project Structure** 📂  
```plaintext
Smart-GETS/
├── server.js               # Backend entry point
├── package.json            # Dependencies
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
*(Add screenshots later with Markdown)*  
1. **Dashboard**:  
   ![Dashboard](public/images/demo-dashboard.png)  
2. **Mobile View**:  
   ![Mobile](public/images/demo-mobile.png)  

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
🔗 [LinkedIn Profile](www.linkedin.com/in/chiraggowda17)  

---

🚀 **Happy Tracking! Reduce Waste, Save Money!** 🚀  

---

### **Need Help?**  
- **MySQL Setup**: Refer to [MySQL Docs](https://dev.mysql.com/doc/).  
- **Node.js Issues**: Check [Stack Overflow](https://stackoverflow.com/).  
