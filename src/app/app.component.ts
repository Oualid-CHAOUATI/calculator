import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  result: number = 0;
  screen: string = '';
  modeNumber = 0;

  mode: string = '+';
  ngOnInit(): void {
    this.init();
  }

  init() {
    this.screen = '';
  }

  attachToScreen(s: string | number) {
    this.screen += `${s}`;
  }

  setMode(mode: string) {
    const oldValue = this.result;
    const newValue = parseFloat(this.screen);
    if (mode == 'c') {
      this.screen = '';
      this.result = 0;
    } else if (mode == '=') {
      this.screen = '';
      this.calc(oldValue, newValue);
      this.attachToScreen(this.result);
    } else {
      this.mode = mode;
      this.result = parseFloat(this.screen);
      this.screen = '';
    }
  }

  calc(a: number, b: number) {
    switch (this.mode) {
      case '=':
        this.result = this.result;
        break;

      case '+':
        this.result = a + b;
        break;
      case '-':
        this.result = a - b;
        break;

      case '*':
        this.result = a * b;
        break;
      case '/':
        this.result = a / b;
        break;
    }
  }
}
