import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-banner-mfe',
  templateUrl: './banner-mfe.component.html',
  styleUrls: ['./banner-mfe.component.scss']
})
export class BannerMfeComponent {
  @Input() title: string = 'MFE';
  @Input() description: string = 'Carregado MFE dinamicamente';
  @Output() buttonClick = new EventEmitter();

  onButtonClick() {
    this.buttonClick.emit();
  }
}