import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() clickClose = new EventEmitter();
  constructor() { }

  close() {
    this.clickClose.emit();
    console.log('clickClose evento emitido');
  }

}
