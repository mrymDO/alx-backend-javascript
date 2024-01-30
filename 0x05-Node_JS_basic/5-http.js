const http = require('http');
const { countStudents } = require('./3-read_file_async');

const HOST = 'localhost';
const PORT = 1245;

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const path = 'database.csv';
    countStudents(path)
      .then(() => {
        console.log('Done!');
        const response = 'This is the list of our students\n';
        res.end(response);
      })
      .catch((error) => {
        console.log(error.message);
        res.end('Cannot load the database\n');
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found\n');
  }
});

app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`);
});

module.exports = app;

