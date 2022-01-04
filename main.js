const alcoholicAdultsNumber = document.getElementById('alcoholicAdults')
const nonAlcoholicAdultsNumber = document.getElementById('nonAlcoholicAdults')
const kidsNumber = document.getElementById('kids')
const time = document.getElementById('time')

function meatAmountByTime(time) {
  if (time >= 6) {
    return 650
  } else {
    return 400
  }
}

function beerAmountByTime(time) {
  if (time >= 6) {
    return 2000
  } else {
    return 1200
  }
}

function sodaAmountByTime(time) {
  if (time >= 6) {
    return 1500
  } else {
    return 1000
  }
}

document.getElementById('calculate').onclick = function calcs() {
  let meatAmount =
    meatAmountByTime(time.value) * alcoholicAdultsNumber.value +
    (meatAmountByTime(time.value) / 2) * kidsNumber.value +
    meatAmountByTime(time.value) * nonAlcoholicAdultsNumber.value
  let beerAmount = beerAmountByTime(time.value) * alcoholicAdultsNumber.value
  let sodaAmount =
    sodaAmountByTime(time.value) * kidsNumber.value +
    nonAlcoholicAdultsNumber.value * sodaAmountByTime(time)

  document.getElementById('meat').innerHTML = `${meatAmount / 1000} Kg of Meat`

  document.getElementById('beer').innerHTML = `${Math.ceil(
    beerAmount / 355
  )} Beer Cans`

  document.getElementById('soda').innerHTML = `${Math.ceil(
    sodaAmount / 2000
  )} Soda Bottles (2L)`

  document.getElementById('result').classList.toggle('active')
}

document.getElementById('reset').onclick = function reset() {
  alcoholicAdultsNumber.value = ''
  nonAlcoholicAdultsNumber.value = ''
  kidsNumber.value = ''
  time.value = ''

  document.getElementById('result').classList.toggle('active')
}
