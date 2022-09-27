let form = document.querySelector('form');
let ul = document.querySelector('ul');
let dicesNumberIn = document.getElementById('numberOfDices');
let diceTypeIn = document.getElementById('diceType');
let button = document.querySelector('button');


let dicesNumber;
let diceType;


button.addEventListener('click', function () {
    ul.innerHTML = "";

    diceType = parseInt(diceTypeIn.value);
    dicesNumber = parseInt(dicesNumberIn.value);

    for (let i = 0; i < dicesNumber; i++) {

        const rand = Math.ceil(Math.random() * diceType);

        let li = document.createElement('li');
        li.innerText = rand;
        ul.appendChild(li);
    }
})



