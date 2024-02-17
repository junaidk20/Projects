let text=document.getElementById("textarea")
let tc=document.getElementById("tc")
let remaining= document.getElementById("remaining")
text.addEventListener("keyup",()=>{
    updateCounter()
})
function updateCounter() {
   let x= text.value.length
   tc.innerText=x
  remaining.innerText= text.getAttribute("maxLength")-x
}