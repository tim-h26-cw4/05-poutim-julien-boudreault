import Poutine from './Poutine.js';

export default class Chef {
  constructor(element) {
    this.element = element;
    this.menu = [];
    this.container = this.element.querySelector('.js-container');

    this.init();
  }

  init() {
    const poutines = this.element.querySelectorAll('.js-poutine');
    for (let i = 0; i < poutines.length; i++) {
      const poutine = poutines[i];
      const instance = new Poutine(poutine);
      this.menu.push(instance);
    }

    //Si ca chie ptet chécker icitte
    const btnSecondary = this.element.querySelector('.js-buttonSecondary');
    btnSecondary.addEventListener('click', this.sendOrder.bind(this));
  }

  sendOrder() {
    let compteurPoutine = 0;
    const boutons = this.element.querySelectorAll('.js-type');

    for (let i = 0; i < boutons.length; i++) {
      const bouton = boutons[i];
      if(bouton.classList.contains('is-active')){
        compteurPoutine++;
      }
    }

    this.container.innerHTML = ''
    const paragraphe = document.createElement('p');
    paragraphe.innerText = `Nombre total de poutine(s) : ${compteurPoutine}`;
    this.container.appendChild(paragraphe);
    
  }
  
}
