// import express from 'express';
// import router from './router/auth-router.js';
// // import cors from 'cors';
// import mongoose from 'mongoose';
// import loginRoute from './routes/login.js'; // Adjust the path as necessary

// const app = express();
// app.use(cors());
// app.use(express.json());

// // MongoDB connection
// mongoose
//   .connect('mongodb://localhost:27017/mern-auth')
//   .then(() => console.log('MongoDB connected'))
//   .catch((err) => console.log(err));

// // Routes
// app.use('/api', loginRoute);

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


// app.use("/api/auth",router)

// app.get("/", (req, res) => {
//   res.send("Hello World"); // Send the response directly
// });


// app.get("/register",(req,res) =>{
//   res.send("welcome to register")
// })

import express, { urlencoded } from 'express';
import router from './router/auth-router.js';
import cors from cors



const app = express();

app.use(express,urlencoded({extended: true}))
app.use(express.json())

app.use(cors())
app.use("/api/auth", router);


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});