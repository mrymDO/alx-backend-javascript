export default function getListStudentsIds(getListStudents) {
  if (!(getListStudents instanceof Array)) {
    return [];
  }
  return getListStudents.map((student) => student.id);
}
