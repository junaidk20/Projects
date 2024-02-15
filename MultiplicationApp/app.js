let num1=Math.ceil(Math.random()*10);
let num2=Math.ceil(Math.random()*10);
let questionEl=document.getElementById("question");
let formEl=document.getElementById("container");
let inputEl=document.getElementById("input");
let scoreEl=document.getElementById("score")
let score=JSON.parse(LocalStorage.getItem("score"));
if (!score) {
    score=0; 
}
scoreEl.innerText=`score:${score}`

questionEl.innerText=`what is ${num1} multiply by ${num2}?`
let correctAns=num1*num2;
formEl.addEventListener("submit",()=> {
    let userAns=+inputEl.value
    if (userAns===correctAns) {
        score++
        updateLocalStorage()
        
    }else{
        score--
        updateLocalStorage()
    }
});
function updateLocalStorage() {
    localStorage.setItem("score",JSON.stringify(score))
        
}
