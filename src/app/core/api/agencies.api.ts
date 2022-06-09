import { Injectable } from "@angular/core";
import { Agency } from "./agency.interface";
import { HttpClient} from "@angular/common/http";

@Injectable (
  {
    providedIn: 'root',
  }
)

export class AgenciesApi {

  constructor(private http: HttpClient) {

  }
  public getAll() {
    return this.http.get<Agency[]>('http://localhost:3000/agencies');
  }

  public getById(id: string) {
    return this.http.get<Agency>('http://localhost:3000/agencies/'+id);
  }

  public post(agency: Agency) {
    return this.http.post('http://localhost:3000/agencies', agency);
  }

}
