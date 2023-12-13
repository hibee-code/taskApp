import session from "express-session";
import dotenv from "dotenv"
dotenv.config();


export const sessionMiddleware = session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false, // Set to true if using HTTPS
      maxAge: 3600000, // Session expiration time in milliseconds (1 hour in this case)
    },
  });

  export const authenticateUser = (req, res, next) => {
    if (!req.session.userId) {
      return res.status(401).json({ error: 'Unauthorized - User not logged in' });
    }
    next();
  };