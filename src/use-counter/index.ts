import { ref, Ref } from 'vue'

interface CounterContext {
  count: Ref<number>
  increment: (step?: number) => void
  decrement: (step?: number) => void
  set: (value: number) => void
  reset: () => void
}

export default function useCounter(initialValue = 0): CounterContext {
  const count = ref(initialValue)

  function increment(step = 1) {
    count.value += step
  }

  function decrement(step = 1) {
    count.value -= step
  }

  function set(value: number) {
    count.value = value
  }

  function reset() {
    count.value = initialValue
  }

  return { count, increment, decrement, set, reset }
}
