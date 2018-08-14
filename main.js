class WebComponent extends HTMLElement {

  constructor() {

    super();

    const shadow = this.attachShadow({mode: 'open'}),
          componentBox = document.querySelector('web-component'),
          inner = document.createElement('span'),
          atrName = componentBox.getAttribute('name'),
          atrAge = componentBox.getAttribute('age'),
          style = document.createElement('style');

    inner.innerText = atrName + ', ' + atrAge;
    shadow.appendChild(inner);
    componentBox.setAttribute('style', 'display:block');

  }

}

customElements.define('web-component', WebComponent);