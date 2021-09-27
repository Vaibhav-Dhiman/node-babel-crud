import express from "express";
import mongoose from 'mongoose';
import routes from '../crud-api/src/routes/crmRoutes.js';

const app = express();
const PORT = 3000;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.urlencoded({extended: true}));
app.use(express.json()) 

routes(app);

app.get('/', (req, res) =>
    res.send(`Server started on port ${PORT}`)
); 

app.listen(PORT, () =>
    console.log(`Server started on port ${PORT}`)
); 
