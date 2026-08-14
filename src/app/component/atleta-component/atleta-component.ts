import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AtletaService } from '../../service/atleta-service';
import { Pessoa } from '../../models/Pessoa';


@Component({
  selector: 'app-atleta-component',
  imports: [FormsModule],
  templateUrl: './atleta-component.html',
  styleUrl: './atleta-component.css',
})
export class AtletaComponent {
  //DECLARAÇÃO DOS ATRIBUTOS DO COMPONENTE
  nome = ''
  cpf = 0
  sexo = ''
  cep = 0
  ruaLogradouro = ''
  bairro = ''
  cidade = ''
  uf = ''

  //DECLARAÇÃO DO CONSTRUTOR 
  constructor(private atletaService: AtletaService){}
  
  //DECLARAÇÃO DE FUNÇÕES 
  exibeDados(){
    console.log(this.nome, this.cpf, this.sexo, this.ruaLogradouro, this.bairro, this.cidade, this.uf)
  }

  salvarAtleta(){
    const pessoaAtleta = new Pessoa()
    pessoaAtleta.nome = this.nome
    pessoaAtleta.cpf = Number(this.cpf)
    pessoaAtleta.sexo = this.sexo
    pessoaAtleta.cep = Number(this.cep)
    pessoaAtleta.ruaLogradouro = this.ruaLogradouro
    pessoaAtleta.bairro = this.bairro
    pessoaAtleta.cidade = this.cidade
    pessoaAtleta.uf = this.uf

    this.atletaService.adicionar(pessoaAtleta)

    this.atletaService.listar()
  
    this.limparAtributos()
  }

  limparLimpar(){
    this.id: number = 0 
    this.nome: string = ''
    this.sexo: string = ''
    this.cep: number = 0
    this.cpf: number = 0 
    this.ruaLogradouro: string = ''
    this.bairro: string = ''
    this.cidade: string = ''
    this.uf: string = ''
  }

}
