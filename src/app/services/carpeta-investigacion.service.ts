import { Injectable } from '@angular/core';

/* Importamos HttpClient para hacer las peticiones HTTP */
import { HttpClient } from '@angular/common/http';

/* Importamos la interface */
import { CarpetaInvestigacion } from '../interfaces/carpeta-investigacion';

@Injectable({
  providedIn: 'root'
})
export class CarpetaInvestigacionService {

  private api = 'http://localhost:8090/api/';

  constructor(
    private http: HttpClient
  ) { }

  getAllCarpetaInvestigacion(){
    const path = `${this.api}carpeta/`;
    return this.http.get<CarpetaInvestigacion[]>(path);
  }

  getCarpetaInvestigacion(id : number){
    const path = `${this.api}carpeta/${id}`;
    return this.http.get<CarpetaInvestigacion>(path);
  }
}
