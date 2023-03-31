/*
* File: app.js
* Author: Cserhati David
* Copyright: 2023, Cserhati David
* Group: Szoft I-2 N
* Date: 2023-03-09
* Github: https://github.com/CserhatiDavid/
* Licenc: GNU GPL
* Nem vállalunk felelősséget a rossz jegyekért
*/
var baseInput=document.querySelector("#base");
var heightInput=document.querySelector("#height");
var areaInput=document.querySelector("#area");
var calcButton=document.querySelector("#calcButton");

    if (calcButton) {
        calcButton.addEventListener("click",()=>{
        workInput();
        })
    }
function workInput() {
    let baseGood=checkInput(baseInput.value);
    let heightGood=checkInput(heightInput.value);
    if (baseGood&&heightGood) {
        //alert("jó")
        let base=Number(baseInput.value);
        let height=Number(heightInput.value);
        let area=calcTriangleArea(base,height);
        areaInput.value=area+" cm2";
    }else{
        alert("hibás adat")
    }
    //console.log(typeof baseInput.value)
    
}

function calcTriangleArea(base,height) {
    return base*height/2;
}
function checkInput(input) {
    let res=input.match(/^[0-9]+$/);
    return res;
}