let stack = []

function toggleModal(event){
    console.log(event.target.dataset.bsTarget)
    if(stack[0]==null){
        stack.pop()
    }
    if(stack.length===0){
          stack.push(bootstrap.Modal.getInstance(document.querySelector(`${event.target.dataset.bsTarget}`)))
    }
    else{
        if(stack.length>=0){
        stack[0].hide()
        stack.pop()
        stack.push(bootstrap.Modal.getInstance(document.querySelector(`${event.target.dataset.bsTarget}`)))}
        else{
            stack.pop()
        }
    }
}
navtutorialButton = document.querySelector('[data-bs-target="#tutorialModal"]')
navexampleButton = document.querySelector('[data-bs-target="#exampleModal"]')

navexampleButton.addEventListener('click', toggleModal)
navtutorialButton.addEventListener('click', toggleModal)

