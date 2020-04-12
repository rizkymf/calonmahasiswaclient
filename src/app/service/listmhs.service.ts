import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Datamhs } from '../model/datamhs';
import { Observable } from 'rxjs';
import { tap, catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListmhsService {

  url = "http://localhost:8080/"

  constructor(private http : HttpClient) { }

  getPending(mhs : Datamhs): Observable<Datamhs> {
    return this.http.get<Datamhs>(`${this.url}/mhspending`)
  }

  getReject(mhs : Datamhs): Observable<Datamhs> {
    return this.http.get<Datamhs>(`${this.url}/mhsreject`)
  }

  getApproved(mhs : Datamhs): Observable<Datamhs> {
    return this.http.get<Datamhs>(`${this.url}/mhsacc`)
  }
}
