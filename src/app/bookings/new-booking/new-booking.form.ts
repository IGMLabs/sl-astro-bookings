import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Trip } from 'src/app/core/api/trip.interface';
import { CommonService } from 'src/app/core/commons/common.service';
import { FormMessagesService } from 'src/app/core/forms/form-messages.service';
import { FormValidationsService } from 'src/app/core/forms/form-validations.service';
import { FormBase } from 'src/app/core/forms/form.base';

@Component({
  selector: 'app-new-booking-form',
  templateUrl: './new-booking.form.html',
  styleUrls: ['./new-booking.form.css']
})
export class NewBookingForm extends FormBase implements OnInit {
  @Input() public trips: Trip[] = [];
  @Output() public save = new EventEmitter<Partial<Trip>>();

  constructor(
    formBuilder: FormBuilder,
    fvs: FormValidationsService,
    fms: FormMessagesService,
    private cms: CommonService
  ){
  super(fms);
  this.form = formBuilder.group({
    tripId: new FormControl('', [Validators.required]),
    passengerName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)] ),
    date: new FormControl('', [Validators.required, fvs.dateControlBookings] ),
    hasPremiumFoodPrice: new FormControl(true,  ),
    luggageKilos: new FormControl('', [Validators.required, Validators.min(50), Validators.max(250)] ),

  });
}
  public onSubmitClick(){
    const {tripId, passengerName, date, luggageKilos, hasPremiumFoodPrice} = this.form.value;
    const id = this.cms.getDashId(tripId + '-' + Math.random());
    console.log('Id Booking: '+ id);
    const newTripData = {id, tripId, passengerName, date, luggageKilos, hasPremiumFoodPrice};
    this.save.emit(newTripData);
  }

  ngOnInit(): void {
  }

}
