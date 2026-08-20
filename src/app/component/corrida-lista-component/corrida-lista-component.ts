import { Component, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';

import { CorridaService } from '../../service/corrida';

@Component({
  selector: 'app-corrida-lista-component',
  imports: [],
  templateUrl: './corrida-lista-component.html',
  styleUrl: './corrida-lista-component.css'
})
export class CorridaListaComponent implements OnInit {

  listaCorridas = signal<any[]>([]);

  constructor(
    private corridaService: CorridaService,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.carregarCorridas();

  }

  // ==============================
  // LISTAR
  // ==============================

  carregarCorridas(): void {

    this.corridaService.listarCorridas().subscribe({

      next: (dados) => {

        console.log(
          'Corridas da API:',
          dados
        );

        this.listaCorridas.set(dados);

      },

      error: (erro) => {

        console.error(
          'Erro ao listar corridas:',
          erro
        );

      }

    });

  }

  // ==============================
  // EDITAR
  // ==============================

  editarCorrida(corrida: any): void {

    console.log(
      'Editando corrida:',
      corrida
    );

    this.router.navigate([
      '/corridas',
      corrida.id
    ]);

  }

  // ==============================
  // EXCLUIR
  // ==============================

  excluirCorrida(corrida: any): void {

    const confirmar = confirm(
      `Deseja excluir a corrida "${corrida.descricao_corrida || corrida.descricao || corrida.nome}"?`
    );

    if (!confirmar) {
      return;
    }

    this.corridaService
      .excluirCorrida(corrida.id)
      .subscribe({

        next: () => {

          console.log(
            'Corrida excluída com sucesso!'
          );

          alert(
            'Corrida excluída com sucesso!'
          );

          this.carregarCorridas();

        },

        error: (erro) => {

          console.error(
            'Erro ao excluir corrida:',
            erro
          );

        }

      });

  }

}