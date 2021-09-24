import express from "express";
import routes from '../crud-api/src/routes/crmRoutes.js';

const app = express();
const PORT = 3000;

routes(app);

app.get('/', (req, res) =>
    res.send(`Server started on port ${PORT}`)
); 

app.listen(PORT, () =>
    console.log(`Server started on port ${PORT}`)
); 
