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
import { advisorGuard } from './guard/advisor.guard';
import { managerGuard } from './guard/manager.guard';
import { ClientInfoComponent } from './pages/client-info/client-info.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'client-list',
    component: ClientListComponent,
     canActivate: [advisorGuard], 
  },
  { path: 'client-details', component: ClientDetailsComponent },
  {
    path: 'statistics',
    component: StatisticsComponent,
    canActivate: [managerGuard],
  },
  {
    path: 'advisors-list',
    component: AdvisorsListComponent,
    canActivate: [managerGuard],
  },
  { path: 'client-edit/:id', component: ClientEditComponent },
  { path: 'client-create', component: ClientCreateComponent },
  { path: 'accounts/:id', component: ClientAccountComponent },
  { path: 'client-info/:id', component: ClientInfoComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutesModule {}
