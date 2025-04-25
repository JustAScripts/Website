window.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.content > div');
    elements.forEach((el, i) => {
      el.classList.add('pop-element');
      setTimeout(() => {
        el.classList.add('popped');
      }, i * 200);
    });
  });
  
