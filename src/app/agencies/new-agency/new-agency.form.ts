import { computeMsgId } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CommonServiceService } from 'src/app/core/commons/common.service';
import { FormMessagesService } from 'src/app/core/forms/form-messages.service';
import { FormValidationsService } from 'src/app/core/forms/form-validations.service';

@Component({
  selector: 'app-new-agency-form',
  templateUrl: './new-agency.form.html',
  styleUrls: ['./new-agency.form.css'],
})
export class NewAgencyForm implements OnInit {
  public form: FormGroup;
  public ranges = [
    { id: 'Orbital', name: '🌎 Orbiting around the earth' },
    {
      id: 'Interplanetary',
      name: '🌕 To the moon and other planets',
    },
    { id: 'Interstellar', name: '💫 Traveling to other stars' },
  ];
  public statuses = ['Active', 'Pending'];

  constructor(public formBuilder: FormBuilder, public fms: FormMessagesService, public fvs: FormValidationsService, public cms: CommonServiceService) {
    this.form = formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      range: new FormControl('', [Validators.required]),
      status: new FormControl(this.statuses[0]),
    });
  }
  public hasError(controlName: string): boolean {
    return this.fms.hasError(this.form, controlName);
  }

  public mustShowMessage(controlName: string): boolean {
    return this.fms.mustShowMessage(this.form, controlName);
  }

  public getErrorMessage(controlName: string): string {
    return this.fms.getErrorMessage(this.form, controlName);
  }
  public onSubmitClick() {
    const { name, range, status } = this.form.value;
    const id = this.getDashId(name);
    const newAgencyData = { id, name, range, status };
    console.warn('Send agency data ', newAgencyData);
  }

  private getDashId(str: string): string {
    return this.cms.getDashId(str);
  }

  private getControl(controlName: string): AbstractControl | null {
    return this.form.get(controlName);
  }
  ngOnInit(): void {}
}
