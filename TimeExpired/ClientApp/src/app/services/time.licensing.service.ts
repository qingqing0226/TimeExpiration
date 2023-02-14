import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class TimeLicensingService {
  constructor(private http: HttpClient) { }

  getExpirationDate(): Observable<String> {
    return this.http.get<String>("http://localhost:8080/api/date");
  }

  postExpirationDate(date: String): Observable<String> {
    return this.http.post<String>("http://localhost:8080/api/date", date);
  }

}
