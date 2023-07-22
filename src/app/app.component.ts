import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  randomText = faker.lorem.sentence();
  enteredText = '';

  onInput(event: Event) {
    const target = event.target as HTMLInputElement;

    this.enteredText = target.value;
  }

  getClass(letter: string, i: number) {
    if (i >= this.enteredText.length) {
      return 'text-gray-400';
    }

    if (letter === this.enteredText[i]) {
      return 'text-green-500';
    }

    return 'text-red-500 font-semibold';
  }
}
