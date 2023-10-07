  const itemsContainer = document.querySelector('.items');
  let isMouseDown = false;
  let startX = 0;
  let scrollLeft = 0;

  itemsContainer.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    startX = e.pageX - itemsContainer.offsetLeft;
    scrollLeft = itemsContainer.scrollLeft;
  });

  itemsContainer.addEventListener('mouseup', () => {
    isMouseDown = false;
  });

  itemsContainer.addEventListener('mouseleave', () => {
    isMouseDown = false;
  });

  itemsContainer.addEventListener('mousemove', (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - itemsContainer.offsetLeft;
    const walk = (x - startX) * 2; // Adjust the multiplier for a faster or slower scroll
    itemsContainer.scrollLeft = scrollLeft - walk;
  });