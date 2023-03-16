import { Injectable } from '@angular/core';
import {environment} from "../enviroments/enviroment";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";




@Injectable({
  providedIn: 'root'
})
export class DesarrollosService {

  baseUrl = environment.base_url;

  constructor(private http: HttpClient) {
  }


  loadDesarrollos(): Observable<any[]> {
    const url = `${this.baseUrl}/desarrollos?populate=*`;
    return this.http.get(url)
      .pipe(
        map((resp: any) => resp.data)
      );
  }


  loadDesarrolloById(slug='san-ignacio'): Observable<any> {
    const url = `${this.baseUrl}/desarrollo/${slug}?populate=*`;
    return this.http.get(url)
      .pipe(
        map((resp: any) => resp.data.attributes)
      );
  }


}
