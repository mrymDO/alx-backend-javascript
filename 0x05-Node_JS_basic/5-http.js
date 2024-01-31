const http = require('http');
const { readFile } = require('fs/promises'); // Using promises version of readFile

const hostname = '127.0.0.1';
const port = 1245;

async function countStudents(fileName) {
  try {
    const data = await readFile(fileName, 'utf8');
    const students = {};
    const fields = {};
    let length = 0;

    const lines = data.split('\n');
    for (const line of lines) {
      if (line) {
        length += 1;
        const [firstname, , , field] = line.split(',');

        students[field] = students[field] ? [...students[field], firstname] : [firstname];
        fields[field] = fields[field] ? fields[field] + 1 : 1;
      }
    }

    const l = length - 1;
    let output = `Number of students: ${l}\n`;

    for (const [key, value] of Object.entries(fields)) {
      if (key !== 'field') {
        output += `Number of students in ${key}: ${value}. `;
        output += `List: ${students[key].join(', ')}\n`;
      }
    }

    return output;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

const app = http.createServer(async (request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');

  if (request.url === '/') {
    response.end('Hello Holberton School!');
  } else if (request.url === '/students') {
    try {
      const output = await countStudents(process.argv[2].toString());
      response.end(`This is the list of our students\n${output.slice(0, -1)}`);
    } catch (error) {
      response.statusCode = 404;
      response.end('Cannot load the database');
    }
  } else {
    response.statusCode = 404;
    response.end('Not Found');
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
