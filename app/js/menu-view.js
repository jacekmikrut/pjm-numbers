class MenuView {

  constructor({ menuElement }) {
    this.menuElement = menuElement;

    for (const menuItemLink of this.menuElement.querySelectorAll('li')) {
      menuItemLink.addEventListener('click', (event) => { event.preventDefault(); this.onToggleLinkClick(this); });
    }
  }

  onToggleLinkClick() {
    this.menuElement.classList.toggle('active');
  }
}

module.exports = MenuView;
