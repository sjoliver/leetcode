function isIsogram(str){
  
  if (str.length <= 1) {
    return true;
  };
  
  const lowerStr = str.toLowerCase();
  
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (lowerStr[i] === lowerStr[j]) {
        return false
      }
    }
  }
  return true;
}

console.log(isIsogram("moOse"))