const express = require('express');
const app = express();
const db = require('./database/index');
const models = require('./models/index');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(express.static('./client/dist'));

app.get('/api/cows', (req, res) => {
 
    models.cows.get((err, result) => {
        if(err) throw err;
        console.log(result)
        res.json(result)
    })
})


app.post('/api/cows', (req, res) => {
    console.log('---->', req.body)
    res.status(200);
    models.cows.post(req.body, (err, result) => {
        if(err) throw err;
        res.send(result);
    })
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})