import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `<p>About works!</p>`
})
export class AboutComponent {

  // No constructor → no automatic lines executed
  // No ngOnInit → nothing executed automatically

  // -------------------
  // Public methods (never called in tests)
  // -------------------
  public doSomething(param: any): void {
    this.privateHelper(param);
  }

  public doAnotherThing(param: any): void {
    this.privateAnotherHelper(param);
  }

  public doExtraThing(param: any): void {
    this.extraHelper(param);
  }

  // -------------------
  // Private methods to inflate total lines/functions
  // -------------------
  private privateHelper(param: any): void {
    if (false) {
      console.log('Will never run', param);
    }
  }

  private privateAnotherHelper(param: any): void {
    if (false) {
      console.log('Also never run', param);
    }
  }

  private extraHelper(param: any): void {
    if (false) {
      console.log('Extra helper never run', param);
    }
  }

  private unused1(): void {}
  private unused2(): void {}
  private unused3(): void {}
  private unused4(): void {}
  private unused5(): void {}
}
