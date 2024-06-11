import { Loja, Proprietario } from 'src/app/models/shop';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProprietarioService {

  constructor(private http: HttpClient) { }

  getEstabelecimentos(): Observable<Loja[]>{
    const headerrs = new HttpHeaders({
      'ngrok-skip-browser-warning': 'true'
    })
    return this.http.get<Loja[]>(environment.API_URL + "/estabelecimentos", {headers: headerrs})
  }

  postPropietario(body: Proprietario): Observable<Proprietario>{
    const headerrs = new HttpHeaders({
      'ngrok-skip-browser-warning': 'true'
    })
    return this.http.post<Proprietario>(environment.API_URL + "/usuarios", body, {headers: headerrs})
  }
}
