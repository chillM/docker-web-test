const app = require('express')();

app.get('/', (request, response) => 
    response.json({ message: 'Docker is easy'})
);

const port = process.env.PORT || 8080;

app.listen(port, () => `app listening on http://localhost:${port}`);