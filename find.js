//1. 가져오기(이모티콘,글자)
const envelope = document.querySelector(".fa-envelope");
console.log(envelope);
const invite = document.querySelector(".hidden");
console.log(invite.innerHTML);
//2. 클릭하기

const HIDDEN_CLASSNAME="hidden";

function Putclick(){
    console.log("clicked");
    invite.classList.remove(HIDDEN_CLASSNAME);

}
envelope.addEventListener("click",Putclick);


//클릭하면 좋아요 수 증가..!
//1. 가져오기
const heart = document.querySelector(".fa-heart");
let count = document.querySelector(".open-post_heart-column>span");
// console.log(heart);
// console.log(count);

//2. 하트를 클릭하면 수가 증가
let val=count.innerHTML;
function Heartclick(){
    // console.log("clicked!");
    val++;
    console.log(val);
    count.innerHTML=val;
}


heart.addEventListener("click",Heartclick);



