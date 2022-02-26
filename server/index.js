import express from 'express';


//Components
import Connection from './database/db.js';

const app = express(); 

const PORT = 8000;

Connection();
app.listen(PORT, ()=> console.log(`Server is running successfully on PORT ${PORT}`));
