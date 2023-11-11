import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payplan',
  templateUrl: './payplan.component.html',
  styleUrls: ['./payplan.component.css']
})
export class PayplanComponent implements OnInit{

  constructor(private activatedRoute: ActivatedRoute) {
  }

  priceId:string="";

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.priceId= params['id']
    });
  }
}
