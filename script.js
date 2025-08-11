const btn = document.getElementById('btn');
const count = document.getElementById('count');
const toggle = document.getElementById('darkToggle');

let n = 0;
btn.addEventListener('click', () => {
  n += 1;
  count.textContent = n;
});

// simple persisted dark mode
const saved = localStorage.getItem('dark') === '1';
document.body.classList.toggle('dark', saved);
toggle.checked = saved;
toggle.addEventListener('change', e => {
  document.body.classList.toggle('dark', e.target.checked);
  localStorage.setItem('dark', e.target.checked ? '1' : '0');
});
