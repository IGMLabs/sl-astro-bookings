import { Injectable } from '@angular/core';
import { Trip } from './trip.interface';
import { HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class TripsApi {

  constructor(private http: HttpClient) {

  }

  public getAll$() {
    return this.http.get<Trip[]>('http://localhost:3000/trips');
  }

  public getById(id: string) {
    return this.http.get<Trip>('http://localhost:3000/trips/'+id);
  }

  public post(trip: Partial<Trip>) {
    return this.http.post('http://localhost:3000/trips', trip);
  }
}
