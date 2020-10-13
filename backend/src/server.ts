import express from 'express';

const app = express();
app.use(express.json());

app.get('/api/users', (request, response) => {
    return response.json({ messages: 'OLA' });
});

app.listen(3333);