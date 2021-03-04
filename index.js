console.log('hello world');
console.error('this is an error');
console.warn('this is a warning');
click.innerHTML = '<b>this is rahul mahajan</b>'

// to clear the console!
console.clear()

let date = new Date()
console.log(date.getDate())
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getSeconds());


var arr = [1,2,3,4,'rahul mahajan']
console.log(arr[0]);

for(i=0;i<arr.length;i++){
    console.log(arr[i]);
}



// DOM MANIPULATION

document    //this shows the current document and help us to access it's elements!
document.location   //this shows everything from host to location of the document

document.querySelector('#click').style.border = 'blue 5em solid'

document.getElementById('click').style.border = 'blue .5em solid'

document.querySelector('.main_box').style.border = 'red 2em solid'

var elems = document.querySelectorAll('.main_box')
console.log(elems)

elems[1].style.background = 'pink'
elems[1].style.border = '.5em green solid'
elems[1].style.margin = '2em auto'

// adding&removing class to an existing class
elems[0].classList.add('main_bg')
elems[0].classList.remove('main_bg')

// how to get inner content of any container/para/heading etc.
console.log(elems[1].innerHTML);
console.log(elems[1].innerText);

// how to create a dynamic element using js
var newelem = document.createElement('h1')
newelem.innerText = 'this is a dynamic heading'

elems[1].appendChild(newelem)

newelem.style.margin = '1em 1em'
newelem.classList.add('main_bg')