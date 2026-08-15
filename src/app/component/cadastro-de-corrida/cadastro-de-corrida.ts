import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CorridaService } from '../../service/corrida'; // Importe seu serviço
import { Corrida } from '../../models/corrida.model';

@Component({
  selector: 'app-cadastro-de-corrida',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cadastro-de-corrida.html',
  styleUrl: './cadastro-de-corrida.css',
})
export class CadastroDeCorrida {
  //DECLARÇÃO DAS VARIÁVEIS
  descricao: string = '';
  data: string = '';

  dist5k: boolean = false;
  dist10k: boolean = false;
  dist25k: boolean = false;

  constructor(private corridaService: CorridaService) {}

  salvarCorrida(){
    const novaCorrida: Corrida = {
      descricao: this.descricao,
      data: this.data,
      dist5k: this.dist5k,
      dist10k: this.dist10k,
      dist21k: this.dist25k
    };
    this.corridaService.adicionarCorrida(novaCorrida);

    // 3. (Opcional) Limpa os campos da tela depois de salvar
    this.limparFormulario();
  }

  limparFormulario() {
    this.descricao = '';
    this.data = '';
    this.dist5k = false;
    this.dist10k = false;
    this.dist25k = false;
  }
}
