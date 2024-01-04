const btn = document.querySelector('.btn')
const input = document.querySelector('#inputText')

btn.addEventListener('click', (e)=>{
    e.preventDefault()
    const inputValue = input.value
    const requered = document.querySelector('.input + span')
    console.log(requered)
    if(inputValue === ""){
        input.classList.add('campo-requered')
        input.classList.remove('campo-preenchido')
        requered.classList.remove('ativo')
    }else{
        input.classList.remove('campo-requered')
        input.classList.add('campo-preenchido')
        requered.classList.add('ativo')
    }
})