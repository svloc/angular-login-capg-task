import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoginServiceService {
  public apiURL: string = '';

  constructor(private http: HttpClient){ 
     this.apiURL = environment.apiUrl;
  }

  login(formData:any): Observable<any> {
    return this.http.post<any>(this.apiURL+"login", formData);
  }
}
