import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { ClientListComponent } from './pages/client-list/client-list.component';
import { AppRoutesModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ClientCreateComponent } from './pages/client-create/client-create.component';
import { ClientDetailsComponent } from './pages/client-details/client-details.component';
import { ClientEditComponent } from './pages/client-edit/client-edit.component';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './header/header.component';

import { ClientAccountComponent } from './pages/client-account/client-account.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClientListComponent,/* -> Declare ClientListComponent */
    ClientCreateComponent,
    ClientDetailsComponent,
    ClientEditComponent,

    HeaderComponent,

    ClientAccountComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutesModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
