# Understanding Generics in TypeScript

### Introduction

Sometime, we have situation when we need to allow more than one type to satisfy. This can be to reuse either interface, or funtion with different types yet hve same inerface or function.
Generics allow us to write reusable and scalable code while preserving strict typing. Instead of hardcoding types, we create functions, interfaces, or classes that can work with multiple data types dynamically.

### Explanation(body of the essay)

Without Generics, developers often fall back to using `any`, which removes TypeScript’s safety benefits.

Example without Generics:

```typescript
function getValue(value: any): any {
	return value;
}
```

This works, but TypeScript can no longer guarantee what type is returned.

Now let’s solve this with Generics.

### Generic Functions

A Generic uses a placeholder type, commonly written as `T`.

```typescript
function getValue<T>(value: T): T {
	return value;
}
```

Now TypeScript understands that the returned value will always match the argument type.

```typescript
const name = getValue<string>("Subhae");
const age = getValue<number>(24);
```

This gives:

- flexibility
- type safety
- autocomplete support
- compile-time error checking

All without duplicating code.

We can also do the same with:

> Generics with interface

> Generics with Arrays

The core idea will be same.

---

### Generic Constraints

Sometimes you want flexibility, but only for types that contain specific properties. So, we put constraints so that we can sure the exact types are ensured yet giving us flexibility. This is due to some logic and data type. say we need to get lenght of our argument. we open th edata type with generics. The catch is that not all data type has method lenght. Only `string` nadn `array` has lenght property. soj we put osme constraint as shown below:

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

### Conclusion

Generics are one of the foundations of scalable TypeScript applications. They help developers create reusable code without sacrificing type safety. In conclusion we can say in loud voice, like what famously quoted by us when we were student in schools _kobi bolechen_ (the poet has told):

> Write once, use everywhere, stay type-safe.

That balance between flexibility and strict typing is what makes TypeScript so powerful. That is achieved through generics.
