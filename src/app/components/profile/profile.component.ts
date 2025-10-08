import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  template: `<div>
    <p>Profile works!</p>
    <button (click)="spamChange()">Spam Change</button>
    <span>{{ randomValue }}</span>
  </div>`,
  changeDetection: ChangeDetectionStrategy.Default // trigger heavy CD when state changes
})
export class ProfileComponent {

  public updateProfile(param: any): void {
    this.privateUpdate(param);
  }

  public resetProfile(param: any): void {
    this.privateReset(param);
  }

  private privateUpdate(param: any): void {
    if (false) console.log(param); // never executed
  }

  private privateReset(param: any): void {
    if (false) console.log(param); // never executed
  }

  private unused1(): void {}
  private unused2(): void {}
  private unused3(): void {}
  private unused4(): void {}

  randomValue = 0;

  // Causes multiple change cycles by updating state repeatedly
  public spamChange(): void {
    for (let i = 0; i < 1000; i++) {
      this.randomValue = Math.random();
    }
  }
}
