import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReloadingComponent } from './components/reloading/reloading.component';
import { AgenciesList } from './components/agencies/agencies.list';
import { ReactiveFormsModule } from '@angular/forms';
import { TripsList } from './components/trips/trips.list';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ReloadingComponent,
    AgenciesList,
    TripsList
  ],
  imports: [
    CommonModule, ReactiveFormsModule, RouterModule
  ],
  exports: [
    ReloadingComponent,
    ReactiveFormsModule,
    AgenciesList,
    TripsList,
    RouterModule
  ]
})
export class SharedModule { }
