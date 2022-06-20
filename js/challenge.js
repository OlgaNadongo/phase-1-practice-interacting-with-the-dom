//add code that when  plus is clicked, it increments
//write function that when minus is clicked it decreases
let add= document.querySelector("#plus")
let remove=document.querySelector("#minus")
let reset=document.querySelector("#pause")


let countValue=document.querySelector("#counter")
let count=0
//work on making the time run and pause 


const btnStart=document.getElementById("start")
const btnPause=document.getElementById("pause")

//make timer run when start is clicked
let intervalID;

btnStart.addEventListener("click",function(){
   intervalID=setInterval(function(){
      count+=1
      countValue.innerHTML=count
   })
})

//make timer pause when pause is clicked
 btnPause.addEventListener("click", function(){
   clearInterval(intervalID)
 })


// write functions that takes in the plus and removes button to display changes in the counter
 add.addEventListener("click", function(){
        count +=1
        countValue.innerHTML=count
 })
 remove.addEventListener("click", function(){
    count-=1
    countValue.innerHTML=count
 })

 reset.addEventListener("click",function(){
    count==0
    countValue.innerHTML=count
 })
