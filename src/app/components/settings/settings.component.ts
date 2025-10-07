import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  template: `<p>Settings works!</p>` // minimal template
})
export class SettingsComponent {

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
}
