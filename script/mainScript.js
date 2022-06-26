let headText;
let htmlText;

headText = 'Hello world!';
htmlText =  'CATS!';

let myHeading = document.querySelector('h1')
myHeading.textContent = headText

let htmlTitle = document.querySelector('title')
htmlTitle.textContent = htmlText

let ice_cream;
ice_cream = 'banana'
if (ice_cream === 'banana') {
    alert('I like banana ice-cream. How about you? Open the link to GitHub and join the discussion.')
}
else {
    alert("I don't like banana ice-cream. So if you're looking for this, you may get into a wrong place.")
}

let cat_image_change = document.getElementById('catImage')
cat_image_change.onclick = function() {
    let image_inf = cat_image_change.getAttribute('src')
    if (image_inf === 'images/cat.jpg') {
        cat_image_change.setAttribute('src','images/cat2.jpg')
        alert('哼，你又戳我！我走了:(')
    }
    else {
        cat_image_change.setAttribute('src','images/cat.jpg')
        alert('啊你居然真的不理我了')
    }
}

function setUserName() {
    let userNameInput = prompt('Your name: ')
    if (!userNameInput) {
        setUserName()
    }
    else {
        localStorage.setItem('Name',userNameInput)
        myHeading.textContent = "Welcome to cats'world! " + userNameInput +'.'
    }
    
}

if (!localStorage.getItem('Name')) {
    setUserName()
}
else {
    let storedName = localStorage.getItem('Name')
    myHeading.textContent = "Welcome to cats'world! " + storedName +'.'
}

document.querySelector('button').onclick = function() {
    setUserName()
}
