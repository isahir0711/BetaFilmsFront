import { Component, OnInit } from '@angular/core';
import { Beneficio } from '../beneficios';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
  }

  beneficios: Beneficio[] =[
    {
      title: "Calidad Profesional",
      description: "Destacamos por la calidad de nuestras fotografías y nuestra experiencia como fotógrafos profesionales.",
      image:""
    },
    {
      title: "Memorias Duraderas",
      description: "Nuestras fotos ayudan a las personas a preservar sus recuerdos más preciados durante toda la vida.",
      image:""
    },
    {
      title: "Entrega Rápida",
      description: "Ofrecemos entregas rápidas de fotos editadas para que nuestros clientes disfruten de sus imágenes lo antes posible.",
      image:'<?xml version="1.0" ?><svg height="24px" version="1.1" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title/><desc/><g fill="none" fill-rule="evenodd" id="Action-/-48---Action,-dashboard,-speed,-monitor,-activity-icon" stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"><path d="M6,12 C6,8.75580986 8.25154063,6 12,6 C12.5412837,6 13.0513539,6.0574637 13.5279384,6.16556377 M17.9354618,11.0597012 C17.9782484,11.3669806 18,11.6811313 18,12" id="Shape" stroke="#000000" stroke-width="2"/><path d="M10.5857864,13.4142136 C9.80473785,12.633165 9.80473785,11.366835 10.5857864,10.5857864 C11.366835,9.80473785 12.633165,9.80473785 13.4142136,10.5857864 C14.1952621,11.366835 14.1952621,12.633165 13.4142136,13.4142136 C12.633165,14.1952621 11.366835,14.1952621 10.5857864,13.4142136 Z" id="Path" stroke="#000000" stroke-width="2"/><line id="Path" stroke="#000000" stroke-width="2" transform="translate(15.519866, 8.500893) rotate(-1.340192) translate(-15.519866, -8.500893) " x1="14.0050753" x2="17.0346572" y1="9.96497162" y2="7.0368145"/><path d="M12,2 C17.5228475,2 22,6.4771525 22,12 C22,17.5228475 17.5228475,22 12,22 C6.4771525,22 2,17.5228475 2,12 C2,6.4771525 6.4771525,2 12,2 Z" id="Path" stroke="#000000" stroke-width="2"/></g></svg>'
    },
  ];

}
