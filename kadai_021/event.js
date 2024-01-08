const h2Text = document.getElementById('text');

const Btn = document.getElementById('btn');

Btn.addEventListener('click', () => {
  setTimeout(() => {
    if (h2Text.textContent == 'ボタンをクリックしてください') {
      h2Text.textContent = 'ボタンをクリックしました';
    }
  }, 2000);
})