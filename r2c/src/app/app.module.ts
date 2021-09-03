import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MainHeaderComponent } from './shared/main-header/main-header.component';
import { HomeComponent } from './home/home.component';
import { DevisComponent } from './devis/devis.component';
import { GalerieComponent } from './galerie/galerie.component';
import { CarouselComponent } from './shared/carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    HomeComponent,
    DevisComponent,
    GalerieComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
