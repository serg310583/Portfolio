let popupDp = document.querySelector('.popup__dp'); // Фон попап окна
let popup_dp = document.querySelector('.popup_dp'); // Само окно
let openDpButtons = document.querySelectorAll('.open-popupDp'); // Кнопки для показа окна
let closeDpButton = document.querySelector('.close-popupDp'); // Кнопка для скрытия окна

openDpButtons.forEach((button) => {
  // Перебираем все кнопки
  button.addEventListener('click', (e) => {
    // Для каждой вешаем обработчик событий на клик
    e.preventDefault(); // Предотвращаем дефолтное поведение браузера
    popupDp.classList.add('active'); // Добавляем класс 'active' для фона
    popup_dp.classList.add('active'); // И для самого окна
  });
});

closeDpButton.addEventListener('click', () => {
  // Вешаем обработчик на крестик
  popupDp.classList.remove('active'); // Убираем активный класс с фона
  popup_dp.classList.remove('active'); // И с окна
});

document.addEventListener('click', (e) => {
  // Вешаем обработчик на весь документ
  if (e.target === popupDp) {
    // Если цель клика - фот, то:
    popupDp.classList.remove('active'); // Убираем активный класс с фона
    popup_dp.classList.remove('active'); // И с окна
  }
});
