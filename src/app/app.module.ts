import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './pages/home/home.component';
import { FinancerHistoryComponent } from './components/financer-history/financer-history.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NewRevenueComponent } from './components/revenue/new-revenue/new-revenue.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoginComponent } from './pages/login/login.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { FormsModule } from '@angular/forms';
import { EditRevenueComponent } from './components/revenue/edit-revenue/edit-revenue.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DeleteRevenueComponent } from './components/revenue/delete-revenue/delete-revenue.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgChartsModule } from 'ng2-charts';
import { ExtractServices } from './services/extract.services';
import { UserServices } from './services/user.services';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    FinancerHistoryComponent,
    NewRevenueComponent,
    LoginComponent,
    CreateAccountComponent,
    EditRevenueComponent,
    DeleteRevenueComponent,
    DashboardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule,
    MatSnackBarModule,
    FormsModule,
    MatDialogModule,
    NgChartsModule,
  ],
  providers: [
    ExtractServices,
    UserServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
