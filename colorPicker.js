let redV = document.querySelector('.red');
let greenV = document.querySelector('.green');
let blueV = document.querySelector('.blue');
let boxes = document.querySelectorAll('.colorBox');

let range = document.querySelectorAll('input[type=range]');
range.forEach((rng, idx) => {
    rng.addEventListener('input', (e) => {
        let value = e.target.value;
        let numsVal = document.querySelectorAll('.max-num');
        numsVal[idx].innerHTML = value;
    });
});

let btn = document.querySelectorAll('#btn');
btn.forEach((btns, indx) => {
    btns.addEventListener('click', () => {
        // console.log(redV.value); 
        boxes[indx].style.backgroundColor = `rgb(${redV.value},${greenV.value},${blueV.value})`;
        boxes[indx].innerHTML = `rgb(${redV.value},${greenV.value},${blueV.value})`;
    });
});

let arrayOfColors = [];
let btnSave = document.querySelector('#save');
let nickName = document.querySelector('#nick-name');

btnSave.addEventListener('click', () => {
    let obj = {};
    obj[nickName.value] = `rgb(${redV.value},${greenV.value},${blueV.value})`;
    arrayOfColors.push(obj);
    saveToLocalStorage();
});

saveToLocalStorage = () => {
    let nickNamesData = JSON.stringify(arrayOfColors);
    localStorage.setItem("nickName", nickNamesData);
}