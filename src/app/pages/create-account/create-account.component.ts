import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserServices } from 'src/app/services/user.services';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {

  constructor(
    private matSnackBar: MatSnackBar,
    private userServices: UserServices,
    private router: Router,
  ) { }

  newAcountForm = new FormGroup({
    name: new FormControl('', Validators.required),
    user: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
  })

  createUser(group: FormGroup) {
    const name = group.get('name')?.value
    const user = group.get('user')?.value
    const password = group.get('password')?.value
    const confirmPassword = group.get('confirmPassword')?.value

    const obj = {
      name: name,
      user: user,
      password: password,
    }
    if (password && password.length < 6) {
      this.openSnackBar('A senha precisa ter pelo menos 6 caracteres', 'Fechar');
      return;
    }

    if (password !== confirmPassword) {
      this.openSnackBar('Senhas divergentes', 'Fechar');
      return;
    }

    this.userServices.postUser(obj).subscribe(
      (res) => {
        window.localStorage.setItem('token', `token${res.name}`)
        window.localStorage.setItem('userName', `${res.name}`)
        window.localStorage.setItem('userId', res.id)
        this.router.navigate(['/'])
      },
      (error) => {
        this.openSnackBar('Erro ao tentar criar o usuário', 'Fechar');
        console.error(error);
      }
    );
  }

  openSnackBar(message: string, action: string) {
    this.matSnackBar.open(message, action, {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}
