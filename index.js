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

// replacing,adding,removing child in div's
elems[1].appendChild(newelem)

newelem.style.margin = '1em 1em'
newelem.classList.add('main_bg')

var newelem2 = document.createElement('p')
newelem2.innerText = 'this is a dynamic para'

elems[1].replaceChild(newelem2,newelem)

newelem2.style.margin = '1em 1em'
newelem2.classList.add('main_bg')

elems[1].removeChild(newelem2)

// EVENTS in JS

elems[1].addEventListener('click',function(){
    console.log('box was clicked');
})

elems[0].addEventListener('mouseover',function(){
    console.log('mouse on box');
})

elems[0].addEventListener('mouseout',function(){
    console.log('mouse not on box');

})

var prevhtml = elems[1].innerText


// changing the text of the container when mouse is hovered over it!

elems[1].addEventListener('mouseover',function(){
    elems[1].innerText = 'this is rahul mahajan a developer'
})

elems[1].addEventListener('mouseout',function(){
    elems[1].innerText = prevhtml
})

// changing the text of the container when it is clicked!

elems[1].addEventListener('mousedown',function(){
    elems[1].innerText = 'this is rahul mahajan a developer'
})

elems[1].addEventListener('mouseup',function(){
    elems[1].innerText = prevhtml
})

// Arrow Function

function sum(a,b){      //normal function
    return a+b
}

sum = (a,b)=>{      //arrow function
    return a+b
}

console.log(sum(2,10));

// SetTimeOut and SetInterval

// SetTimeOut --> it is used to perform a task after a specific duration
// SetInterval --> it is used to perform a task repeatedly with a interval of fixed duration

logkia = ()=>{
    elems[1].innerText = 'this is a log statement'
    console.log('this is a log statement');
}

logkro = ()=>{
    console.log('interval wala function chla');
}

setTimeout(logkia,5000)
new_id = setInterval(logkro,2500)

// let say, setInterval is returning an id if we pass that id to the clearInterval then the task gets stop!
clearInterval(new_id)    //   --> this is used to stop the setInterval function

