export const sortTasksObject = (obj) => {
  const array = []
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      obj[key].firebaseKey = key
      array.push(obj[key])
    }
  }
  array.sort((a, b) => {
    const pattern = /(\d{2})\.(\d{2})\.(\d{4})/
    return new Date(b.createData.replace(pattern,'$3-$2-$1')) - new Date(a.createData.replace(pattern,'$3-$2-$1'))
  })
  return array
}