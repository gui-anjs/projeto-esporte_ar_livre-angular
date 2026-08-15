import { Injectable } from '@angular/core';
import { Corrida } from '../models/corrida.model'; // Ajuste o caminho se necessário

@Injectable({
  providedIn: 'root'
})
export class CorridaService {

  // Lista onde vamos guardar as corridas na memória
  private listaCorridas: Corrida[] = [];

  constructor() { }

  // Retorna todas as corridas cadastradas
  getCorridas(): Corrida[] {
    return this.listaCorridas;
  }

  // Adiciona uma nova corrida na lista
  adicionarCorrida(novaCorrida: Corrida): void {
    this.listaCorridas.push(novaCorrida);
    console.log('Corrida salva no serviço com sucesso!', this.listaCorridas);
  }
}
