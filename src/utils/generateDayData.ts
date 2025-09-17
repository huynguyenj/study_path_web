/**
 * Rule: 
 *    - Month: 0 --> 11
 *    - Day of the week: 0 --> 6 (Sunday --> Saturday)
 *    - Input the month must follow the rule of month index
 */

export const getTotalDaysInMonth = (month: number, year: number): number => {
      // Month default is 0 => increase by 1 to get right data of the month
      // Input must be your actual month - 1
      return new Date(year, month + 1, 0).getDate()
}

//Get the first day index of the week
const firstDayOfTheMonth = (month: number, year: number) => {
      return new Date(year, month, 1).getDay() == 0 ? 7 : new Date(year, month, 1).getDay()
}

export const getListDayOfWeekInSpecificMonth = (month: number, year: number): (number|null)[] => {
      //List day of week
      // in method getDay() will run from 0 - 6
      // 0 will be sunday --> saturday 6
      const totalDayInMonth = getTotalDaysInMonth(month, year)
      // Get day of the first day of the month
      const blankDayOfTheWeekOnFirstDay = firstDayOfTheMonth(month, year)
      const listDayOfWeekInMonth = []
      // Fill all previous day of the first day with null
      for (let restDay = blankDayOfTheWeekOnFirstDay - 1; restDay > 0; restDay--) {
            listDayOfWeekInMonth.push(null)
      }
      for (let i = 0; i < totalDayInMonth; i++) {
            // Get exactly the day index in the week for specific day
            listDayOfWeekInMonth.push(i + 1)
      }
      return listDayOfWeekInMonth
}

