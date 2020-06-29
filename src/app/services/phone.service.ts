import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Phone from '../models/phone.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {
  private _url = 'http://localhost:3000/phones';

  constructor(private http: HttpClient) { }

  public fetchPhoneById(id: Phone): Observable<Phone> {
    return this.http.get<Phone>(`${this._url}/${id}`);
  }

  public fetchPhoneByIdNumber(idNumber: number): Observable<Phone> {
    return this.http.get<Phone>(`${this._url}/${idNumber}`);
  }
}
