import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { Booking } from '../core/api/booking.interface';
import { BookingsApi } from '../core/api/bookings.api';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.css']
})
export class BookingsPage implements OnInit {

  public bookings$: Observable<Booking[]>;
  private search$: BehaviorSubject<string> = new BehaviorSubject('');
  public error: boolean = false;

  constructor(private bookingsApi: BookingsApi) {
    this.bookings$ = this.search$.pipe(
      switchMap((searchTerm) => this.bookingsApi.getByText$(searchTerm))

    );
  }

  onReload() {
    this.bookings$ = this.bookingsApi.getAll$();
  }

  onSearch(searchTerm: string) {
    this.search$.next(searchTerm);
    // this.agencies$ = this.agenciesApi.getByText$(searchTerm);
  }

  ngOnInit(): void {
  }

}
