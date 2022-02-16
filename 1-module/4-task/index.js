function checkSpam(str) {
  let res = str.toLowerCase()
  let res2 = res.includes("1XbeT".toLowerCase()) || res.includes("XXX".toLowerCase())
  return res2

}
