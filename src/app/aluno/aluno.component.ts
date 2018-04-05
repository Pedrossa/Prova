import { Component, OnInit } from '@angular/core';
import { Aluno } from '../domain/aluno';
import { AlunoService } from '../services/aluno.service';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {
    
  alunos : Aluno[];
  constructor(private AlunoService: AlunoService) { 
this.getAluno();

}
  ngOnInit() {
  }
getAluno(){
  this.AlunoService.getAluno()
  .subscribe(response => {

    this.alunos = response;
    console.log(response);
  })
}
}
