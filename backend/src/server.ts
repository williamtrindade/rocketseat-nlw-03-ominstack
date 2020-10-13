import express from 'express';

const app = express();
app.get('/', (request, response) => {
    return response.json({'messages': 'OLA'});
});
app.listen(3333);