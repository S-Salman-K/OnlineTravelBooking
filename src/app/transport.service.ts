import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransportService {

  constructor() { }

  getModes(){
    return [
      "Flight",
      "Train",
      "Bus",
      "Hotel",
      "Ferries"]
  }
}
