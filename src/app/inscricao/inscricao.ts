import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inscricao',
  imports: [CommonModule, FormsModule],
  templateUrl: './inscricao.html',
  styleUrls: ['./inscricao.css']
})
export class InscricaoComponent {

  atletaId: string = '';
  corridaId: string = '';
  dataInscricao: string = '';
  statusPagamento: string = '';

  listaAtletas: any[] = [];
  listaCorridas: any[] = [];

  salvarInscricao() {
    console.log('Inscrição cadastrada!');
    console.log('Atleta:', this.atletaId);
    console.log('Corrida:', this.corridaId);
    console.log('Data:', this.dataInscricao);
    console.log('Pagamento:', this.statusPagamento);
  }

}