import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiconnectService {

  constructor(private http: HttpClient) { }

  getInformation() {
    const url = 'http://universities.hipolabs.com/search?country=Colombia';
    const headers = {
      'Content-Type': 'application/json',
    };

    return this.http.get(url, { headers });
  }

}
