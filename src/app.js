var baseInput = document.querySelector('#base');
var heightInput = document.querySelector('#height');
var areaInput = document.querySelector('#area');
var calcButton = document.querySelector('#calcButton');

calcButton.addEventListener('click', () => {

    workInput();
    console.log('Nyomod')

});

function workInput() {

    //console.log(typeof baseInput.value)
    let base = Number(baseInput.value);
    let height = Number(heightInput.value);
    let area = calcTriangleArea(base, height);
    areaInput.value = area;

}

function calcTriangleArea(base, height) {

    return base * height / 2;

}














