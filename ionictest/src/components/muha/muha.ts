import { Component } from '@angular/core';

/**
 * Generated class for the MuhaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'muha',
  templateUrl: 'muha.html',
  styles: ['adf'],
  styleUrls: ['build/main.css']
})
export class MuhaComponent {

  text: string;

  constructor() {
    console.log('Hello MuhaComponent Component');
    this.text = 'Hello World';
  }

}
