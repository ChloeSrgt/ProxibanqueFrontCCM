import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { ClientListComponent } from './pages/client-list/client-list.component';
import { AppRoutesModule } from './app-routing.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { ClientCreateComponent } from './pages/client-create/client-create.component';
import { ClientDetailsComponent } from './pages/client-details/client-details.component';
import { ClientEditComponent } from './pages/client-edit/client-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ClientAccountComponent } from './pages/client-account/client-account.component';
import { AdvisorsListComponent } from './pages/advisors-list/advisors-list.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { BankTransferModalComponent } from './bank-transfer-modal/bank-transfer-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClientListComponent,
    ClientCreateComponent,
    ClientDetailsComponent,
    ClientEditComponent,
    FooterComponent,
    HeaderComponent,
    ClientAccountComponent,
    BankTransferModalComponent,
    AdvisorsListComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserModule,
    MatSnackBarModule,
    FormsModule,
    AppRoutesModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
