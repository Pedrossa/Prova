import { Component, OnInit } from '@angular/core';
import { Categoria } from '../domain/categoria';
import { CategoriaService } from '../services/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
    
  categorias : Categoria[];
  constructor(private categoriaService : CategoriaService) { 
this.getCategoria();

}
  ngOnInit() {
  }
getCategoria(){
  this.categoriaService.getCategoria()
  .subscribe(response => {

    this.categorias = response["Categoria"];
    console.log(response);
  })
}
}
