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