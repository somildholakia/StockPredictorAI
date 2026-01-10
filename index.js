// import { dates } from "./dates"


const input_El = document.getElementById("input-field")
const input_btn = document.getElementById("plus-btn")
const display_place = document.getElementById("tickers-p")
const generate_btn = document.getElementById("generate-div")

const  tickerArr = []

input_btn.addEventListener("click",()=> {
    const text = input_El.value
    tickerArr.push(text)

    display_place.textContent = tickerArr 
})

generate_btn.addEventListener("click",()=> {
    document.getElementById("upper-second-container").style.display = 'none'
})


