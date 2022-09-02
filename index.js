// // var firstNum=document.querySelector("#first-input").value;
// // var secondNum=document.querySelector("#second-input").value;
var result=document.querySelector("#result");
var fresult=document.querySelector("#finalResult");
var operator="";
// fresult.innerText="";

document.getElementById("grid-item1").addEventListener("click", r=>{
    result.innerText=result.innerText+document.getElementById("grid-item1").innerText;
});
document.getElementById("grid-item2").addEventListener("click", r=>{
    result.innerText=result.innerText+document.getElementById("grid-item2").innerText;
});
document.getElementById("grid-item3").addEventListener("click", r=>{
    result.innerText=result.innerText+document.getElementById("grid-item3").innerText;
});
document.getElementById("grid-item4").addEventListener("click", r=>{
    result.innerText=result.innerText+document.getElementById("grid-item4").innerText;
});
document.getElementById("grid-item5").addEventListener("click", r=>{
    result.innerText=result.innerText+document.getElementById("grid-item5").innerText;
});
document.getElementById("grid-item6").addEventListener("click", r=>{
    result.innerText=result.innerText+document.getElementById("grid-item6").innerText;
});
document.getElementById("grid-item7").addEventListener("click", r=>{
    result.innerText=result.innerText+document.getElementById("grid-item7").innerText;
});
document.getElementById("grid-item8").addEventListener("click", r=>{
    result.innerText=result.innerText+document.getElementById("grid-item8").innerText;
});
document.getElementById("grid-item9").addEventListener("click", r=>{
    result.innerText=result.innerText+document.getElementById("grid-item9").innerText;
});
document.getElementById("grid-item0").addEventListener("click", r=>{
    result.innerText=result.innerText+document.getElementById("grid-item0").innerText;
});
document.getElementById("grid-item.").addEventListener("click", r=>{
    result.innerText=result.innerText+document.getElementById("grid-item.").innerText;
});
document.getElementById("grid-item-").addEventListener("click", r=>{
    result.innerText=result.innerText+document.getElementById("grid-item-").innerText;
});
document.getElementById("grid-itemc").addEventListener("click", r=>{
    result.innerText="";
});
document.getElementById("grid-itemcc").addEventListener("click", r=>{
    fresult.innerText=0;
});

document.getElementById("add").addEventListener("click", function(){
    if (operator != "") {
        if (operator=="add") {
            console.log(result.innerText);
            console.log(fresult.innerHTML);
            fresult.innerText=Number(fresult.innerText)+Number(result.innerText);
            result.innerHTML="";
            operator="";
        }
        if (operator=="subtract") {
            console.log(result.innerText);
            console.log(fresult.innerHTML);
            fresult.innerText=Number(fresult.innerText)-Number(result.innerText);
            result.innerHTML="";
            operator="";
        }
        if (operator=="multiply") {
            console.log(result.innerText);
            console.log(fresult.innerHTML);
            fresult.innerText=Number(fresult.innerText)*Number(result.innerText);
            result.innerHTML="";
            operator="";
        }
        if (operator=="divide") {
            console.log(result.innerText);
            console.log(fresult.innerHTML);
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
    operator= "add";
})
document.getElementById("subtract").addEventListener("click", function(){
    if (operator != "") {
        if (operator=="add") {
            console.log(result.innerText);
            console.log(fresult.innerHTML);
            fresult.innerText=Number(fresult.innerText)+Number(result.innerText);
            result.innerHTML="";
            operator="";
        }
        if (operator=="subtract") {
            console.log(result.innerText);
            console.log(fresult.innerHTML);
            fresult.innerText=Number(fresult.innerText)-Number(result.innerText);
            result.innerHTML="";
            operator="";
        }
        if (operator=="multiply") {
            console.log(result.innerText);
            console.log(fresult.innerHTML);
            fresult.innerText=Number(fresult.innerText)*Number(result.innerText);
            result.innerHTML="";
            operator="";
        }
        if (operator=="divide") {
            console.log(result.innerText);
            console.log(fresult.innerHTML);
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
    operator= "subtract";
})
document.getElementById("multiply").addEventListener("click", function(){
    if (operator != "") {
        if (operator=="add") {
            console.log(result.innerText);
            console.log(fresult.innerHTML);
            fresult.innerText=Number(fresult.innerText)+Number(result.innerText);
            result.innerHTML="";
            operator="";
        }
        if (operator=="subtract") {
            console.log(result.innerText);
            console.log(fresult.innerHTML);
            fresult.innerText=Number(fresult.innerText)-Number(result.innerText);
            result.innerHTML="";
            operator="";
        }
        if (operator=="multiply") {
            console.log(result.innerText);
            console.log(fresult.innerHTML);
            fresult.innerText=Number(fresult.innerText)*Number(result.innerText);
            result.innerHTML="";
            operator="";
        }
        if (operator=="divide") {
            console.log(result.innerText);
            console.log(fresult.innerHTML);
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
    operator= "multiply";
})
document.getElementById("divide").addEventListener("click", function(){
    if (operator != "") {
        if (operator=="add") {
            console.log(result.innerText);
            console.log(fresult.innerHTML);
            fresult.innerText=Number(fresult.innerText)+Number(result.innerText);
            result.innerHTML="";
            operator="";
        }
        if (operator=="subtract") {
            console.log(result.innerText);
            console.log(fresult.innerHTML);
            fresult.innerText=Number(fresult.innerText)-Number(result.innerText);
            result.innerHTML="";
            operator="";
        }
        if (operator=="multiply") {
            console.log(result.innerText);
            console.log(fresult.innerHTML);
            fresult.innerText=Number(fresult.innerText)*Number(result.innerText);
            result.innerHTML="";
            operator="";
        }
        if (operator=="divide") {
            console.log(result.innerText);
            console.log(fresult.innerHTML);
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
    operator= "divide";
})
document.getElementById("equal").addEventListener("click", function(){
    if (operator=="add") {
        console.log(result.innerText);
        console.log(fresult.innerHTML);
        fresult.innerText=Number(fresult.innerText)+Number(result.innerText);
        result.innerHTML="";
        operator="";
    }
    if (operator=="subtract") {
        console.log(result.innerText);
        console.log(fresult.innerHTML);
        fresult.innerText=Number(fresult.innerText)-Number(result.innerText);
        result.innerHTML="";
        operator="";
    }
    if (operator=="multiply") {
        console.log(result.innerText);
        console.log(fresult.innerHTML);
        fresult.innerText=Number(fresult.innerText)*Number(result.innerText);
        result.innerHTML="";
        operator="";
    }
    if (operator=="divide") {
        console.log(result.innerText);
        console.log(fresult.innerHTML);
        fresult.innerText=Number(fresult.innerText)/Number(result.innerText);
        result.innerHTML="";
        operator="";
    }
})
