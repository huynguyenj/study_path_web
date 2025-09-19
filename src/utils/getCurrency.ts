export const getVietNameCurrency = (money:number) => {
      const formattedVND = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
      }).format(money)
      return formattedVND
}