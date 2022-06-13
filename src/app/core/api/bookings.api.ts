import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { CrudApi } from './crud.api';
import { StatusStore } from './status.store';
import { Booking } from "./booking.interface";

@Injectable (
  {
    providedIn: 'root',
  }
)

export class BookingsApi extends CrudApi<Booking> {

  private foods = ['Premium', 'None'];

  constructor(http: HttpClient, statusStore: StatusStore) {
    super(http, 'bookings', statusStore);
  }

  public getFoods() {
    return this.foods;
  }

}
