import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { CoverComponent } from './cover/cover.component';
import { DetailsComponent } from './details/details.component';
import { TimesComponent } from './times/times.component';
import { MovieInfoComponent } from './movie-info/movie-info.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    FooterBarComponent,
    CoverComponent,
    DetailsComponent,
    TimesComponent,
    MovieInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
