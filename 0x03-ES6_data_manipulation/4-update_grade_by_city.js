export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  return getListStudents
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeObject = newGrades.find((grade) => grade.studentId === student.id) || { grade: 'N/A' };
      return {
        ...student,
        grade: gradeObject.grade,
      };
    });
}
