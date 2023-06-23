const init = function (){
    timer()
}

const counter = document.getElementById('counter');
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')

const commentField = document.getElementById('comment-form')
const commentList = document.getElementById('list')
const submisionContent = document.getElementById('comment-input')

plus.addEventListener("click", increment)
minus.addEventListener("click", deIncrement)

commentField.addEventListener('submit', comment)

    function timer(){
        for (let i = 0; i <=100; i++){
         setInterval(() => {
         const newNumber = i++;
            counter.textContent = `${newNumber}`}, 1000)
            console.log(newNumber)
            console.log(counter)
        }
    }
    
    function increment(){
        const value = counter.textContent
        const newValue = parseInt(value) + 1
        counter.textContent = `${newValue}`
        // console.log(newValue)
    }
    
    function deIncrement(){
        const value = counter.textContent
        const newValue = parseInt(value) - 1
        counter.textContent = `${newValue}`
        // console.log(newValue)
    }

    function comment(e){
      e.preventDefault()
      const submision = submisionContent.value
      commentList.textContent = `${submision}`
    }


document.addEventListener('DOMContentLoaded', init)
