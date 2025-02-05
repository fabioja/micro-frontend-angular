import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom // Ativando Shadow DOM
})
export class SidebarComponent {
  @Input() isClosed = true;
  @Output() closeSideBarEvent = new EventEmitter();

  closeSideBar() {
    this.isClosed = true;
    this.closeSideBarEvent.emit();
  }
}