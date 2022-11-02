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

