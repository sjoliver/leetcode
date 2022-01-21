function descendingOrder(n){
  
  // convert number into an array 
  // number is passed into .from() as a string as this is what the method expects
  const nArr = Array.from(String(n), Number);

  // sort the array in descending order
  const descArr = nArr.sort(function(a,b){return b-a});

  // join the array into a string
  const descNum = descArr.join("");

  // return the integer version of the string
  return parseInt(descNum);
}

console.log(typeof descendingOrder(123))