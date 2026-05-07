// ? Problem 1:
function filterEvenNumbers(needFilter: number[]): number[] {
	const evenNumList = needFilter.filter((num) => num % 2 === 0);
	return evenNumList;
}

// console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));
// ? Problem 2
function reverseString(str: string): string {
	const reverseStrArray: string[] = [];
	const splitStr = str.split("");
	for (let i = splitStr.length; i >= 0; i--) {
		reverseStrArray.push(splitStr[i]);
	}

	return reverseStrArray.join("");
}

// console.log(reverseString("typescript"));

// ? problem 3
function checkType(param: string | number): string {
	return param === "string" ? "String" : "Number";
}
// console.log(checkType(33));

// ? problem 4 that takes an object and a key, then returns the value of that key. Use constraints to ensure the key exists on the object.
function getProperty<T, K extends keyof T>(obj: T, key: K): any {
	return obj[key];
}

// ? problem 5
interface Book {
	title: string;
	author: string;
	publishedYear: number;
}
interface newBookReadStatus extends Book {
	isRead: boolean;
}

function toggleReadStatus(book: Book): newBookReadStatus {
	const newBookStatus: newBookReadStatus = { ...book, isRead: true };
	return newBookStatus;
}
const myBook = {
	title: "TypeScript Guide",
	author: "Jane Doe",
	publishedYear: 2024,
};
// console.log(toggleReadStatus(myBook));

// ? problem 6
class Person {
	name: string;
	age: number;

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}
}

class Student extends Person {
	grade: string;
	constructor(name: string, age: number, grade: string) {
		super(name, age);
		this.grade = grade;
	}
	getDetails() {
		return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
	}
}

const student = new Student("Alice", 20, "A");
student.getDetails();
console.log(student.getDetails());
