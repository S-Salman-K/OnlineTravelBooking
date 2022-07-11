// import { Flight } from './entity/flight';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Flight } from '../entity/flight';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private baseURL: string = '/assets/data/';
  private url:string = '/assets/data/indigo.json';

  constructor(private http: HttpClient) { }

  create(category:any){
    // add category in Database;
  }
  
  getAll():Observable<Flight[]>{
    return this.http.get<Flight[]>(this.baseURL+"flights.json");
  }

  get(FlightId:any){
    // this is of type Observable so we have to convert this in the caller method to _____ ?
    return this.http.get(this.url);
  }

  getFlightById(flightId:any){
    // return [{
    //   "flightId":2,
    //   "airline" :"Emirates",
    //   "deptDate":"25/10/2022",
    //   "deptTime":"11:30",
    //   "arrDate":"26/10/2022",
    //   "arrTime":"19:30",
    //   "price":"2000",
    //   "imgURL":"https://www.gstatic.com/flights/airline_logos/70px/6E.png"
    // }];

    return this.http.get(this.baseURL+flightId);
    return this.http.get('${this.baseURL}/${flightId}');
    // `${url}/product/${productId}`
  }

  update(FlightId:any, Flight:any){
    // write here code to call database and 
    // update the Flight whose id == FlightId with 
    // and data is in Flight 

    // (optional): you can also return the promise from here back to the caller 
  }

  delete(FlightId:any){
    // delete Flight with id == FlightId
  }
}




// --------------


 