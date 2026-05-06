// ? Problem 1:
function filterEvenNumbers(needFilter: number[]): number[] {
	const evenNumList = needFilter.filter((num) => num % 2 === 0);
	return evenNumList;
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));
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
