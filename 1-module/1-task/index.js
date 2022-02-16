function factorial(n) {
    let result = 1
    let count;

  if( n === 0 || n === 1){
    return 1
  }
    for(count = n; count > 1; count--) {
      result = (result * count)
    }

return result;
}

 