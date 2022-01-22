function solution(str, ending){

  if (ending.length === 0) {
    return true
  }
  
  const endingLength = -ending.length

  const strEnd = str.slice(endingLength)

  if (strEnd === ending) {
    return true;
  }

  return false;

}

function solutionAlt(str, ending){
  return str.endsWith(ending);
}
