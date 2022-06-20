let add=document.querySelector("#increment")
let remove=document.querySelector("#decrement")
let reset=document.querySelector("#reset")
let pause=document.querySelector("#pause")


let integer=document.querySelector("#number")
let i=0

// make the timer run
const timerText= document.getElementById("number")
const btnStart=document.getElementById("start")
const btnPause=document.getElementById("pause")



//make timer run even when not clicked
let intervalID;

btnStart.addEventListener("click", function(){
   intervalID=setInterval(function(){
      i +=1
       timerText.textContent=i
   },1000)
})
//make timer pause 
btnPause.addEventListener("click",function(){
   clearInterval(intervalID)
})

// make the buttons add or subtract when clicked
add.addEventListener("click",function(){
   
   i+=1
   integer.innerHTML=i
},
remove.addEventListener("click",function(){
   i-=1
   integer.innerHTML=i
},
pause.addEventListener("click",function(){
   integer.innerHTML=i
})
)
)




















// let add=document.getElementById("increment")
// let remove=document.getElementById("decrement")

// let int=document.getElementById("number")
//  let integer=0

//  add.addEventListener("click", function(){
//     integer +=1
//     int.innerHTML=integer
//  })
//  remove.addEventListener("click", function(){
//     integer -=1
//     int.innerHTML=integer
//  })









// let add=document.getElementById("increment")
// let remove=document.getElementById("decrement")

// let int=document.getElementById("number");
// let integer=0;

// add.addEventListener("click",function(){
//     integer +=1
//     int.innerHTML=integer
// })

// remove.addEventListener("click",function(){
//    integer -=1
//    int.innerHTML=integer
// })