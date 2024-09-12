import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { SobreComponent } from './sobre/sobre.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { ContatosComponent } from './contatos/contatos.component';
import { EducacaoComponent } from './educacao/educacao.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

export const routes: Routes = [
  {path:'documentation', component: DocumentationComponent},
  {path:'home', component: HomeComponent},
  {path:'sobre', component: SobreComponent},
  {path:'habilidades', component: HabilidadesComponent},
  {path:'experiência', component: ExperienciaComponent},
  {path:'education', component: EducacaoComponent},
  {path:'contatos', component: ContatosComponent},
  {path:'portfolio', component: PortfolioComponent},

];
