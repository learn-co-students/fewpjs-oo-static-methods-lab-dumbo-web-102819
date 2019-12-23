class Formatter {
  //add static methods here

  static capitalize(stringArg) {
    return (stringArg.charAt(0).toUpperCase() + stringArg.substring(1))
  }

  static sanitize(stringArg) {
    return stringArg.replace(/[^-',A-Za-z0-9 ]/gm, "");
  }

  static titleize(stringArg) {
    let arr = stringArg.split(' ')
    let newArr = []
    let matchingA = ['a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from', 'the']
    arr.forEach((currentValue, index) => {
      if (index === 0) {
        newArr.push(Formatter.capitalize(currentValue))
      } else if (matchingA.includes(currentValue)) {
        newArr.push(currentValue)
      } else {
        newArr.push(Formatter.capitalize(currentValue))
      }
    })
    return newArr.join(' ')

  }


}