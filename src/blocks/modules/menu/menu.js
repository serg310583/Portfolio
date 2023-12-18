const hamburger = document.querySelector('.hamburger'),
  menu = document.querySelector('.menu'),
  closeElem = document.querySelector('.menu__close'),
  overlay = document.querySelector('.menu__overlay'),
  menuLinks = document.querySelectorAll('.menu__link_a');
const menuLinksArray = Array.from(menuLinks);
const openMenu = () => {
  menu.classList.add('active');
};

const closeMenu = () => {
  menu.classList.remove('active');
};
hamburger.addEventListener('click', openMenu);

closeElem.addEventListener('click', closeMenu);

overlay.addEventListener('click', closeMenu);

// Обработчик события для клавиатуры
document.addEventListener('keydown', (event) => {
  // 27 - код клавиши "Esc"
  if (event.key === 'Escape' || event.key === 'Esc') {
    closeMenu();
  }
});

// Добавляем возможность открытия меню с клавиши "Enter" при фокусе на гамбургере
hamburger.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    openMenu();
  }
});

// Добавляем возможность закрытия меню с клавиши "Enter" при фокусе на кнопке закрытия
closeElem.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    closeMenu();
  }
});

// Функция для обработки события нажатия Enter
const handleEnterKey = (event) => {
  // 13 - код клавиши "Enter"
  if (event.key === 'Enter') {
    // Закрываем меню после перехода по ссылке
    closeMenu();
  }
};
console.log('links', menuLinks);
console.log('arrayLinks', menuLinksArray);
// Добавляем обработчик события для каждой ссылки
menuLinksArray.forEach((link) => {
  link.addEventListener('keydown', handleEnterKey);
});
