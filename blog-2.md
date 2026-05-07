# Understanding Generics in TypeScript

### Introduction

Sometime, we have situation when we need to allow more than one type to satisfy. This can be to reuse either interface, or funtion with different types yet hve same inerface or function.
Generics allow us to write reusable and scalable code while preserving strict typing. Instead of hardcoding types, we create functions, interfaces, or classes that can work with multiple data types dynamically.

### Explanation(body of the essay)

Without Generics, developers often fall back to using `any`, which removes TypeScript’s safety benefits.

Example without Generics:

```ts
function getValue(value: any): any {
	return value;
}
```

This works, but TypeScript can no longer guarantee what type is returned.

```ts
const result = getValue("Hello");
result.toUpperCase();
```

Now let’s solve this with Generics.

## Generic Functions

A Generic uses a placeholder type, commonly written as `T`.

```ts
function getValue<T>(value: T): T {
	return value;
}
```

Now TypeScript understands that the returned value will always match the argument type.

```ts
const name = getValue<string>("Subhae");
const age = getValue<number>(24);
```

This gives:

- flexibility
- type safety
- autocomplete support
- compile-time error checking

All without duplicating code.

---

# Generics with Arrays

Generics become even more powerful with arrays and collections.

```ts
function getFirstElement<T>(array: T[]): T {
	return array[0];
}
```

Usage:

```ts
const firstNumber = getFirstElement([1, 2, 3]);
const firstString = getFirstElement(["a", "b", "c"]);
```

TypeScript automatically infers the correct type.

---

# Generic Interfaces

Generics are not limited to functions. They also work with interfaces.

```ts
interface ApiResponse<T> {
	success: boolean;
	data: T;
}
```

Usage:

```ts
interface User {
	name: string;
	email: string;
}

const response: ApiResponse<User> = {
	success: true,
	data: {
		name: "John",
		email: "john@example.com",
	},
};
```

This pattern is extremely common in API handling.

---

# Generic Constraints

Sometimes you want flexibility, but only for types that contain specific properties.

```ts
function getLength<T extends { length: number }>(value: T): number {
	return value.length;
}
```

Now only values with a `length` property are allowed.

```ts
getLength("Hello");
getLength([1, 2, 3]);
```

But this would fail:

```ts
getLength(100);
```

Because numbers do not have a `length` property.

---

# Why Generics Matter

Generics are one of the foundations of scalable TypeScript applications. They help developers create reusable utilities, API handlers, data structures, hooks, and libraries without sacrificing type safety.

Modern frameworks and libraries like React, Prisma, Redux Toolkit, and TanStack Query heavily rely on Generics internally.

The real power of Generics is this:

> Write once, use everywhere, stay type-safe.

That balance between flexibility and strict typing is what makes TypeScript so powerful.
