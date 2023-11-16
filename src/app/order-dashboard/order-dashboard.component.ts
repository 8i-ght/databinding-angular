import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstFiveOrdersComponent } from '../first-five-orders/first-five-orders.component';

@Component({
  selector: 'app-order-dashboard',
  standalone: true,
  imports: [CommonModule, FirstFiveOrdersComponent],
  templateUrl: './order-dashboard.component.html',
  styleUrl: './order-dashboard.component.css'
})

export class OrderDashboardComponent {
  orders: number[] = [];
  workdayStarted = false;

  startWorkday() {
    this.workdayStarted = true;
    const interval = setInterval(() => {
      if (this.workdayStarted) {
        this.orders.push(this.orders.length + 1);
      } else {
        clearInterval(interval);
      }
    }, 2000);
  }

  endWorkday() {
    this.workdayStarted = false;
  }
}
