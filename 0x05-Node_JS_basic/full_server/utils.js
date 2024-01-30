const fs = require('fs').promises;

const readDatabase = async (filePath) => {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    const fileLines = data.trim().split('\n');

    const fieldNames = fileLines[0].split(',');
    const firstnameIndex = fieldNames.indexOf('firstname');

    if (firstnameIndex === -1) {
      throw new Error('Invalid database format: Missing "firstname" field.');
    }

    const studentsByField = {};

    for (let i = 1; i < fileLines.length; i += 1) {
      const fields = fileLines[i].split(',');
      const firstname = fields[firstnameIndex].trim();
      const field = fields[fields.length - 1].trim();

      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }

      studentsByField[field].push(firstname);
    }

    return studentsByField;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

export default readDatabase;
module.exports = readDatabase;
