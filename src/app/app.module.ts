import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonserviceService } from './commonservice.service';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { AuthguadService } from './authguad.service';
import {NgxPaginationModule} from 'ngx-pagination';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { TerminalComponent } from './terminal/terminal.component';
 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    TerminalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ModalModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    FilterPipeModule,
  ],
  providers: [BsModalService,AuthguadService

],
  bootstrap: [AppComponent]
})
export class AppModule { }
