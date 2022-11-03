//1. 가져오기
const clock = document.querySelector(".chats_timestamp");
console.log(clock);

function getClock(){
    const today=new Date();
    const day = today.toDateString();
    clock.innerText=day;
   
}

clock.addEventListener("mouseenter",getClock);


