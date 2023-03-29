class HeroContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div tabindex="0" class="hero__text">
        <h1 class="hero__title">Hunger Apps</h1>
      </div>
    `;
  }
}

customElements.define('hero-content', HeroContent);
