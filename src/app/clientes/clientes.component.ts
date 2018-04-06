import { Component, OnInit } from '@angular/core';
import { Clientes } from '../domain/clientes';
import { ClientesService } from '../services/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {



  clientes : Clientes[];
  constructor(private clientesService : ClientesService) {
    this.getCliente();
   }

  ngOnInit() {
  }
  
getCliente(){
  this.clientesService.getCliente()
  .subscribe(response => {
this.clientes = response;
console.log(response);

  })
}
}
