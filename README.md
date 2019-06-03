# @ts-common/add-position

Add position for every character in a stream.

## State Machine

- it has a state,
- it receives an input,
- it returns a new state and a output.

```ts
type StateMachine<Input, Output> = (input: Input) => { readonly output: Output, readonly state: StateMachine<Input, Output> }
```
