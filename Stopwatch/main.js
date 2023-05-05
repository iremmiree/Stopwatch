let minuteEl = document.querySelector(".minute")
let secondEl = document.querySelector(".second")
let hourEl = document.querySelector(".hour")

// buttons
const start = document.querySelector(".start")
const pause = document.querySelector(".pause")
const reset = document.querySelector(".reset")

var Interval;

start.addEventListener("click", ()=>{
    clearInterval(Interval)
    Interval = setInterval(count,1000) 
    console.log(Interval)
})

pause.addEventListener("click", ()=>{
    clearInterval(Interval)
    console.log(Interval)
})

reset.addEventListener("click", ()=>{
    clearInterval(Interval)
    second=0
    minute=0
    console.log(Interval)
    secondEl.textContent="00"
    minuteEl.textContent="00"
    hourEl.textContent="00"
})

let second=0
let minute = 0
let hour=0

function count(){
    second++

    if(second<10){

        secondEl.textContent="0"+second
    
    }else if(second==60){
        
        minute++
        second=0

            if(minute<10){
                minuteEl.textContent="0"+minute
            }else if(minute==60){

                hour++
                minute=0
                    if(hour<10){
                        hourEl.textContent = "0" + hour
                    }else{
                        hourEl.textContent = hour
                    }   
            }else{
                minuteEl.textContent=minute
            }
            
    }else{secondEl.textContent = second}
}


