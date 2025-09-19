export const countDownSecond = (time: number) => {
 return time * 60
}

export const getMinutes = (totalTime: number) => {
      const minutes = Math.floor(totalTime / 60 ).toFixed(0)
      return minutes
}

export const getSeconds = (second: number) => {
      if (second < 10) {
           return `0${second}`
      } 
      return second
}