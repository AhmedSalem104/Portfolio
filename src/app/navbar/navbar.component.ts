import { AuthenticationService } from './../../../../../E-CommerceProject/E-Commerce/E-Commerce/src/app/Services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  isLogin: boolean = false

  status: "open" | "close" = "close"

  classShow: string = "w-full md:block md:w-auto "
  classhideen: string = "w-full md:block md:w-auto hidden"
  class: string = "w-full md:block md:w-auto hidden"

  constructor(private _AuthenticationService: AuthenticationService) {

  }
  
  ngOnInit(): void {
    this._AuthenticationService.userData.subscribe(() => {
      if (this._AuthenticationService.userData != null) {
        this.isLogin = true
      }
      else {
        this.isLogin = false
      }
    })
  }

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
