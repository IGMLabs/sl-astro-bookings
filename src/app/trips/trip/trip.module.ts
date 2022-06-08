import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TripRoutingModule } from './trip-routing.module';
import { TripPage } from './trip.page';
import { TripView } from './trip.view';

@NgModule({
  declarations: [TripPage, TripView],
  imports: [CommonModule, TripRoutingModule],
})
export class TripModule {}
