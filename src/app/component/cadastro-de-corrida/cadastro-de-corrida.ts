import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { CorridaService } from '../../service/corrida';
import { Corrida } from '../../models/corrida.model';

@Component({
  selector: 'app-cadastro-de-corrida',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cadastro-de-corrida.html',
  styleUrl: './cadastro-de-corrida.css',
})
export class CadastroDeCorrida implements OnInit {

  descricao = '';
  data = '';

  dist5k = false;
  dist10k = false;
  dist25k = false;

  editar = false;
  idCorrida: number | string = '';

  constructor(
    private corridaService: CorridaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.idCorrida = id;
      this.editar = true;
      this.carregarCorrida(id);
    }

  }

  // ==============================
  // CARREGAR CORRIDA PARA EDITAR
  // ==============================

  carregarCorrida(id: number | string): void {

    this.corridaService.listarCorrida(id).subscribe({

      next: (corrida) => {

        console.log('Corrida carregada para edição:', corrida);

        this.descricao =
          corrida.descricao_corrida ||
          corrida.descricao ||
          corrida.nome ||
          '';

        this.data =
          corrida.data_corrida ||
          corrida.dataCorrida ||
          corrida.data ||
          '';

        this.dist5k =
          corrida.distancia5km === true ||
          corrida.dist5k === true;

        this.dist10k =
          corrida.distancia10km === true ||
          corrida.dist10k === true;

        this.dist25k =
          corrida.distancia25km === true ||
          corrida.dist21k === true;

      },

      error: (erro) => {

        console.error(
          'Erro ao carregar corrida:',
          erro
        );

      }

    });
  }

  // ==============================
  // SALVAR / ALTERAR
  // ==============================

  salvarCorrida(): void {

    const novaCorrida: Corrida = {

      id: this.editar ? Number(this.idCorrida) : undefined,

      descricao: this.descricao,

      data: this.data,

      dist5k: this.dist5k,

      dist10k: this.dist10k,

      dist25k: this.dist25k

    };

    console.log(
      'Corrida que será enviada:',
      novaCorrida
    );

    // CADASTRAR
    if (!this.editar) {

      this.corridaService
        .adicionarCorrida(novaCorrida)
        .subscribe({

          next: (resposta) => {

            console.log(
              'Corrida cadastrada com sucesso:',
              resposta
            );

            alert(
              'Corrida cadastrada com sucesso!'
            );

            this.router.navigate([
              '/listacorridas'
            ]);

          },

          error: (erro) => {

            console.error(
              'Erro ao cadastrar corrida:',
              erro
            );

          }

        });

    }

    // ALTERAR
    else {

      this.corridaService
        .alterarCorrida(novaCorrida)
        .subscribe({

          next: (resposta) => {

            console.log(
              'Corrida alterada com sucesso:',
              resposta
            );

            alert(
              'Corrida alterada com sucesso!'
            );

            this.router.navigate([
              '/listacorridas'
            ]);

          },

          error: (erro) => {

            console.error(
              'Erro ao alterar corrida:',
              erro
            );

          }

        });

    }

  }

  limparFormulario(): void {

    this.descricao = '';
    this.data = '';

    this.dist5k = false;
    this.dist10k = false;
    this.dist25k = false;

  }

}