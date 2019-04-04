// CODE here for your Lambda Classes
/*
## `lambda-classes` - We need a roster of Lambda School personnel. Build it!

* We have a school to build here! This project will get you used to thinking about classes in JavaScript and building them from a brand new data set.
* Lambda personnel can be broken down into three different types of `people`.
  * **Instructors** - extensions of Person
  * **Students** - extensions of Person
  * **Project Managers** - extensions of Instructors
* **IMPORTANT** - You'll need to create 2 - 3 objects for each class and test them according to their unique Attributes. For example:

```js
const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});
```

#### Person

* First we need a Person class. This will be our `base-class`
* Person receives `name` `age` `location` `gender` all as props
* Person receives `speak` as a method.
* This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props
*/

class Person {
    constructor(att) {
        this.name = att.name;
        this.age = att.age;
        this.location = att.location;
        this.gender = att.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

/*
#### Instructor

* Now that we have a Person as our base class, we'll build our Instructor class.
* Instructor uses the same attributes that have been set up by Person
* Instructor has the following unique props:
  * `specialty` what the Instructor is good at i.e. 'redux'
  * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
  * `catchPhrase` i.e. `Don't forget the homies`
* Instructor has the following methods:
  * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
  * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'
*/

class Instructor extends Person {
    constructor(att) {
        super(att);
        this.specialty = att.specialty;
        this.favLanguage = att.favLanguage;
        this.catchPhrase = att.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}.`;
    }
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}.`;
    }
    giveGrade(student) {
        let newGrade = student.grade + randomizer();
        student.grade =  newGrade >= 100 ? 100 : newGrade <= 0 ? 0 : newGrade;
    }
}

/*
#### Student

* Now we need some students!
* Student uses the same attributes that have been set up by Person
* Student has the following unique props:
  * `previousBackground` i.e. what the Student used to do before Lambda School
  * `className` i.e. CS132
  * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
* Student has the following methods:
  * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
  * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
  * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`
*/

class Student extends Person {
    constructor(att) {
        super(att);
        this.previousBackground = att.previousBackground;
        this.className = att.className;
        this.favSubjects = att.favSubjects;
        this.grade = att.grade;
        
    }
    listsSubjects() {
        return `${this.favSubjects}`;
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
    graduate() {
        return this.grade >= 70? `${this.name} has graduated.` :  `${this.name} has not graduated.`;
    }
}

/*
#### Project Manager

* Now that we have instructors and students, we'd be nowhere without our PM's
* ProjectManagers are extensions of Instructors
* ProjectManagers have the following unique props:
  * `gradClassName`: i.e. CS1
  * `favInstructor`: i.e. Sean
* ProjectManagers have the following Methods:
  * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
  * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`
*/

class ProjectManager extends Instructor {
    constructor(att) {
        super(att);
        this.gradClassName = att.gradClassName;
        this.favInstructor = att.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standup times!`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

const teacher_karen = new Instructor({
        name : "Karen",
        age : 48,
        location : "Santa Barbara",
        gender : "Female",
        specialty : "Gives order",
        favLanguage : "JavaScript",
        catchPhrase : "Use your psychic ability to solve this case!"
});

const teacher_lassiter = new Instructor({
    name : "Lassiter",
    age : 46,
    location : "Santa Barbara",
    gender : "Male",
    specialty : "Pointing gun at random people",
    favLanguage : "PHP",
    catchPhrase : "SPENCER!"
});

const student_shawn = new Student ({
    name : "Shawn",
    age : 28,
    location : "Santa Monica",
    gender : "Male",
    previousBackground : "Freeloader",
    className : "PSYCH",
    favSubjects : ["Physychics", "Pinapple", "Making Quatro Queso Dos Fritos", "Eating Japadogs"],
    grade : 80,
});
const student_gus = new Student ({
    name : "Gus",
    age : 28,
    location : "Santa Monica",
    gender : "Male",
    previousBackground : "Pharmaceutical salesperson",
    className : "PSYCH",
    favSubjects : ["Spelling", "Finance", "Driving the Blueberry", "Memorizing all the unique nicknames"],
    grade : 80,
});

const pm_henry = new ProjectManager ({
        name : "Henry",
        age : 58,
        location : "Murder Capital of the World",
        gender : "Male",
        specialty : "Fishing",
        favLanguage : "React",
        catchPhrase : "I've heard it both way",
        gradClassName : "PSYCH",
        favInstructor : "Karen"
});

const pm_juliet = new ProjectManager ({
    name : "Juliet",
    age : 28,
    location : "Murder Capital of the World",
    gender : "Female",
    specialty : "Ace her detective exam",
    favLanguage : "Python",
    catchPhrase : "I don't have time for your shenanigans!",
    gradClassName : "PSYCH",
    favInstructor : "Lassiter"
});



console.log(teacher_karen);
console.log(teacher_karen.speak());
console.log(teacher_lassiter.demo("JavaScript ES6"));
console.log(teacher_lassiter.grade(student_shawn, "JavaScript III"));
console.log(student_gus.listsSubjects());
console.log(pm_henry.standUp("web19 channel"));
console.log(pm_juliet.debugsCode(student_gus, "Javascript"));

function randomizer() {
    return Math.floor(Math.random() * 21) - 10;
}
console.log(student_shawn.graduate());