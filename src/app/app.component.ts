import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showHeader = false;
  showFooter = false;
  pagesConfiguration: any = {};

  constructor(private router: Router) {
    this.pagesConfiguration = {
      'home': {
        useHeader: false,
        useFooter: false
      },
      '': {
        useHeader: false,
        useFooter: false
      },
    };

    const isNavigation = e => e instanceof NavigationStart;
    this.router.events.pipe(filter(isNavigation))
      .subscribe(this.toggleHeaderFooter.bind(this));
  }

  toggleHeaderFooter(navigation) {
    const [, pageName = '', action] = navigation.url.split('/');
    const name = action ? `${pageName}/${action}` : pageName;
    const pageConfig = this.pagesConfiguration[name];

    this.showHeader = pageConfig && pageConfig.useHeader;
    this.showFooter = pageConfig && pageConfig.useFooter;
  }

  getUserData(attribute: string) {
    const session = sessionStorage.getItem('UserData') ? JSON.parse(sessionStorage.getItem('UserData')) : null;
    return (session) ? session[attribute] : '';
  }

  getUserName() {
    return this.getUserData('Name');
  }

  getPhoto() {
    return this.getUserData('fileNamePhoto');
  }

  getSessionObject(sessionVar: string) {
    if (sessionStorage.getItem(sessionVar) !== null &&
      sessionStorage.getItem(sessionVar) !== 'undefined' &&
      sessionStorage.getItem(sessionVar) !== '{}') {
      const sessionKey = JSON.parse(sessionStorage.getItem(sessionVar));
      return sessionKey;
    }
    return [];
  }

  inputCheck(miDom, name) {
    miDom[name]['checked'] = !miDom[name]['checked'];
  }

  builtArray(salida: any[], entrada: any[]) {
    return entrada.reduce(function(acc, value) {
      return value.checked === true
        ? acc.concat(value)
        : acc;
    }, salida);
  }
}
