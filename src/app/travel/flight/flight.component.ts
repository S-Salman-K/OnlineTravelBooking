import { FlightService } from 'src/app/services/flight.service';
import { Subject } from 'rxjs';
import { Flight } from 'src/app/entity/flight';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {
  minDate: any;
  maxDate: any;

  // from child
  flights:Flight[]=[];
  filteredFlights:Flight[]=[];
  // subscription?:Subscription;
  id:any;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  source:any;
  destination:any;
  filteredFilghtsBySource:any;
  filteredFlightsByDestination:any;

  constructor(private flightService:FlightService) { 
    this.flightService.getAll().subscribe(flights=> {
      this.filteredFlights=flights; 
      this.flights=flights;
    })
  }

  ngOnInit(): void {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date();
    this.maxDate = new Date(currentYear + 1, 11, 31);

    // child
    console.log("inside init flight");
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

  filterBySource(source:any){
    this.filteredFlights = (source) ? 
                            this.flights.filter((p:any)=>p.source.toLowerCase().includes(source.toLowerCase()))
                            :this.filteredFlights;
    this.source = source;
    this.filteredFilghtsBySource=this.filteredFlights;
    if(!this.source)
      this.filteredFlights = this.filteredFlightsByDestination;
    this.resetSourceDestinationEmpty();
  }

  filterByDestination(destination:any){
    this.filteredFlights = (destination) ? 
                            this.filteredFlights.filter((p:any)=>p.destination.toLowerCase().includes(destination.toLowerCase()))
                            :this.filteredFlights;
    this.filteredFlightsByDestination = this.filteredFlights;
    this.destination = destination;
    if(!this.destination)
      this.filteredFlights = this.filteredFilghtsBySource;
    this.resetSourceDestinationEmpty();
  }

  resetSourceDestinationEmpty(){
    if(!this.source && !this.destination)
      this.filteredFlights = this.flights;
  }



}
