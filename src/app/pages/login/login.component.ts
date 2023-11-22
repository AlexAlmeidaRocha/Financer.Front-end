import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserServices } from 'src/app/services/user.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private userServices: UserServices,
    private router: Router,
    private matSnackBar: MatSnackBar,
  ) { }

  loginForm = new FormGroup({
    user: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  login(): void {

    const user = this.loginForm.get('user')?.value;
    const password = this.loginForm.get('password')?.value;

    const obj = {
      user: user,
      password: password
    }

    this.userServices.loginApi(obj).subscribe(data => {
      window.localStorage.setItem('token', `${data}`)
      this.router.navigate(['/']);
    }, (err) => {
      this.openSnackBar('Usuário ou senha invalido.', 'Fechar');
      console.error('Usuário ou senha invalido:', err);
    });
  }

  noFunction() {
    this.openSnackBar('Sem função', 'Fechar');
  }

  openSnackBar(message: string, action: string) {
    this.matSnackBar.open(message, action, {
      duration: 3500,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}

