import { Component, OnInit } from '@angular/core';
import { BookingsApi } from '../../core/api/bookings.api';
import { Booking } from '../../core/api/booking.interface';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TripsApi } from 'src/app/core/api/trips.api';
import { Trip } from 'src/app/core/api/trip.interface';

@Component({
  selector: 'app-new-booking',
  templateUrl: './new-booking.page.html',
  styleUrls: ['./new-booking.page.css']
})
export class NewBookingPage implements OnInit {

  public trips$!: Observable<Trip[]>;

  constructor( private bookingApi: BookingsApi,  private router: Router,
              private tripsApi: TripsApi) {
      this.trips$ = tripsApi.getAll$();
   }

  ngOnInit(): void {
  }

  onSave(newBookingData: Partial<Booking>){
    this.bookingApi.post$(newBookingData).subscribe( () => {
      this.router.navigate(['/bookings']);
    });

  }
}
