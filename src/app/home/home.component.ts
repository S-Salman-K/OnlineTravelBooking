import { TransportService } from './../transport.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  modes:any;
  category:any;
  constructor(
    route:ActivatedRoute,
    transportService:TransportService,
    router:Router) { 
    this.modes = transportService.getModes();
    route.queryParamMap.subscribe(params=>{
      this.category=params.get('category')})    
  }

  ngOnInit(): void {
  }

}
