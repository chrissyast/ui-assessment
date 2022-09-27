export function titleCase (str) {
  const splitStr = str.toLowerCase().split(' ')
  splitStr.forEach((word, i) => {
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1)
  })
  return splitStr.join(' ')
}
