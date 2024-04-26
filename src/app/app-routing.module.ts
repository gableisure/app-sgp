import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoaComponent } from './modules/pessoa/components/pessoa/pessoa.component';
import { PessoaDetalheComponent } from './modules/pessoa/components/pessoa-detalhe/pessoa-detalhe.component';
import { DashboardComponent } from './modules/dashboard/components/dashboard/dashboard.component';

const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: 'pessoas', component: PessoaComponent },
  { path: 'pessoas/:id', component: PessoaDetalheComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }