class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer tabindex="0">
        <ul>
          <li>hjgjhgjhgj © 2021 - hjhjh Apps</li>
        </ul>
      </footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);
