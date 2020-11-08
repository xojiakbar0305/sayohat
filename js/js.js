var VELOCITY_ON_FOOT = parseFloat(3.6)
var VELOCITY_BY_BICYCLE = parseFloat(20.1)
var VELOCITY_BY_CAR = parseFloat(70)
var VELOCITY_BY_PLANE = parseFloat(800)

//
var distanceForm = document.querySelector('.distance-form') //form

var distanceInput = distanceForm.querySelector('.distance-input')//input

var distanceFoot = document.querySelector('.distance-foot')//piyoda

var distanceBicycle = document.querySelector('.distance-bicycle')//veloda

var distanceCar = document.querySelector('.distance-car')// mashinada

var distancePlane = document.querySelector('.distance-plane')//samolyotda

distanceForm.addEventListener('submit', function(evt) {
  evt.preventDefault()

  var elResultInput = distanceInput.value

  //vaqtni aniqlash
  var timeOnFoot = parseFloat(elResultInput / VELOCITY_ON_FOOT, 10)
  var timeBicycle = parseFloat(elResultInput / VELOCITY_BY_BICYCLE, 10)
  var timeCar = parseFloat(elResultInput / VELOCITY_BY_CAR, 10)
  var timePlane = parseFloat(elResultInput / VELOCITY_BY_PLANE)

  //qiymatni chiqarish
  distanceFoot.textContent = timeOnFoot.toFixed(2)
  distanceCar.textContent = timeCar.toFixed(2)
  distanceBicycle.textContent = timeBicycle.toFixed(2)
  distancePlane.textContent = timePlane.toFixed(2)
})