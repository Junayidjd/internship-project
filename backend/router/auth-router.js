// import express from 'express';
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
 
// const app = express()

// const router = express.Router();



// // Dummy user database (you would replace this with MongoDB)
// const users = [
//   { id: 1, username: 'admin', password: bcrypt.hashSync('password', 10) },
// ];

// router.post('/login', (req, res) => {
//   const { username, password } = req.body;

//   const user = users.find((u) => u.username === username);
//   if (!user) {
//     return res.status(401).json({ message: 'Invalid credentials' });
//   }

//   const isMatch = bcrypt.compareSync(password, user.password);
//   if (!isMatch) {
//     return res.status(401).json({ message: 'Invalid credentials' });
//   }

//   // Generate JWT token
//   const token = jwt.sign({ id: user.id }, 'your_jwt_secret', { expiresIn: '1h' });

//   res.json({ token });
// });

// export default router; // Use export default instead of module.exports



// router.get("/",(req,res) => {
//   res.send("Hello World this is router");
// })

import { Router } from "express";

const authRouter = Router()
authRouter.get("/", () => {
   
})


export default authRouter; // Use export default