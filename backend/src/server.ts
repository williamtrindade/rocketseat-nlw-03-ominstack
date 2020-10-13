import express from 'express';
import './database/connection';

const app = express();
app.use(express.json());

app.get('/api/users', (request, response) => {
  return response.json({ messages: 'OLA' });
});

app.listen(3333);
