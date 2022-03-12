function wrap(element) {
    // create wrapper container
    var wrapper = document.createElement('div');
    wrapper.className = 'hscroll'
    element.parentNode.insertBefore(wrapper, element);
    wrapper.appendChild(element);

}
alltables = document.querySelectorAll('article table')
for (i = 0; i < alltables.length; i++) {
    wrap(alltables[i]);
}

function tableofcontent() {
    article = document.querySelector('article');
    articlenodes = article.children;

    tablelist = document.querySelector('.tbclist');

    heading = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'];
    let counter = 1;
    for (i = 0; i <= articlenodes.length; i++) {
        if (articlenodes[i]) {
            if (heading.includes(articlenodes[i].nodeName)) {
                articlenodes[i].id = `goto ${counter}`;
                newlist = document.createElement('li');
                newlist.innerHTML = `<a href='#goto ${counter}'>${articlenodes[i].textContent}</a>`
                tablelist.appendChild(newlist)
                counter += 1
            }
        }
    }
}

tableofcontent()

function removeFrom(event){
    console.log(event.target)

    event.preventDefault();
    reply_form = document.querySelector(".reply-form")
    if(document.querySelector(".reply-form"))
    {
        reply_form.remove()
    }
}


function replyForm(event){
    event.preventDefault();
    reply_form = document.querySelector(".reply-form")
    if(document.querySelector(".reply-form"))
    {
        reply_form.remove()
    }
    

    let mainNode = event.target.parentElement.parentElement;
    let form = document.querySelector('.comment-form');
    let clone = form.cloneNode(true);
    clone.className ="reply-form"

    let cancel_btn = document.createElement('button')
    cancel_btn.className = 'btn btn-danger mt-2 w-100 cancel-form'
    cancel_btn.innerHTML = "Cancel" 
    clone.appendChild(cancel_btn)

    parentComment = clone.querySelector('.reply-input')
    mainNode.appendChild(clone)
    parentComment.type='text'
    parentComment.value = `You are replying to ${event.target.parentElement.firstChild.textContent}`;
    parentComment.setAttribute('disabled', true)

    let cancelbutton = document.querySelector('.cancel-form')
    cancelbutton.addEventListener('click', removeFrom)
}

replybtn = document.querySelectorAll('.reply');

for(reply of replybtn){
    reply.addEventListener('click', replyForm)
}

