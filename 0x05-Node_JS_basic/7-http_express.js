const express = require('express');
const { readFile } = require('fs').promises;

const app = express();
const port = 1245;

function parseStudentData(data) {
  const students = {};
  const fields = {};
  let length = 0;

  const lines = data.toString().split('\n');
  for (let i = 0; i < lines.length; i += 1) {
    if (lines[i]) {
      length += 1;
      const field = lines[i].toString().split(',');
      const key = field[3];

      students[key] = students[key] ? [...students[key], field[0]] : [field[0]];
      fields[key] = fields[key] ? fields[key] + 1 : 1;
    }
  }

  return { students, fields, length };
}

function generateOutput({ students, fields, length }) {
  let output = `Number of students: ${length - 1}\n`;
  for (const [key, value] of Object.entries(fields)) {
    if (key !== 'field') {
      output += `Number of students in ${key}: ${value}. `;
      output += `List: ${students[key].join(', ')}\n`;
    }
  }
  return output;
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const data = await readFile(process.argv[2], 'utf8');
    const studentsData = parseStudentData(data);
    const output = generateOutput(studentsData);
    res.send(`This is the list of our students\n${output}`);
  } catch (error) {
    res.status(404).send('Cannot load the database');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

module.exports = app;
