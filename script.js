let weight = document.querySelector("#weight-number")
let height = document.querySelector("#height-number")
let bmiForm = document.querySelector("#bmiForm")
let showText = document.querySelector("#show-text")

// function menghitung(weight, height){
//     let hasil = weight / (height/100)**2
    
//     if(hasil < 18.5){
//         console.log("Underweight");
//     }else if (hasil <= 24.9) {
//         console.log("Normal Weight");
//     }else if (hasil <= 29.9) {
//         console.log("Over Weight");
//     } else{
//         console.log("Obesity");
//     }
// }

// menghitung(60, 167)
bmiForm.addEventListener("submit", (event) => {
    event.preventDefault()
    let berat = weight.value
    let tinggi = height.value
    
    let hasil = berat / (tinggi/100)**2
    if (hasil < 18.5) {
        showText.innerHTML = `Your BMI is ${hasil.toFixed(1)} which means you are Under`
    }else if (hasil <= 24.9) {
        showText.innerHTML = `Your BMI is ${hasil.toFixed(1)} which means you are Normal`
    }else if (hasil <= 29.9) {
        showText.innerHTML = `Your BMI is ${hasil.toFixed(1)} which means you are Over`
    } else{
        showText.innerHTML = `Your BMI is ${hasil.toFixed(1)} which means you are Obesity`
    }
})
