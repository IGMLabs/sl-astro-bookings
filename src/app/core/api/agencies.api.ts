import { Injectable } from "@angular/core";
import { Agency } from "./agency.interface";
import { HttpClient} from "@angular/common/http";
import { CrudApi } from './crud.api';
import { StatusStore } from './status.store';
import { Observable } from "rxjs";

@Injectable (
  {
    providedIn: 'root',
  }
)

export class AgenciesApi extends CrudApi<Agency> {
  constructor(http: HttpClient, statusStore: StatusStore) {
    super(http, 'agencies', statusStore);
  }

}
