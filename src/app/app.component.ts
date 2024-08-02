import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StartFrameworkComponent } from './start-framework/start-framework.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,StartFrameworkComponent,NavbarComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PortfolioFramework';
}
