import { NewRevenueComponent } from './components/revenue/new-revenue/new-revenue.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FinancerHistoryComponent } from './components/financer-history/financer-history.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent, children: [
      { path: "", component: DashboardComponent },
      { path: "extrato", component: FinancerHistoryComponent },
      { path: "extrato/novo-lancamento", component: NewRevenueComponent },
    ],
    // canActivate: [AuthGuard]
  },
  // {
  //   path: "", component: LoginComponent, children: [
  //     { path: "", pathMatch: "full", redirectTo: "login" },
  //     { path: "login", component: LoginComponent },
  //   ]
  // },
  // { path: "nova-conta", component: CreateAccountComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
