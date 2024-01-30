import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(_, res) {
    try {
      const studentsData = await readDatabase('database.csv');

      const responseLines = ['This is the list of our students'];

      const sortedFields = Object.keys(studentsData).sort((a, b) => a.localeCompare(b));
      for (const field of sortedFields) {
        const studentsInField = studentsData[field];
        const numberOfStudents = studentsInField.length;
        const listOfFirstNames = studentsInField.join(', ');

        const fieldLine = `Number of students in ${field}: ${numberOfStudents}. List: ${listOfFirstNames}`;
        responseLines.push(fieldLine);
      }

      const responseBody = responseLines.join('\n');
      res.status(200).send(responseBody);
    } catch (error) {
      res.status(500).send(`Cannot load the database\n${error.message}`);
    }
  }
}

export default StudentsController;
module.exports = StudentsController;
