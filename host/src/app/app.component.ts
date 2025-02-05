import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom // Ativando Shadow DOM
})
export class AppComponent {
  title = 'host';
  showSideBar = false;

  openSideBar() {
    this.showSideBar = true;
  }

  closeSideBar() {
    this.showSideBar = false;
  }
}
