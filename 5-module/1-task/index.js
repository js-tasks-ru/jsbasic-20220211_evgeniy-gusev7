function hideSelf() {
  let btn = document.querySelector('.hide-self-button')

  btn.onclick   = () => {
      console.log('df')
      btn.setAttribute('hidden', "hidden")
  }
}
