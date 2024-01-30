const fs = require('fs');

function countStudents(path) {
  try {
    const content = fs.readFileSync(path, 'utf8');
    const students = content.split('\n');
    const validStudents = students.filter((student) => student !== '');
    console.log(`Number of students: ${validStudents.length - 1}`);

    const fields = {};
    validStudents.forEach((student, index) => {
      if (index !== 0) {
        const fieldsArray = student.split(',');
        const field = fieldsArray[3];

        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(fieldsArray[0]);
      }
    });

    const fieldKeys = Object.keys(fields);
    for (const field of fieldKeys) {
      const studentsList = fields[field].join(', ');
      console.log(`Number of students in ${field}: ${fields[field].length}. List: ${studentsList}`);
    }
  } catch (err) {
    console.error('Cannot load the database');
  }
}

module.exports = countStudents;
