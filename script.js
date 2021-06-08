let randomnumber = 0
let userguess = 0

document.getElementById('button').addEventListener('click', randomizer)

function randomizer () {

  userguess = document.getElementById('creeper').value
  userguess = parseInt(userguess)
  randomnumber = (Math.random() * 6) + 1
  randomnumber = parseInt(randomnumber)

  if (userguess === randomnumber) {
    document.getElementById('steve').innerHTML = "Congrats, You Are Big Brain!!!"

  }
}
