import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerMfeComponent } from './banner/banner-mfe.component';
import { BannerFooterComponent } from './banner-footer/banner-footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [		
    AppComponent,
    BannerMfeComponent,
      BannerFooterComponent,
      HeaderComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  //static entryComponent = AppComponent;
}
