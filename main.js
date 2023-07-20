let ratingNumbers = Array.from(document.querySelectorAll('.rn'))
let myRating = []
ratingNumbers.forEach(item => {
  item.onclick = () => {
    if(myRating.length >= 1){
      myRating = []
    }
    myRating.push(item)
  }
})


document.querySelector('.submit-btn').onclick = function(){
  document.querySelector('.my-rating-number').textContent = myRating[0].textContent

  document.querySelector('.thank-wrapper').classList.add('show-thank-wrapper')
  document.querySelector('.thank-you').classList.add('show-thankyou')
}

document.querySelector('.close').onclick = function(){
  document.querySelector('.thank-wrapper').classList.remove('show-thank-wrapper')
  document.querySelector('.thank-you').classList.remove('show-thankyou')
}