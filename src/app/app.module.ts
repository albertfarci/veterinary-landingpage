import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';
import { ServiziComponent } from './servizi/servizi.component';
import { BlogComponent } from './blog/blog.component';
import { ContattaciComponent } from './contattaci/contattaci.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ServiceCardComponent } from './service-card/service-card.component';
import { MatIconModule } from '@angular/material/icon';
import { BreadcrumbComponent } from './breadcrump/breadcrump.component';
import { MedicinaGeneralePreventivaComponent } from './medicina-generale-preventiva/medicina-generale-preventiva.component';
import { MedicinaInternaComponent } from './medicina-interna/medicina-interna.component';
import { AnalisiComponent } from './analisi/analisi.component';
import { NutrizioneComponent } from './nutrizione/nutrizione.component';
import { ChirurgiaComponent } from './chirurgia/chirurgia.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChiSiamoComponent,
    ServiziComponent,
    BlogComponent,
    ContattaciComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    ServiceCardComponent,
    BreadcrumbComponent,
    MedicinaGeneralePreventivaComponent,
    MedicinaInternaComponent,
    AnalisiComponent,
    NutrizioneComponent,
    ChirurgiaComponent
  ],
  imports: [
    MatIconModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
