import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MfeComponent } from './mfe.component';

const routes: Routes = [{ path: '', component: MfeComponent }];

@NgModule({
  declarations: [MfeComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class MfeModule {
  static entryComponent = MfeComponent;
}