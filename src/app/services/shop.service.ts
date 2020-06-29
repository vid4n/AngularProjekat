import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Shop from '../models/shop.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  private _url = 'http://localhost:3000/shops';
  constructor(private http: HttpClient) { }

  public fetchShops(): Observable<Shop[]> {
    return this.http.get<Shop[]>(this._url);
  }
}
