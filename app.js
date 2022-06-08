const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Hello Makers we will learn about the REQUEST and RESPONSE cycles!'));

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));