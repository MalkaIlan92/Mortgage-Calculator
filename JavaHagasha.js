let Fund = document.getElementById('FundAmount')
let Interest = document.getElementById('Interest')
let Years = document.getElementById('Years')
let Payment = document.getElementById('Payment')
let result = document.getElementById('result')
let isOk = document.getElementById("isOk")

function calc() {

    result.value = Number(Fund.value) * (1 + (Number(Interest.value / 100))) / (Number(Years.value) * 12)
    result.innerHTML = result.value
    if (payment.value < result.value) {
        isOk.innerHTML = "סכום גבוה, תנסה להקטין את הקרן או להגדיל את התקופה"
    } else {
        isOk.innerHTML = "הסכום נמוך, הינך יכול לשלם אותו"
    }
}


function checkInput(event) {
    let value = Number(event.target.value)
    if (isNaN(value)) {
        Fund.style.border = "2px solid red"
        document.getElementById("ErrorFundAmount").innerHTML = "You can write only number "
    } else {
        Fund.style.border = ""
        document.getElementById("ErrorFundAmount").innerHTML = ""

    }



}


Fund.addEventListener(
    "change", checkInput
)





function checkInput1(event) {
    let value = Number(event.target.value)
    if (isNaN(value)) {
        Interest.style.border = "2px solid red"
        document.getElementById("ErrorInterest").innerHTML = "You can write only number "
    } else {
        Interest.style.border = ""
        document.getElementById("ErrorInterest").innerHTML = ""

    }



}


Interest.addEventListener(
    "change", checkInput1
)








function checkInput2(event) {
    let value = Number(event.target.value)
    if (isNaN(value)) {
        Years.style.border = "2px solid red"
        document.getElementById("ErrorYears").innerHTML = "You can write only number "
    } else {
        Years.style.border = ""
        document.getElementById("ErrorYears").innerHTML = ""

    }



}


Years.addEventListener(
    "change", checkInput2
)





function checkInput3(event) {
    let value = Number(event.target.value)
    if (isNaN(value)) {
        payment.style.border = "2px solid red"
        document.getElementById("Errorpayment").innerHTML = "You can write only number "
    } else {
        payment.style.border = ""
        document.getElementById("Errorpayment").innerHTML = ""

    }



}


payment.addEventListener(
    "change", checkInput3
)