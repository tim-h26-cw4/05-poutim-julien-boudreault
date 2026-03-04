export default class Poutine {
  constructor(poutine) {
    this.element = poutine;
    this.types = this.element.querySelectorAll('.js-type');
    this.selectedType = '';
    this.init();
  }

  init() {
    if (this.types) {
      for (let i = 0; i < this.types.length; i++) {
        const boutons = this.types[i];
        boutons.addEventListener('click', this.selectType.bind(this));
      }
    }
  }

  selectType(event) {
    if (this.types) {
      for (let i = 0; i < this.types.length; i++) {
        const boutons = this.types[i];
        boutons.classList.remove('is-active');
      }

      event.currentTarget.classList.add('is-active');
      this.selectedType = event.currentTarget.innerText;
      this.updatePhoto();
    }
  }

  updatePhoto() {
    this.element.querySelector('img').src = `assets/images/${this.selectedType}.png`

  }
}
