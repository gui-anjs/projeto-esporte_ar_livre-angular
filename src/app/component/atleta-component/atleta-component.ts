import { Component, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AtletaService } from '../../service/atleta-service';
import { Pessoa } from '../../models/Pessoa';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-atleta-component',
  imports: [FormsModule],
  templateUrl: './atleta-component.html',
  styleUrl: './atleta-component.css',
})
export class AtletaComponent {

  // DECLARAÇÃO DOS ATRIBUTOS DO COMPONENTE
  id = 0;
  nome = '';
  dataNascimento = '';
  cpf = 0;
  sexo = '';
  cep = 0;
  rua_logradouro = '';
  bairro = '';
  cidade = '';
  uf = '';

  editar = false;
  idAtleta = 0;

  // CONSTRUTOR
  constructor(
    private atletaService: AtletaService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}

  // INICIALIZAÇÃO
  ngOnInit(): void {

    this.idAtleta = Number(this.route.snapshot.paramMap.get('id'));

    if (this.idAtleta > 0) {
      this.editar = true;
      this.carregaCampo(this.idAtleta);
    }
  }

  // EXIBE OS DADOS NO CONSOLE
  exibeDados(): void {
    console.log(
      this.nome,
      this.cpf,
      this.sexo,
      this.cep,
      this.rua_logradouro,
      this.bairro,
      this.cidade,
      this.uf
    );
  }

  // CARREGA OS DADOS DO ATLETA PARA EDIÇÃO
  carregaCampo(idAtleta: number): void {

    this.atletaService.listarAtleta(idAtleta).subscribe({
      next: (objAtleta: Pessoa) => {

        this.id = objAtleta.id;
        this.nome = objAtleta.nome;
        this.cpf = objAtleta.cpf;
        this.sexo = objAtleta.sexo;
        this.dataNascimento = objAtleta.dataNascimento;
        this.cep = objAtleta.cep;
        this.rua_logradouro = objAtleta.ruaLogradouro;
        this.bairro = objAtleta.bairro;
        this.cidade = objAtleta.cidade;
        this.uf = objAtleta.uf;

        this.cdr.detectChanges();
      },

      error: (msgErro: any) => {
        console.log('Erro ao listar o atleta:', msgErro);
      }
    });
  }

  // MÉTODO CHAMADO PELO FORMULÁRIO
  salvarAtleta(): void {

    const pessoaAtleta = new Pessoa();

    pessoaAtleta.nome = this.nome;
    pessoaAtleta.cpf = this.cpf;
    pessoaAtleta.sexo = this.sexo;
    pessoaAtleta.dataNascimento = this.dataNascimento;
    pessoaAtleta.cep = this.cep;
    pessoaAtleta.ruaLogradouro = this.rua_logradouro;
    pessoaAtleta.bairro = this.bairro;
    pessoaAtleta.cidade = this.cidade;
    pessoaAtleta.uf = this.uf;

    // CADASTRAR
    if (!this.editar) {

      this.atletaService.adicionarAtleta(pessoaAtleta).subscribe({
        next: (resposta: Pessoa) => {

          console.log('Atleta cadastrado com sucesso!');
          console.log(resposta);

          this.limparAtributos();
        },

        error: (msgErro: any) => {
          console.log('Erro ao cadastrar o atleta:', msgErro);
        }
      });

    } else {

      // ALTERAR
      pessoaAtleta.id = this.idAtleta;

      this.atletaService.alterarAtleta(pessoaAtleta).subscribe({
        next: (resposta: Pessoa) => {

          console.log('Atleta alterado com sucesso!');
          console.log(resposta);

          this.limparAtributos();
        },

        error: (msgErro: any) => {
          console.log('Erro ao alterar o atleta:', msgErro);
        }
      });
    }
  }

  // LISTA UM ATLETA
  listaAtleta(idAtleta: number): void {

    this.atletaService.listarAtleta(idAtleta).subscribe({
      next: (dados: Pessoa) => {
        console.table(dados);
      },

      error: (msgErro: any) => {
        console.log('Erro ao listar atleta:', msgErro);
      }
    });
  }

  // LIMPA O FORMULÁRIO
  limparAtributos(): void {

    this.id = 0;
    this.nome = '';
    this.cpf = 0;
    this.sexo = '';
    this.dataNascimento = '';
    this.cep = 0;
    this.rua_logradouro = '';
    this.bairro = '';
    this.cidade = '';
    this.uf = '';
  }
}