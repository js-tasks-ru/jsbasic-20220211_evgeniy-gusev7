function getMinMax(str) {
  let result = {
    min: null,
    max: null
}
  let res = str.split(" ")
  let res2 = res.map((elem) => Number(elem))
  let res3 = res2.filter(function(elem){ return !Number.isNaN(elem)})

 
  result.min = Math.min.apply (null, res3)
  result.max = Math.max.apply (null, res3)
   return result
}