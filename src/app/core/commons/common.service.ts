import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor() { }

  public getDashId(str: string):string {
    return str.toLocaleLowerCase().replace(/ /g, '-');
  }

}
