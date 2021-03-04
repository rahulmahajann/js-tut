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

// document.querySelectorAll('.main_box').style.margin = '1em'

var elems = document.querySelectorAll('.main_box')

console.log(elems)