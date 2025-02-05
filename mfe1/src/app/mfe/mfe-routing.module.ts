import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MfeComponent } from './mfe.component';

const routes: Routes = [{ path: '', component: MfeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MfeRoutingModule { }
