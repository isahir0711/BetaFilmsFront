import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  ngOnInit(): void {
    this.overlayRender();
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


  overlayRender(): void{
    const backdrop = document.querySelector('.backdrop');
    const nav_links = document.querySelectorAll('.link');

    nav_links.forEach((list_item)=>{
      list_item.addEventListener('mouseover',() =>{
        backdrop?.classList.add('show');
        let position = list_item.getBoundingClientRect();
        (backdrop as HTMLElement).style.left = position.x  + 'px';
        (backdrop as HTMLElement).style.top = position.y  + 'px';
        (backdrop as HTMLElement).style.height = position.height  + 'px';
        (backdrop as HTMLElement).style.width = position.width  + 'px';
      });
      list_item.addEventListener('mouseleave',() =>{
        backdrop?.classList.remove('show');
      })
    });
  }

}
