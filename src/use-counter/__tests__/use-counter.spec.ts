import { isRef } from 'vue'
import useCounter from '..'

describe('useCounter', () => {
  it('should return a ref of the current count', () => {
    const { count } = useCounter()

    expect(isRef(count)).toBe(true)
  })

  it('should return an increment function', () => {
    const { increment } = useCounter()

    expect(typeof increment).toBe('function')
  })

  it('should return a decrement function', () => {
    const { decrement } = useCounter()

    expect(typeof decrement).toBe('function')
  })

  it('should return a set function', () => {
    const { set } = useCounter()

    expect(typeof set).toBe('function')
  })

  it('should return a reset function', () => {
    const { reset } = useCounter()

    expect(typeof reset).toBe('function')
  })

  describe('count', () => {
    it('should be 0 by default', () => {
      const { count } = useCounter()

      expect(count.value).toBe(0)
    })

    it('should match the initial count when provided', () => {
      const initial = 9
      const { count } = useCounter(initial)

      expect(count.value).toEqual(initial)
    })
  })

  describe('increment', () => {
    it('should increment count when called', () => {
      const { count, increment } = useCounter()

      expect(count.value).toBe(0)
      increment()
      expect(count.value).toBe(1)
    })

    it('should increment count by the provided value', () => {
      const { count, increment } = useCounter()

      expect(count.value).toBe(0)
      increment(2)
      expect(count.value).toBe(2)
    })
  })

  describe('decrement', () => {
    it('should decrement count when called', () => {
      const { count, decrement } = useCounter()

      expect(count.value).toBe(0)
      decrement()
      expect(count.value).toBe(-1)
    })

    it('should decrement count by the provided value', () => {
      const { count, decrement } = useCounter()

      expect(count.value).toBe(0)
      decrement(2)
      expect(count.value).toBe(-2)
    })
  })

  describe('set', () => {
    it('should set count to the provided value', () => {
      const { count, set } = useCounter()

      expect(count.value).toBe(0)
      set(9)
      expect(count.value).toBe(9)
    })
  })

  describe('reset', () => {
    it('should reset to the initial value when called', () => {
      const { count, reset } = useCounter()

      count.value = 9
      expect(count.value).toBe(9)
      reset()
      expect(count.value).toBe(0)
    })

    it('should reset to the provided initial value when called', () => {
      const initial = 9
      const { count, reset } = useCounter(initial)

      count.value = 10
      expect(count.value).toBe(10)
      reset()
      expect(count.value).toBe(initial)
    })
  })
})
