import { FlightService } from './../../../services/flight.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Flight } from 'src/app/entity/flight';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {

  flights:Flight[]=[];
  filteredFlights:Flight[]=[];
  // subscription?:Subscription;
  id:any;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private flightService:FlightService) { 
    // this.subscription = this.products;
    this.flightService.getAll().subscribe(flights=> {
      this.filteredFlights=flights; 
      this.flights=flights;
    });
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
                            this.flights.filter((p:any)=>p.airline.toLowerCase().includes(query.toLowerCase()))
                            :this.flights;
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }

}



// -------------------------------------------------
// import { Product } from './../../entity/product';
// import { ProductService } from './../../product.service';
// import { Component, OnDestroy, OnInit } from '@angular/core';
// import { Subject, Subscription } from 'rxjs';
// // import {} from 'src/assets/data'


// @Component({
//   selector: 'app-admin-products',
//   templateUrl: './admin-products.component.html',
//   styleUrls: ['./admin-products.component.css']
// })
// export class AdminProductsComponent implements OnInit, OnDestroy{
//   // Product

//   products:Product[]=[];
//   filteredProducts:Product[]=[];
//   // subscription?:Subscription;
//   id:any;
//   dtOptions: DataTables.Settings = {};
//   dtTrigger: Subject<any> = new Subject<any>();

//   constructor(private productService:ProductService) { 
//     // this.subscription = this.products;
//     this.productService.getAll().subscribe(products=> {
//       this.filteredProducts=products; 
//       this.products=products;
//     });
//     // this.filteredProducts = this.products;
//     console.log("inside constructor");
//   }

//   ngOnInit(): void {
//     // this.subscription = this.productService.getAll().subscribe(products=>this.products=products);
//     console.log("inside init");
//     this.filter(null);
//     // datatable
//     this.dtOptions = {
//       pagingType: 'full_numbers',
//       pageLength: 5
//     };
//   }

//   filter(query:any){
//     console.log(query);
//     this.filteredProducts = (query) ? 
//                             this.products.filter((p:any)=>p.title.toLowerCase().includes(query.toLowerCase()))
//                             :this.products;
//   }

//   ngOnDestroy(): void {
//     // this.subscription.unsubscribe();
//   }

// }



