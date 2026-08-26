import { Component, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AtletaService } from '../../service/atleta-service';
import { Pessoa } from '../../models/Pessoa';

@Component({
  selector: 'app-atleta-lista-component',
  imports: [],
  templateUrl: './atleta-lista-component.html',
  styleUrl: './atleta-lista-component.css',
})

export class AtletaListaComponent implements OnInit {

  listaAtletas = signal<Pessoa[]>([]);

  constructor(
    private http: AtletaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.carregaAtletas();
  }


  // ==========================
  // LISTAR ATLETAS
  // ==========================

  carregaAtletas(): void {

    this.http.listarAtletas().subscribe({

      next: (dados: Pessoa[]) => {

        const atletasCorrigidos = dados.map((atleta: any) => {

          return {
            ...atleta,

            dataNascimento:
              atleta.dataNascimento ||
              atleta.data_nascimento ||
              ''
          };

        });

        console.table(atletasCorrigidos);

        this.listaAtletas.set(atletasCorrigidos);

      },

      error: (erro) => {

        console.error(
          'Erro ao listar atletas:',
          erro
        );

      }

    });

  }


  // ==========================
  // EDITAR ATLETA
  // ==========================

  buscarPessoa(pessoa: Pessoa): void {

    console.log('Editando atleta:', pessoa);

    this.router.navigate([
      '/cadastroatleta',
      pessoa.id
    ]);

  }


  // ==========================
  // EXCLUIR ATLETA
  // ==========================

  excluirAtleta(pessoa: Pessoa): void {

    if (!pessoa.id) {

      console.error('Atleta sem ID.');

      return;

    }

    const confirmar = confirm(
      `Deseja excluir o atleta "${pessoa.nome}"?`
    );

    if (!confirmar) {

      return;

    }

    this.http.excluirAtleta(pessoa).subscribe({

      next: () => {

        console.log(
          'Atleta excluído com sucesso!'
        );

        this.carregaAtletas();

      },

      error: (erro) => {

        console.error(
          'Erro ao excluir atleta:',
          erro
        );

      }

    });

  }


  // ==========================
  // CALCULAR IDADE
  // ==========================

  calcularIdade(dataNascimento: string): number | string {

    if (!dataNascimento) {

      return 'Não informada';

    }

    let nascimento: Date;


    // Formato YYYY-MM-DD
    if (/^\d{4}-\d{2}-\d{2}$/.test(dataNascimento)) {

      const partes = dataNascimento.split('-');

      const ano = Number(partes[0]);
      const mes = Number(partes[1]) - 1;
      const dia = Number(partes[2]);

      nascimento = new Date(
        ano,
        mes,
        dia
      );

    } else {

      nascimento = new Date(dataNascimento);

    }


    // Verifica se a data é inválida
    if (isNaN(nascimento.getTime())) {

      return 'Não informada';

    }


    const hoje = new Date();

    let idade =
      hoje.getFullYear() -
      nascimento.getFullYear();


    const mesAtual = hoje.getMonth();

    const diaAtual = hoje.getDate();

    const mesNascimento =
      nascimento.getMonth();

    const diaNascimento =
      nascimento.getDate();


    // Verifica se ainda não fez aniversário
    if (
      mesAtual < mesNascimento ||
      (
        mesAtual === mesNascimento &&
        diaAtual < diaNascimento
      )
    ) {

      idade--;

    }


    return idade;

  }

}











/*import { Component, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AtletaService } from '../../service/atleta-service';
import { Pessoa } from '../../models/Pessoa';

@Component({
  selector: 'app-atleta-lista-component',
  imports: [],
  templateUrl: './atleta-lista-component.html',
  styleUrl: './atleta-lista-component.css',
})
export class AtletaListaComponent implements OnInit {

  listaAtletas = signal<Pessoa[]>([]);

  constructor(
    private http: AtletaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.carregaAtletas();
  }

  // ==========================
  // LISTAR ATLETAS
  // ==========================
  carregaAtletas(): void {

    this.http.listarAtletas().subscribe({
  
      next: (dados: Pessoa[]) => {
  
        const atletasCorrigidos = dados.map((atleta: any) => {
  
          return {
            ...atleta,
  
            dataNascimento:
              atleta.dataNascimento ||
              atleta.data_nascimento ||
              ''
          };
  
        });
  
        console.table(atletasCorrigidos);
  
        this.listaAtletas.set(atletasCorrigidos);
  
      },
  
      error: (erro) => {
  
        console.error(
          'Erro ao listar atletas:',
          erro
        );
  
      }
  
    });
  
  }

  }

  // ==========================
  // EDITAR ATLETA
  // ==========================
  buscarPessoa(pessoa: Pessoa): void {

    console.log('Editando atleta:', pessoa);

    this.router.navigate([
      '/cadastroatleta',
      pessoa.id
    ]);

  }

  // ==========================
  // EXCLUIR ATLETA
  // ==========================
  excluirAtleta(pessoa: Pessoa): void {

    if (!pessoa.id) {
      console.error('Atleta sem ID.');
      return;
    }

    const confirmar = confirm(
      `Deseja excluir o atleta "${pessoa.nome}"?`
    );

    if (!confirmar) {
      return;
    }

    this.http.excluirAtleta(pessoa).subscribe({

      next: () => {

        console.log(
          'Atleta excluído com sucesso!'
        );

        this.carregaAtletas();
      },

      error: (erro) => {

        console.error(
          'Erro ao excluir atleta:',
          erro
        );

      }

    });

  }

  calcularIdade(dataNascimento: string): number | string {

    if (!dataNascimento) {
      return 'Não informada';
    }
  
    let nascimento: Date;
  
    // Formato: YYYY-MM-DD
    if (/^\d{4}-\d{2}-\d{2}$/.test(dataNascimento)) {
  
      const partes = dataNascimento.split('-');
  
      const ano = Number(partes[0]);
      const mes = Number(partes[1]) - 1;
      const dia = Number(partes[2]);
  
      nascimento = new Date(ano, mes, dia);
  
    } else {
  
      nascimento = new Date(dataNascimento);
  
    }
  
    if (isNaN(nascimento.getTime())) {
      return 'Não informada';
    }
  
    const hoje = new Date();
  
    let idade =
      hoje.getFullYear() -
      nascimento.getFullYear();
  
    const mesAtual = hoje.getMonth();
    const diaAtual = hoje.getDate();
  
    const mesNascimento = nascimento.getMonth();
    const diaNascimento = nascimento.getDate();
  
    if (
      mesAtual < mesNascimento ||
      (
        mesAtual === mesNascimento &&
        diaAtual < diaNascimento
      )
    ) {
      idade--;
    }
  
    return idade;
  }
}*/