const buttonShare = document.getElementById('btn-share');
const socialMenuEl = document.getElementById('btnSocialMenu');
const buttonShareBack = document.getElementById('btnShareBack');
const authorEl = document.getElementById('author');

socialMenuEl.style.display = 'none';

buttonShare.addEventListener('click', function () {
  socialMenuEl.style.display = 'flex';
  authorEl.style.display = 'none';
});

buttonShareBack.addEventListener('click', function () {
  socialMenuEl.style.display = 'none';
  authorEl.style.display = 'flex';
});
