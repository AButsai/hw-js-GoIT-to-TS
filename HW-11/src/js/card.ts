const getColor = () => {
  const photoKart: NodeListOf<HTMLElement> =
    document.querySelectorAll('.photo-card');
  photoKart?.forEach((cart: HTMLElement) => {
    if (cart) {
      let color = getRandomHexColor();
      if (color.length !== 7) {
        color = '#14e2e9';
      }
      cart.style.borderColor = color;
      cart.addEventListener('mouseover', () => {
        cart.style.boxShadow = `0 10px 15px ${color}`;
      });

      cart.addEventListener('mouseout', () => {
        cart.style.boxShadow = `0 0 0 transparent`;
      });
    }
  });
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export default getColor;
