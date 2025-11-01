export type GoogleAnalyticsType = {
  data_label: string[]
  data: {
      date: string
      values: string[]
  }[]
}

export type GoogleAnalyticsNewUserType = {
  month: number
  newUser: number
}