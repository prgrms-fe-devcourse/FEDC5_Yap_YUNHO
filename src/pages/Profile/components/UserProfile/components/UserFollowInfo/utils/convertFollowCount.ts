// following, follower 수에 단위를 붙여주는 함수(0~9999만)
export const convertFollowCount = (count: number): string => {
  if (count >= 10000) {
    const integer = count.toString().slice(0, -4) //정수(만 단위)
    const decimal = count.toString().slice(-1) //소수(천 단위)

    if (decimal === "0") {
      return `${integer}만`
    } else {
      return `${integer}.${decimal}만`
    }
  }

  return count.toString()
}
