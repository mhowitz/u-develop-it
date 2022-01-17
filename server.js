const db = require('./db/connection')
const inputCheck = require('./utils/inputCheck');
const apiRoutes = require('./routes/apiRoutes');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

//express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api', apiRoutes);

//DEFAULT RESPONSE FOR ANY OTHER REQUEST(NOT FOUND)
app.use((req, res) => {
    res.status(404).end();
})


db.connect(err => {
    if (err) throw err;
    console.log('Database Connected.');
    app.listen(PORT, () => {
        console.log(`server running on port ${PORT} at http://localhost:${PORT}`);
    });
})
