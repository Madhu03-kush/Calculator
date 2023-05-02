;(function () {
  let screen = document.querySelector(".screen")
  let buttons = document.querySelectorAll(".btn")
  let clear = document.querySelector(".clear")
  let equal = document.querySelector(".equal")
  let back = document.querySelector(".back")

  buttons.forEach(function (input) {
    input.addEventListener("click", function (e) {
      let value = e.target.dataset.num
      screen.value += value
    })
  })

  equal.addEventListener("click", function (e) {
    if (screen.value === "") {
      screen.value = "please enter the value"
      console.log(screen.value)
    } else {
      result = eval(screen.value)
      screen.value = result
      console.log(screen.value)
    }
  })

  clear.addEventListener("click", function (e) {
    screen.value = ""
  })
})()
