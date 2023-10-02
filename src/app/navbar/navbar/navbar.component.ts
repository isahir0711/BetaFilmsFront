import {Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityService } from 'src/app/services/security.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit  {

  constructor(public securityService:SecurityService,private router:Router) {
  }

  rol: string="";

  ngOnInit(): void {
    this.rol = this.securityService.getRole();
    // this.overlayRender();
  }


  menuClick(): void {
    const nav = document.querySelector('.links-container');
    const links = document.querySelectorAll('.link');
    if(nav !== null){
      nav.classList.toggle("active");
      links.forEach(link => {
        link.classList.toggle("active");
      });
      
    }
  }

  closeMenu(){
    const nav = document.querySelector('.links-container');
    const links = document.querySelectorAll('.link');
    if(nav !== null){
      nav.classList.toggle("active");
      links.forEach(link => {
        link.classList.toggle("active");
      });
    }

  }


  logOut(){
    this.securityService.logOut();
    this.router.navigate(['Accounts/LogIn']);
    this.closeMenu();
  }

}
