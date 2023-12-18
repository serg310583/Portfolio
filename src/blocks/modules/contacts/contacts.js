let customCheckbox = document.getElementById('customCheckbox');
customCheckbox.addEventListener('click', function () {
  toggleCheckboxState();
});
customCheckbox.addEventListener('keydown', function (event) {
  if (event.code === 'Space' || event.key === ' ') {
    event.preventDefault();
    toggleCheckboxState();
  }
});
function toggleCheckboxState() {
  let isChecked = customCheckbox.classList.contains('checked');
  if (isChecked) {
    customCheckbox.classList.remove('checked');
    customCheckbox.setAttribute('is-valid', '0');
  } else {
    customCheckbox.classList.add('checked');
    customCheckbox.setAttribute('is-valid', '1');
  }
}

('use strict');
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form');
  form.addEventListener('submit', formSend);

  async function formSend(e) {
    e.preventDefault();

    let error = formValidate(form);
    // console.log(error);
    let formData = new FormData(form);

    if (error === 0) {
      form.classList.add('_sending');
      let response = await fetch('sendmail.php', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        let result = await response.json();
        alert(result.info);
        form.reset();
        form.classList.remove('_sending');
      } else {
        alert('Ошибка отправки');
        form.classList.remove('_sending');
      }
    } else {
      alert('Заполните обязательные поля');
    }
  }

  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll('._req');

    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);
      if (input.classList.contains('_email')) {
        if (emailTest(input)) {
          formAddError(input);
          error++;
        }
      } else if (input.classList.contains('_name')) {
        if (nameTest(input)) {
          formAddError(input);
          error++;
        }
      } else if (
        input.getAttribute('type') === 'checkbox' &&
        input.checked === false
      ) {
        formAddError(input);
        error++;
      } else {
        if (input.value === ' ') {
          formAddError(input);
          error++;
        }
      }
    }
    return error;
  }
  function formAddError(input) {
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
  }
  function formRemoveError(input) {
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
  }
  function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  }
  function nameTest(input) {
    return !/^[а-яА-ЯёЁa-zA-Z0-9]+$/.test(input.value);
  }
});
