// import { Product } from './../../entity/product';
import { ProductService } from './../../product.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { Flight } from 'src/app/entity/flight';
import { FlightService } from 'src/app/services/flight.service';
// import {} from 'src/assets/data'


@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy{
  // Product

  products:Flight[]=[];
  filteredFlights:Flight[]=[];
  // subscription?:Subscription;
  id:any;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private flightService:FlightService) { 
    // this.subscription = this.products;
    this.flightService.getAll().subscribe(products=> {
      this.filteredFlights=products; 
      this.products=products;
    });
    // this.filteredProducts = this.products;
    console.log("inside constructor");
  }

  ngOnInit(): void {
    // this.subscription = this.productService.getAll().subscribe(products=>this.products=products);
    console.log("inside init");
    this.filter(null);
    // datatable
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };
  }

  filter(query:any){
    console.log(query);
    this.filteredFlights = (query) ? 
                            this.products.filter((p:any)=>p.title.toLowerCase().includes(query.toLowerCase()))
                            :this.products;
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }

}
