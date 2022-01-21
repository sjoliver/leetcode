function oddOrEven(array) {

  if (array.length < 1) {
    return "even"
  } else if (array.length === 1) {
    if (array[0] % 2 === 0) {
      return "even"
    } else {
      return "odd"
    }
  } 
    
  const sum = array.reduce((x,y) => x + y)
  
  if (sum % 2 === 0) {
    return "even"
  } else {
    return "odd"
  }
  
  };