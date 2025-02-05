import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { MfeWrapperComponent } from './mfe-wrapper/mfe-wrapper.component';
import { SidebarComponent } from './side-bar/side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    MfeWrapperComponent,
    SidebarComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
