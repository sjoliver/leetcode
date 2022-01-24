function accum(str) {
	
  let result = "";
  let num = 1;

  for (let letter of str) {

    console.log(letter)

    result = `${result}-${letter.repeat(num)}`

    num++

  }

  return result;

}

console.log(accum("ZpglnRxqenU"))