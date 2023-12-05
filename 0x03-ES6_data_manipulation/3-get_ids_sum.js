export default function getStudentIdsSum(getListStudents) {
  return getListStudents.reduce((accumulator, student) => accumulator + student.id, 0);
}
