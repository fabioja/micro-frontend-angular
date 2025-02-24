import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom // Ativando Shadow DOM
})
export class AppComponent implements OnInit {
  @Input() context: any;
  @Output() clickClose = new EventEmitter();
  title = 'mfe1';

  ngOnInit(): void {
    console.log('CONTEXTO MFE', this.context);
  }

  close() {
    this.clickClose.emit();
    console.log('mfe clickClose evento emitido');
  }

}
