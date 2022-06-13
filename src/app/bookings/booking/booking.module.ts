import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { BookingView } from './booking.view';
import { BookingPage } from './booking.page';


@NgModule({
  declarations: [
    BookingView,
    BookingPage
  ],
  imports: [
    CommonModule,
    BookingRoutingModule
  ]
})
export class BookingModule { }
