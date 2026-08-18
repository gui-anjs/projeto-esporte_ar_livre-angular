import { Routes } from '@angular/router';

import { HomeComponent } from './component/home-component/home-component';
import { AtletaComponent } from './component/atleta-component/atleta-component';
import { CadastroDeCorrida } from './component/cadastro-de-corrida/cadastro-de-corrida';
import { AtletaListaComponent } from './component/atleta-lista-component/atleta-lista-component';
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
    path: 'corridas', component:CadastroDeCorrida 
},

{
    path: 'lista-atletas', component:AtletaListaComponent
}
];
