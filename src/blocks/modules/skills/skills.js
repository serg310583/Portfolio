const percent = document.querySelectorAll('.percent'),
  lines = document.querySelectorAll('.items__graph__percent');

percent.forEach((item, i) => {
  lines[i].style.width = item.innerHTML;
});
