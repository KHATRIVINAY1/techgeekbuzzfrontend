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