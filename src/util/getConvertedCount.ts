export const getConvertedCount = (count: number): string => {
  if (count >= 10000) {
    const integer = count.toString().slice(0, -4)
    const decimal = count.toString().slice(integer.length, integer.length + 1)
    if (decimal === "0") {
      return `${integer}만`
    } else {
      return `${integer}.${decimal}만`
    }
  }

  return count.toString()
}
