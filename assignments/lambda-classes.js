// CODE here for your Lambda Classes
class Person {
  constructor(att) {
    this.name = att.name;
    this.age = att.age;
    this.location = att.location;
  }
}

class Instructor extends Person {
  constructor(InsAtt) {
    super(InsAtt);
    this.speciality = InsAtt.speciality;
    this.favLanguage = InsAtt.favLanguage;
    this.catchPhrase = InsAtt.catchPhrase;
  }

  demo(subject) {
    return `Today we are learning about ${subject}.`;
  }
  grade(subject) {
    return `{student.name} receives a perfect score on ${subject}`;
  }
}

class Student extends Person {
  constructor(StuAtt) {
    super(StuAtt);
    this.previousBackground = StuAtt.previousBackground;
    this.className = StuAtt.className;
    this.favSubjects = StuAtt.favSubjects;
  }
  listsSubject() {
    return `${this.favSubjects}`;
  }
  PRAassignment(subject) {
    return `${student.name} has submitted a PR for ${subject}.`;
  }
  sprintChallenge(subject) {
    return `${student.name}has begun sprint challenge on ${subject}`;
  }
}

class TeamLead extends Instructor {
  constructor(tlAtt) {
    super(tlAtt);
    this.gradClassName = tlAtt.gradClassName;
    this.favInstructor = tlAtt.favInstructor;
  }
  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel standy times!`;
  }
  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}.`;
  }
}

const instructor = new Instructor({
  name: "Zaza",
  location: "Los Angeles",
  age: 26,
  speciality: "Java",
  favLanguage: "Phyton",
  catchPhrase: "Voldemort!!!"
});

const teamLead = new TeamLead({
  name: "Ulash",
  location: "Antalya",
  age: 30,
  gradClassName: "Webpt11",
  favInstructor: "Batuhan"
});

const student = new Student({
  name: "Batuhan",
  location: "Culver City",
  age: 26,
  previousBackground: "Electronic Engineer",
  className: "Webpt11",
  favSubjects: ["css", "java", "phyton"]
});

console.log(instructor.demo("JavaScript"));
console.log(instructor.grade("JavaScript"));
