import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  template: `<p>Orders works!</p>`
})
export class OrdersComponent implements OnInit {

  orders: any[] = [];

  constructor() {
    // Constructor executed → counts in coverage
    this.initOrders();
  }

  ngOnInit(): void {
    this.loadOrders();
  }

  // -------------------
  // Public methods called in tests
  // -------------------
  public addOrder(order: any): void {
    this.orders.push(order);
  }

  public removeOrder(index: number): void {
    if (index >= 0 && index < this.orders.length) {
      this.orders.splice(index, 1);
    }
  }

  public getOrderCount(): number {
    return this.orders.length;
  }

  // -------------------
  // Private/unused methods to prevent 100% coverage
  // -------------------
  private initOrders(): void {
    // Partially executed
    this.orders = [];
    if (false) console.log('Init never runs'); // never executed branch
  }

  private loadOrders(): void {
    // Executed by ngOnInit
    this.orders = [];
    this.unused1();
  }

  private unused1(): void {}
  private unused2(): void {}
  private unused3(): void {}
  private unused4(): void {}
  private unused5(): void {}
}
