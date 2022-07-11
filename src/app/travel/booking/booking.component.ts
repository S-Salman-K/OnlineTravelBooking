import { Flight } from 'src/app/entity/flight';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { FlightService } from 'src/app/services/flight.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  flightId: any;
  // flight: any;
  flight={
    "flightId":1,
    "airline" :"Indigo",
    "deptDate":"22/10/2022",
    "deptTime":"10:30",
    "arrDate":"23/10/2022",
    "arrTime":"9:30",
    "price":"1000",
    "imgURL":"https://www.gstatic.com/flights/airline_logos/70px/6E.png"
  }

  constructor(private route: ActivatedRoute, private flightService: FlightService, private _snack: MatSnackBar) { }


  ngOnInit(): void {
    this.flightId = this.route.snapshot.params['flightId'];
    // don't delete below code

    // this.flightService.getFlightById(this.flightId).subscribe(
    //   (data: any) => {
    //     this.flight = data;
    //   },
    //   (error: any) => {
    //     console.log(error);
    //     this._snack.open("Unable to fetch flight", "", {
    //       duration: 3000
    //     })

    //   })
    }
}
