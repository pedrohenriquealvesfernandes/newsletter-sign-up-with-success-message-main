const enviar = document.getElementById("enviar")
const btnDismiss = document.getElementById("dismiss")

const signup = document.querySelector(".signup")
const successMob = document.querySelector(".dismiss-section")
const successSec = document.querySelector(".success") 

const inpEmail = document.getElementById("inpemail")
const errorMsg = document.getElementById("error-message")

const spanEmail = document.getElementById("email-confirmado")

let text = " "

enviar.addEventListener("click",()=>{  
    text = inpEmail.value

    if (text == " " || !text.includes('@') || !text.includes('.com')){
        errorMsg.style.display = 'inline'
        inpEmail.style.border = "1px solid hsl(4, 100%, 67%)";
        inpEmail.style.backgroundColor = "hsl(4, 100%, 67%, 15%)";
    }else{
        errorMsg.style.display = 'none'
        inpEmail.style.border = "1px solid lightgrey";
        signup.style.display = 'none'
        successMob.style.display = 'flex'
        successSec.style.display = 'flex'
        spanEmail.innerText = text
    }

}) 

btnDismiss.addEventListener("click",()=>{

    signup.style.display = ""
    successMob.style.display = 'none'
    successSec.style.display = 'none'
})