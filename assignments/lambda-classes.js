// CODE here for your Lambda Classes
// ## `lambda-classes` - We need a roster of Lambda School personnel. Build it!

// * We have a school to build here! This project will get you used to thinking about classes in JavaScript and building them from a brand new data set.
// * Lambda personnel can be broken down into three different types of `people`.
//   * **Instructors** - extensions of Person
//   * **Students** - extensions of Person
//   * **Project Managers** - extensions of Instructors
// * **IMPORTANT** - You'll need to create 2 - 3 objects for each class and test them according to their unique Attributes. For example:

// ```js
// const fred = new Instructor({
//   name: 'Fred',
//   location: 'Bedrock',
//   age: 37,
//   favLanguage: 'JavaScript',
//   specialty: 'Front-end',
//   catchPhrase: `Don't forget the homies`
// });
// ```

// #### Person

// * First we need a Person class. This will be our `base-class`
// * Person receives `name` `age` `location` all as props
// * Person receives `speak` as a method.
// * This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props

class Person {
    constructor(profile){
        this.name = profile.name,
        this.age = profile.age,
        this.location = profile.location
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}
const paul = new Person({
  name: 'Elijah',
  location: 'New York',
  age: 36,
  favLanguage: 'Python',
  specialty: 'Front-end',
  catchPhrase: `The Big Apple`
});

const jasmine = new Person({
    name: 'Jasmine',
    location: 'Boston',
    age: 24,
    favLanguage: 'React',
    specialty: 'Front-end',
    catchPhrase: `Be You`
  });

  const jessica = new Person({
    name: 'Jessica',
    location: 'Thorndale',
    age: 67,
    favLanguage: 'JavaScript',
    specialty: 'Full-Stack',
    catchPhrase: `Live Your Best Life`
  });


// #### Instructor

// * Now that we have a Person as our base class, we'll build our Instructor class.
// * Instructor uses the same attributes that have been set up by Person
// * Instructor has the following unique props:
//   * `specialty` what the Instructor is good at i.e. 'redux'
//   * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
//   * `catchPhrase` i.e. `Don't forget the homies`
// * Instructor has the following methods:
//   * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
//   * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'

class Instructor extends Person {
    constructor(profile){
        super (profile);
        this.specialty = profile.specialty,
        this.favLanguage  = profile.favLanguage,
        this.catchPhrase = profile.catchPhrase
    }
    demo(subject){
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject){
        return `${student} receives a perfect score on ${subject}`;
    }
}

const jose = new Instructor({
  name: 'Jose',
  location: 'Austin',
  age: 32,
  favLanguage: 'Swift',
  specialty: 'Front-end',
  catchPhrase: `Family and Friends First`
});

const melina = new Instructor({
    name: 'Melina',
    location: 'San Jose',
    age: 242,
    favLanguage: 'Java',
    specialty: 'Backend',
    catchPhrase: `Go with the flow`
  });

  const erik = new Instructor({
    name: 'Erik',
    location: 'Kansas City',
    age: 22,
    favLanguage: 'Java',
    specialty: 'Full-Stack',
    catchPhrase: `Leave no one behind`
  });

// #### Student

// * Now we need some students!
// * Student uses the same attributes that have been set up by Person
// * Student has the following unique props:
//   * `previousBackground` i.e. what the Student used to do before Lambda School
//   * `className` i.e. CS132
//   * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
// * Student has the following methods:
//   * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
//   * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
//   * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`

class Student extends Person {
    constructor(profile){
        super (profile);
        this.previousBackground = profile.previousBackground,
        this.className = profile.className,
        this.favSubjects = profile.favSubjects
    }
    listSubjects(){
        console.log();
    }
    PRAssignment(){
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
    sprintChallenge(){
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}
const eddie = new Student({
  name: 'Eddie',
  location: 'Santa Fe',
  age: 33,
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Heyyyy`
});

const joy = new Student({
    name: 'Joy',
    location: 'Philadelphia',
    age: 27,
    favLanguage: 'React',
    specialty: 'Front-end',
    catchPhrase: `Just Do It`
  });

  const liam = new Student({
    name: 'Liam',
    location: 'San Diego',
    age: 19,
    favLanguage: 'Ruby',
    specialty: 'Front-End',
    catchPhrase: `I'm with her`
  });

// #### Project Manager

// * Now that we have instructors and students, we'd be nowhere without our PM's
// * ProjectManagers are extensions of Instructors
// * ProjectManagers have the following unique props:
//   * `gradClassName`: i.e. CS1
//   * `favInstructor`: i.e. Sean
// * ProjectManagers have the following Methods:
//   * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!`
//   * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`

class ProjectManager extends Instructor {
    constructor(profile){
        super (profile);
        this.gradClassName = profile.gradClassName,
        this.favInstructor = profile.favInstructor
    }
    standup(){
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
    debugsCode(){
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}
const miley = new ProjectManager({
  name: 'Miley',
  location: 'LA',
  age: 26,
  favLanguage: 'Python',
  specialty: 'Front-end',
  catchPhrase: `Be the change`
});

const isa = new ProjectManager({
    name: 'Isa',
    location: 'Boston',
    age: 24,
    favLanguage: 'React',
    specialty: 'Front-end',
    catchPhrase: `Be You`
  });

  const Lief = new ProjectManager({
    name: 'Lief',
    location: 'Joshua Tree',
    age: 55,
    favLanguage: 'JavaScript',
    specialty: 'Full-Stack',
    catchPhrase: `We only have one life`
  });

  console.log(jose.demo("Math"))
  console.log(jose.grade())