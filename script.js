const keyboardButtons = [
    [
      {
        code: 'Grave',
        // func: false,
        lang: { en: '`', ru: 'ё' },
        width: 'long',
      },
      {
        code: 'Digit1',
        // func: false,
        lang: { en: '1', ru: '1' },
        width: 'normal',
      },
      {
        code: 'Digit2',
        // func: false,
        lang: { en: '2', ru: '2' },
        width: 'normal',
      },
      {
        code: 'Digit3',
        // func: false,
        lang: { en: '3', ru: '3' },
        width: 'normal',
      },
      {
        code: 'Digit4',
        // func: false,
        lang: { en: '4', ru: '4' },
        width: 'normal',
      },
      {
        code: 'Digit5',
        // func: false,
        lang: { en: '5', ru: '5' },
        width: 'normal',
      },
      {
        code: 'Digit6',
        // func: false,
        lang: { en: '6', ru: '6' },
        width: 'normal',
      },
      {
        code: 'Digit7',
        // func: false,
        lang: { en: '7', ru: '7' },
        width: 'normal',
      },
      {
        code: 'Digit8',
        // func: false,
        lang: { en: '8', ru: '8' },
        width: 'normal',
      },
      {
        code: 'Digit9',
        // func: false,
        lang: { en: '9', ru: '9' },
        width: 'normal',
      },
      {
        code: 'Digit0',
        // func: false,
        lang: { en: '0', ru: '0' },
        width: 'normal',
      },
      {
        code: 'Minus',
        // func: false,
        lang: { en: '-', ru: '-' },
        width: 'normal',
      },
      {
        code: 'Equals',
        // func: false,
        lang: { en: '=', ru: '=' },
        width: 'normal',
      },
      {
        code: 'Backspace',
        // func: true,
        lang: { en: 'Backspace', ru: 'Backspace' },
        width: 'longest',
      },
    ],
    [
      {
        code: 'Tab',
        // func: true,
        lang: { en: 'Tab', ru: 'Tab' },
        width: 'long',
      },
      {
        code: 'KeyQ',
        // func: false,
        lang: { en: 'q', ru: 'й' },
        width: 'normal',
      },
      {
        code: 'KeyW',
        // func: false,
        lang: { en: 'w', ru: 'ц' },
        width: 'normal',
      },
      {
        code: 'KeyE',
        // func: false,
        lang: { en: 'e', ru: 'у' },
        width: 'normal',
      },
      {
        code: 'KeyR',
        // func: false,
        lang: { en: 'r', ru: 'к' },
        width: 'normal',
      },
      {
        code: 'KeyT',
        // func: false,
        lang: { en: 't', ru: 'е' },
        width: 'normal',
      },
      {
        code: 'KeyY',
        // func: false,
        lang: { en: 'y', ru: 'н' },
        width: 'normal',
      },
      {
        code: 'KeyU',
        // func: false,
        lang: { en: 'u', ru: 'г' },
        width: 'normal',
      },
      {
        code: 'KeyI',
        // func: false,
        lang: { en: 'i', ru: 'ш' },
        width: 'normal',
      },
      {
        code: 'KeyO',
        // func: false,
        lang: { en: 'o', ru: 'щ' },
        width: 'normal',
      },
      {
        code: 'KeyP',
        // func: false,
        lang: { en: 'p', ru: 'з' },
        width: 'normal',
      },
      {
        code: 'Leftsquarebracket',
        // func: false,
        lang: { en: '[', ru: 'х' },
        width: 'normal',
      },
      {
        code: 'Rightsquarebracket',
        // func: false,
        lang: { en: ']', ru: 'ъ' },
        width: 'normal',
      },
      {
        code: 'Backslash',
        // func: false,
        lang: { en: '\\', ru: '\\' },
        width: 'normal',
      },
      {
        code: 'Delete',
        // func: true,
        lang: { en: 'DEL', ru: 'DEL' },
        width: 'long',
      },
    ],
    [
      {
        code: 'CapsLock',
        // func: true,
        lang: { en: 'Caps Lock', ru: 'Caps Lock' },
        width: 'longest',
      },
      {
        code: 'KeyA',
        // func: false,
        lang: { en: 'a', ru: 'ф' },
        width: 'normal',
      },
      {
        code: 'KeyS',
        // func: false,
        lang: { en: 's', ru: 'ы' },
        width: 'normal',
      },
      {
        code: 'KeyD',
        // func: false,
        lang: { en: 'd', ru: 'в' },
        width: 'normal',
      },
      {
        code: 'KeyF',
        // func: false,
        lang: { en: 'f', ru: 'а' },
        width: 'normal',
      },
      {
        code: 'KeyG',
        // func: false,
        lang: { en: 'g', ru: 'п' },
        width: 'normal',
      },
      {
        code: 'KeyH',
        // func: false,
        lang: { en: 'h', ru: 'р' },
        width: 'normal',
      },
      {
        code: 'KeyJ',
        // func: false,
        lang: { en: 'j', ru: 'о' },
        width: 'normal',
      },
      {
        code: 'KeyK',
        // func: false,
        lang: { en: 'k', ru: 'л' },
        width: 'normal',
      },
      {
        code: 'KeyL',
        // func: false,
        lang: { en: 'l', ru: 'д' },
        width: 'normal',
      },
      {
        code: 'Semicolon',
        // func: false,
        lang: { en: ';', ru: 'ж' },
        width: 'normal',
      },
      {
        code: 'Singlequote',
        // func: false,
        lang: { en: "'", ru: 'э' },
        width: 'normal',
      },
      {
        code: 'Enter',
        // func: true,
        lang: { en: 'ENTER', ru: 'ENTER' },
        width: 'longest',
      },
    ],
    [
      {
        code: 'ShiftLeft',
        // func: true,
        lang: { en: 'Shift', ru: 'Shift' },
        width: 'longest',
      },
      {
        code: 'KeyZ',
        // func: false,
        lang: { en: 'z', ru: 'я' },
        width: 'normal',
      },
      {
        code: 'KeyX',
        // func: false,
        lang: { en: 'x', ru: 'ч' },
        width: 'normal',
      },
      {
        code: 'KeyC',
        // func: false,
        lang: { en: 'c', ru: 'с' },
        width: 'normal',
      },
      {
        code: 'KeyV',
        // func: false,
        lang: { en: 'v', ru: 'м' },
        width: 'normal',
      },
      {
        code: 'KeyB',
        // func: false,
        lang: { en: 'b', ru: 'и' },
        width: 'normal',
      },
      {
        code: 'KeyN',
        // func: false,
        lang: { en: 'n', ru: 'т' },
        width: 'normal',
      },
      {
        code: 'KeyM',
        // func: false,
        lang: { en: 'm', ru: 'ь' },
        width: 'normal',
      },
      {
        code: 'Comma',
        // func: false,
        lang: { en: ',', ru: 'б' },
        width: 'normal',
      },
      {
        code: 'Period',
        // func: false,
        lang: { en: '.', ru: 'ю' },
        width: 'normal',
      },
      {
        code: 'Slash',
        // func: false,
        lang: { en: '/', ru: '.' },
        width: 'normal',
      },
      {
        code: 'Arrowup',
        // func: true,
        lang: { en: '⯅', ru: '⯅' },
        width: 'normal',
      },
      {
        code: 'ShiftRight',
        // func: true,
        lang: { en: 'Shift', ru: 'Shift' },
        width: 'longest',
      },
    ],
    [
      {
        code: 'Controlleft',
        // func: true,
        lang: { en: 'Ctrl', ru: 'Ctrl' },
        width: 'long',
      },
      {
        code: 'Wind',
        // func: true,
        lang: { en: 'Win', ru: 'Win' },
        width: 'normal',
      },
      {
        code: 'Altleft',
        // func: true,
        lang: { en: 'Alt', ru: 'Alt' },
        width: 'long',
      },
      {
        code: 'Space',
        // func: false,
        lang: { en: ' ', ru: ' ' },
        width: 'space',
      },
      {
        code: 'Altright',
        // func: true,
        lang: { en: 'Alt', ru: 'Alt' },
        width: 'long',
      },
      {
        code: 'Arrowleft',
        // func: true,
        lang: { en: '⯇', ru: '⯇' },
        width: 'normal',
      },
      {
        code: 'Arrowdown',
        // func: true,
        lang: { en: '⯆', ru: '⯆' },
        width: 'normal',
      },
      {
        code: 'Arrowright',
        // func: true,
        lang: { en: '⯈', ru: '⯈' },
        width: 'normal',
      },
      {
        code: 'Controlright',
        // func: true,
        lang: { en: 'Ctrl', ru: 'Ctrl' },
        width: 'long',
      },
    ],
  ];
  

class Keyboard {

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

        // const keyboardRow = document.createElement('div');
        // this.description = document.createElement('p');
        // this.language = document.createElement('p');
    
        // Setup main elements
        // this.wrapper.classList.add('wrapper');
    
        // this.title.classList.add('title');
        // this.title.textContent = 'RSS Virtual keyboard';
    
        // this.text.autofocus = true;
        // this.text.classList.add('text');
    
        // this.keyboard.classList.add('keyboard');
        // keyboardRow.classList.add('keyboard__row');
    
        // this.description.classList.add('info');
        // this.description.textContent =
        //   'This keyboard was developed and tested in Microsoft Windows.';
    // 
        // this.language.classList.add('info');
        // this.language.textContent =
        //   'To switch ENG/РУС input methods, press Ctrl+Alt on Windows/Linux or Cmd+Alt on Mac.';
    // 
        // Add to DOM
        // this.keyboard.appendChild(keyboardFragment);
        // this.showLanguage(this.lang);
    
        // this.wrapper.appendChild(this.title);
        // this.wrapper.appendChild(this.text);
        // this.wrapper.appendChild(this.keyboard);
        // this.wrapper.appendChild(this.description);
        // this.wrapper.appendChild(this.language);
    
        
    
        // this.createListeners();
    }
}


window.addEventListener('DOMContentLoaded', () => {
    const keyboard = new Keyboard();
    keyboard.makeKeyboard();
  });