'use strict';

//SELECCIÓN DE ELEMENTOS/////////////////////////////////////////////////

//inputs
const radios = document.querySelectorAll('input[type="radio"]');
const checks = document.querySelectorAll('input[type="checkbox"]');
const range = document.querySelector('input[type="range"]');

//buttons
const generatePass = document.getElementsByClassName('generatePass');
const copyPass = document.getElementsByClassName('copyPass');

//CHECK DE ELEMENTOS/////////////////////////////////////////////////////
let array = [];

//hay que comprobar el array solo debe de conterner un único valor de cada fieldset
for (const radio of radios) {
  radio.addEventListener('change', () => {
    if (radio.checked) {
      array.push(radio.id);
      console.log(array);
    }
  });
}
