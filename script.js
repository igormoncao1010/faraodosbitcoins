// Função para revelar elementos ao rolar
function revealElements() {
  const elements = [
    { content: document.getElementById('heroContent'), image: document.getElementById('heroImage') },
    ...Array.from(document.querySelectorAll('.scroll-section1')).map(section => ({
      content: section.querySelector('.scroll-content1'),
      image: section.querySelector('.scroll-image1')
    }))
  ];

  const windowHeight = window.innerHeight;

  elements.forEach(item => {
    if (item.content) {
      const contentTop = item.content.getBoundingClientRect().top;
      if (contentTop < windowHeight - 50) {
        item.content.classList.add('visible');
      }
    }

    if (item.image) {
      const imageTop = item.image.getBoundingClientRect().top;
      if (imageTop < windowHeight - 50) {
        item.image.classList.add('visible');
      }
    }
  });
}

window.addEventListener('scroll', revealElements);
window.addEventListener('load', revealElements);
