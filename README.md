# 📚 ClassNotify - Class Reminder App

**ClassNotify** is a modern timetable management and notification system designed for educational institutions. It helps streamline time management for both faculty and students by enabling class schedule management and automated reminders.

---

## 🔔 Features

- ✅ **User Roles**: Admin and Faculty with role-based permissions  
- 🗓️ **Timetable Management**: Create, view, and update class schedules  
- 👨‍🏫 **Personalized Faculty Timetable**: Faculty can view their own filtered schedule  
- 📩 **Automated Email Notifications**: Daily class reminders via scheduled cron jobs  
- 🎓 **Class & Subject Management**: Add and manage classes, subjects, and faculty  
- 🔐 **Secure Authentication**: Role-based login system  
- 🎨 **Responsive UI**: Built using React and Tailwind CSS  

---

## 🧑‍💻 Tech Stack

### 🔹 Frontend
- React.js  
- Tailwind CSS  
- React Router DOM  

### 🔹 Backend
- Node.js + Express.js  
- MongoDB (via Mongoose)  
- Nodemailer  
- node-cron  

### 🔹 Deployment
- **Frontend**: [Vercel](https://vercel.com/)  
- **Backend**: [Render](https://render.com/) or [Railway](https://railway.app/)  

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/classnotify.git
cd classnotify
````

### 2️⃣ Install Dependencies

#### ➤ Frontend

```bash
cd client
npm install
npm run dev
```

#### ➤ Backend

```bash
cd server
npm install
npm start
```

---

## 🔧 Environment Variables

Create a `.env` file inside the `server/` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password_or_app_password
```

---

## ✨ Screenshots

| Home                                                                                     | Timetable                                                                                     | Add Class                                                                                     |
| ---------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| ![Home](https://github.com/user-attachments/assets/2aa6e119-7f6f-4c2d-afc3-ed7b2f985a1c) | ![Timetable](https://github.com/user-attachments/assets/82e34c93-b684-413d-876f-16408b0dd9e5) | ![Add Class](https://github.com/user-attachments/assets/9c81192c-7862-47f3-9206-4f439699bbac) |

| All Timetables                                                                                       | Professor View                                                                                                       |
| ---------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| ![ViewAllTimeTable](https://github.com/user-attachments/assets/d8693287-f213-441c-9ea6-518be3f0cc16) | ![Professor Personalized TimeTable](https://github.com/user-attachments/assets/482b3ca9-f7c9-40c7-9e63-76381279e8e2) |

---

## 📩 Email Notification

* Scheduled using `node-cron`
* Sends daily reminders to faculty via email
* Automatically activates upon deployment to **Render** or **Railway**

---

## 🙌 Contributing

Contributions are welcome!
Feel free to:

1. Fork this repo
2. Create a feature branch
3. Submit a pull request

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 👤 Author

[![LinkedIn](https://img.shields.io/badge/Subodh_Kangale-LinkedIn-blue?style=flat\&logo=linkedin)](https://www.linkedin.com/in/subodhkangale07/)
