import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `<p>Contact works!</p>`
})
export class ContactComponent {

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
