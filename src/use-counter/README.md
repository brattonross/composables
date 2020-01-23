# use-counter

> Keeps track of a counter and provides helper methods

## Usage

```
const { count, increment, decrement, set, reset } = useCounter()

// Get the current count
count.value

// Increment the count by 1
increment()

// Decrement the count by 1
decrement()

// Increment the count by an amount
increment(5)

// Decrement the count by an amount
decrement(5)

// Set the count to a value
set(10)

// Reset the count back to the original value
reset()
```