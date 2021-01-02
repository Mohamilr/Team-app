export const descendingOrder = (data) => {
    data.sort((a, b) => {
        return new Date(b.createdon) - new Date(a.createdon);
      })
}