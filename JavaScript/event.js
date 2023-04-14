// function eventFunction() {
//     console.log("Hey I am clicking the screen can you see!!!");
// }

// document.addEventListener('click',eventFunction);

// document.removeEventListener('click',eventFunction);

const content = document.querySelector('#wrapper');

content.addEventListener('click', function(event){
    console.log(event);
})