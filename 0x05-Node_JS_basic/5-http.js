const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 1245;

function countStudents(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }

      const lines = data.trim().split('\n').filter(Boolean);
      const students = {};
      const fields = {};

      for (let i = 1; i < lines.length; i++) {
        const [firstname, lastname, age, field] = lines[i].split(',');
        if (!students[field]) students[field] = [];
        students[field].push(firstname);
        fields[field] = (fields[field] || 0) + 1;
      }

      const output = [`Number of students: ${lines.length - 1}`];
      for (const [field, count] of Object.entries(fields)) {
        output.push(`Number of students in ${field}: ${count}. List: ${students[field].join(', ')}`);
      }

      resolve(output.join('\n'));
    });
  });
}

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
    return;
  }

  if (req.url === '/students') {
    countStudents(process.argv[2])
      .then(data => {
        res.end(`This is the list of our students\n${data}`);
      })
      .catch(err => {
        res.statusCode = 404;
        res.end(`Cannot load the database\n${err.message}`);
      });
    return;
  }

  res.statusCode = 404;
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = server;
