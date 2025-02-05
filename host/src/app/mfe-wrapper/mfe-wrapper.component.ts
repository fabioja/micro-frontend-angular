import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, Injector, Input, ViewContainerRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-mfe-wrapper',
  templateUrl: './mfe-wrapper.component.html',
  styleUrl: './mfe-wrapper.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom // Ativando Shadow DOM
})
export class MfeWrapperComponent {
  @Input() remoteName!: string;
  @Input() modulePath!: string;

  constructor(private vcr: ViewContainerRef, private injector: Injector) { }

  async ngOnChanges() {
    if (!this.remoteName || !this.modulePath) return;

    try {
      const { AppComponent } = await loadRemoteModule({
        remoteEntry: `http://localhost:4201/remoteEntry.js`,
        remoteName: this.remoteName,
        exposedModule: this.modulePath,
      });

      this.vcr.clear();
      const appComponent = this.vcr.createComponent(AppComponent);
      appComponent.instance && ((appComponent.instance as any).context = { status: 'Dados enviados para o MFE' });
    }
    catch (error) {
      console.error("Erro ao carregar o MFE:", error);
    }
  }
}
