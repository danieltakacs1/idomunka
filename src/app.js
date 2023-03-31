var hosszInput = document.querySelector('#hossz');
var elotolasInput = document.querySelector('#elotolas');
var fordulatszamInput = document.querySelector('#fordulatszam');
var calcButton = document.querySelector('#calcButton');
var idoInput = document.querySelector('#ido');

if(calcButton) {


    calcButton.addEventListener('click', () => {

        workInput();
        console.log('Nyomod')

    });

}

function workInput() {

    let hosszGood = checkInput(hosszInput.value);
    let elotolasGood = checkInput(elotolasInput.value);
    let fordulatszamGood = checkInput(elotolasInput.value);

    if (hosszGood && elotolasGood && fordulatszamGood) {
        let hossz = Number(hosszInput.value);
        let elotolas = Number(elotolasInput.value);
        let fordulatszam = Number(fordulatszamInput.value);
        let ido = calcEsztergaIdo(hossz, elotolas, fordulatszam);
        idoInput.value = ido;
    } else {
        alert('Hiba')
    }
    //checkInput(hosszInput.value);
    //console.log(typeof hosszInput.value);
}

function calcEsztergaIdo(hossz, elotolas, fordulatszam) {

    return hossz / (elotolas * fordulatszam);

}

function checkInput(input) {

    let res = input.match(/^[0-9]+$/);
    return res;

}












