function makeFriendsList(friends) {
  let param = document.createElement('ul')
   friends.forEach((el) => param.innerHTML += ` <li> ${el.firstName} ${el.lastName} </li>`)
   return param
}
