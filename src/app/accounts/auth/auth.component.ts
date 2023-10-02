import { Component, Input } from '@angular/core';
import { SecurityService } from 'src/app/services/security.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  constructor(private securityService:SecurityService) {
  }

  @Input()
  rol: string ="";

  ngOnInit(): void {
  }

  isAuthorized(): boolean {
    if (this.rol){
      return this.securityService.getRole() === this.rol;
    } else{
      return this.securityService.isLogged();
    }
  }

  isAdmin(): boolean {
    return this.securityService.getRole() === "admin";
  }
}
