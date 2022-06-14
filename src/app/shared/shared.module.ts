import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReloadingComponent } from './components/reloading/reloading.component';
import { AgenciesList } from './components/agencies/agencies.list';
import { ReactiveFormsModule } from '@angular/forms';
import { TripsList } from './components/trips/trips.list';
import { RouterModule } from '@angular/router';
import { BookingsList } from './components/bookings/bookings.list';
import { EmailControl } from './controls/email/email.control';



@NgModule({
  declarations: [
    ReloadingComponent,
    AgenciesList,
    TripsList,
    BookingsList,
    EmailControl
  ],
  imports: [
    CommonModule, ReactiveFormsModule, RouterModule
  ],
  exports: [
    ReloadingComponent,
    ReactiveFormsModule,
    AgenciesList,
    TripsList,
    RouterModule,
    BookingsList,
    EmailControl
  ]
})
export class SharedModule { }
