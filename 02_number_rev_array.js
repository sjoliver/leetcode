function digitize(n) {
  
  return Array.from(String(n), Number).reverse();
  
};

function digitizeAlt(n) {

  return String(n).split('').map(Number).reverse()

};

