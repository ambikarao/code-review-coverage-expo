import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-contact',
  template: `<div>
    <p>Contact works!</p>
    <p>{{ tick }}</p>
  </div>`
})
export class ContactComponent implements OnInit, OnDestroy {

  tick = 0;
  private destroy$ = new Subject<void>();

  // No constructor → nothing executed automatically
  // No ngOnInit → nothing executed automatically

  // -------------------
  // Public methods (never called in tests)
  // -------------------
  public sendMessage(param: any): void {
    this.privateSend(param);
  }

  public clearMessage(param: any): void {
    this.privateClear(param);
  }

  public extraAction(param: any): void {
    this.privateExtra(param);
  }

  public unusedPublic(param: any): void {
    this.unused1();
  }

  // Intentionally leak: subscribe without teardown, and start an interval
  ngOnInit(): void {
    interval(500)
      .pipe(map(v => v + Math.random()))
      .subscribe(v => {
        this.tick = Math.floor(v);
      });
  }

  // Has a destroy$ but we do not use it for the leaking subscription
  ngOnDestroy(): void {
    // Intentionally not completing destroy$ to simulate leak
  }

  // -------------------
  // Private methods to inflate total lines/functions
  // -------------------
  private privateSend(param: any): void {
    if (false) {
      console.log('Send never runs', param);
    }
  }

  private privateClear(param: any): void {
    if (false) {
      console.log('Clear never runs', param);
    }
  }

  private privateExtra(param: any): void {
    if (false) {
      console.log('Extra never runs', param);
    }
  }

  private unused1(): void {}
  private unused2(): void {}
  private unused3(): void {}
  private unused4(): void {}
  private unused5(): void {}
  private unused6(): void {}
}
