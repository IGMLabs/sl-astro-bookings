import { Component, OnInit } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { AgenciesApi } from '../core/api/agencies.api';
import { Agency } from '../core/api/agency.interface';

@Component({
  selector: 'app-agencies',
  templateUrl: './agencies.page.html',
  styleUrls: ['./agencies.page.css']
})
export class AgenciesPage implements OnInit {
  //public agencies!: Agency[];
  public agencies$!: Observable<Agency[]>;
  public error: boolean = false;

  //private subscriptor = {
  //    next : (data: Agency[]) => {
  //      //this.agencies = data;
  //    },
  //    error: (error:Error) => {
  //      console.log('Fallo', error.message);
  //      this.error = true;
  //    }
  //};
  constructor(private agenciesApi: AgenciesApi) {
    //this.agenciesApi.getAll$().subscribe(this.subscriptor);
    this.agencies$ = this.agenciesApi.getAll$();
  }
  onReload() {
    this.agencies$ = this.agenciesApi.getAll$();
  }

  ngOnInit(): void {
  }

}
