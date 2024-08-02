import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  status : "open" | "close" = "close"

  classShow: string = "w-full md:block md:w-auto "
  classhideen: string = "w-full md:block md:w-auto hidden"
  class: string = "w-full md:block md:w-auto hidden"

  OpenCloseToggle() {
    
    if (this.status == "open") {
      this.status = "close"
      this.class = this.classhideen
    }
    else if (this.status == "close") {
       this.status = "open"
      this.class = this.classShow
    }

  }

}
