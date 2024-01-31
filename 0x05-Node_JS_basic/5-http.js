const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 1245;

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');

  if (request.url === '/') {
    response.write('Hello Holberton School!');
    response.end();
    return;
  }

  if (request.url === '/students') {
    response.write('This is the list of our students\n');

    const filePath = process.argv[2].toString();

    fs.promises.readFile(filePath, 'utf8')
      .then((data) => {
        const students = {};
        const fields = {};
        let length = 0;

        const lines = data.split('\n');
        for (let i = 0; i < lines.length; i += 1) {
          if (lines[i]) {
            length += 1;
            const field = lines[i].split(',');

            if (students[field[3]]) {
              students[field[3]].push(field[0]);
            } else {
              students[field[3]] = [field[0]];
            }

            fields[field[3]] = (fields[field[3]] || 0) + 1;
          }
        }

        const l = length - 1;
        response.write(`Number of students: ${l}\n`);
        for (const [key, value] of Object.entries(fields)) {
          if (key !== 'field') {
            response.write(`Number of students in ${key}: ${value}. `);
            response.write(`List: ${students[key].join(', ')}\n`);
          }
        }

        response.end();
      })
      .catch((err) => {
        response.statusCode = 404;
        response.end(`Cannot load the database\n${err.message}`);
      });

    return;
  }

  response.statusCode = 404;
  response.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = server;
