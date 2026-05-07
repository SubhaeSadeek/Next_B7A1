function filterEvenNumbers(needFilter: number[]): number[] {
	const evenNumList = needFilter.filter((num) => num % 2 === 0);
	return evenNumList;
}

function reverseString(str: string): string {
	const reverseStrArray: string[] = [];
	const splitStr = str.split("");
	for (let i = splitStr.length; i >= 0; i--) {
		reverseStrArray.push(splitStr[i]);
	}

	return reverseStrArray.join("");
}

function checkType(param: string | number): string {
	return param === "string" ? "String" : "Number";
}

function getProperty<T, K extends keyof T>(obj: T, key: K): any {
	return obj[key];
}

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

function getIntersection(array1: number[], array2: number[]): number[] {
	const array2InSet = new Set(array2);
	const resultSet = new Set<number>();
	array1.forEach((num) => {
		if (array2InSet.has(num)) {
			resultSet.add(num);
		}
	});
	return [...resultSet];
}
