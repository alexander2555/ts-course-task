const body = document.body
const weatherButtons = body.querySelectorAll('button')
// Получаем элемент регулятора как input-элемент с полем value
const volRange = document.getElementById('volumeInput') as HTMLInputElement

/** Обработчик нажатия кнопки */
const onBtnClick = (e: Event): void => {
  const btnEl = e.currentTarget as Element
  const audioEl = btnEl.querySelector('audio') as HTMLAudioElement
  const bgUrl = btnEl.getAttribute('data-bg')

  // Установка текущей громкости в соответствие с регулятором
  audioEl.volume = Number(volRange.value) ?? 0.5
  // Сохранение текущего состояния аудио-элемента нажатой кнопки
  const paused: boolean = audioEl.paused
  // Все звуки на паузу
  document.querySelectorAll('audio').forEach(a => a.pause())
  if (paused) {
    // Если соотв-й аудио элемент был на паузе, запуск звука и смена фона
    body.style.backgroundImage = `url(${bgUrl})`
    audioEl.play()
  }
}

/** Обработчик изменения регулятора */
const onRangeChange = (): void => {
  const audio = body.getElementsByTagName('audio')
  const vol = Number(volRange.value)
  // Установка громкости для всех аудио
  Array(...audio).forEach(a => (a.volume = vol))
}

weatherButtons.forEach(btn => btn.addEventListener('click', onBtnClick))

volRange.addEventListener('change', onRangeChange)
