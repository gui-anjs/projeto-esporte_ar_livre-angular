import { Component, signal } from '@angular/core';
import { AtletaService } from '../../service/atleta-service';
import { Pessoa } from '../../models/Pessoa';
import { Router } from '@angular/router';

@Component({
  selector: 'app-atleta-lista-component',
  imports: [],
  templateUrl: './atleta-lista-component.html',
  styleUrl: './atleta-lista-component.css',
})
export class AtletaListaComponent {

  //DECLARAÇÃO ARRAY DO TIPO PESSOA
  //listaAtletas: Atleta[] = []
  listaAtletas = signal<Pessoa[]>([])

  //DECLARAÇÃO CONSTRUTOR
  constructor(private router: Router, private http: AtletaService) { }

  //EXECUTAR INSTRUÇÕES AO CARREGAR CRIAR O COMPONENTE
  ngOnInit() {
    this.listarAtletas()
  }

  //LISTAR OS ATLETAS
  listarAtletas() {
    this.listaAtletas.set(this.http.listar());
  }

  //EXCLUIR ATLETA
  excluirAtleta(pessoa: Pessoa){
    if(confirm(`Deseja excluir ${pessoa.nome} da competição? `)){
      this.http.remover2(pessoa)
      // Delete o .subscribe(...) e deixe assim:
this.http.remover2(pessoa);
this.listaAtletas.set(this.http.listar()); // Correctly updates the signal's value // Atualiza a lista logo em seguida

    }
    this.ngOnInit()
  }

  //ALTERAR DADOS
  buscarPessoa(idAtleta: Pessoa){
    this.router.navigate(['/cadastroatleta', idAtleta])
  }

  
}//FIM COMPONENT AtletaListaComponent
import { Routes } from '@angular/router';
import { HomeComponent } from '../home-component/home-component';
import { AtletaComponent } from '../atleta-component/atleta-component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:"/home",
        pathMatch: 'full'
    },
    {
        path:"home",
        component:HomeComponent
    },
    {
        path:"cadastroatleta",
        component:AtletaComponent
    },
    {
        path:"cadastroatleta/:id",
        component:AtletaComponent
    },
    {
        path:"listaatleta",
        component:AtletaListaComponent
    },
    {
        path:"cadastrocorrida",
        component:AtletaComponent
    },
    
];
