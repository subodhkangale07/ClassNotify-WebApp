const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const Routes = require('./Routes/Route');
const connectDB = require('./config/db');
const cron = require('node-cron');
const { filterEvents } = require('./controller/NotificationSender');
const mailSender = require('./controller/SendNotification');

dotenv.config();


const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use('/api/v1', Routes);



connectDB();




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// fetchEvents()


//Scheduler

// cron.schedule('0,15,30,45 9-23 * * *', () => {
//     console.log("🔄 Running Scheduler...");
//     const events = filterEvents();
//     events.forEach(event => {
//         sendNotification(event);
//     });
// })

app.get("/run-cron", async (req, res) => {
    console.log("Cron endpoint hit...");

    try {
        const events = await filterEvents();

        for (const event of events) {
            const email = event.professor.emailId;
            const title = `Upcoming Lecture Notification: ${event.subject_code}`;
            const body = `
                <h2>Lecture Details</h2>
                <p><strong>Professor:</strong> ${event.professor.name}</p>
                <p><strong>Subject Code:</strong> ${event.subject_code}</p>
                <p><strong>Class:</strong> ${event.class}</p>
                <p><strong>Type:</strong> ${event.type}</p>
                <p><strong>Room:</strong> ${event.room}</p>
                <p><strong>Time:</strong> ${event.time}</p>
                <p><strong>Day:</strong> ${event.day}</p>
            `;

            await mailSender(email, title, body);
        }

        res.status(200).json({
            success: true,
            message: "Cron job executed and emails sent",
        });

    } catch (error) {
        console.error("Error in scheduler:", error);
        res.status(500).json({
            success: false,
            message: "Error running cron job",
        });
    }
});
