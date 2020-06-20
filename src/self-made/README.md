## Self made dependency injection

Largely from [this article](https://nehalist.io/dependency-injection-in-typescript/).


### Generics

[Generics](https://www.typescriptlang.org/docs/handbook/generics.html) is a key part of writing components that can be used across all types.

### Reflect API

Using `reflect-metadata` - we can analyze the structure and metadata of a class/method/program.

### Decorators

Decorators are found in many DI implementations across languages. It is important to understand them in Typescript.

Decorators [cannot change the property structure of a class](https://github.com/microsoft/TypeScript/issues/4881), i.e. add fields or methods.
