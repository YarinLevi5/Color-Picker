let redV = document.querySelector('.red');
let greenV = document.querySelector('.green');
let blueV = document.querySelector('.blue');

//let box1 = document.querySelector('.colorBox1');
//let box2 = document.querySelector('.colorBox2');

let boxes = document.querySelectorAll('.colorBox');

let btn = document.querySelectorAll('#btn');
console.log(btn);
//  btn[0].addEventListener('click',()=>{
//     console.log(redV.value);
//     box1.style.backgroundColor = `rgb(${redV.value},${greenV.value} ,${blueV.value})`;
// });
// btn[1].addEventListener('click',()=>{
//     console.log(redV.value);
//     box1.style.backgroundColor = `rgb(${redV.value},${greenV.value} ,${blueV.value})`;
// }); 

btn.forEach((btnn,indx)=>{
    //console.log(x);
    btnn.addEventListener('click',()=>{
    // console.log(redV.value); 
    boxes[indx].style.backgroundColor = `rgb(${redV.value},${greenV.value},${blueV.value})`;
    boxes[indx].innerHTML = `rgb(${redV.value},${greenV.value},${blueV.value})`;
});
});

let arrayOfColors = [];

let btnSave = document.querySelector('#save');
let nickName = document.querySelector('#nick-name');

btnSave.addEventListener('click',()=>{
   
// function saveColor(_r,_g,_b){
//     r=this._r;
//     g=this._g;
//     b=this._b;
// }
// let obj = new saveColor(redV.value,greenV.value,blueV.value);
let obj = {};
obj[nickName.value]=`rgb(${redV.value},${greenV.value},${blueV.value})`;
arrayOfColors.push(obj);
console.log(arrayOfColors);
});
