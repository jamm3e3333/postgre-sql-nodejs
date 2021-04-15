const express = require('express');
const app = express();

const port = process.env.PORT || 3059;
app.use(express.json());

app.get('*', (req, res) => {
    const response = {
        1: '1',
        2: '2',
        3: '3'
    }
    res.setHeader('Content-Type','application/json');
    if(req.url === '/translations'){
        res.send({
            response,
            req: req.url
        });
    }
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})