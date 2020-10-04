type numberOrNull = number | null

export default (fn: Function, delay: number = 200) => {
  let timer: numberOrNull
  return (...args: any[]) => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn(...args)
      timer = null
    }, delay)
  }
}