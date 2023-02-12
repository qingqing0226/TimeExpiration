import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class TimeLicensingService {
  constructor(private http: HttpClient) { }
  private controllerUrl = environment.apiServer + '/timelicensing';

  getExpirationDate(): Observable<Date> {
    return this.http.get<Date>(this.controllerUrl + "/getexp").pipe();
  }

}
