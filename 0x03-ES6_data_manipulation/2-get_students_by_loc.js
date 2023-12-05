export default function getStudentsByLocation(getListStudents, city) {
  if (!(getListStudents instanceof Array)) {
    return [];
  }
  return getListStudents.filter((student) => student.location === city);
}
