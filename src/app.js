var baseInput = document.querySelector('#base');
var heightInput = document.querySelector('#height');
var areaInput = document.querySelector('#area');
var calcButton = document.querySelector('#calcButton');

if(calcButton) {


    calcButton.addEventListener('click', () => {

        workInput();
        console.log('Nyomod')

    });

}

function workInput() {

    let baseGood = checkInput(baseInput.value);
    let heightGood = checkInput(heightInput.value);

    if (baseGood && heightGood) {
        let base = Number(baseInput.value);
        let height = Number(heightInput.value);
        let area = calcTriangleArea(base, height);
        areaInput.value = area;
    } else {
        alert('Hiba')
    }
    //checkInput(baseInput.value);
    //console.log(typeof baseInput.value);
}

function calcTriangleArea(base, height) {

    return base * height / 2;

}

function checkInput(input) {

    let res = input.match(/^[0-9]+$/);
    return res;

}












