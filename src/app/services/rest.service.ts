import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private _http: HttpClient) { }

  url = 'http://localhost:3000'

  Login(data: any) {
    return this._http.post(this.url + '/Login', data);
  }

  Register(data: any) {
    return this._http.post(this.url + '/Registeration', data);
  }

  Customerinfo() {

  }
  Enquiry(data: any) {
    return this._http.post(this.url + '/Contact', data);
  }

  AllPattern() {
    return this._http.get(this.url + '/GetPattern');
  }

  AllFabric() {
    return this._http.get(this.url + '/AllFabric');
  }

  AllSize() {
    return this._http.get(this.url + '/AllSize');
  }

  AllProducts() {
    return this._http.get(this.url + '/AllProducts');
  }

  Viewproduct(Product_id: string) {
    return this._http.get(this.url + '/Products/' + Product_id);
  }

}