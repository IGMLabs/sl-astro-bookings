import { Component, OnInit } from '@angular/core';
import { Trip } from '../core/api/trip.interface';
import { TripsApi } from '../core/api/trips.api';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.page.html',
  styleUrls: ['./trips.page.css']
})
export class TripsPage implements OnInit {

  public trips$!: Observable<Trip[]>;
  private search$: BehaviorSubject<string> = new BehaviorSubject('');
  public error: boolean = false;

  constructor(private tripsApi: TripsApi) {
    this.trips$ = this.search$.pipe(
      switchMap((searchTerm) => this.tripsApi.getByText$(searchTerm))

    );
  }

  ngOnInit(): void {
  }

  onReload() {
    this.trips$ = this.tripsApi.getAll$();

  }

  onSearch(searchTerm: string) {
    this.search$.next(searchTerm);
  }

}
