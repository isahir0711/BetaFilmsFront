import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ToastData } from './toast/toast';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toastSubject = new BehaviorSubject<ToastData | null>(null);

  constructor() {}

  showToast(data: ToastData) {
    this.toastSubject.next(data);

    setTimeout(() =>{
      this.hideToast();
    },1000)
  }

  hideToast() {
    const $toast = document.getElementById("toast-cont");
    if($toast){
      $toast.style.transition = 'all 0.2s ease-in-out';
      $toast.style.transform = 'translateY(-40%)';
      $toast.style.opacity = '0';
    }
    setTimeout(() =>{
      this.toastSubject.next(null);
    },400)

  }

  getToast() {
    return this.toastSubject.asObservable();
  }
}
