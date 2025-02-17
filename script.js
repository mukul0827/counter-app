//select the couter display element and bouttons
const couterDisplay = document.getElementById('counter');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('Rest');

//initialize counter value

let count = 0;

//function to updae the display

function updateCounter()
{
    couterDisplay.textContent=count;
}

//increase button event listner

increaseBtn.addEventListener('click',function(){
    count++
    updateCounter();
})
//Decrease button event listener

decreaseBtn.addEventListener('click',function()
{
    count--;
    updateCounter();
})
resetBtn.addEventListener('click',function(){
  count=0;
    updateCounter();
}
)