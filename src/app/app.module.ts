import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { ClientListComponent } from './pages/client-list/client-list.component';  
import { AppRoutesModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClientListComponent  // Declare ClientListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutesModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
