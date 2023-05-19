const bodyEl: HTMLBodyElement | null = document.querySelector('body');
const startBtnEl: HTMLButtonElement | null =
  document.querySelector('[data-start]');
const stopBtnEl: HTMLButtonElement | null =
  document.querySelector('[data-stop]');

startBtnEl?.addEventListener('click', handleStartChangeColor);
stopBtnEl?.addEventListener('click', handleStopChangeColor);

let isForIntervalClear: boolean;

function handleStartChangeColor(e: Event) {
  changeColorBody();
  addAttributeDisabledBtn(e);
  isForIntervalClear = true;
}

function handleStopChangeColor(e: Event) {
  addAttributeDisabledBtn(e);
  isForIntervalClear = false;
}

function addAttributeDisabledBtn(e: Event) {
  const isDisabledBtn: HTMLInputElement | HTMLButtonElement | null =
    document.querySelector('[disabled]');

  if (isDisabledBtn) {
    isDisabledBtn.disabled = false;
  }

  (e.target as HTMLInputElement | HTMLButtonElement).disabled = true;
}

function changeColorBody() {
  const setIntervalChange = setInterval(() => {
    if (!isForIntervalClear) {
      clearInterval(setIntervalChange);
      return;
    }
    if (bodyEl) {
      bodyEl.style.background = getRandomHexColor();
    }
  }, 1000);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
