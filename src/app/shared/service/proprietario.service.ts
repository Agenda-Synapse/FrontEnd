import { Loja } from 'src/app/models/shop';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProprietarioService {

  constructor(private http: HttpClient) { }

  getEstabelecimentos(): Observable<{loja:Loja[]}>{
    const headerrs = new HttpHeaders({
      'ngrok-skip-browser-warning': 'true'
    })
    return this.http.get<{loja: Loja[]}>(environment.API_URL + "/estabelecimentos", {headers: headerrs})
  }
}
