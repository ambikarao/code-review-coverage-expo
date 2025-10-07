import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  template: `<p>Profile works!</p>` // minimal template
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
}
