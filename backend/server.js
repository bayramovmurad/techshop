import express from 'express'


const app = express();

app.use('/', (req, res) => {
    res.send("hi whats up");
});


app.listen(5678, () => {
    console.log('Server is running on port 5678');
})