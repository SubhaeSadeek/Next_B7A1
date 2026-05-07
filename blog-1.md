# The Confusing `any` and `unknown`

### Introduction

There are times, when we are not sure which data type will be there. This can be from fetched data or due to our function that may have any type of data may be returned. Then come
When we define type, we do it to make strict type. When we use `any` , typescript just says - I am not going to think of you. And for unknwon, typescript just say, wait, it is unknown, but can you please let me know what the type would be?

### Explainer(body of the passage)

The introduction just make us a glimps of what is coming. In pure term, we can say, if we use `any`, it will just become like plain Javascript code. It become again dynamic data type rather than static and strict data type. Lets have a code example.

```typescript
let box: any = "candy";
box = 23;
box = ["candy", 5, "chocolet"];
```

typescript will allow this type change as if it forget the type of the variable.

On the other hand, `unknown` will be like, I am currently not knowing the type, but unless the type is not known, I will restrict. This means, typescript forces type safety for `unknown` type.

let us make a function and see what happened. We assume a funtion that will give us lenght of argument pass.

```typescript

function getLengthAny(value: any):  {
	return value.length;
}
```

> **This will return undefines if we pass number type or object type.**

On the other hand, if we write unknown, it will ask for type narrowing to get a result. Example:

```typescript
function getLengthUnknown(value: unknown) {
	if (typeof value === "string" || Array.isArray(value)) {
		return value.length;
	} else return "Please give either string or array to get the lenght";
}
```

> **We need type cheking to execute**

From the above example, it is pretty much clear that `unknown` the **safer choice for handling unpredictable data** than `any`.

### Type Narrowing in TypeScript

Type narrowing is the process of reducing a variable’s possible types into a more specific type using checks like `typeof`, `instanceof`, or conditionals. It helps TypeScript provide safer property and method access.

```typescript
function print(value: string | number) {
	if (typeof value === "string") {
		console.log(value.toUpperCase());
	}
}
```

### Conclusion

- `unknown` the **safer choice for handling unpredictable data** than `any`.
- Type narrowing is the _process of reducing a variable’s possible types into a more specific type_ using checks like `typeof`, `instanceof`, or conditionals.
