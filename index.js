const button = document.querySelector('.collapsible__button');
const actionVisible = document.querySelector('.collapsible__action--visible');
const actionHidden = document.querySelector('.collapsible__action--hidden');
const content = document.querySelector('.collapsible__content');

const KEYFRAMES = [
  { opacity: '1' },
  { opacity: '0' }
];

const OPTIONS = {
  duration: 250,
  iterations: 1,
  fill: 'forwards',
};

actionHidden.style.display = 'none';

const changeButton = () => {
  if (getComputedStyle(actionVisible).display === 'none') {
    actionVisible.style.display = 'inline';
    actionHidden.style.display = 'none';
  } else {
    actionVisible.style.display = 'none';
    actionHidden.style.display = 'inline';
  }
};

const contentAnimation = content.animate(KEYFRAMES, OPTIONS);
contentAnimation.pause();

// I don't why or how but it works...
button.addEventListener('click', () => {
  if (contentAnimation.playState === 'paused') {
    contentAnimation.play();
  } else {
    contentAnimation.reverse();
  }

  changeButton();
})