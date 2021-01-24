import {replaceFormDate} from '@/utilities/replaceFormatDate'

export const sortTasksObject = (obj) => {
  const array = []
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      obj[key].firebaseKey = key
      obj[key].id = String(obj[key].id)
      array.push(obj[key])
    }
  }
  array.sort((a, b) => new Date(replaceFormDate(b.createData)) - new Date(replaceFormDate(a.createData)))
  return array
}