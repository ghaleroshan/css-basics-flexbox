let transform = document.querySelector('.burger-menu');
let copyright = document.querySelector('.current-date');

const handleChange = () => {
  let navigation = document.querySelector('.navigation');

  if (navigation.style.left === '8rem') {
    navigation.style.left = '-32rem';
  } else {
    navigation.style.left = '8rem';
  }
};

transform.addEventListener('click', handleChange);

const showMenu = () => {
  transform.classList.toggle('menu');
};

transform.addEventListener('click', showMenu);

const today = new Date().getFullYear();
copyright.textContent = today;
