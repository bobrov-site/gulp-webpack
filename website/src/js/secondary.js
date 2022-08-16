const switcher = document.getElementById('lang-switch');

const child = switcher.children;

const sweden = child[0];
const eng = child[1];

let isShow = false;

switcher.addEventListener('click', (event) => {
  if (isShow === false) {
    event.preventDefault();
    eng.classList.add('show');
    eng.style.display = 'list-item';
    isShow = true;
  }
  else {
    eng.classList.remove('show');
    eng.style.display = 'none';
    isShow = false;
  }
});
