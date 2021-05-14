import { Injectable } from '@angular/core';
import { ListaPaisesI } from '../modelos/listapaises.interface';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(private httpClient: HttpClient) { }

 

  getAllCountries():Observable<ListaPaisesI[]>{
   let url ="https://restcountries.eu/rest/v2/all";
    return this.httpClient.get<ListaPaisesI[]>(url);
   }
}
