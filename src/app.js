/*
* File: app.js
* Author: Cserhati David
* Copyright: 2023, Cserhati David
* Group: Szoft I-2 N
* Date: 2023-02-23
* Github: https://github.com/CserhatiDavid/
* Licenc: GNU GPL
* Nem vállalunk felelősséget a rossz jegyekért
*/
var aInput=document.querySelector("#a");
var bInput=document.querySelector("#b");
var areaInputA=document.querySelector("#areaA");
var areaInputB=document.querySelector("#areaB");

var calcButton=document.querySelector("#calcButton");
if (calcButton) {
    calcButton.addEventListener("click",()=>{
    calc();
    })
}

function calc() {

    let aGood=checkInput(a.value);
    let bGood=checkInput(b.value);
    if (aGood&&bGood) {
        //alert("jó")
        let a=Number(aInput.value);
        let b=Number(bInput.value);
        let areaA=calcHexagonArea(a);
        let areaB=calcHexagonArea(b);
        let resA=areaA/2+areaB;
        let resB=areaA+areaB/2;
        areaInputA.value=resA+" m2";
        areaInputB.value=resB+" m2";
    }else{
        alert("hibás adat")
    }
    console.log(result)
}    
function calcHexagonArea(param){
    return result=(3/2)*(param**2)*Math.sqrt(3);
}
    
    

function checkInput(input) {
    let res=input.match(/^[0-9]+$/);
    return res;
}
