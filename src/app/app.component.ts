import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
  RouterOutlet,
  MatToolbarModule,
  HeaderComponent,
  NavbarComponent,
  MatIconModule,
  RouterModule,
  MatCardModule

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Curriculum digital';
}
