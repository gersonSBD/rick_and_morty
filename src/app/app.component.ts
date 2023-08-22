import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showSplashScreen = true;

  title = 'prueba-tecnica';

  constructor() {
    setTimeout(() => {
      this.showSplashScreen = false;
    }, 1000);
  }
}
