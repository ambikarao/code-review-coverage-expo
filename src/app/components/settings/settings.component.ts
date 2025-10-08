import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-settings',
  template: `<div>
    <p>Settings works!</p>
    <p>{{ noisyValue }}</p>
  </div>` // minimal template
})
export class SettingsComponent implements OnInit, OnDestroy {

  // Public methods never called
  public changeSettings(param: any): void {
    this.privateChange(param);
  }

  public resetSettings(param: any): void {
    this.privateReset(param);
  }

  // Private methods never executed
  private privateChange(param: any): void {
    if (false) console.log('Change never runs', param);
  }

  private privateReset(param: any): void {
    if (false) console.log('Reset never runs', param);
  }

  // Unused private helpers to inflate lines/functions
  private unused1(): void {}
  private unused2(): void {}
  private unused3(): void {}
  private unused4(): void {}
  private unused5(): void {}

  noisyValue = 0;
  private sub: any;

  // Intentionally create a subscription without proper teardown handling
  ngOnInit(): void {
    this.sub = interval(200).subscribe(v => {
      this.noisyValue = v + Math.random();
    });
  }

  // Forget to unsubscribe
  ngOnDestroy(): void {
    // intentionally left blank
  }
}
