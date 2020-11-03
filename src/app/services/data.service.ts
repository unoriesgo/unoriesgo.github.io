
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RootObject,Link } from "../interfaces/data.interface";
import { Data } from "../models/data";
// RxJs
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  //selectrecurso:RootObject;
  urlrecursos = 'https://recursosinformaticos.herokuapp.com/api/recursos'
  recursos: any
  recursos2: RootObject[]
  constructor(private http: HttpClient) {}
  getData() {
    return this.http.get(this.urlrecursos).pipe(tap(console.log))
  }
  getDataId(id): Observable<RootObject> {
    const url = `${this.urlrecursos}/${id}`
    return this.http.get<RootObject>(url).pipe(
      tap(_ => console.log(`fetched movie with id=${id}`)),
      catchError(this.handleError<RootObject>(`getMovie id=${id}`))
    )
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`)
      // Let the app keep running by returning an empty result.
      return of(result as T)
    }
  }
  postdata(data) {
    return this.http.post<any>(this.urlrecursos, data)
  }
  putdata(data: RootObject) {
    const newurl = this.urlrecursos + '/' + data._id
    return this.http.put<any>(newurl, data)
  }
  deletedata(id) {
    return this.http.delete(this.urlrecursos + '/' + id)
  }
  buscar(termino: string) {
    this.getData().subscribe(recursosdata => {
      // this.recursos2 = recursosdata;
      for (const iterator of recursosdata) {
        if (iterator.nombre.toLowerCase().indexOf(termino) > -1) {
          this.recursos2.push(iterator)
        }
      }
      console.log(' eee' + this.recursos2)
    })
    // let recursos:RootObject[]=[];
    //   termino = termino.toLowerCase();
    //   console.log(termino)
    // for (let recurso of this.recursos2) {
    //   let nombre=recurso.nombre.toLowerCase();
    //   if(nombre.indexOf(termino)>=0)
    //   {
    //     console.log("los que se "+recursos)
    // recursos.push(recurso)
    //   }
    return this.recursos2
    //}
  }
}
