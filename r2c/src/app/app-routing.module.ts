import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevisComponent } from './devis/devis.component';
import { GalerieComponent } from './galerie/galerie.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    // Pages Principales *********/
    { path: '', component: HomeComponent },
    { path: 'accueil', component: HomeComponent },
    { path: 'galerie', component: GalerieComponent },
    { path: 'devis', component: DevisComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
