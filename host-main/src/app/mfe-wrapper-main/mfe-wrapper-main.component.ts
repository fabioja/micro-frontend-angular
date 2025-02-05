import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, Injector, Input, ViewContainerRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-mfe-wrapper-main',
  templateUrl: './mfe-wrapper-main.component.html',
  styleUrl: './mfe-wrapper-main.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom // Ativando Shadow DOM
})
export class MfeWrapperMainComponent {
  @Input() remoteName!: string;
  @Input() modulePath!: string;

  constructor(private vcr: ViewContainerRef, private injector: Injector) { }

  async ngOnChanges() {
    if (!this.remoteName || !this.modulePath) return;

    try {
      const { AppComponent } = await loadRemoteModule({
        remoteEntry: `http://localhost:4100/remoteEntry.js`,
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
