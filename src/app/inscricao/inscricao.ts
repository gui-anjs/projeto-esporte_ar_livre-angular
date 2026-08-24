import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AtletaService } from '../service/atleta-service';
import { CorridaService } from '../service/corrida';

@Component({
  selector: 'app-inscricao',
  imports: [CommonModule, FormsModule],
  templateUrl: './inscricao.html',
  styleUrls: ['./inscricao.css']
})
export class InscricaoComponent implements OnInit {

  atletaId: string = '';
  corridaId: string = '';
  dataInscricao: string = '';
  statusPagamento: string = '';
  mensagemSucesso: string = '';

  listaAtletas: any[] = [];
  listaCorridas: any[] = [];

  constructor(
    private atletaService: AtletaService,
    private corridaService: CorridaService
  ) {}

  ngOnInit(): void {
    this.buscarAtletas();
    this.buscarCorridas();
  }

  buscarAtletas(): void {

    this.atletaService.listarAtletas().subscribe({
      next: (atletas) => {
        this.listaAtletas = atletas;

        console.log('Atletas carregados:', atletas);
      },

      error: (erro) => {
        console.error('Erro ao buscar atletas:', erro);
      }
    });

  }

  buscarCorridas(): void {

    this.corridaService.listarCorridas().subscribe({
      next: (corridas) => {
        this.listaCorridas = corridas;

        console.log('Corridas carregadas:', corridas);
      },

      error: (erro) => {
        console.error('Erro ao buscar corridas:', erro);
      }
    });

  }

  salvarInscricao(): void {

    console.log('Inscrição cadastrada!');
    console.log('Atleta selecionado:', this.atletaId);
    console.log('Corrida selecionada:', this.corridaId);
    console.log('Data da inscrição:', this.dataInscricao);
    console.log('Status do pagamento:', this.statusPagamento);

    // MOSTRA MENSAGEM
    alert('Inscrito com sucesso!');
    // LIMPA O FORMULÁRIO
    this.atletaId = '';
    this.corridaId = '';
    this.dataInscricao = '';
    this.statusPagamento = '';

  }

}