# 📚 ClassNotify - Class Reminder App

**ClassNotify** is a modern timetable management and notification system designed for educational institutions. It allows users to create, manage, and receive reminders for class schedules, helping streamline time management for both faculty and students.


---

## 🔔 Features

- ✅ **User Roles**: Admin and Faculty roles with respective permissions
- 🗓️ **Timetable Management**: Create, view, and update class schedules
- 👨‍🏫 **Personalized Faculty Timetable**: Faculty can view their own personalized schedule filtered by their assigned lectures  
- 📩 **Automated Email Notifications**: Daily reminders using scheduled cron jobs
- 🎓 **Class & Subject Management**: Add and manage classes, subjects, and faculty
- 🔐 **Secure Authentication**: Login system with user role control
- 🎨 **Responsive UI**: Built with React and Tailwind CSS

---

## 🧑‍💻 Tech Stack

### Frontend:
- React.js
- Tailwind CSS
- React Router DOM

### Backend:
- Node.js + Express.js
- MongoDB (via Mongoose)
- Nodemailer (for email notifications)
- Cron (for scheduling tasks)

### Deployment:
- **Frontend**: [Vercel](https://vercel.com/) (Free & always-on)
- **Backend**: [Render](https://render.com/) or [Railway](https://railway.app/) (Free plans with cron support)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/classnotify.git
cd classnotify
```

### 2. Install Dependencies

#### Frontend:

```bash
cd client
npm install
npm run dev
```

#### Backend:

```bash
cd server
npm install
npm start
```

---

## 🔧 Environment Variables

Create a `.env` file in the `server` directory with the following:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password_or_app_password
```

---

## ✨ Screenshots

| Home | Timetable | Add Class |
|------|-----------|-----------|
| ![Home](https://github.com/user-attachments/assets/2aa6e119-7f6f-4c2d-afc3-ed7b2f985a1c) | ![Timetable](https://github.com/user-attachments/assets/82e34c93-b684-413d-876f-16408b0dd9e5) | ![Add Class](https://github.com/user-attachments/assets/9c81192c-7862-47f3-9206-4f439699bbac) |

| All Timetables | Professor View |
|----------------|----------------|
| ![ViewAllTimeTable](https://github.com/user-attachments/assets/d8693287-f213-441c-9ea6-518be3f0cc16) | ![Professor Personalized TimeTable](https://github.com/user-attachments/assets/482b3ca9-f7c9-40c7-9e63-76381279e8e2) |


---

## 📩 Email Notification

- Uses `node-cron` to send daily class reminders to faculty emails
- Setup runs automatically once deployed to platforms like **Render** or **Railway**

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙌 Contributing

Feel free to fork the repo, create a feature branch, and submit a pull request. All contributions are welcome!

---

[![LinkedIn](https://img.shields.io/badge/Subodh_Kangale-LinkedIn-blue?style=flat&logo=linkedin)](https://www.linkedin.com/in/subodh-kangale)
