import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Booking } from 'src/app/core/api/booking.interface';

@Component({
  selector: 'app-bookings-list',
  templateUrl: './bookings.list.html',
  styleUrls: ['./bookings.list.css']
})
export class BookingsList implements OnInit {
  @Input() public bookings: Booking[] = [];
  @Output() private reload = new EventEmitter();

  public reloading = false;

  public onReloadClick(list: string) {
    this.reloading = true;
    console.log('Reloading...' + list);
    this.reload.emit();
  }

  public getBookingsLength() {
    return this.bookings.length;
  }

  ngOnInit(): void {
  }

}
