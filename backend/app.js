import dotenv from 'dotenv';
dotenv.config(); // Automatically loads from '.env' file in root

import express from 'express';
const app = express();

import cors from 'cors';
import authRouter from './Views/msAuth.js';
import portfolioDownloadRoute from './Routes/portfolioDownloadRoute.js';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// CORS setup - Ensure it's correctly configured for production URL
const corsOptions = {
    origin: process.env.FRONTEND_URL || 'http://localhost:3000', // Allow localhost during dev and the correct frontend URL in prod
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'auth-token', 'Accept', 'Code', 'Origin', 'Authorization'],
    credentials: true,
};

// Middleware setup
app.use(cors(corsOptions));
app.use(express.json());

// API routes
app.use(authRouter);
app.use('/api', portfolioDownloadRoute);

// Define custom routes like /ws
app.get('/ws', (req, res) => {
    res.send('WebSocket or related response');
});

// Serve static files from the frontend's build folder (if the frontend and backend are together)
app.use(express.static(path.join(__dirname, '..', 'frontend', 'build')));

// Catch-all route to serve index.html from the frontend's build (if the frontend and backend are together)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'frontend', 'build', 'index.html'));
});

// Start the server
app.listen(process.env.PORT || 5001, (req, res, err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Server listening on PORT ", process.env.PORT || 5001);
    }
});
