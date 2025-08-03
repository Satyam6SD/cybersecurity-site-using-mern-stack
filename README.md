# cybersecurity-site-usin-mern-stack

✨ Features

✅ Modern React single‑page application
✅ Node.js & Express backend with RESTful APIs
✅ MongoDB to store:

* User feedback
* Subscribers
* Alerts & analytics data
  ✅ Dark / light mode switch
  ✅ Dynamic cybersecurity tips
  ✅ Admin routes to view/delete feedback & add alerts
  ✅ Contact form with backend integration
  ✅ Responsive carousel & beautiful UI (Bootstrap)

---

🛠 Technologies

* React.js
* Node.js
* Express.js
* MongoDB & Mongoose
* Bootstrap 5
* Font Awesome

---

📂 Project Structure

```
cyberaware/
├── backend/
│   ├── server.js              # Express server
│   ├── db.js                  # MongoDB connection
│   └── models/
│       ├── Feedback.js
│       ├── Subscriber.js
│       └── Alert.js
├── frontend/
│   ├── src/
│   │   ├── components/        # React components (Home, About, Tips, Contact, Services, AdminLogin, Navbar, Footer)
│   │   ├── App.js
│   │   └── App.css
│   └── public/                # Images, favicon, etc.
└── package.json               # Scripts & dependencies
```

---

⚙️ Setup & Run Locally

1️⃣ Clone the repository

```bash
git clone https://github.com/yourusername/cyberaware.git
cd cyberaware
```

---

2️⃣ Setup backend

```bash
cd backend
npm install
npm run dev
```

Runs the Node.js + Express server on port `5000`.

Make sure MongoDB is running locally (default URI: `mongodb://127.0.0.1:27017/cyberaware`)
*or replace with MongoDB Atlas connection string in `db.js`*.

---

3️⃣ Setup frontend

```bash
cd frontend
npm install
npm start
```

🌟 Acknowledgements
Bootstrap & Font Awesome
MongoDB & Mongoose
React & Express.js communities

