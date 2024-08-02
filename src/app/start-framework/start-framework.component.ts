import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-start-framework',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './start-framework.component.html',
  styleUrl: './start-framework.component.css'
})
export class StartFrameworkComponent {

}
