// // var firstNum=document.querySelector("#first-input").value;
// // var secondNum=document.querySelector("#second-input").value;
var result=document.querySelector("#result");
var fresult=document.querySelector("#finalResult");
var operator="";
// fresult.innerText="";
let items = document.getElementsByClassName("grid-item");
for (let index = 0; index < 12; index++) {
    items[index].addEventListener("click", function(){
        result.innerText += items[index].innerText;
    })
}
items[12].addEventListener("click", function(){
    result.innerText="";
})
items[13].addEventListener("click", function(){
    fresult.innerText=0;
})
items[14].addEventListener("click", function(){
    let h =result.innerText;
    h = h.substring(0, h.length - 1);
    result.innerText=h;
})
for (let index = 15; index < items.length; index++) {
    items[index].addEventListener("click", function(){
        if (operator != "") {
            if (operator=="Add") {
                fresult.innerText=Number(fresult.innerText)+Number(result.innerText);
                result.innerHTML="";
                operator="";
            }
            if (operator=="Subtract") {
                fresult.innerText=Number(fresult.innerText)-Number(result.innerText);
                result.innerHTML="";
                operator="";
            }
            if (operator=="Multiply") {
                fresult.innerText=Number(fresult.innerText)*Number(result.innerText);
                result.innerHTML="";
                operator="";
            }
            if (operator=="Divide") {
                fresult.innerText=Number(fresult.innerText)/Number(result.innerText);
                result.innerHTML="";
                operator="";
            }
        }
        if (result.innerText!="") {
            let firstNum=result.innerText;
            fresult.innerHTML=firstNum;
            result.innerText="";
        }
        operator= items[index].innerText;
    })
}