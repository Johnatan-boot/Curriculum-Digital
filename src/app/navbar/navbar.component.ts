import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {  RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { SobreComponent } from '../sobre/sobre.component';
import { HabilidadesComponent } from '../habilidades/habilidades.component';
import { EducacaoComponent } from '../educacao/educacao.component';
import { ExperienciaComponent } from '../experiencia/experiencia.component';
import { ContatosComponent } from '../contatos/contatos.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
  MatIconModule,
  MatToolbarModule,
  MatButtonModule,
  RouterModule,
  HomeComponent,
  SobreComponent,
  HabilidadesComponent,
  EducacaoComponent,
  ExperienciaComponent,
  ContatosComponent,

],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
