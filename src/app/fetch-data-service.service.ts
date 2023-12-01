import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FetchDataServiceService {
  constructor(private http: HttpClient) {}
  getdata() {
    return this.http.get(
      'https://mocki.io/v1/b8d69ada-908f-4d70-97a9-c7dba1b99126'
    );
  }
}
