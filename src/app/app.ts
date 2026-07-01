import { Component, signal } from '@angular/core';
import {ProductCard} from "./product-card/product-card";
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  imports : [ProductCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-web-app');
  User = 'Alex';
  changeUser() {
       if (this.User === 'Alex') {
         this.User = 'Sam';
       } else {
         this.User = 'Alex';
       }
     }
}
