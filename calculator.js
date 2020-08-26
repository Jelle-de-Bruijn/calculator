const numButtons = document.querySelectorAll('.number')
const screen = document.querySelector('.screen')
let sum = ""
let op = 1
numButtons.forEach((button) => {
    button.addEventListener('click', () => {
        screen.textContent += button.textContent
        //displays pressed buttons content
        sum += button.textContent
        //creates string of the displayed sum
        op = 0
        console.log(op)
    })
})

const opButtons = document.querySelectorAll('.operator')
opButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (op != 1) {
            sum += button.textContent
            screen.textContent += button.textContent
            op = 1
        }
    })
})

const equal = document.querySelector('#equal')
equal.addEventListener('click', () => {
    screen.textContent = eval(sum)
})

const clr = document.querySelector('#clr')
clr.addEventListener('click', () => {
    screen.textContent = ""
    sum = ""
})