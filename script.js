//complete this code
class Person {
	constructor(name, age) {
		this._name = name;
		this._age = age;
	}
	get name() {
		return this._name;
	}
	set age(value) {
		this._age = value;
	}
}

class Student extends Person {
	constructor(name, age) {
		super(name, age);
	}

	study() {
		console.log(`${this.name} is studying`);
	}
}

class Teacher extends Person {
	constructor(name, age) {
		super(name, age);
	}

	teach() {
		console.log(`${this.name} is teaching`);
	}
}


const person = new Person("John", 25);
console.log(person.name);
console.log(person.age = 30);

const student = new Student("Alice", 22);
student.study();

const teacher = new Teacher("Bob", 40);
teacher.teach();



// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;

