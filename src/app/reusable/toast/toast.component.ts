import { Component } from '@angular/core';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent {
  toastData: any;

  constructor(private toastService: ToastService) {}

  ngOnInit() {
    this.toastService.getToast().subscribe((data) => {
      this.toastData = data;
    });
  }

  hideToast() {
    this.toastService.hideToast();
  }
}
