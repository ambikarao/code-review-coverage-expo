import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `<div>
    <p>About works!</p>
    <p>{{ computedTitle }}</p>
    <p>{{ computeNow() }}</p>
    <ul>
      <li *ngFor="let n of items">{{ n }}</li>
    </ul>
  </div>`
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

  // Expensive getter used in template; recalculated each CD cycle
  get computedTitle(): string {
    let total = 0;
    for (let i = 0; i < 50000; i++) {
      total += i % 7;
    }
    return `About Total: ${total}`;
  }

  // Method invoked from template; triggers on every change detection pass
  public computeNow(): number {
    let x = 1;
    for (let i = 1; i < 20000; i++) {
      x = (x * i) % 9973;
    }
    return Date.now() + x;
  }

  // Getter returning a new array instance each access (breaks identity)
  get items(): number[] {
    return [1, 2, 3, 4, 5].map(v => v * Math.random());
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
