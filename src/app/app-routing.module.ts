import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';
import { TerminalComponent } from './terminal/terminal.component';

const routes: Routes = [
  {
    path:'home',
    component: HomeComponent
    },
    {
      path:'main',
      component: MainComponent
      },
      {
        path:'login',
        component: LoginComponent
        },
        {
          path:'register',
          component: RegisterComponent
          },
          {
            path:'dashboard',
            component: DashboardComponent
            },
            {
              path:'terminal',
              component:TerminalComponent
            },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
