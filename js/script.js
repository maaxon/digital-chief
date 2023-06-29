let menuActive = false

document.querySelector(".menu__open").addEventListener("click",()=>{
    if(!menuActive){
        const overlay = document.querySelector('.menu__overlay')
        const content = document.querySelector('.menu__content')
        overlay.classList.add("active")
        content.classList.add("active")
        menuActive = !menuActive
    }
})

document.querySelector(".menu__close").addEventListener("click",()=>{
    if(menuActive){
        const overlay = document.querySelector('.menu__overlay')
        const content = document.querySelector('.menu__content')
        overlay.classList.remove("active")
        content.classList.remove("active")
        menuActive = !menuActive
    }
})

const isTextValid = (text) => {
    return text.length < 1
}

const nameInput = document.querySelector("#name")

nameInput.addEventListener("change",(e)=>{
    if (isTextValid(e.target.value)) {
        nameInput.classList.add("error")
        document.querySelector("#name-error").classList.remove("hidden")
    }
    else {
        nameInput.classList.remove("error")
        document.querySelector("#name-error").classList.add("hidden")
    }
})

const isEmailValid= (email)=>{
    const regExp = new RegExp("[a-zA-Z0-9.-_]+@[a-zA-Z.-]{2,}[.][a-zA-Z]{2,}");
    return regExp.test(email)
}



const emailInput = document.querySelector("#email")

emailInput.addEventListener("change",(e)=>{
    if (!isEmailValid(e.target.value)) {
        emailInput.classList.add("error")
        document.querySelector("#email-error").classList.remove("hidden")
    }
    else {
        emailInput.classList.remove("error")
        document.querySelector("#email-error").classList.add("hidden")
    }
})


const messageInput = document.querySelector("#message")

messageInput.addEventListener("change",(e)=>{
    if (isTextValid(e.target.value)) {
        messageInput.classList.add("error")
        document.querySelector("#message-error").classList.remove("hidden")
    }
    else {
        messageInput.classList.remove("error")
        document.querySelector("#message-error").classList.add("hidden")
    }
})

document.querySelector("#contacts-form").addEventListener("submit",async (e)=>{
    e.preventDefault()
    const name = nameInput.value
    const email = emailInput.value
    const message = messageInput.value

    if (isTextValid(name) && isTextValid(message) && isEmailValid(email)){
        await sendRequest()
    }

})

async function sendRequest(name,email,message){
    const response = await fetch("url",{
        method:"POST",
        body:{
            name,
            email,
            message
        }
    })
}
