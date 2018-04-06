import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Clientes } from '../domain/clientes';


@Injectable()
export class ClientesService {

  constructor(private http :HttpClient) { }

getCliente() : Observable<Clientes[]>{

  return this.http.get<Clientes[]>(`https://tcc-lojavirtual.herokuapp.com/clientes`);
}


}
