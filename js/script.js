let stack = []

function toggleModal(event){
    console.log(event.target)
    if(event.target.dataset.bsTarget){
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
    }}
}
navtutorialButton = document.querySelector('#tutorial-btn')
navexampleButton = document.querySelector('#example-btn')

navexampleButton.addEventListener('click', toggleModal)
navtutorialButton.addEventListener('click', toggleModal)

