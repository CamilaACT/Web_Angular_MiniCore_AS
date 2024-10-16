import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { TareaFechas } from '../interfaces/tarea-fechas';
import { Observable } from 'rxjs';
import { ResponseApi } from '../interfaces/response-api';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  private urlApi:string=environment.apiUrl + "Tarea/";

  constructor(private http:HttpClient) { }

  buscarTareasAtrasadas(request:TareaFechas):Observable<ResponseApi>{
    return this.http.post<ResponseApi>(`${this.urlApi}tareasFecha`, request);
  }
}
