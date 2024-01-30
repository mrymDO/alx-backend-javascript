export default function iterateThroughObject(reportWithIterator) {
  let result = '';

  for (const department in reportWithIterator.allEmployees) {
    const employees = reportWithIterator.allEmployees[department];

    for (const employee of employees) {
      result += `${employee} | `;
    }
  }

  return result.slice(0, -3);
}
