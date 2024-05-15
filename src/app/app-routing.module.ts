import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvisorsListComponent } from './pages/advisors-list/advisors-list.component';
import { ClientDetailsComponent } from './pages/client-details/client-details.component';
import { ClientEditComponent } from './pages/client-edit/client-edit.component';
import { ClientListComponent } from './pages/client-list/client-list.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { ClientCreateComponent } from './pages/client-create/client-create.component';

import { LoginComponent } from './pages/login/login.component';
import { ClientAccountComponent } from './pages/client-account/client-account.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'client-list', component: ClientListComponent },
  { path: 'client-details', component: ClientDetailsComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: 'advisors-list', component: AdvisorsListComponent },
  { path: 'client-edit', component: ClientEditComponent },
  {path: 'client-create', component:ClientCreateComponent},
  { path: 'client-account', component:ClientAccountComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];


  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

  export class AppRoutesModule { }
