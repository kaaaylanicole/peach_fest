function toggleDays(day) {
    let dayWrappers = document.getElementsByClassName('day-wrapper')
    dayWrappers = Array.prototype.slice.call( dayWrappers )
    dayWrappers.forEach((dayWrapper) =>{
      if (dayWrapper.id==day){
        dayWrapper.classList.remove('hide')
      }
      else{
        dayWrapper.classList.add('hide')

      }
    })
  }

function showForm() {
  let formDiv = document.getElementById('contact-form')
  formDiv.classList.remove('hide')
}

function hideForm() {
  let formDiv = document.getElementById('contact-form')
  formDiv.classList.add('hide')
}