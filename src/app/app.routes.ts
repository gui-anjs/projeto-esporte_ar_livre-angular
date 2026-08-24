import { Routes } from '@angular/router';

import { HomeComponent } from './component/home-component/home-component';
import { AtletaComponent } from './component/atleta-component/atleta-component';
import { CadastroDeCorrida } from './component/cadastro-de-corrida/cadastro-de-corrida';
import { AtletaListaComponent } from './component/atleta-lista-component/atleta-lista-component';
import { CorridaListaComponent } from './component/corrida-lista-component/corrida-lista-component';
import { InscricaoComponent } from './inscricao/inscricao';

export const routes: Routes = [
    {
        path:'',
        redirectTo:"/home",
        pathMatch: 'full'
    },
   { 
    path:"home",
    component:HomeComponent
},
{
    path:"cadastroatleta",
    component:AtletaComponent
},

{
    path: "cadastroatleta/:id",
    component: AtletaComponent
  },

{ 
    path: 'inscricao',
    component:InscricaoComponent 
  },

{
    path: 'lista-atletas', component:AtletaListaComponent
},

{
    path: 'corridas/:id',
    component: CadastroDeCorrida
  },

{
    path: 'listacorridas',
    component: CorridaListaComponent
  }
];
