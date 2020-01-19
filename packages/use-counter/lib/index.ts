import { ref } from 'vue'

export default function useCounter(initialValue = 0) {
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
