import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  currentNamePage: string = "";
  currentIconPage: string = "";
  userName = window.localStorage.getItem('userName')

  constructor(
    private router: Router,
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updataPageCurrent();
      }
    });
  }

  logout(): void {
    window.localStorage.clear()
    this.router.navigate(['login'])
  }

  updataPageCurrent() {
    const currentRoute = this.router.url;
    switch (currentRoute) {
      case '/':
        this.currentNamePage = 'Início';
        this.currentIconPage = 'home';
        break;
      case '/extrato':
        this.currentNamePage = 'Extrato';
        this.currentIconPage = 'history';
        break;
      case '/extrato/novo-lancamento':
        this.currentNamePage = 'Novo Lançamento';
        this.currentIconPage = 'add';
        break;
      default:
        this.currentNamePage = 'Página Atual';
        this.currentIconPage = 'home';
        break;
    }
  }

}
