export const replaceFormDate = dateStr => {
  const pattern = /(\d{2})\.(\d{2})\.(\d{4})/
  return dateStr.replace(pattern,'$3-$2-$1')
}