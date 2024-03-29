import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

// Layout Components
import {HeaderComponent} from './header/header.component';
import {PathComponent} from './path/path.component';
import {HeroComponent} from './hero/hero.component';
import {NavigationComponent} from './navigation/navigation.component';
import {FooterComponent} from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    PathComponent,
    HeroComponent,
    NavigationComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'rabbidly';
}
