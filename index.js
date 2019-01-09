import express from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 4000;

app.get('/api', (req, res) => res.send('Hello World!!'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + 'client/build/index.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
