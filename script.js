const keyboardButtons = [
  [
    {
      code: 'Backquote',
      simb: false,
      lang: { en: '`', ru: 'ё' },
      width: 'long',
    },
    {
      code: 'Digit1',
      simb: false,
      lang: { en: '1', ru: '1' },
      width: 'normal',
    },
    {
      code: 'Digit2',
      simb: false,
      lang: { en: '2', ru: '2' },
      width: 'normal',
    },
    {
      code: 'Digit3',
      simb: false,
      lang: { en: '3', ru: '3' },
      width: 'normal',
    },
    {
      code: 'Digit4',
      simb: false,
      lang: { en: '4', ru: '4' },
      width: 'normal',
    },
    {
      code: 'Digit5',
      simb: false,
      lang: { en: '5', ru: '5' },
      width: 'normal',
    },
    {
      code: 'Digit6',
      simb: false,
      lang: { en: '6', ru: '6' },
      width: 'normal',
    },
    {
      code: 'Digit7',
      simb: false,
      lang: { en: '7', ru: '7' },
      width: 'normal',
    },
    {
      code: 'Digit8',
      simb: false,
      lang: { en: '8', ru: '8' },
      width: 'normal',
    },
    {
      code: 'Digit9',
      simb: false,
      lang: { en: '9', ru: '9' },
      width: 'normal',
    },
    {
      code: 'Digit0',
      simb: false,
      lang: { en: '0', ru: '0' },
      width: 'normal',
    },
    {
      code: 'Minus',
      simb: false,
      lang: { en: '-', ru: '-' },
      width: 'normal',
    },
    {
      code: 'Equal',
      simb: false,
      lang: { en: '=', ru: '=' },
      width: 'normal',
    },
    {
      code: 'Backspace',
      simb: true,
      lang: { en: 'Backspace', ru: 'Backspace' },
      width: 'longest',
    },
  ],
  [
    {
      code: 'Tab',
      simb: true,
      lang: { en: 'Tab', ru: 'Tab' },
      width: 'long',
    },
    {
      code: 'KeyQ',
      simb: false,
      lang: { en: 'q', ru: 'й' },
      width: 'normal',
    },
    {
      code: 'KeyW',
      simb: false,
      lang: { en: 'w', ru: 'ц' },
      width: 'normal',
    },
    {
      code: 'KeyE',
      simb: false,
      lang: { en: 'e', ru: 'у' },
      width: 'normal',
    },
    {
      code: 'KeyR',
      simb: false,
      lang: { en: 'r', ru: 'к' },
      width: 'normal',
    },
    {
      code: 'KeyT',
      simb: false,
      lang: { en: 't', ru: 'е' },
      width: 'normal',
    },
    {
      code: 'KeyY',
      simb: false,
      lang: { en: 'y', ru: 'н' },
      width: 'normal',
    },
    {
      code: 'KeyU',
      simb: false,
      lang: { en: 'u', ru: 'г' },
      width: 'normal',
    },
    {
      code: 'KeyI',
      simb: false,
      lang: { en: 'i', ru: 'ш' },
      width: 'normal',
    },
    {
      code: 'KeyO',
      simb: false,
      lang: { en: 'o', ru: 'щ' },
      width: 'normal',
    },
    {
      code: 'KeyP',
      simb: false,
      lang: { en: 'p', ru: 'з' },
      width: 'normal',
    },
    {
      code: 'BracketLeft',
      simb: false,
      lang: { en: '[', ru: 'х' },
      width: 'normal',
    },
    {
      code: 'BracketRight',
      simb: false,
      lang: { en: ']', ru: 'ъ' },
      width: 'normal',
    },
    {
      code: 'Backslash',
      simb: false,
      lang: { en: '\\', ru: '\\' },
      width: 'normal',
    },
    {
      code: 'Delete',
      simb: true,
      lang: { en: 'DEL', ru: 'DEL' },
      width: 'long',
    },
  ],
  [
    {
      code: 'CapsLock',
      simb: true,
      lang: { en: 'Caps Lock', ru: 'Caps Lock' },
      width: 'longest',
    },
    {
      code: 'KeyA',
      simb: false,
      lang: { en: 'a', ru: 'ф' },
      width: 'normal',
    },
    {
      code: 'KeyS',
      simb: false,
      lang: { en: 's', ru: 'ы' },
      width: 'normal',
    },
    {
      code: 'KeyD',
      simb: false,
      lang: { en: 'd', ru: 'в' },
      width: 'normal',
    },
    {
      code: 'KeyF',
      simb: false,
      lang: { en: 'f', ru: 'а' },
      width: 'normal',
    },
    {
      code: 'KeyG',
      simb: false,
      lang: { en: 'g', ru: 'п' },
      width: 'normal',
    },
    {
      code: 'KeyH',
      simb: false,
      lang: { en: 'h', ru: 'р' },
      width: 'normal',
    },
    {
      code: 'KeyJ',
      simb: false,
      lang: { en: 'j', ru: 'о' },
      width: 'normal',
    },
    {
      code: 'KeyK',
      simb: false,
      lang: { en: 'k', ru: 'л' },
      width: 'normal',
    },
    {
      code: 'KeyL',
      simb: false,
      lang: { en: 'l', ru: 'д' },
      width: 'normal',
    },
    {
      code: 'Semicolon',
      simb: false,
      lang: { en: ';', ru: 'ж' },
      width: 'normal',
    },
    {
      code: 'Quote',
      simb: false,
      lang: { en: "'", ru: 'э' },
      width: 'normal',
    },
    {
      code: 'Enter',
      simb: true,
      lang: { en: 'ENTER', ru: 'ENTER' },
      width: 'longest',
    },
  ],
  [
    {
      code: 'ShiftLeft',
      simb: true,
      lang: { en: 'Shift', ru: 'Shift' },
      width: 'longest',
    },
    {
      code: 'KeyZ',
      simb: false,
      lang: { en: 'z', ru: 'я' },
      width: 'normal',
    },
    {
      code: 'KeyX',
      simb: false,
      lang: { en: 'x', ru: 'ч' },
      width: 'normal',
    },
    {
      code: 'KeyC',
      simb: false,
      lang: { en: 'c', ru: 'с' },
      width: 'normal',
    },
    {
      code: 'KeyV',
      simb: false,
      lang: { en: 'v', ru: 'м' },
      width: 'normal',
    },
    {
      code: 'KeyB',
      simb: false,
      lang: { en: 'b', ru: 'и' },
      width: 'normal',
    },
    {
      code: 'KeyN',
      simb: false,
      lang: { en: 'n', ru: 'т' },
      width: 'normal',
    },
    {
      code: 'KeyM',
      simb: false,
      lang: { en: 'm', ru: 'ь' },
      width: 'normal',
    },
    {
      code: 'Comma',
      simb: false,
      lang: { en: ',', ru: 'б' },
      width: 'normal',
    },
    {
      code: 'Period',
      simb: false,
      lang: { en: '.', ru: 'ю' },
      width: 'normal',
    },
    {
      code: 'Slash',
      simb: false,
      lang: { en: '/', ru: '.' },
      width: 'normal',
    },
    {
      code: 'ArrowUp',
      simb: true,
      lang: { en: '⯅', ru: '⯅' },
      width: 'normal',
    },
    {
      code: 'ShiftRight',
      simb: true,
      lang: { en: 'Shift', ru: 'Shift' },
      width: 'longest',
    },
  ],
  [
    {
      code: 'ControlLeft',
      simb: true,
      lang: { en: 'Ctrl', ru: 'Ctrl' },
      width: 'long',
    },
    {
      code: 'Wind',
      simb: true,
      lang: { en: 'Win', ru: 'Win' },
      width: 'normal',
    },
    {
      code: 'AltLeft',
      simb: true,
      lang: { en: 'Alt', ru: 'Alt' },
      width: 'long',
    },
    {
      code: 'Space',
      simb: false,
      lang: { en: ' ', ru: ' ' },
      width: 'space',
    },
    {
      code: 'Altright',
      simb: true,
      lang: { en: 'Alt', ru: 'Alt' },
      width: 'long',
    },
    {
      code: 'ArrowLeft',
      simb: true,
      lang: { en: '⯇', ru: '⯇' },
      width: 'normal',
    },
    {
      code: 'ArrowDown',
      simb: true,
      lang: { en: '⯆', ru: '⯆' },
      width: 'normal',
    },
    {
      code: 'ArrowRight',
      func: true,
      lang: { en: '⯈', ru: '⯈' },
      width: 'normal',
    },
    {
      code: 'Controlright',
      simb: true,
      lang: { en: 'Ctrl', ru: 'Ctrl' },
      width: 'long',
    },
  ],
];

class Keyboard {
  constructor() {
    this.caps = false;
    if (localStorage.getItem('lang') === 'ru') {
      this.lang = 'ru';
    } else {
      this.lang = 'en';
    }
  }

  makeKeyboard() {
    this.main = document.createElement('main');
    document.body.appendChild(this.main);
    this.main.classList.add('main');
    this.title = document.createElement('h1');
    this.main.appendChild(this.title);
    this.title.classList.add('title');
    this.title.textContent = 'RSS Виртуальная клавиатура';
    this.textarea = document.createElement('textarea');
    this.main.appendChild(this.textarea);
    this.textarea.classList.add('text-area');
    this.keyboard = document.createElement('div');
    this.main.appendChild(this.keyboard);
    this.keyboard.classList.add('keyboard');
    this.keys = {};
    keyboardButtons.forEach((row) => {
      this.keyboardRow = document.createElement('div');
      this.keyboard.appendChild(this.keyboardRow);
      this.keyboardRow.classList.add('keyboardrow');
      row.forEach((symbol) => {
        this.simbol = document.createElement('button');
        this.keyboardRow.appendChild(this.simbol);
        this.simbol.classList.add('simbol');
        this.simbol.classList.add(symbol.width);
        this.simbol.setAttribute('id', symbol.code);
        this.keys[symbol.code] = { lang: symbol.lang, simb: symbol.simb };
        this.simbol.textContent = this.keys[symbol.code].lang[this.lang];
        this.simbol.setAttribute('data-simb', symbol.simb);
      });
    });
    this.information = document.createElement('div');
    this.main.appendChild(this.information);
    this.information.classList.add('information');
    this.opersystem = document.createElement('p');
    this.information.appendChild(this.opersystem);
    this.opersystem.classList.add('informationtext');
    this.opersystem.textContent = 'Клавиатура создана в операционной системе Windows';
    this.changelanguage = document.createElement('p');
    this.information.appendChild(this.changelanguage);
    this.changelanguage.classList.add('informationtext');
    this.changelanguage.textContent = 'Для переключения языка комбинация: левые ctrl + alt';
    this.textarea.focus();
    this.addListeners();
  }

  addListeners() {
    this.textarea.addEventListener('blur', () => {
      setTimeout(() => {
        this.textarea.focus();
      }, 0);
    });

    document.addEventListener('keydown', (e) => {
      e.stopImmediatePropagation();
      e.preventDefault();
      this.textarea.focus();
      const keyPress = document.getElementById(e.code);

      if (!keyPress) {
        e.preventDefault();
        return;
      }
      if (e.code === 'CapsLock') {
        if (this.caps === false) {
          this.caps = true;
          if (keyPress.classList.contains('activ')) {
            keyPress.classList.remove('activ');
          } else {
            keyPress.classList.add('activ');
          }
          this.changeCase(e.shiftKey);
        } else {
          this.caps = false;
          if (keyPress.classList.contains('activ')) {
            keyPress.classList.remove('activ');
          } else {
            keyPress.classList.add('activ');
          }
          this.changeCase(e.shiftKey);
        }
      } else if (e.ctrlKey && e.altKey && !e.repeat) {
        keyPress.classList.add('activ');
        e.preventDefault();
        if (this.lang === 'en') {
          this.lang = 'ru';
        } else {
          this.lang = 'en';
        }
        localStorage.setItem('lang', this.lang);
        this.changingLanguage(this.lang, e.shiftKey);
      } else if ((e.code === 'ShiftLeft' || e.code === 'ShiftRight') && !e.repeat) {
        if (this.caps === false) {
          this.caps = true;
          keyPress.classList.add('activ');
          this.changeCase(e.shiftKey);
        } else {
          this.caps = false;
          keyPress.classList.add('activ');
          this.changeCase(e.shiftKey);
        }
      } else if (e.code === 'Tab') {
        keyPress.classList.add('activ');
        e.preventDefault();
        this.writeText('\t');
      } else if (e.code === 'Backspace') {
        keyPress.classList.add('activ');
        e.preventDefault();
        this.pressBackSpace();
      } else if (e.code === 'Delete') {
        keyPress.classList.add('activ');
        e.preventDefault();
        this.pressDelete();
      } else if (e.code === 'Enter') {
        keyPress.classList.add('activ');
        e.preventDefault();
        this.writeText('\n');
      } else if (e.code === 'ArrowUp') {
        keyPress.classList.add('activ');
        e.preventDefault();
        this.arrowUp();
      } else if (e.code === 'ArrowDown') {
        keyPress.classList.add('activ');
        e.preventDefault();
        this.arrowDown();
      } else if (e.code === 'ArrowLeft') {
        keyPress.classList.add('activ');
        e.preventDefault();
        this.arrowLeft();
      } else if (e.code === 'ArrowRight') {
        keyPress.classList.add('activ');
        e.preventDefault();
        this.arrowRight();
      } else {
        keyPress.classList.add('activ');
        if (this.keys[e.code].simb === false) {
          const keyPresses = document.getElementById(e.code);
          if (this.caps) {
            this.writeText(keyPresses.textContent.toUpperCase());
          } else {
            this.writeText(keyPresses.textContent);
          }
        }
      }
      const lines = this.textarea.value.split('\n');
      if (lines[lines.length - 1].length > 70) {
        this.writeText('\n');
      }
    });

    document.addEventListener('keyup', (e) => {
      e.stopImmediatePropagation();

      const keyPressed = document.getElementById(e.code);
      if (!keyPressed) {
        e.preventDefault();
        return;
      }
      if (e.code !== 'CapsLock') {
        setTimeout(() => {
          keyPressed.classList.remove('activ');
        }, 500);
      }
      if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
        e.preventDefault();
        setTimeout(() => {
          keyPressed.classList.remove('activ');
        }, 500);
        if (this.caps === false) {
          this.caps = true;
        } else {
          this.caps = false;
        }
        this.changeCase(e.shiftKey);
      }
    });

    // создание кейбордивента на виртуальной клавиатуре
    this.keyboard.addEventListener('mousedown', (e) => {
      if (e.target.classList.contains('simbol')) {
        this.textarea.focus();
        const keyboardKeyDown = new KeyboardEvent('keydown', {
          bubbles: true,
          cancelable: true,
          code: e.target.id,
          view: window,
        });
        document.dispatchEvent(keyboardKeyDown);
      }
    });

    this.keyboard.addEventListener('mouseup', (e) => {
      if (e.target.classList.contains('simbol')) {
        this.textarea.focus();
        const keyboardKeyUp = new KeyboardEvent('keyup', {
          bubbles: true,
          cancelable: true,
          code: e.target.id,
          view: window,
        });
        document.dispatchEvent(keyboardKeyUp);
      }
    });
  }

  changeCase(shiftKey) {
    const simbols = Array.from(this.keyboard.querySelectorAll('.simbol'));
    for (let i = 0; i < simbols.length; i += 1) {
      if (simbols[i].id === 'Backquote' && this.lang === 'en') {
        simbols[i].textContent = shiftKey ? '~' : '`';
      } else if (simbols[i].id === 'Minus' && this.lang === 'en') {
        simbols[i].textContent = shiftKey ? '_' : '-';
      } else if (simbols[i].id === 'Equal' && this.lang === 'en') {
        simbols[i].textContent = shiftKey ? '+' : '=';
      } else if (simbols[i].id === 'BracketLeft' && this.lang === 'en') {
        simbols[i].textContent = shiftKey ? '{' : '[';
      } else if (simbols[i].id === 'BracketRight' && this.lang === 'en') {
        simbols[i].textContent = shiftKey ? '}' : ']';
      } else if (simbols[i].id === 'Backslash' && this.lang === 'en') {
        simbols[i].textContent = shiftKey ? '|' : '\\';
      } else if (simbols[i].id === 'Semicolon' && this.lang === 'en') {
        simbols[i].textContent = shiftKey ? ':' : ';';
      } else if (simbols[i].id === 'Quote' && this.lang === 'en') {
        simbols[i].textContent = shiftKey ? '"' : "'";
      } else if (simbols[i].id === 'Comma' && this.lang === 'en') {
        simbols[i].textContent = shiftKey ? '<' : ',';
      } else if (simbols[i].id === 'Period' && this.lang === 'en') {
        simbols[i].textContent = shiftKey ? '>' : '.';
      } else if (simbols[i].id === 'Slash' && this.lang === 'en') {
        simbols[i].textContent = shiftKey ? '?' : '/';
      } else if (simbols[i].id === 'Slash' && this.lang === 'ru') {
        simbols[i].textContent = shiftKey ? ',' : '.';
      } else if (simbols[i].dataset.simb === 'false') {
        if (((this.caps))) {
          simbols[i].textContent = simbols[i].textContent.toUpperCase();
        } else {
          simbols[i].textContent = simbols[i].textContent.toLowerCase();
        }
      }
    }
  }

  changingLanguage(lang, shift = false) {
    const simbols = Array.from(this.keyboard.querySelectorAll('.simbol'));
    for (let i = 0; i < simbols.length; i += 1) {
      simbols[i].textContent = this.keys[simbols[i].id].lang[lang];
    }
    this.changeCase(shift);
  }

  pressBackSpace() {
    const positionKursorStart = this.textarea.selectionStart;
    const positionKursorEnd = this.textarea.selectionEnd;
    if (positionKursorStart !== positionKursorEnd) {
      this.textarea.value = this.textarea.value.slice(0, positionKursorStart)
      + this.textarea.value.slice(positionKursorEnd);
      this.textarea.selectionStart = positionKursorStart;
      this.textarea.selectionEnd = this.textarea.selectionStart;
    } else {
      this.textarea.value = this.textarea.value.slice(0, positionKursorStart - 1)
      + this.textarea.value.slice(positionKursorEnd);
      this.textarea.selectionStart = positionKursorStart - 1;
      this.textarea.selectionEnd = this.textarea.selectionStart;
    }
  }

  arrowUp() {
    const massText = this.textarea.value.split('\n');
    let countTemp = 0;
    let lineNumber = 0;
    let lengthOfPrevLine = 0;
    let lengthOfPrevPrevLine = 0;

    for (let m = 0; m < massText.length; m += 1) {
      if (countTemp < this.textarea.selectionStart) {
        countTemp += (massText[m].length + 1);
        lineNumber = m;
      }
    }

    if (this.textarea.selectionStart < massText[0].length + 1) return;

    for (let n = 0; n < lineNumber; n += 1) {
      lengthOfPrevLine += massText[n].length;
    }
    if (massText.length < 3) {
      lengthOfPrevPrevLine = 0;
    } else {
      for (let n = 0; n < lineNumber - 1; n += 1) {
        lengthOfPrevPrevLine += massText[n].length;
      }
    }
    const positionKursorInLine = this.textarea.selectionStart - lineNumber - lengthOfPrevLine;
    if (positionKursorInLine === massText[lineNumber].length + 1) {
      this.textarea.selectionStart = lengthOfPrevLine + lineNumber;
    } else if (massText[lineNumber - 1].length < positionKursorInLine) {
      this.textarea.selectionStart = lengthOfPrevLine + lineNumber - 1;
    } else {
      this.textarea.selectionStart = lengthOfPrevPrevLine + positionKursorInLine + lineNumber - 1;
    }
    this.textarea.selectionEnd = this.textarea.selectionStart;
  }

  arrowDown() {
    const massText = this.textarea.value.split('\n');
    let countTemp = 0;
    let lineNumber = 0;
    let lengthOfPrevLine = 0;
    let lengthOfCurrLine = 0;

    for (let m = 0; m < massText.length; m += 1) {
      if (countTemp < this.textarea.selectionStart) {
        countTemp += (massText[m].length + 1);
        lineNumber = m;
      }
    }

    if (massText.length === lineNumber + 1) return;

    for (let n = 0; n < lineNumber; n += 1) {
      lengthOfPrevLine += massText[n].length;
    }
    for (let n = 0; n < lineNumber + 1; n += 1) {
      lengthOfCurrLine += massText[n].length;
    }
    const positionKursorInLine = this.textarea.selectionStart - lineNumber - lengthOfPrevLine;
    if ((positionKursorInLine === massText[lineNumber].length + 1)
    && massText[lineNumber + 1].length === 0) {
      this.textarea.selectionStart += 1;
    } else if (massText[lineNumber].length === 0) {
      this.textarea.selectionStart = lengthOfCurrLine
      + massText[lineNumber + 1].length + lineNumber + 2;
    } else if (positionKursorInLine === massText[lineNumber].length + 1) {
      this.textarea.selectionStart = lengthOfCurrLine
      + massText[lineNumber + 1].length + lineNumber + 2;
    } else if (massText[lineNumber + 1].length < positionKursorInLine) {
      this.textarea.selectionStart = lengthOfCurrLine
      + massText[lineNumber + 1].length + lineNumber + 1;
    } else {
      this.textarea.selectionStart = lengthOfCurrLine + positionKursorInLine + lineNumber + 1;
    }
    this.textarea.selectionEnd = this.textarea.selectionStart;
  }

  arrowLeft() {
    if (this.textarea.selectionStart !== 0) {
      this.textarea.selectionStart -= 1;
      this.textarea.selectionEnd = this.textarea.selectionStart;
    }
  }

  arrowRight() {
    this.textarea.selectionStart += 1;
    this.textarea.selectionEnd = this.textarea.selectionStart;
  }

  pressDelete() {
    const positionKursorStart = this.textarea.selectionStart;
    const positionKursorEnd = this.textarea.selectionEnd;
    if (positionKursorStart !== positionKursorEnd) {
      this.textarea.value = this.textarea.value.slice(0, positionKursorStart)
      + this.textarea.value.slice(positionKursorEnd);
      this.textarea.selectionStart = positionKursorStart;
      this.textarea.selectionEnd = this.textarea.selectionStart;
    } else {
      this.textarea.value = this.textarea.value.slice(0, positionKursorStart)
      + this.textarea.value.slice(positionKursorEnd + 1);
      this.textarea.selectionStart = positionKursorStart;
      this.textarea.selectionEnd = this.textarea.selectionStart;
    }
  }

  writeText(lett) {
    const positionKursorStart = this.textarea.selectionStart;
    this.textarea.value = this.textarea.value.slice(0, positionKursorStart)
    + lett + this.textarea.value.slice(positionKursorStart);
    this.textarea.selectionStart = positionKursorStart + 1;
    this.textarea.selectionEnd = this.textarea.selectionStart;
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const keyboard = new Keyboard();
  keyboard.makeKeyboard();
});
