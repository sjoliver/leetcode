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

  function oddOrEvenAlt(arr) {

    // second argument in reduce will be added as the initial value so [1, 2] would be [0,1,2]
    // if the num % 2 is truthy (non-zero), terniary operator evaluates to "odd"
    return arr.reduce((a,b) => a + b, 0) % 2 ? 'odd' : 'even';
  };