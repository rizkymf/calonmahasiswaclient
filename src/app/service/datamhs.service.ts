import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { Datamhs } from '../model/datamhs';
import { tap, catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DatamhsService {

  url = "http://localhost:8080/calonmahasiswa";
  headers = new HttpHeaders().set('Content-type', 'application/json').set('Accept', 'application/json')
  httpOptions = {
    headers : this.headers
  }

  constructor(private http : HttpClient) { }

  private handleError(error : any){
    console.log(error);
    return throwError(error);   
  }

  getCalonMhs() : Observable<Datamhs[]> {
    return this.http.get<any>(this.url).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
      );
  }

  getMhsById(id : number) : Observable<Datamhs>{
    return this.http.get<Datamhs>(`${this.url}/id`);
  }

  addMhs(mhs : Datamhs) : Observable<Datamhs> {
    mhs.idCalonMhs = null;
    return this.http.post<Datamhs>(this.url, mhs, this.httpOptions).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
      );
  }

  updateMhs(mhs : Datamhs) : Observable<Datamhs> {
    return this.http.put<Datamhs>(this.url, mhs, this.httpOptions).pipe(
      map(() => mhs),
      catchError(this.handleError)
    );
  }

  deleteMhs(id : number) : Observable<Datamhs> {
    return this.http.delete<Datamhs>(`${this.url}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  accMhs(mhs : Datamhs) : Observable<Datamhs>{
    const accUrl = "http://localhost:8080/accmahasiswa";
    return this.http.put<Datamhs>(accUrl, mhs, this.httpOptions).pipe(
      map(() => mhs),
      catchError(this.handleError)
    );
  }

  rejectMhs(mhs : Datamhs) : Observable<Datamhs> {
    const rejectUrl = "http://localhost:8080/rejectmahasiswa";
    return this.http.put<Datamhs>(rejectUrl, mhs, this.httpOptions).pipe(
      map(() => mhs),
      catchError(this.handleError)
    );
  }
}
