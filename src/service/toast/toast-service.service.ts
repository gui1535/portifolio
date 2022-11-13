import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastr: ToastrService) { }

  /**
   * Exibe toast de error com uma mensagem e titulo
   * @param message
   * @param title 
   */
  error(message: string, title: string, timeOut: any = 2000): void {
    this.toastr.error(message, title, { timeOut: timeOut });
  }

  /**
 * Exibe toast de sucesso com uma mensagem e titulo
 * @param message
 * @param title 
 */
  success(message: string, title: string, timeOut: any = 2000): void {
    this.toastr.success(message, title, { timeOut: timeOut });
  }

  /**
 * Exibe toast de alerta com uma mensagem e titulo
 * @param message
 * @param title 
 */
  warning(message: string, title: string, timeOut: any = 2000): void {
    this.toastr.warning(message, title, { timeOut: timeOut });
  }

  /**
 * Exibe toast de informação com uma mensagem e titulo
 * @param message
 * @param title
 */
  info(message: string, title: string, timeOut: any = 2000): void {
    this.toastr.info(message, title, { timeOut: timeOut });
  }
}
