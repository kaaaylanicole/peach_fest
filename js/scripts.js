// JS for toggling between days 
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

// JS for clicking on Buy Tickets button and Contact Form to pop up
function showForm() {
  let formDiv = document.getElementById('contact-form')
  formDiv.classList.remove('hide')
}

// JS for clicking "X" on form and hiding the popup module
function hideForm() {
  let formDiv = document.getElementById('contact-form')
  formDiv.classList.add('hide')
}