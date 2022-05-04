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
        code: 'Leftsquarebracket',
        simb: false,
        lang: { en: '[', ru: 'х' },
        width: 'normal',
      },
      {
        code: 'Rightsquarebracket',
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
        code: 'Singlequote',
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
        code: 'Arrowup',
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
        code: 'Controlleft',
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
        code: 'Altleft',
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
        code: 'Arrowleft',
        simb: true,
        lang: { en: '⯇', ru: '⯇' },
        width: 'normal',
      },
      {
        code: 'Arrowdown',
        simb: true,
        lang: { en: '⯆', ru: '⯆' },
        width: 'normal',
      },
      {
        code: 'Arrowright',
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
    constructor () {
        this.caps = false;
    }

    // создание body
    makeKeyboard () {
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
        keyboardButtons.forEach(row => {
            this.keyboardRow = document.createElement('div');
            this.keyboard.appendChild(this.keyboardRow);
            this.keyboardRow.classList.add('keyboardrow');
            row.forEach(symbol => {
                this.simbol = document.createElement('button');
                this.keyboardRow.appendChild(this.simbol);
                this.simbol.classList.add('simbol');
                this.simbol.classList.add(symbol.width);
                this.simbol.textContent = symbol.lang.en;
                this.simbol.setAttribute('id', symbol.code);
                this.keys[symbol.code] = {lang : symbol.lang, simb: symbol.simb}
                // console.log(this.keys);
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
        this.changelanguage.textContent = 'Для переключения языка комбинация: левые shift + alt';
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
            if (e.code === 'CapsLock') {
                e.preventDefault();
                const capsLock = document.getElementById('CapsLock');
                if (this.caps === false) {
                    // console.log(this.caps);
                    this.caps = true;
                    capsLock.classList.add('activ');
                    this.uppercase(e);
                    // if (this.keys[e.code].simb === false) {
                    //     this.textarea.value = this.textarea.value + this.keys[e.code].lang.en.toUpperCase();
                    // }
                    
                } else {
                    // console.log(this.caps);
                    this.caps = false;
                    capsLock.classList.remove('activ');
                    this.lowercase(e);
                    // if (this.keys[e.code].simb === false) {
                    //     this.textarea.value = this.textarea.value + this.keys[e.code].lang.en;
                    // }
                }
            }



            if (this.keys[e.code].simb === false) {
                this.textarea.value = this.textarea.value + this.keys[e.code].lang.en;
            }
          })

          this.keyboard.addEventListener('click', (e) => {
              if (e.target.classList.contains('simbol')) {
                this.textarea.focus();
                const keyboardKeyDown = new KeyboardEvent('keydown', {
                    bubbles: true,
                    cancelable: true,
                    code: e.target.id,
                    view: window,
                  });
                  document.dispatchEvent(keyboardKeyDown);
            
                  const keyboardKeyUp = new KeyboardEvent('keyup', {
                    bubbles: true,
                    cancelable: true,
                    code: e.target.id,
                    view: window,
                  });
                  document.dispatchEvent(keyboardKeyUp)
              };
          })
    }

    uppercase(shiftKey) {
        const simbols = this.keyboard.querySelectorAll('.simbol')
        simbols.forEach(simbol => {
            console.log(simbol.id);
            console.log(this.keys[simbol.id].simb);
            if (this.keys[simbol.id].simb === false) {
                simbol.textContent = simbol.textContent.toUpperCase();
            }
          
        });
        // this.textarea.value = this.textarea.value + this.keys[shiftKey.id].lang.en.toUpperCase();
    }
}


window.addEventListener('DOMContentLoaded', () => {
    const keyboard = new Keyboard();
    keyboard.makeKeyboard();
  });