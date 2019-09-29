const express = require('express');
const app = express();
const db = require('./server/database/index');
const models = require('./server/models/index');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Cow App!')
});

app.get('/api/cows', (req, res) => {

});

app.post('/api/cows', (req, res) => {
    console.log('---->', req.body)
    res.status(200);
    // res.send('ok good')
    models.cows.post(req.body, (err, result) => {
        if(err) throw err;
        res.send(result);
    })
});






const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})