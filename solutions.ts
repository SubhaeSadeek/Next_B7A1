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
