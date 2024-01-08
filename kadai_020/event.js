const Btn = document.getElementById('btn');

const h2Text = document.getElementById('text');

Btn.addEventListener('click', () => {

  if (h2Text.textContent == 'ボタンをクリックして下さい') {
    h2Text.textContent = 'ボタンをクリックしました';
  }
});

