import { Component, OnInit } from '@angular/core';
import { Categoria } from '../domain/categoria';
import { CategoriaService } from '../services/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
    
  categoria : Categoria[];
  constructor(private CategoriaService : CategoriaService) { 
this.getCategoria();

}
  ngOnInit() {
  }
getCategoria(){
  this.CategoriaService.getCategoria()
  .subscribe(response => {

    this.categoria = response["data"];
    console.log(response);
  })
}
}
