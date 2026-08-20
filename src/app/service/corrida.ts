import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Corrida } from '../models/corrida.model';

@Injectable({
  providedIn: 'root'
})
export class CorridaService {

  private urlApi =
    'https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida';

  constructor(private http: HttpClient) {}

  // LISTAR CORRIDAS
  listarCorridas(): Observable<any[]> {

    return this.http.get<any[]>(
      this.urlApi
    );
  }

  // LISTAR UMA CORRIDA
  listarCorrida(id: number | string): Observable<any> {

    return this.http.get<any>(
      `${this.urlApi}/${id}`
    );
  }

  // CADASTRAR CORRIDA
  adicionarCorrida(corrida: Corrida): Observable<any> {

    const dadosApi = {

      descricao_corrida: corrida.descricao,

      data_corrida: corrida.data,

      distancia5km: corrida.dist5k,

      distancia10km: corrida.dist10k,

      distancia25km: corrida.dist25k

    };

    console.log('Dados enviados para a API:', dadosApi);

    return this.http.post<any>(
      this.urlApi,
      dadosApi
    );
  }

  // ALTERAR CORRIDA
  alterarCorrida(corrida: Corrida): Observable<any> {

    const dadosApi = {

      descricao_corrida: corrida.descricao,

      data_corrida: corrida.data,

      distancia5km: corrida.dist5k,

      distancia10km: corrida.dist10k,

      distancia25km: corrida.dist25k

    };

    return this.http.put<any>(
      `${this.urlApi}/${corrida.id}`,
      dadosApi
    );
  }

  // EXCLUIR CORRIDA
  excluirCorrida(id: number | string): Observable<any> {

    return this.http.delete<any>(
      `${this.urlApi}/${id}`
    );
  }
}