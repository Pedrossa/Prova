import { Component, OnInit } from '@angular/core';
import{ContratoService} from '../services/contrato.service';
import { Contrato } from '../domain/contrato';
@Component({
  selector: 'app-contrato',
  templateUrl: './contrato.component.html',
  styleUrls: ['./contrato.component.css']
})
export class ContratoComponent implements OnInit {

  contratos : Contrato[];
  constructor(private contratoService : ContratoService) { }

  ngOnInit() {
  }


getContratos(){


  this.contratoService.getContratos()
  .subscribe(response =>{

//Recebe Json
   this.contratos = response[""];
   console.log(this.contratos);
  })
}


}
