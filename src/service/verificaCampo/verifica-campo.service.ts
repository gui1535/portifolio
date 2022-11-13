import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VerificaCampoService {

  emailValidator: any = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  constructor() { }

  /**
   * Verifica se email é valido
   * @param email
   * @returns 
   */
  email(email: string): boolean {
    let result = this.emailValidator.test(email);
    return !result ? false : true;
  }
}
