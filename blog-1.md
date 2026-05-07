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

```typescript
let box: unknown = "candy";
```
