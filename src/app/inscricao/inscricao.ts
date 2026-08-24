import { Component } from '@angular/core';

@Component({
  selector: 'app-inscricao',
  templateUrl: './inscricao.html',
  styleUrls: ['./inscricao.component.css']
})
export class InscricaoComponent {

  // Variáveis ligadas ao [(ngModel)]
  atletaId: string = '';
  corridaId: string = '';
  dataInscricao: string = '';
  statusPagamento: string = '';

  // Listas simuladas para preencher as opções dos selects (depois você puxa do banco)
  listaAtletas = [
    { id: '1', nome: 'João Pedro' },
    { id: '2', nome: 'Maria Silva' }
  ];

  listaCorridas = [
    { id: '1', descricao: '5ª Maratona dos Cara' },
    { id: '2', descricao: 'Corrida Noturna 10k' }
  ];

  // Função disparada no (submit) do form
  salvarInscricao() {
    // Aqui você vai fazer a chamada pro seu backend/serviço
    console.log('Salvando inscrição:', {
      atletaId: this.atletaId,
      corridaId: this.corridaId,
      dataInscricao: this.dataInscricao,
      statusPagamento: this.statusPagamento
    });
    
    alert('Inscrição salva com sucesso!');
  }
}