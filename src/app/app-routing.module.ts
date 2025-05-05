import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';
import { ServiziComponent } from './servizi/servizi.component';
import { BlogComponent } from './blog/blog.component';
import { ContattaciComponent } from './contattaci/contattaci.component';
import { MedicinaGeneralePreventivaComponent } from './medicina-generale-preventiva/medicina-generale-preventiva.component';
import { MedicinaInternaComponent } from './medicina-interna/medicina-interna.component';
import { AnalisiComponent } from './analisi/analisi.component';
import { NutrizioneComponent } from './nutrizione/nutrizione.component';
import { ChirurgiaComponent } from './chirurgia/chirurgia.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'chi-siamo', component: ChiSiamoComponent },
  { path: 'servizi', component: ServiziComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contattaci', component: ContattaciComponent },
  { path: 'medicina-generale', component: MedicinaGeneralePreventivaComponent },
  { path: 'medicina-interna', component: MedicinaInternaComponent },
  { path: 'analisi', component: AnalisiComponent },
  { path: 'nutrizione', component: NutrizioneComponent },
  { path: 'chirurgia', component: ChirurgiaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
