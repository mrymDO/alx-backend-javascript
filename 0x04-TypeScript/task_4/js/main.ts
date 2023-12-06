/// <reference path="subjects/Teacher.ts" />
/// <reference path="subjects/Subject.ts" />
/// <reference path="subjects/Cpp.ts" />
/// <reference path="subjects/React.ts" />
/// <reference path="subjects/Java.ts" />

export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = new Subjects.React();

export const cTeacher: Subjects.Teacher = {
    firstName: "Jhon",
    lastName: "Doe",
    experienceTeachingC: 10,
  };

  console.log('Cpp+');
  Subjects.cpp.setTeacher(cTeacher);
  console.log(Subjects.cpp.getRequirements());
  console.log(Subjects.cpp.getAvailableTeacher());

  console.log('Java');
Subjects.java.setTeacher(cTeacher);
console.log(Subjects.java.getRequirements());
console.log(Subjects.java.getAvailableTeacher());

console.log('React');
Subjects.react.setTeacher(cTeacher);
console.log(Subjects.react.getRequirements());
console.log(Subjects.react.getAvailableTeacher());