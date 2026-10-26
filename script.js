let counter=document.getElementById("counter")
let inc=document.getElementById("inc")
let dec=document.getElementById("dec")
let clear=document.getElementById("clear")
let err=document.getElementById("error")

let count=0

inc.addEventListener('click', () => {
    count++;
     counter.innerText = `Your current count is: ${count}`;
});

dec.addEventListener('click',()=>{
    if(count>0){
    count--;
     counter.innerText = `Your current count is: ${count}`;
       err.innerText=""
    }
    else if(count==0){
    counter.innerText = `Your current count is: ${count}`;
     err.innerText = `Error : Cannot go below 0`;
     err.style.color = "red";
    }
})

clear.addEventListener('click',()=>{
      count=0
      counter.innerText = `Your current count is: ${count}`;
      err.innerText=""
})

