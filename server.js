const { APPCENTER } = require('ci-info');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

//express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//DEFAULT RESPONSE FOR ANY OTHER REQUEST(NOT FOUND)
app.use((req, res) => {
    res.status(404).end();
})

app.listen(PORT, () => {
    console.log(`server running on port ${PORT} at http://localhost:${PORT}`);
});